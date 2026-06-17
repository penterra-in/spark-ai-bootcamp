"use client";
import { useEffect, useState } from "react";

const sessions = [
  {
    prompt: ['> Build me a professional website.', '> I am a Sales Manager at TechCorp, Mumbai.'],
    steps: [
      '✓ Setting up Next.js project...',
      '✓ Creating hero section...',
      '✓ Building "What I Do" cards...',
      '✓ Adding contact form...',
      '✓ Deploying to Vercel...',
    ],
    result: '🌐 priya-sharma.vercel.app',
    resultColor: '#1E9DD9',
  },
  {
    prompt: ['> Build me an AI tool that knows', '> my job as an HR Head and writes policies.'],
    steps: [
      '✓ Creating Next.js app...',
      '✓ Connecting Claude API...',
      '✓ Building chat interface...',
      '✓ Adding HR context system...',
      '✓ Deploying to Vercel...',
    ],
    result: '🌐 hr-ai-assistant.vercel.app',
    resultColor: '#1E9DD9',
  },
];

const LINE_DELAY = 400; // ms between each line

export default function TerminalWindow() {
  const [sessionIdx, setSessionIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [done, setDone] = useState(false);

  const session = sessions[sessionIdx];
  const totalLines = 2 + session.prompt.length + session.steps.length + 1; // blank + prompt + steps + result

  useEffect(() => {
    setVisibleLines(0);
    setDone(false);

    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= totalLines; i++) {
      timers.push(setTimeout(() => {
        setVisibleLines(i);
        if (i === totalLines) setDone(true);
      }, i * LINE_DELAY));
    }

    // Switch session after pause
    const reset = setTimeout(() => {
      setSessionIdx(s => (s + 1) % sessions.length);
    }, totalLines * LINE_DELAY + 3000);

    return () => { timers.forEach(clearTimeout); clearTimeout(reset); };
  }, [sessionIdx]);

  const lines: { text: string; color: string; bold?: boolean }[] = [
    { text: '$ claude', color: '#94A3B8' },
    { text: '', color: '' },
    ...session.prompt.map(t => ({ text: t, color: '#38BDF8' })),
    { text: '', color: '' },
    ...session.steps.map(t => ({ text: t, color: '#4ADE80' })),
    { text: session.result, color: session.resultColor, bold: true },
  ];

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#1E9DD9]/10" style={{ background: '#0D1117' }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: '#161B22' }}>
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-white/30 text-xs font-mono">terminal — claude</span>
      </div>

      {/* Content */}
      <div className="p-5 font-mono text-sm min-h-[220px]" style={{ lineHeight: '1.7' }}>
        {lines.map((line, i) => (
          <div
            key={`${sessionIdx}-${i}`}
            className="term-line"
            style={{
              animationDelay: `${i * LINE_DELAY}ms`,
              color: line.color || 'transparent',
              fontWeight: line.bold ? 700 : 400,
              minHeight: line.text ? undefined : '1.2em',
            }}
          >
            {line.text}
          </div>
        ))}
        {done && (
          <span
            className="cursor inline-block w-2 h-4 ml-0.5 align-middle"
            style={{ background: '#1E9DD9', borderRadius: 1 }}
          />
        )}
      </div>
    </div>
  );
}
