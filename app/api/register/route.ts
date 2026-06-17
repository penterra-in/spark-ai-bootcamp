import { NextResponse } from "next/server";
import { z } from "zod";
import { sendAdminNotification } from "@/lib/email";

export const dynamic = "force-dynamic";

const schema = z.object({
  fullName:    z.string().min(2, "Full name is required"),
  company:     z.string().min(1, "Company is required"),
  jobFunction: z.string().min(1, "Job function is required"),
  email:       z.email("Valid email required"),
  phone:       z.string().min(10, "Valid phone number required"),
  linkedinUrl: z.string().min(1, "LinkedIn URL is required"),
  roleSummary: z.string().min(20, "Please add a brief summary (at least 20 characters)"),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Validation error" },
      { status: 422 }
    );
  }

  const { fullName, company, jobFunction, email, phone, linkedinUrl, roleSummary } = parsed.data;

  try {
    await sendAdminNotification({
      name: fullName,
      company,
      jobFunction,
      email,
      phone,
      linkedinUrl,
      roleSummary,
      orderId: "PENDING PAYMENT",
      amount: 0,
    });
    console.log("[register] admin notified for:", email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[register] email error:", err);
    return NextResponse.json(
      { error: "Could not save your registration. Please try again or contact us." },
      { status: 500 }
    );
  }
}
