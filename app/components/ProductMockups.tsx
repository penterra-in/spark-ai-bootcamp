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
  return (
    <BrowserChrome url="priya-sharma.vercel.app">
      {/* Nav */}
      <div className="flex items-center justify-between mb-4">
        <Skeleton w="60px" h={8} opacity={0.3} />
        <div className="flex gap-2">
          {[40, 40, 48, 52].map((w, i) => <Skeleton key={i} w={`${w}px`} h={6} opacity={0.1} />)}
        </div>
      </div>
      {/* Hero */}
      <div className="mb-4 p-4 rounded-lg" style={{ background: 'rgba(30,157,217,0.06)', border: '1px solid rgba(30,157,217,0.15)' }}>
        <div className="mb-2"><Skeleton w="70%" h={14} opacity={0.5} /></div>
        <div className="mb-1"><Skeleton w="55%" h={10} opacity={0.35} /></div>
        <div className="mb-3"><Skeleton w="80%" h={6} opacity={0.15} /></div>
        <div className="flex gap-2">
          <div style={{ width: 80, height: 24, borderRadius: 6, background: '#1E9DD9', opacity: 0.8 }} />
          <div style={{ width: 80, height: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.2)' }} />
        </div>
      </div>
      {/* About section */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Skeleton w="50%" h={7} opacity={0.3} />
          <Skeleton h={5} opacity={0.1} />
          <Skeleton w="90%" h={5} opacity={0.1} />
          <Skeleton w="75%" h={5} opacity={0.1} />
        </div>
        <div className="rounded-lg" style={{ height: 70, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
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
