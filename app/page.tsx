import type { Metadata } from "next";
import FaqAccordion from "./components/FaqAccordion";
import RegistrationForm from "./components/RegistrationForm";
import CountdownTimer from "./components/CountdownTimer";
import TerminalWindow from "./components/TerminalWindow";
import { WebsiteMockup, ChatMockup } from "./components/ProductMockups";
import RevealSection from "./components/RevealSection";

export const metadata: Metadata = {
  title: "Spark — 1-Day AI Build Bootcamp for Professionals | June 26",
};

const schedule = [
  { time: "09:45am", label: "Pre-event check-in", desc: "Join the Google Meet / Zoom link, test your audio and screen share" },
  { time: "10:00am", label: "Session 1 — Foundations", desc: "Terminal, Git, Claude Code, the build loop. Everything you need to build anything." },
  { time: "10:45am", label: "Session 2 — Website Build", desc: "Fill your site brief. Claude starts building your professional website in real-time." },
  { time: "11:30am", label: "Coffee break", desc: "15 minutes" },
  { time: "11:45am", label: "Session 3 — Website Deploy", desc: "Final touches, connect to Vercel, go live. Peer showcase — everyone shares their URL." },
  { time: "01:30pm", label: "Lunch", desc: "30 minutes. Working lunch for questions and troubleshooting." },
  { time: "02:00pm", label: "Session 4 — AI Tool Build", desc: "Get your API key, clone the starter, personalise your AI for your exact role and industry." },
  { time: "03:30pm", label: "Coffee break", desc: "15 minutes" },
  { time: "03:45pm", label: "Session 5 — AI Tool Deploy", desc: "Polish, deploy, and test your AI tool on a real work task. Your AI tool goes live." },
  { time: "05:30pm", label: "Session 6 — Showcase + Wrap Up", desc: "2-minute demo per participant. Certificate. WhatsApp group. What to build next." },
  { time: "06:00pm", label: "End", desc: "" },
];

const builds = [
  {
    num: "01",
    time: "10:00am",
    title: "Your Professional Website",
    desc: "A real, deployed website about you, your work, or your business. Custom design, your content, built with Next.js and deployed to Vercel. Live URL in your hands before lunch.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    outcome: "A live website you can share with anyone today.",
  },
  {
    num: "02",
    time: "2:00pm",
    title: "Your AI Professional Assistant",
    desc: "A personalized AI tool that knows your job title, your company, and your work context. Draft emails in your voice, prepare for difficult meetings, generate ideas, think through problems. Powered by Claude API, deployed to Vercel.",
    stack: ["Next.js", "Claude API", "Vercel"],
    outcome: "A live AI tool you will use every day at work.",
  },
];

