import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Spark AI Bootcamp",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <header className="border-b border-white/10 py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#1E9DD9] rounded-lg flex items-center justify-center">
              <svg width="14" height="18" viewBox="0 0 18 22" fill="none">
                <path d="M11 1L2 12H7.5L5 21L16 9H10.5L11 1Z" fill="white"/>
              </svg>
            </div>
            <span className="font-bold text-base" style={{ fontFamily: "Poppins, sans-serif" }}>Spark</span>
          </Link>
          <span className="text-white/30 text-sm">/ Terms &amp; Conditions</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-bold text-3xl mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Terms &amp; Conditions</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: June 17, 2026 · Spark AI Bootcamp by Penterra Analytics Private Limited</p>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>1. About Spark AI Bootcamp</h2>
            <p>Spark AI Bootcamp (&ldquo;Spark&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a 1-day hands-on AI workshop organised by Penterra Analytics Private Limited (CIN: U72900MH2018PTC308XXX), registered in India. The bootcamp is conducted online via Google Meet / Zoom. By registering and paying for a seat, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>2. Registration &amp; Payment</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Registration is confirmed only upon receipt of full payment of ₹2,999 (inclusive of all applicable taxes).</li>
              <li>Payment is processed securely via Cashfree Payments. We do not store your card or UPI details.</li>
              <li>You will receive a confirmation email at the address provided during registration within 15 minutes of successful payment.</li>
              <li>Each registration is for one individual seat. Seats are non-transferable without prior written approval from us.</li>
              <li>Maximum cohort size is 10 participants. Seats are allocated on a first-come, first-served basis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>3. What Is Included</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Full-day online bootcamp (10:00 AM – 6:00 PM IST, June 26, 2026)</li>
              <li>Pre-bootcamp setup session (June 25, 2026, 7:00 PM – 8:30 PM IST)</li>
              <li>Access to all session GitHub repositories and student guides</li>
              <li>Spark Cohort 1 WhatsApp community access</li>
              <li>Digital completion certificate</li>
              <li>Google Meet / Zoom join link sent to your registered email 24 hours before the event</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>4. Prerequisites</h2>
            <p>Participants are required to have a laptop (Mac or Windows, last 5 years), a Claude Pro subscription ($20/month at anthropic.com), and a stable internet connection. The bootcamp is designed for non-technical professionals — no coding experience is required.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>5. Intellectual Property</h2>
            <p>All course materials, session guides, and content shared during the bootcamp are the intellectual property of Penterra Analytics Private Limited. Participants may not reproduce, distribute, or resell any bootcamp content without written permission. Code and projects built by participants during the session are owned by the respective participants.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>6. Conduct</h2>
            <p>Participants are expected to maintain respectful and professional conduct throughout the bootcamp. We reserve the right to remove any participant from the session without refund if their conduct is disruptive, abusive, or in violation of these terms.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>7. Limitation of Liability</h2>
            <p>Spark AI Bootcamp and Penterra Analytics Private Limited are not liable for any indirect, incidental, or consequential damages arising from your participation in the bootcamp. Our total liability shall not exceed the amount paid by you for the bootcamp seat.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>8. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>9. Contact</h2>
            <p>For any questions about these terms, write to us at <a href="mailto:david@sparkaibootcamp.com" className="text-[#1E9DD9] hover:underline">david@sparkaibootcamp.com</a>.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-wrap gap-4 justify-between items-center">
          <p className="text-white/30 text-xs">&copy; 2026 Penterra Analytics Private Limited</p>
          <div className="flex gap-4">
            <Link href="/refunds" className="text-white/30 hover:text-white/60 text-xs transition-colors">Refund Policy</Link>
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
