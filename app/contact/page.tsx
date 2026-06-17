import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Spark AI Bootcamp",
  robots: { index: true, follow: true },
};

export default function ContactPage() {
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
          <span className="text-white/30 text-sm">/ Contact Us</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-bold text-3xl mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Contact Us</h1>
        <p className="text-white/50 mb-12">Questions about Spark Bootcamp? We typically respond within 24 hours on business days.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">General &amp; Registration</p>
            <a href="mailto:david@sparkaibootcamp.com" className="text-[#1E9DD9] font-medium hover:underline text-sm">
              david@sparkaibootcamp.com
            </a>
            <p className="text-white/40 text-xs mt-2">For queries about seats, schedule, and payments</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Facilitator</p>
            <p className="text-white text-sm font-medium mb-1">David Paul M</p>
            <a
              href="https://www.linkedin.com/in/david-paul-m-b88080243/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E9DD9] text-sm hover:underline"
            >
              LinkedIn Profile
            </a>
            <p className="text-white/40 text-xs mt-2">Founder, Penterra AI</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Organised by</p>
          <p className="text-white font-semibold mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>Penterra Analytics Private Limited</p>
          <p className="text-white/50 text-sm">Mumbai, Maharashtra, India</p>
          <div className="flex gap-4 mt-4">
            <a href="https://penterra.in" target="_blank" rel="noopener noreferrer" className="text-[#1E9DD9] text-sm hover:underline">penterra.in</a>
            <a href="mailto:david@sparkaibootcamp.com" className="text-[#1E9DD9] text-sm hover:underline">david@sparkaibootcamp.com</a>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/terms" className="text-white/40 hover:text-white/60 text-sm transition-colors">Terms &amp; Conditions</Link>
          <Link href="/refunds" className="text-white/40 hover:text-white/60 text-sm transition-colors">Refund Policy</Link>
          <Link href="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">← Back to Spark</Link>
        </div>
      </main>
    </div>
  );
}
