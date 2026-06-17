import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const FROM    = process.env.RESEND_FROM ?? "Spark AI Bootcamp <agentic@sparkaibootcamp.com>";
const REPLY   = process.env.ADMIN_EMAIL ?? "david@penterra.in";
const B       = "#1E9DD9";
const DARK    = "#263547";
const COHORT  = process.env.NEXT_PUBLIC_COHORT_NUMBER ?? "1";
const DATE_DISPLAY = "June 26, 2026";
const PRE_SESSION  = "June 25, 2026 at 7:00 PM IST";
const VENUE        = process.env.NEXT_PUBLIC_VENUE ?? "Online — join link will be sent to your email 24 hours before the bootcamp.";
const SESSION_REPO = "https://github.com/penterra-in/spark-session-00-day-zero-prep";

function base(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spark Bootcamp</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Logo -->
        <tr><td style="padding-bottom:32px;text-align:center;">
          <table cellpadding="0" cellspacing="0" style="display:inline-table;">
            <tr>
              <td style="background:${B};width:36px;height:36px;border-radius:8px;text-align:center;vertical-align:middle;">
                <span style="color:#fff;font-weight:900;font-size:20px;line-height:36px;">S</span>
              </td>
              <td style="padding-left:10px;vertical-align:middle;">
                <span style="font-weight:800;font-size:20px;color:${DARK};">Spark <span style="color:${B};">Bootcamp</span></span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Card -->
        <tr><td style="background:#fff;border-radius:16px;border:1px solid #E2E8F0;overflow:hidden;">
          <div style="padding:40px 48px;">
            ${content}
          </div>
          <div style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:24px 48px;text-align:center;">
            <p style="margin:0;font-size:13px;color:#94A3B8;line-height:1.6;">
              Spark Bootcamp &mdash; by Penterra AI &middot; <a href="https://penterra.in" style="color:${B};text-decoration:none;">penterra.in</a>
              <br/>Questions? Reply to this email — I read every reply personally.
            </p>
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendWelcomeEmail({
  to,
  name,
  orderId,
}: {
  to: string;
  name: string;
  orderId: string;
}) {
  const firstName = name.split(" ")[0];

  const steps = [
    ["1", "Open the Day Zero Setup Guide", `Clone <a href="${SESSION_REPO}" style="color:${B};">${SESSION_REPO}</a> and follow the README step by step.`],
    ["2", "Install Claude Code", "Follow the guide to install Claude Code via your Claude Pro subscription. This is the tool you will build with on the day."],
    ["3", "Install Git", "Git is how you will download and share your projects. The guide has step-by-step instructions for Mac and Windows."],
    ["4", "Join the pre-bootcamp session", `Optional but recommended: ${PRE_SESSION}. We will install everything together and make sure you are 100% ready. Zoom link will be sent separately.`],
  ];

  const content = `
    <h1 style="margin:0 0 8px;font-size:26px;font-weight:800;color:${DARK};line-height:1.2;">
      You are in, ${firstName}.
    </h1>
    <p style="margin:0 0 28px;font-size:15px;color:#64748B;line-height:1.6;">
      Welcome to Spark Cohort ${COHORT}. Your seat for ${DATE_DISPLAY} is confirmed.
    </p>

    <!-- Confirmation box -->
    <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:20px 24px;margin-bottom:32px;">
      <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#166534;text-transform:uppercase;letter-spacing:0.5px;">Booking confirmed</p>
      <p style="margin:0;font-size:13px;color:#166534;line-height:1.6;">
        Spark Bootcamp &middot; Cohort ${COHORT} &middot; ${DATE_DISPLAY} &middot; Order #${orderId}
      </p>
    </div>

    <!-- What you will build -->
    <div style="margin-bottom:32px;">
      <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:${DARK};text-transform:uppercase;letter-spacing:0.5px;">What you will build on the day</p>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px;width:48%;vertical-align:top;">
            <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:${B};">Build 1 — 10:00am</p>
            <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:${DARK};">Your Professional Website</p>
            <p style="margin:0;font-size:13px;color:#64748B;line-height:1.5;">A live website about you, your work, or your business. Deployed to a real URL by 1:30pm.</p>
          </td>
          <td style="width:4%;"></td>
          <td style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px;width:48%;vertical-align:top;">
            <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:${B};">Build 2 — 2:00pm</p>
            <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:${DARK};">Your AI Professional Assistant</p>
            <p style="margin:0;font-size:13px;color:#64748B;line-height:1.5;">A personalised AI tool that knows your job. Writes emails, preps for meetings, generates ideas. Deployed by 5:30pm.</p>
          </td>
        </tr>
      </table>
    </div>

    <!-- Pre-requisite steps -->
    <div style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;margin-bottom:32px;">
      <div style="background:#F8FAFC;padding:14px 20px;border-bottom:1px solid #E2E8F0;">
        <p style="margin:0;font-size:12px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;">Do this before June 26 — your pre-requisite checklist</p>
      </div>
      ${steps.map(([num, title, desc]) => `
      <div style="padding:16px 20px;border-bottom:1px solid #E2E8F0;">
        <div style="display:flex;gap:14px;">
          <div style="width:26px;height:26px;min-width:26px;background:${B};border-radius:50%;text-align:center;line-height:26px;font-size:12px;font-weight:800;color:#fff;display:inline-block;">${num}</div>
          <div style="display:inline-block;padding-left:14px;vertical-align:top;">
            <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:${DARK};">${title}</p>
            <p style="margin:0;font-size:13px;color:#64748B;line-height:1.5;">${desc}</p>
          </div>
        </div>
      </div>`).join("")}
      <div style="padding:16px 20px;">
        <a href="${SESSION_REPO}" style="display:inline-block;padding:12px 24px;background:${B};color:#fff;font-weight:700;font-size:14px;border-radius:8px;text-decoration:none;">
          Open Day Zero Setup Guide
        </a>
      </div>
    </div>

    <!-- What to bring -->
    <div style="background:#FFF7ED;border:1px solid #FED7AA;border-radius:10px;padding:20px 24px;margin-bottom:32px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#9A3412;text-transform:uppercase;letter-spacing:0.5px;">What to bring on June 26</p>
      <ul style="margin:0;padding:0 0 0 16px;font-size:13px;color:#9A3412;line-height:1.8;">
        <li>Your laptop (Mac or Windows) — fully charged</li>
        <li>Your charger</li>
        <li>Claude Pro subscription active ($20/month at anthropic.com)</li>
        <li>A business task or idea you want to solve with AI</li>
      </ul>
    </div>

    <!-- How to join -->
    <div style="margin-bottom:32px;">
      <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:${DARK};">How to join</p>
      <p style="margin:0;font-size:14px;color:#64748B;line-height:1.6;">${VENUE}</p>
    </div>

    <p style="margin:0;font-size:15px;color:${DARK};line-height:1.75;">
      If you have any questions, just reply to this email. I check it personally and will get back to you within a few hours.<br /><br />
      See you on June 26.<br /><br />
      David Paul M<br />
      <span style="color:#64748B;font-size:14px;">Founder, Penterra AI &middot; Spark Bootcamp</span>
    </p>
  `;

  return getResend().emails.send({
    from:    FROM,
    replyTo: REPLY,
    to,
    subject: `You are in, ${firstName} — Spark Bootcamp · June 26 confirmed`,
    html:    base(content),
  });
}

export async function sendAdminNotification({
  name, company, jobFunction, email, phone, linkedinUrl, roleSummary, orderId, amount,
}: {
  name: string; company: string; jobFunction: string; email: string;
  phone: string; linkedinUrl: string; roleSummary: string; orderId: string; amount: number;
}) {
  const adminEmail = process.env.ADMIN_EMAIL ?? "david@penterra.in";

  const content = `
    <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:${DARK};">New Spark Registration — Payment Confirmed</h1>
    <p style="margin:0 0 24px;font-size:14px;color:#64748B;">Order #${orderId} &middot; Rs.${amount.toLocaleString("en-IN")}</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;">
      ${[
        ["Name",         name],
        ["Email",        email],
        ["Phone",        phone],
        ["Company",      company],
        ["Job Function", jobFunction],
        ["LinkedIn",     linkedinUrl],
        ["Role Summary", roleSummary],
      ].map(([label, value]) => `
      <tr style="border-bottom:1px solid #E2E8F0;">
        <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#94A3B8;text-transform:uppercase;width:130px;background:#F8FAFC;">${label}</td>
        <td style="padding:12px 16px;font-size:14px;color:${DARK};word-break:break-word;">${value}</td>
      </tr>`).join("")}
    </table>
  `;

  return getResend().emails.send({
    from:    FROM,
    replyTo: email,
    to:      adminEmail,
    subject: `Spark Cohort ${COHORT} — New registration: ${name} (${company})`,
    html:    base(content),
  });
}
