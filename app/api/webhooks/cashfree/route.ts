export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { sendWelcomeEmail, sendAdminNotification } from "@/lib/email";

function verifySignature(rawBody: string, timestamp: string, sig: string): boolean {
  const secret = process.env.CASHFREE_SECRET_KEY;
  if (!secret) return true;

  // v2023-08-01 format: HMAC of timestamp+body
  const expected = createHmac("sha256", secret)
    .update(timestamp + rawBody)
    .digest("base64");

  return expected === sig;
}

export async function POST(req: Request) {
  const rawBody   = await req.text();
  const sig       = req.headers.get("x-webhook-signature") ?? "";
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
  console.log("[cashfree webhook] event:", type);

  // ── Payment Link (manually created from Cashfree dashboard) ──────────────
  if (type === "PAYMENT_LINK_EVENT" && data?.link_status === "PAID") {
    const name    = data.customer_details?.customer_name?.trim()  ?? "there";
    const email   = data.customer_details?.customer_email         ?? "";
    const phone   = data.customer_details?.customer_phone         ?? "";
    const orderId = data.link_id                                  ?? "";
    const amount  = parseFloat(data.link_amount_paid              ?? "0");
    const notes   = data.link_notes                               ?? {};

    if (!email) {
      console.error("[cashfree webhook] no email in payment link payload");
      return NextResponse.json({ error: "No email" }, { status: 400 });
    }

    await Promise.all([
      sendWelcomeEmail({ to: email, name, orderId }),
      sendAdminNotification({
        name, email, phone, orderId, amount,
        company:     notes.company     ?? "",
        jobFunction: notes.jobFunction ?? "",
        linkedinUrl: notes.linkedinUrl ?? "",
        roleSummary: notes.roleSummary ?? "",
      }),
    ]);
    console.log("[cashfree webhook] welcome email sent for payment link", orderId);
    return NextResponse.json({ ok: true });
  }

  // ── Orders API payment (programmatic, future use) ─────────────────────────
  if (type === "PAYMENT_SUCCESS_WEBHOOK") {
    const { customer_details, order, payment } = data;
    const name    = customer_details?.customer_name?.trim() ?? "there";
    const email   = customer_details?.customer_email        ?? "";
    const phone   = customer_details?.customer_phone        ?? "";
    const orderId = order?.order_id                         ?? "";
    const amount  = payment?.payment_amount                 ?? 0;
    const tags    = order?.order_tags                       ?? {};

    if (!email) {
      console.error("[cashfree webhook] no email in order payload");
      return NextResponse.json({ error: "No email" }, { status: 400 });
    }

    await Promise.all([
      sendWelcomeEmail({ to: email, name, orderId }),
      sendAdminNotification({
        name, email, phone, orderId, amount,
        company:     tags.company     ?? "",
        jobFunction: tags.jobFunction ?? "",
        linkedinUrl: tags.linkedinUrl ?? "",
        roleSummary: tags.roleSummary ?? "",
      }),
    ]);
    console.log("[cashfree webhook] welcome email sent for order", orderId);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true });
}

interface CashfreePayload {
  type: string;
  data: {
    // Payment Link fields
    link_id?:          string;
    link_status?:      string;
    link_amount_paid?: string;
    link_notes?:       Record<string, string>;
    // Order fields
    order?: {
      order_id:    string;
      order_amount: number;
      order_tags?: Record<string, string>;
    };
    payment?: {
      payment_amount: number;
    };
    customer_details: {
      customer_name?:  string;
      customer_email?: string;
      customer_phone?: string;
    };
  };
}
