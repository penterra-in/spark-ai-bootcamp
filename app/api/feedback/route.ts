import { NextResponse } from "next/server";
import { z } from "zod";
import { sendFeedbackNotification } from "@/lib/email";

export const dynamic = "force-dynamic";

const schema = z.object({
  name:              z.string().min(2),
  company:           z.string().min(1),
  role:              z.string().min(1),
  email:             z.email(),
  rating:            z.number().int().min(1).max(5),
  biggestWin:        z.string().min(5),
  testimonial:       z.string().min(10),
  recommend:         z.string(),
  linkedinUrl:       z.string(),
  permissionToShare: z.boolean(),
});

export async function POST(req: Request) {
  let body: unknown;
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Validation error" }, { status: 422 });
  }

  try {
    await sendFeedbackNotification(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[feedback] email error:", err);
    return NextResponse.json({ error: "Could not send feedback. Please try again." }, { status: 500 });
  }
}
