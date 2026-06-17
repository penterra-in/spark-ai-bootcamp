const BASE =
  process.env.CASHFREE_ENV === "PROD"
    ? "https://api.cashfree.com/pg"
    : "https://sandbox.cashfree.com/pg";

function headers() {
  return {
    "x-client-id": process.env.CASHFREE_APP_ID!,
    "x-client-secret": process.env.CASHFREE_SECRET_KEY!,
    "x-api-version": "2023-08-01",
    "Content-Type": "application/json",
  };
}

export interface RegistrationData {
  fullName: string;
  company: string;
  jobFunction: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  roleSummary: string;
}

export async function createBootcampPaymentLink(data: RegistrationData): Promise<{ link_url: string; link_id: string }> {
  const cohortDate = process.env.NEXT_PUBLIC_BOOTCAMP_DATE ?? "2026-06-26";
  const cohortNum  = process.env.NEXT_PUBLIC_COHORT_NUMBER ?? "1";
  const price      = parseFloat(process.env.NEXT_PUBLIC_PRICE_INR ?? "2999");
  const baseUrl    = process.env.NEXT_PUBLIC_BASE_URL ?? "";

  const linkId = `spark-cohort${cohortNum}-${data.email.replace(/[^a-z0-9]/gi, "").slice(0, 20)}-${Date.now()}`;

  const payload = {
    link_id: linkId,
    link_amount: price,
    link_currency: "INR",
    link_purpose: `Spark Bootcamp — Cohort ${cohortNum} · ${cohortDate}`,
    customer_details: {
      customer_name:  data.fullName,
      customer_email: data.email,
      customer_phone: data.phone.replace(/\D/g, "").slice(-10) || "9999999999",
    },
    link_notify: { send_sms: false, send_email: false },
    link_meta: {
      return_url: `${baseUrl}/thank-you`,
    },
    link_notes: {
      company:      data.company,
      jobFunction:  data.jobFunction,
      linkedinUrl:  data.linkedinUrl,
      roleSummary:  data.roleSummary.slice(0, 200),
      cohortDate,
      cohortNum,
    },
  };

  const resp = await fetch(`${BASE}/links`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Cashfree error ${resp.status}: ${err}`);
  }

  const json = await resp.json();
  return {
    link_url: json.link_url as string,
    link_id:  json.link_id  as string,
  };
}
