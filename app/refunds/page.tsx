import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Spark AI Bootcamp",
  robots: { index: true, follow: true },
};

export default function RefundsPage() {
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
          <span className="text-white/30 text-sm">/ Refund &amp; Cancellation Policy</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-bold text-3xl mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Refund &amp; Cancellation Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: June 17, 2026 · Spark AI Bootcamp by Penterra Analytics Private Limited</p>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Cancellation by Participant</h2>
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="text-left px-5 py-3 text-white/60 font-medium">Cancellation notice</th>
                    <th className="text-left px-5 py-3 text-white/60 font-medium">Refund</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-5 py-3">7 or more days before the bootcamp</td>
                    <td className="px-5 py-3 text-green-400 font-medium">100% refund</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">3 – 6 days before the bootcamp</td>
                    <td className="px-5 py-3 text-yellow-400 font-medium">50% refund</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">Less than 3 days before the bootcamp</td>
                    <td className="px-5 py-3 text-red-400 font-medium">No refund</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">No-show on the day</td>
                    <td className="px-5 py-3 text-red-400 font-medium">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-white/50">All cancellation requests must be sent by email to <a href="mailto:david@sparkaibootcamp.com" className="text-[#1E9DD9] hover:underline">david@sparkaibootcamp.com</a> with your order ID. Refunds are processed to the original payment method within 7–10 business days.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Cancellation by Spark AI Bootcamp</h2>
            <p>In the unlikely event that we cancel the bootcamp due to unforeseen circumstances (technical failure, insufficient enrolment, or force majeure), all registered participants will receive a <strong className="text-white">full 100% refund</strong> within 5 business days, or the option to transfer their seat to the next available cohort.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Postponement</h2>
            <p>If the bootcamp is postponed by Spark AI Bootcamp, registered participants will be offered the choice to attend the rescheduled date or receive a full refund.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Seat Transfers</h2>
            <p>If you are unable to attend, you may transfer your seat to another person by notifying us at least 48 hours before the bootcamp at <a href="mailto:david@sparkaibootcamp.com" className="text-[#1E9DD9] hover:underline">david@sparkaibootcamp.com</a>. Please provide your order ID and the full name and email of the person taking your seat.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>How to Request a Refund</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Email <a href="mailto:david@sparkaibootcamp.com" className="text-[#1E9DD9] hover:underline">david@sparkaibootcamp.com</a> with the subject: <em>&ldquo;Refund Request — [Your Order ID]&rdquo;</em></li>
              <li>Include your full name, registered email address, and reason for cancellation</li>
              <li>We will confirm receipt within 1 business day and process your refund per the schedule above</li>
            </ol>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Contact</h2>
            <p>For refund queries, write to <a href="mailto:david@sparkaibootcamp.com" className="text-[#1E9DD9] hover:underline">david@sparkaibootcamp.com</a>. We typically respond within 24 hours on business days.</p>
          </section>

        </div>
      </main>

      <footer className="border-t border-white/10 py-6 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-wrap gap-4 justify-between items-center">
          <p className="text-white/30 text-xs">&copy; 2026 Penterra Analytics Private Limited</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms &amp; Conditions</Link>
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
