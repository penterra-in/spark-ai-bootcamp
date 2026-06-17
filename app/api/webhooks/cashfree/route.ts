export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { sendWelcomeEmail, sendAdminNotification } from "@/lib/email";

function verifySignature(rawBody: string, received: string): boolean {
  const secret = process.env.CASHFREE_SECRET_KEY;
  if (!secret) return true; // allow in dev without key

  const expected = createHmac("sha256", secret)
    .update(rawBody)
    .digest("base64");

  return expected === received;
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  const sig     = req.headers.get("x-cashfree-signature") ?? "";

  if (!verifySignature(rawBody, sig)) {
    console.error("[cashfree webhook] invalid signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: CashfreePayload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { type, data } = payload;
  console.log("[cashfree webhook] event:", type, "link:", data?.link_id, "status:", data?.link_status);

  if (type !== "PAYMENT_LINK_EVENT" || data?.link_status !== "PAID") {
    return NextResponse.json({ ok: true });
  }

  const { customer_details, link_notes, link_id, order, link_amount_paid } = data;
  const name        = customer_details?.customer_name?.trim() ?? "there";
  const email       = customer_details?.customer_email ?? "";
  const phone       = customer_details?.customer_phone ?? "";
  const orderId     = link_id ?? order?.order_id ?? "";
  const amount      = parseFloat(link_amount_paid ?? order?.order_amount ?? "0");
  const company     = link_notes?.company     ?? "";
  const jobFunction = link_notes?.jobFunction ?? "";
  const linkedinUrl = link_notes?.linkedinUrl ?? "";
  const roleSummary = link_notes?.roleSummary ?? "";

  if (!email) {
    console.error("[cashfree webhook] no email in payload");
    return NextResponse.json({ error: "No email" }, { status: 400 });
  }

  try {
    await Promise.all([
      sendWelcomeEmail({ to: email, name, orderId }),
      sendAdminNotification({ name, company, jobFunction, email, phone, linkedinUrl, roleSummary, orderId, amount }),
    ]);
    console.log("[cashfree webhook] emails sent for order", orderId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[cashfree webhook] email error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

interface CashfreePayload {
  type: string;
  data: {
    link_id?: string;
    link_status: string;
    link_amount_paid?: string;
    customer_details: { customer_name?: string; customer_email?: string; customer_phone?: string };
    link_notes?: Record<string, string>;
    order: { order_id: string; order_amount: string };
  };
}
