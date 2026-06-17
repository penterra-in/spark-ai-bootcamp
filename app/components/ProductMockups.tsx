"use client";

/* Browser chrome wrapper */
function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl" style={{ background: '#0D1117' }}>
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10" style={{ background: '#161B22' }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="flex-1 mx-3 bg-white/5 border border-white/10 rounded px-2 py-0.5">
          <span className="text-white/40 text-xs font-mono">{url}</span>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/* Skeleton block helper */
function Skeleton({ w = "100%", h = 8, opacity = 0.15 }: { w?: string; h?: number; opacity?: number }) {
  return (
    <div
      style={{ width: w, height: h, borderRadius: 4, background: `rgba(255,255,255,${opacity})` }}
    />
  );
}

export function WebsiteMockup() {
  const s = {
    nav: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.08)' },
    navLogo: { fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 10, color: '#fff', letterSpacing: '-0.2px' },
    navLinks: { display: 'flex', gap: 10 },
    navLink: { fontSize: 8, color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' },
    navCta: { fontSize: 8, color: '#fff', fontFamily: 'Inter, sans-serif', background: '#1E9DD9', padding: '2px 8px', borderRadius: 4, fontWeight: 600 },
    hero: { background: 'linear-gradient(135deg, #0f1e30 0%, #0a141f 100%)', border: '1px solid rgba(30,157,217,0.2)', borderRadius: 8, padding: '14px 14px 12px', marginBottom: 10 },
    greeting: { fontSize: 8, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', marginBottom: 5 },
    headline: { fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', lineHeight: '1.3', marginBottom: 3 },
    role: { fontSize: 8, color: '#1E9DD9', fontFamily: 'Inter, sans-serif', fontWeight: 500, marginBottom: 7 },
    desc: { fontSize: 7.5, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5', marginBottom: 10, maxWidth: '85%' },
    ctaRow: { display: 'flex', gap: 6 },
    ctaPrimary: { fontSize: 8, fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#fff', background: '#1E9DD9', padding: '4px 12px', borderRadius: 5 },
    ctaSecondary: { fontSize: 8, fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: 5 },
    aboutRow: { display: 'flex', gap: 10, alignItems: 'flex-start' },
    aboutText: { flex: 1 },
    aboutHead: { fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 9, color: '#fff', marginBottom: 5 },
    aboutBody: { fontSize: 7.5, color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' },
    tags: { display: 'flex', gap: 5, marginTop: 7 },
    tag: { fontSize: 7, padding: '2px 6px', borderRadius: 999, border: '1px solid rgba(30,157,217,0.35)', color: '#1E9DD9', fontFamily: 'Inter, sans-serif' },
    photo: { width: 52, height: 52, borderRadius: 8, background: 'linear-gradient(135deg, rgba(30,157,217,0.25) 0%, rgba(30,157,217,0.08) 100%)', border: '1px solid rgba(30,157,217,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
    photoInner: { width: 22, height: 22, borderRadius: '50%', background: 'rgba(30,157,217,0.4)' },
  };
  return (
    <BrowserChrome url="priya-sharma.vercel.app">
      {/* Nav */}
      <div style={s.nav}>
        <span style={s.navLogo}>Priya</span>
        <div style={s.navLinks}>
          {['About', 'Work', 'Contact'].map(l => <span key={l} style={s.navLink}>{l}</span>)}
          <span style={s.navCta}>Hire me</span>
        </div>
      </div>

      {/* Hero */}
      <div style={s.hero}>
        <p style={s.greeting}>Hi there 👋</p>
        <p style={s.headline}>I'm Priya Sharma</p>
        <p style={s.role}>Sales Manager · TechCorp · Mumbai</p>
        <p style={s.desc}>I help B2B companies grow revenue across APAC. 10 years closing enterprise deals in fintech and SaaS.</p>
        <div style={s.ctaRow}>
          <span style={s.ctaPrimary}>Let's talk</span>
          <span style={s.ctaSecondary}>See my work</span>
        </div>
      </div>

      {/* About */}
      <div style={s.aboutRow}>
        <div style={s.aboutText}>
          <p style={s.aboutHead}>About Me</p>
          <p style={s.aboutBody}>15 years in B2B sales across India, Singapore, and Australia. Currently leading the enterprise team at TechCorp.</p>
          <div style={s.tags}>
            {['Sales', 'FinTech', 'SaaS', 'APAC'].map(t => <span key={t} style={s.tag}>{t}</span>)}
          </div>
        </div>
        <div style={s.photo}>
          <div style={s.photoInner} />
        </div>
      </div>
    </BrowserChrome>
  );
}

const chatMessages = [
  { role: "user",      text: "Draft a follow-up email to a client who went cold after our proposal last week." },
  { role: "assistant", text: "Subject: Checking in on the Q3 proposal\n\nHi Sarah, I wanted to follow up on the proposal we shared last week. I understand you're evaluating options..." },
];

export function ChatMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl" style={{ background: '#0D1117' }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10" style={{ background: '#161B22' }}>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: '#1E9DD9', color: '#0D1117' }}>AI</div>
        <div>
          <p className="text-white text-xs font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>AI Professional Assistant</p>
          <p className="text-white/30 text-xs">Knows your job · Always available</p>
        </div>
      </div>

      {/* Context pill */}
      <div className="px-4 pt-3">
        <div className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full shimmer-badge border border-[#1E9DD9]/20 text-[#1E9DD9]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E9DD9] inline-block" />
          Context: Sales Manager · TechCorp · Mumbai
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3">
        {chatMessages.map((msg, i) => (
          <div
            key={i}
            className="bubble flex gap-2.5"
            style={{ animationDelay: `${i * 600 + 300}ms`, flexDirection: msg.role === "user" ? "row-reverse" : "row" }}
          >
            <div
              className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
              style={{ background: msg.role === "user" ? "rgba(255,255,255,0.08)" : "#1E9DD9", color: msg.role === "user" ? "#fff" : "#0D1117" }}
            >
              {msg.role === "user" ? "Me" : "AI"}
            </div>
            <div
              className="text-xs leading-relaxed rounded-xl px-3 py-2 max-w-[80%] whitespace-pre-line"
              style={{
                background: msg.role === "user" ? "rgba(255,255,255,0.06)" : "rgba(30,157,217,0.1)",
                border: msg.role === "user" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(30,157,217,0.2)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 items-center rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs text-white/20 flex-1">Ask me anything about your work...</span>
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: '#1E9DD9' }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M6 3l2 2-2 2" stroke="#0D1117" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