const whoThisIsFor = [
  { role: "Managers and team leads", detail: "Build internal tools that save your team hours every week. Ship without raising a ticket." },
  { role: "Founders and entrepreneurs", detail: "Build your MVP, your landing page, your outreach system. No tech co-founder needed." },
  { role: "Sales and marketing professionals", detail: "Build AI-powered email drafters, proposal generators, and research tools." },
  { role: "HR and operations professionals", detail: "Build tools that automate the paperwork and surface what matters." },
  { role: "Consultants and freelancers", detail: "Stand out by delivering AI-powered outputs your clients have never seen before." },
  { role: "Anyone who has been watching others build AI tools", detail: "Today is the day you start building. Not tomorrow." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">

      {/* Announcement banner */}
      <div className="bg-[#1E9DD9]/10 border-b border-[#1E9DD9]/20 text-center py-2.5 px-4">
        <p className="text-sm text-[#1E9DD9] font-medium">
          Cohort 1 &mdash; June 26, 2026 &mdash; Limited to 10 professionals
        </p>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-[#0A0F1A]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#1E9DD9] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base leading-none" style={{ fontFamily: "Poppins, sans-serif" }}>S</span>
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
              Spark <span className="text-white/40 font-normal text-sm">by Penterra AI</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#what-you-build" className="text-white/60 hover:text-white text-sm transition-colors">What you build</a>
            <a href="#schedule" className="text-white/60 hover:text-white text-sm transition-colors">Schedule</a>
            <a href="#faq" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</a>
            <a href="#register" className="bg-[#1E9DD9] hover:bg-[#1a8ec4] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Register — ₹2,999
            </a>
          </nav>
          <a href="#register" className="md:hidden bg-[#1E9DD9] hover:bg-[#1a8ec4] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Register
          </a>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 overflow-hidden">
          {/* Gradient orbs */}
          <div className="orb absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(30,157,217,0.18) 0%, transparent 70%)" }} />
          <div className="orb-slow absolute -bottom-10 -right-10 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(30,157,217,0.12) 0%, transparent 70%)" }} />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1E9DD9]/10 border border-[#1E9DD9]/30 rounded-full px-4 py-1.5 mb-7">
                <span className="w-2 h-2 bg-[#1E9DD9] rounded-full animate-pulse inline-block" />
                <span className="text-[#1E9DD9] text-sm font-medium">June 26 &mdash; 10 seats &mdash; Cohort 1</span>
              </div>

              <h1 className="font-bold text-4xl sm:text-5xl leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                Stop watching demos.{" "}
                <span className="text-[#1E9DD9]">Start building.</span>
              </h1>

              <p className="text-white/70 text-lg mb-3 leading-relaxed">
                Spark is a 1-day hands-on AI bootcamp where non-technical professionals build and ship
                2 real AI products. You leave with a live website and a live AI tool &mdash; both deployed.
              </p>

              <p className="text-white/40 text-sm mb-7">
                No code. No tech background. Just Claude Code, a laptop, and 8 focused hours.
              </p>

              <div className="mb-8">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Bootcamp starts in</p>
                <CountdownTimer />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#register"
                  className="bg-[#1E9DD9] hover:bg-[#1a8ec4] text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-colors text-center">
                  Register for ₹2,999
                </a>
                <a href="#what-you-build"
                  className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-colors text-center">
                  See what you will build
                </a>
              </div>
            </div>

            {/* Right — animated terminal */}
            <div className="hidden lg:block">
              <TerminalWindow />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <RevealSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "2", label: "live products you build" },
                { value: "1", label: "day, 8 hours total" },
                { value: "0", label: "lines of code you write" },
                { value: "₹2,999", label: "one-time fee, everything included" },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-[#1E9DD9] font-bold text-3xl sm:text-4xl mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{s.value}</div>
                  <div className="text-white/50 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* What you build */}
        <section id="what-you-build" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <RevealSection>
            <h2 className="font-bold text-3xl sm:text-4xl mb-3 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
              What you will build
            </h2>
            <p className="text-white/50 text-center mb-12">
              Two real products. Built by you. Deployed live. Both yours to keep forever.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Build 01 — Professional Website */}
            <RevealSection delay={100}>
              <div className="bg-white/5 border border-white/10 hover:border-[#1E9DD9]/40 rounded-2xl p-8 transition-colors h-full flex flex-col">
                <div className="mb-5">
                  <WebsiteMockup />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1E9DD9] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>01</span>
                  </div>
                  <span className="text-[#1E9DD9] text-sm font-medium">Starts at 10:00am</span>
                </div>
                <h3 className="font-bold text-xl text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Your Professional Website</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">
                  A real, deployed website about you, your work, or your business. Custom design, your content, built with Next.js and deployed to Vercel. Live URL in your hands before lunch.
                </p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {["Next.js", "Tailwind CSS", "Vercel"].map(t => (
                    <span key={t} className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="bg-[#1E9DD9]/10 border border-[#1E9DD9]/20 rounded-lg px-4 py-3">
                  <p className="text-[#1E9DD9] text-sm font-medium">Outcome: A live website you can share with anyone today.</p>
                </div>
              </div>
            </RevealSection>

            {/* Build 02 — AI Professional Assistant */}
            <RevealSection delay={200}>
              <div className="bg-white/5 border border-white/10 hover:border-[#1E9DD9]/40 rounded-2xl p-8 transition-colors h-full flex flex-col">
                <div className="mb-5">
                  <ChatMockup />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1E9DD9] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>02</span>
                  </div>
                  <span className="text-[#1E9DD9] text-sm font-medium">Starts at 2:00pm</span>
                </div>
                <h3 className="font-bold text-xl text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Your AI Professional Assistant</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">
                  A personalized AI tool that knows your job title, your company, and your work context. Draft emails in your voice, prepare for difficult meetings, generate ideas, think through problems. Powered by Claude API, deployed to Vercel.
                </p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {["Next.js", "Claude API", "Vercel"].map(t => (
                    <span key={t} className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="bg-[#1E9DD9]/10 border border-[#1E9DD9]/20 rounded-lg px-4 py-3">
                  <p className="text-[#1E9DD9] text-sm font-medium">Outcome: A live AI tool you will use every day at work.</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <RevealSection>
            <h2 className="font-bold text-3xl sm:text-4xl mb-3 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
              Full day schedule
            </h2>
            <p className="text-white/50 text-center mb-12">June 26, 2026 &mdash; 10:00am to 6:00pm</p>
          </RevealSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

              <div className="space-y-2">
                {schedule.map((item, i) => {
                  const isBreak    = item.label.toLowerCase().includes("break") || item.label.toLowerCase().includes("lunch");
                  const isEnd      = item.label === "End";
                  const isCheckIn  = item.label.toLowerCase().includes("check");
                  return (
                    <div key={i} className={`flex gap-4 sm:gap-6 items-start ${isBreak || isEnd || isCheckIn ? "opacity-60" : ""}`}>
                      <div className="w-20 flex-shrink-0 text-right">
                        <span className="text-white/50 text-xs font-medium tabular-nums">{item.time}</span>
                      </div>
                      <div className={`relative flex-1 ${isEnd ? "" : "pb-4"}`}>
                        {/* Dot */}
                        <div className={`hidden sm:block absolute -left-[1.85rem] top-1 w-3 h-3 rounded-full border-2 ${isBreak || isEnd || isCheckIn ? "border-white/20 bg-[#0A0F1A]" : "border-[#1E9DD9] bg-[#1E9DD9]"}`} />
                        <p className={`text-sm font-semibold mb-0.5 ${isBreak || isEnd || isCheckIn ? "text-white/60" : "text-white"}`}
                          style={isBreak || isEnd || isCheckIn ? {} : { fontFamily: "Poppins, sans-serif" }}>
                          {item.label}
                        </p>
                        {item.desc && <p className="text-white/40 text-sm">{item.desc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <RevealSection>
            <h2 className="font-bold text-3xl sm:text-4xl mb-3 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
              Who Spark is for
            </h2>
            <p className="text-white/50 text-center mb-12">
              Built for professionals who use their brain, not their code editor.
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoThisIsFor.map((w, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                  <div className="w-8 h-8 bg-[#1E9DD9]/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-[#1E9DD9] rounded-full" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{w.role}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{w.detail}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* Facilitator */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <RevealSection>
          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-6">Your facilitator</p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-[#1E9DD9] rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>D</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>David Paul M</h3>
                <p className="text-[#1E9DD9] text-sm mb-4">Founder, Penterra AI</p>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  90 days ago, I could not build a single AI product. Today I have shipped 4 AI-native products across different domains &mdash; an AI content system, an AI course platform, a GCC advisory platform, and several client builds &mdash; all without a technical co-founder or an engineering team.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  The shift happened when I stopped consuming AI content and started building with it. Spark is the day I wish I had when I started &mdash; 8 focused hours to go from zero to two live products, with someone who has done it showing you exactly how.
                </p>
              </div>
            </div>
          </div>
          </RevealSection>
        </section>

        {/* Prerequisites */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
            <h2 className="font-bold text-2xl sm:text-3xl mb-8 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
              What you need before arriving
            </h2>
            </RevealSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "A laptop", detail: "Mac or Windows. Any model from the last 5 years. Bring your charger." },
                { title: "Claude Pro", detail: "$20/month subscription at anthropic.com. Required. Setup guide included after registration." },
                { title: "An open mind", detail: "No tech background needed. If you have a job and can describe it in plain English, you can build with Claude Code." },
              ].map((p, i) => (
                <RevealSection key={i} delay={i * 100}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                    <div className="w-8 h-8 bg-[#1E9DD9] rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{i + 1}</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{p.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{p.detail}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing + Registration form */}
        <section id="register" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <RevealSection>
            <h2 className="font-bold text-3xl sm:text-4xl mb-3 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
              Claim your seat
            </h2>
            <p className="text-white/50 text-center mb-12">
              10 seats. One price. Everything included.
            </p>
          </RevealSection>

          <div className="max-w-2xl mx-auto">
            {/* Pricing card */}
            <div className="bg-white/5 border border-[#1E9DD9]/30 rounded-3xl p-8 sm:p-10 mb-8">
              <div className="text-center mb-8">
                <div className="inline-block bg-[#1E9DD9]/10 border border-[#1E9DD9]/30 text-[#1E9DD9] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                  Cohort 1 &mdash; June 26, 2026
                </div>
                <div className="font-bold text-5xl text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  ₹2,999
                </div>
                <p className="text-white/50">One-time payment. No subscription. Nothing else to pay.</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Full 8-hour hands-on bootcamp (10am–6pm)",
                  "Build 2 live AI products — both deployed by end of day",
                  "Pre-bootcamp setup session on June 25 (7pm–8:30pm)",
                  "All session repos and student guides on GitHub",
                  "Spark Cohort 1 WhatsApp community access",
                  "Digital completion certificate",
                  "Direct mentorship from David throughout the day",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1E9DD9] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10">
              <h3 className="font-bold text-xl text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                Register for Spark Cohort 1
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Fill in your details and proceed to payment. You will receive a confirmation email with the Day Zero setup guide immediately after payment.
              </p>
              <RegistrationForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <RevealSection>
            <h2 className="font-bold text-3xl sm:text-4xl mb-12 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
              Frequently asked questions
            </h2>
          </RevealSection>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion />
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <RevealSection>
          <div className="bg-gradient-to-br from-[#1E9DD9]/10 to-transparent border border-[#1E9DD9]/20 rounded-3xl p-12">
            <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Your first AI product starts on June 26.
            </h2>
            <p className="text-white/60 text-lg mb-8">
              10 seats. When they are gone, the next cohort opens only after Cohort 1 closes.
            </p>
            <a
              href="#register"
              className="inline-block bg-[#1E9DD9] hover:bg-[#1a8ec4] text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors"
            >
              Register now for ₹2,999
            </a>
          </div>
          </RevealSection>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2026 Penterra Analytics Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="text-white/30 hover:text-white/60 text-sm transition-colors">FAQ</a>
            <a href="https://penterra.in" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 text-sm transition-colors">penterra.in</a>
            <a href="https://forge.penterra.in" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 text-sm transition-colors">Penterra Forge</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
