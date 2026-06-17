"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "Not a single line. Spark is built specifically for non-technical professionals. You will use Claude Code to build — Claude Code builds the code, you build the idea. If you can type in plain English, you have everything you need.",
  },
  {
    q: "What is Claude Code?",
    a: "Claude Code is Anthropic's AI coding assistant. It runs in a terminal and builds software from plain English descriptions. You describe what you want to build, it writes the code, runs it, and fixes errors automatically. You talk, it builds.",
  },
  {
    q: "What is Claude Pro and do I need it?",
    a: "Yes. Claude Pro is Anthropic's $20/month subscription (anthropic.com). It includes Claude Code. You must have an active Claude Pro subscription before arriving on June 26. The Day Zero Setup Guide will walk you through subscribing.",
  },
  {
    q: "What laptop do I need?",
    a: "Any Mac or Windows laptop made in the last 5 years with a working internet connection. Bring your charger. Chrome is the recommended browser.",
  },
  {
    q: "Will my website and AI tool actually go live on the internet?",
    a: "Yes. Both will be deployed to real URLs using Vercel — a professional hosting platform used by companies worldwide. You will leave with two live products you can share with your team, clients, or on LinkedIn.",
  },
  {
    q: "What happens in the 30 minutes per participant during showcase?",
    a: "The morning showcase (after website build) is 1 minute each. The closing showcase is 2 minutes each. You show your live URL on the big screen, explain what you built, and get instant feedback from the room.",
  },
  {
    q: "Is the ₹2,999 everything I pay?",
    a: "Yes — one-time payment, nothing else due. The only ongoing cost after the bootcamp is your Claude Pro subscription ($20/month) which you already need before arriving. Vercel hosting for your projects is free. Your GitHub account is free.",
  },
  {
    q: "What is the pre-bootcamp session on June 25?",
    a: "A 90-minute optional video call where we walk through the Day Zero Setup Guide together. We install Claude Code, set up Git, and make sure every participant is 100% ready before June 26. Strongly recommended — participants who attend this session build faster on the day.",
  },
  {
    q: "What happens after the bootcamp?",
    a: "You join the Spark Cohort 1 WhatsApp group — a space for ongoing learning, sharing builds, and getting help. You receive a digital completion certificate. And if you want to go deeper, Penterra Forge covers 10 more AI builds over 10 weeks.",
  },
  {
    q: "How many people will be in the bootcamp?",
    a: "Maximum 10. This is intentional — small enough for everyone to get personal attention, large enough for peer energy. The facilitator (David) has hands-on time with every participant throughout the day.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
          >
            <span className="text-white font-medium text-sm leading-relaxed group-hover:text-[#1E9DD9] transition-colors">
              {faq.q}
            </span>
            <svg
              className={`w-5 h-5 text-white/40 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
