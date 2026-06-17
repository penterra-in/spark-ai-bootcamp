export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { sendWelcomeEmail, sendAdminNotification } from "@/lib/email";

function verifySignature(rawBody: string, timestamp: string, received: string): boolean {
  const secret = process.env.CASHFREE_SECRET_KEY;
  if (!secret) return true;

  const expected = createHmac("sha256", secret)
    .update(timestamp + rawBody)
    .digest("base64");

  return expected === received;
}

export async function POST(req: Request) {
  const rawBody   = await req.text();
  const sig       = req.headers.get("x-webhook-signature")  ?? "";
  const timestamp = req.headers.get("x-webhook-timestamp")  ?? "";

  if (!verifySignature(rawBody, timestamp, sig)) {
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
  console.log("[cashfree webhook] event:", type, "order:", data?.order?.order_id);

  // Only process successful payments
  if (type !== "PAYMENT_SUCCESS_WEBHOOK") {
    return NextResponse.json({ ok: true });
  }

  const { customer_details, order, payment } = data;
  const name        = customer_details?.customer_name?.trim()  ?? "there";
  const email       = customer_details?.customer_email         ?? "";
  const phone       = customer_details?.customer_phone         ?? "";
  const orderId     = order?.order_id                          ?? "";
  const amount      = payment?.payment_amount                  ?? 0;
  const tags        = order?.order_tags                        ?? {};
  const company     = tags.company                             ?? "";
  const jobFunction = tags.jobFunction                         ?? "";
  const linkedinUrl = tags.linkedinUrl                         ?? "";
  const roleSummary = tags.roleSummary                         ?? "";

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
    order: {
      order_id:     string;
      order_amount: number;
      order_tags?:  Record<string, string>;
    };
    payment: {
      cf_payment_id:   number;
      payment_status:  string;
      payment_amount:  number;
    };
    customer_details: {
      customer_name?:  string;
      customer_email?: string;
      customer_phone?: string;
    };
  };
}
