const BASE =
  process.env.CASHFREE_ENV === "PROD"
    ? "https://api.cashfree.com/pg"
    : "https://sandbox.cashfree.com/pg";

function headers() {
  return {
    "x-client-id":     process.env.CASHFREE_APP_ID!,
    "x-client-secret": process.env.CASHFREE_SECRET_KEY!,
    "x-api-version":   "2023-08-01",
    "Content-Type":    "application/json",
  };
}

export interface RegistrationData {
  fullName:    string;
  company:     string;
  jobFunction: string;
  email:       string;
  phone:       string;
  linkedinUrl: string;
  roleSummary: string;
}

export async function createBootcampOrder(
  data: RegistrationData
): Promise<{ payment_session_id: string; order_id: string }> {
  const cohortDate = process.env.NEXT_PUBLIC_BOOTCAMP_DATE  ?? "2026-06-26";
  const cohortNum  = process.env.NEXT_PUBLIC_COHORT_NUMBER  ?? "1";
  const price      = parseFloat(process.env.NEXT_PUBLIC_PRICE_INR ?? "2999");
  const baseUrl    = process.env.NEXT_PUBLIC_BASE_URL       ?? "";

  const orderId = `SPARK-C${cohortNum}-${Date.now()}`;

  const payload = {
    order_id:       orderId,
    order_amount:   price,
    order_currency: "INR",
    order_note:     `Spark Bootcamp Cohort ${cohortNum} · ${data.company} · ${data.jobFunction}`,
    customer_details: {
      customer_id:    data.email.replace(/[^a-z0-9]/gi, "").slice(0, 30) || "guest",
      customer_name:  data.fullName,
      customer_email: data.email,
      customer_phone: data.phone.replace(/\D/g, "").slice(-10) || "9999999999",
    },
    order_meta: {
      return_url: `${baseUrl}/thank-you?order_id={order_id}&order_status={order_status}`,
    },
    order_tags: {
      company:     data.company,
      jobFunction: data.jobFunction,
      linkedinUrl: data.linkedinUrl,
      roleSummary: data.roleSummary.slice(0, 256),
      cohortDate,
      cohortNum,
    },
  };

  const resp = await fetch(`${BASE}/orders`, {
    method:  "POST",
    headers: headers(),
    body:    JSON.stringify(payload),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Cashfree error ${resp.status}: ${err}`);
  }

  const json = await resp.json();
  return {
    payment_session_id: json.payment_session_id as string,
    order_id:           json.order_id           as string,
  };
}
