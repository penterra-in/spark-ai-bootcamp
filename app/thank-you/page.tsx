import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You are in — Spark Bootcamp",
  robots: { index: false },
};

export default function ThankYouPage() {
  const setupRepo = "https://github.com/penterra-in/spark-session-00-day-zero-prep";

  return (
    <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">

        {/* Success icon */}
        <div className="w-20 h-20 bg-[#1E9DD9]/10 border-2 border-[#1E9DD9]/40 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-[#1E9DD9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          You are in.
        </h1>

        <p className="text-white/60 text-lg mb-2">
          Welcome to Spark Cohort 1.
        </p>
        <p className="text-white/60 text-base mb-10">
          A confirmation email with everything you need is on its way to your inbox.
        </p>

        {/* What's next */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left mb-8">
          <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">Before June 26 — do these 3 things</p>
          {[
            ["Open the Day Zero Setup Guide", "Clone the setup repo and follow the steps: install Claude Code, Git, and verify everything works."],
            ["Join the pre-bootcamp session", "June 25 at 7:00 PM IST — optional but highly recommended. We set everything up together."],
            ["Come ready to build", "Bring your laptop (charged), your charger, and one business problem you want to solve with AI."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-4 mb-5 last:mb-0">
              <div className="w-7 h-7 min-w-7 bg-[#1E9DD9] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">{title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={setupRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1E9DD9] hover:bg-[#1a8ec4] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors mb-6"
        >
          Open Day Zero Setup Guide
        </a>

        <p className="text-white/30 text-sm">
          Questions?{" "}
          <a href="mailto:david@penterra.in" className="text-[#1E9DD9] hover:underline">
            Reply to your confirmation email
          </a>
        </p>

        <div className="mt-8">
          <Link href="/" className="text-white/30 hover:text-white/60 text-sm transition-colors">
            Back to Spark
          </Link>
        </div>
      </div>
    </div>
  );
}
