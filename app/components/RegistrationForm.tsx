"use client";
import { useState, FormEvent } from "react";

const MAX_SEATS = parseInt(process.env.NEXT_PUBLIC_MAX_SEATS ?? "10");

interface FormData {
  fullName: string;
  company: string;
  jobFunction: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  roleSummary: string;
}

const EMPTY: FormData = {
  fullName: "", company: "", jobFunction: "",
  email: "", phone: "", linkedinUrl: "", roleSummary: "",
};

export default function RegistrationForm({ seatsLeft }: { seatsLeft?: number }) {
  const [form, setForm]       = useState<FormData>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json() as { link_url?: string; error?: string };

      if (!res.ok || !json.link_url) {
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      window.location.href = json.link_url;
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm transition-colors focus:border-[#1E9DD9] focus:bg-white/8";

  const labelClass = "block text-white/70 text-sm font-medium mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {seatsLeft !== undefined && (
        <div className="flex items-center gap-2 text-sm text-[#1E9DD9]">
          <span className="w-2 h-2 bg-[#1E9DD9] rounded-full animate-pulse inline-block" />
          {seatsLeft} {seatsLeft === 1 ? "seat" : "seats"} remaining out of {MAX_SEATS}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={set("fullName")}
            placeholder="Priya Sharma"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Company *</label>
          <input
            type="text"
            required
            value={form.company}
            onChange={set("company")}
            placeholder="Acme Corp / Self-employed"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Job Function / Role Title *</label>
        <input
          type="text"
          required
          value={form.jobFunction}
          onChange={set("jobFunction")}
          placeholder="Sales Manager / Founder / HR Head / Consultant"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="priya@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>LinkedIn Profile URL *</label>
        <input
          type="url"
          required
          value={form.linkedinUrl}
          onChange={set("linkedinUrl")}
          placeholder="https://linkedin.com/in/priyasharma"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          What do you do? Tell us about your current role. *
          <span className="text-white/40 font-normal ml-1">(2-4 sentences)</span>
        </label>
        <textarea
          required
          minLength={20}
          rows={4}
          value={form.roleSummary}
          onChange={set("roleSummary")}
          placeholder="I manage a sales team of 8 at a B2B SaaS company. I spend a lot of my time on pipeline reviews, customer calls, and reporting. I want to build tools that help me and my team move faster..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1E9DD9] hover:bg-[#1a8ec4] disabled:bg-[#1E9DD9]/50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl text-base transition-colors"
      >
        {loading ? "Creating your spot..." : "Register and Pay ₹2,999"}
      </button>

      <p className="text-white/30 text-xs text-center">
        Secure payment via Cashfree &mdash; UPI, cards, and net banking accepted.
        <br />You will receive a confirmation email after payment.
      </p>
    </form>
  );
}
