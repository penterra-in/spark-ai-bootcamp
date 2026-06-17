import { NextResponse } from "next/server";
import { z } from "zod";
import { createBootcampPaymentLink } from "@/lib/cashfree";

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

  const data = parsed.data;

  try {
    const { link_url } = await createBootcampPaymentLink(data);
    return NextResponse.json({ link_url });
  } catch (err) {
    console.error("[register] Cashfree error:", err);
    return NextResponse.json(
      { error: "Could not create payment link. Please try again or contact us." },
      { status: 500 }
    );
  }
}
