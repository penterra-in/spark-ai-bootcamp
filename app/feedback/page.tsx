"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  rating: number;
  biggestWin: string;
  testimonial: string;
  recommend: string;
  linkedinUrl: string;
  permissionToShare: boolean;
}

const EMPTY: FormData = {
  name: "", company: "", role: "", email: "",
  rating: 0, biggestWin: "", testimonial: "",
  recommend: "", linkedinUrl: "", permissionToShare: false,
};

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm transition-colors focus:border-[#1E9DD9] focus:outline-none focus:bg-white/8";

function Star({ filled, onClick }: { filled: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110">
      <svg width="28" height="28" viewBox="0 0 24 24" fill={filled ? "#1E9DD9" : "none"}
        stroke={filled ? "#1E9DD9" : "rgba(255,255,255,0.2)"} strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    </button>
  );
}

const RATING_LABELS: Record<number, string> = {
  1: "It was rough",
  2: "Below expectations",
  3: "Met expectations",
  4: "Exceeded expectations",
  5: "Life-changing — I&rsquo;d do it again tomorrow",
};

export default function FeedbackPage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const val = e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
      setForm(prev => ({ ...prev, [field]: val }));
    };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (form.rating === 0) { setError("Please select a star rating."); return; }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) { setError(json.error ?? "Something went wrong."); return; }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#1E9DD9]/10 border border-[#1E9DD9]/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1E9DD9" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 className="font-bold text-2xl text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
            Thank you, {form.name.split(" ")[0]}!
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Your feedback means everything. It shapes the next cohort and helps more professionals build with AI.
          </p>
          <p className="text-white/40 text-sm mb-8">
            If you gave permission to share your testimonial, it will appear on the Spark website within the next few days.
          </p>
          <div className="bg-[#1E9DD9]/10 border border-[#1E9DD9]/20 rounded-2xl p-6 text-left mb-8">
            <p className="text-[#1E9DD9] text-xs font-bold uppercase tracking-widest mb-3">Share your experience on LinkedIn</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Post your wins, tag Spark Bootcamp, and share your live URLs. Every post you share helps the next cohort find us.
            </p>
          </div>
          <Link href="/" className="inline-block text-[#1E9DD9] text-sm hover:underline">
            ← Back to Spark Bootcamp
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0F1A] py-16 px-4">
      {/* Header */}
      <div className="max-w-xl mx-auto mb-10 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-[#1E9DD9] rounded-lg flex items-center justify-center">
            <svg width="14" height="18" viewBox="0 0 18 22" fill="none">
              <path d="M11 1L2 12H7.5L5 21L16 9H10.5L11 1Z" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>Spark</span>
        </Link>
        <h1 className="font-bold text-3xl text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
          How was today?
        </h1>
        <p className="text-white/50 text-sm leading-relaxed">
          You spent a full day building with AI. Tell us what it was really like — your honest feedback helps us make the next cohort even better.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">

        {/* Identity */}
        <div className="rounded-2xl p-6 space-y-4" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.02)" }}>
          <p className="text-white/40 text-xs uppercase tracking-widest">About you</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/60 text-xs mb-1.5">Full Name *</label>
              <input type="text" required value={form.name} onChange={set("name")} placeholder="Priya Sharma" className={inputClass}/>
            </div>
            <div>
              <label className="block text-white/60 text-xs mb-1.5">Company *</label>
              <input type="text" required value={form.company} onChange={set("company")} placeholder="Acme Corp" className={inputClass}/>
            </div>
          </div>
          <div>
            <label className="block text-white/60 text-xs mb-1.5">Your Role *</label>
            <input type="text" required value={form.role} onChange={set("role")} placeholder="Sales Manager / Founder / Consultant" className={inputClass}/>
          </div>
          <div>
            <label className="block text-white/60 text-xs mb-1.5">Email Address *</label>
            <input type="email" required value={form.email} onChange={set("email")} placeholder="priya@company.com" className={inputClass}/>
          </div>
        </div>

        {/* Star rating */}
        <div className="rounded-2xl p-6" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.02)" }}>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Overall rating *</p>
          <div className="flex items-center gap-1 mb-2">
            {[1,2,3,4,5].map(n => (
              <Star key={n} filled={form.rating >= n} onClick={() => setForm(p => ({ ...p, rating: n }))}/>
            ))}
          </div>
          {form.rating > 0 && (
            <p className="text-[#1E9DD9] text-sm font-medium" dangerouslySetInnerHTML={{ __html: RATING_LABELS[form.rating] }}/>
          )}
        </div>

        {/* What you built */}
        <div className="rounded-2xl p-6 space-y-4" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.02)" }}>
          <p className="text-white/40 text-xs uppercase tracking-widest">Your biggest win today *</p>
          <textarea required rows={3} value={form.biggestWin} onChange={set("biggestWin")}
            placeholder="I deployed my first live website. I never thought I could build something real in a single day..."
            className={`${inputClass} resize-none`}/>
          <p className="text-white/40 text-xs uppercase tracking-widest pt-2">Your testimonial *</p>
          <p className="text-white/40 text-xs -mt-3">What would you tell someone who is considering attending Spark?</p>
          <textarea required minLength={30} rows={4} value={form.testimonial} onChange={set("testimonial")}
            placeholder="Before Spark, I thought AI tools were only for developers. In one day I built a professional website and a custom AI assistant that drafts emails the way I would. The fact that David is himself a non-technical professional made all the difference..."
            className={`${inputClass} resize-none`}/>
        </div>

        {/* Recommend */}
        <div className="rounded-2xl p-6 space-y-3" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.02)" }}>
          <p className="text-white/40 text-xs uppercase tracking-widest">Would you recommend Spark to a colleague?</p>
          {["Absolutely — already did", "Yes, without hesitation", "Yes, with some caveats", "I&apos;m not sure yet", "Probably not"].map(opt => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ background: form.recommend === opt ? "#1E9DD9" : "transparent", border: `2px solid ${form.recommend === opt ? "#1E9DD9" : "rgba(255,255,255,0.2)"}` }}>
                {form.recommend === opt && <div className="w-2 h-2 bg-white rounded-full"/>}
              </div>
              <span className="text-sm text-white/70 group-hover:text-white transition-colors"
                dangerouslySetInnerHTML={{ __html: opt }}
                onClick={() => setForm(p => ({ ...p, recommend: opt }))}/>
            </label>
          ))}
        </div>

        {/* LinkedIn + permission */}
        <div className="rounded-2xl p-6 space-y-4" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.02)" }}>
          <p className="text-white/40 text-xs uppercase tracking-widest">Share with the world</p>
          <div>
            <label className="block text-white/60 text-xs mb-1.5">Your LinkedIn URL (so we can tag you when we share)</label>
            <input type="url" value={form.linkedinUrl} onChange={set("linkedinUrl")}
              placeholder="https://linkedin.com/in/yourprofile" className={inputClass}/>
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <div onClick={() => setForm(p => ({ ...p, permissionToShare: !p.permissionToShare }))}
              className="mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background: form.permissionToShare ? "#1E9DD9" : "transparent", border: `2px solid ${form.permissionToShare ? "#1E9DD9" : "rgba(255,255,255,0.2)"}` }}>
              {form.permissionToShare && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </div>
            <span className="text-sm text-white/60 leading-relaxed">
              I give permission to Spark Bootcamp to share my testimonial on the website and social media, with my name and company.
            </span>
          </label>
        </div>

        {error && (
          <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">{error}</p>
        )}

        <button type="submit" disabled={loading}
          className="w-full bg-[#1E9DD9] hover:bg-[#1a8ec4] disabled:bg-[#1E9DD9]/50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl text-base transition-colors"
          style={{ fontFamily: "Poppins, sans-serif" }}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>

        <p className="text-white/25 text-xs text-center pb-8">
          Your responses are sent directly to David. Thank you for taking the time.
        </p>
      </form>
    </div>
  );
}
