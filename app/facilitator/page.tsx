"use client";
import { useState } from "react";
import Link from "next/link";

const BLUE   = { bg: "rgba(30,157,217,0.10)", border: "rgba(30,157,217,0.30)", label: "text-[#1E9DD9]" };
const GREEN  = { bg: "rgba(74,222,128,0.08)",  border: "rgba(74,222,128,0.25)",  label: "text-green-400" };
const YELLOW = { bg: "rgba(250,204,21,0.08)",  border: "rgba(250,204,21,0.25)",  label: "text-yellow-400" };
const GRAY   = { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.12)", label: "text-white/50" };

function Block({ type, label, children }: { type: typeof BLUE; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl px-5 py-4 mb-3" style={{ background: type.bg, border: `1px solid ${type.border}` }}>
      <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${type.label}`}>{label}</p>
      <div className="text-white/80 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <code className="block font-mono text-sm text-green-300 px-4 py-3 rounded-lg my-2"
      style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
      {children}
    </code>
  );
}

function Session({ time, title, duration, tag, children }: {
  time: string; title: string; duration: string; tag: string; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const tagColor = tag === "build" ? "#1E9DD9" : tag === "break" ? "#4ADE80" : tag === "showcase" ? "#F59E0B" : "#94A3B8";
  return (
    <div className="mb-4 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.10)" }}>
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors" style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="flex-shrink-0 text-right w-16">
          <p className="text-[#1E9DD9] font-mono text-sm font-bold">{time}</p>
          <p className="text-white/30 text-xs">{duration}</p>
        </div>
        <div className="flex-1">
          <p className="font-bold text-white text-base" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${tagColor}20`, color: tagColor, border: `1px solid ${tagColor}40` }}>{tag}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {children}
        </div>
      )}
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  return (
    <label className="flex items-start gap-3 cursor-pointer group mb-2">
      <button onClick={() => setDone(d => !d)} className="mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors"
        style={{ background: done ? "#1E9DD9" : "transparent", border: `2px solid ${done ? "#1E9DD9" : "rgba(255,255,255,0.2)"}` }}>
        {done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>}
      </button>
      <span className={`text-sm leading-relaxed transition-colors ${done ? "text-white/30 line-through" : "text-white/70"}`}>{children}</span>
    </label>
  );
}

export default function FacilitatorPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0F1A]/95 backdrop-blur-sm border-b border-white/10 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#1E9DD9] rounded-lg flex items-center justify-center">
                <svg width="14" height="18" viewBox="0 0 18 22" fill="none"><path d="M11 1L2 12H7.5L5 21L16 9H10.5L11 1Z" fill="white"/></svg>
              </div>
              <span className="font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>Spark</span>
            </Link>
            <span className="text-white/30 text-sm">/ Facilitator Guide · June 26, 2026</span>
          </div>
          <span className="text-xs text-white/30 hidden sm:block">Keep this open all day. Click any session to expand.</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        {/* Philosophy card */}
        <div className="rounded-2xl p-6 mb-8" style={{ background: "linear-gradient(135deg, rgba(30,157,217,0.15) 0%, rgba(30,157,217,0.04) 100%)", border: "1px solid rgba(30,157,217,0.3)" }}>
          <p className="text-[#1E9DD9] text-xs font-bold uppercase tracking-widest mb-3">Read this first — your core frame for the day</p>
          <p className="font-bold text-xl text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>You are not a tech trainer. You are proof that it works.</p>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Every person in this bootcamp is you 90 days ago. Your job is not to explain technology — it is to show them what you did and let them do the same. You are the evidence. Claude is the tool. They are the directors.</p>
          <div className="bg-black/30 rounded-xl px-5 py-4">
            <p className="text-white/50 text-xs mb-1">The one sentence you repeat all day:</p>
            <p className="text-white font-semibold text-base">&ldquo;We are not learning to code. We are learning to direct Claude. Claude builds. You direct. That&rsquo;s it.&rdquo;</p>
          </div>
        </div>

        {/* Pre-bootcamp checklist */}
        <div className="rounded-2xl p-6 mb-6" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.02)" }}>
          <h2 className="font-bold text-lg mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>✅ Pre-Bootcamp Checklist <span className="text-white/30 font-normal text-sm">(Complete before June 24)</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Technical</p>
              <Check>Test screen share on Google Meet — participants must see your terminal clearly</Check>
              <Check>Confirm all 5 GitHub repos are public and cloneable</Check>
              <Check>Test Claude Code from scratch on a fresh project</Check>
              <Check>Have a Vercel account ready to demo deployment</Check>
              <Check>Test npm install + npm run dev on the website starter</Check>
              <Check>Test npm install + npm run dev on the AI tool starter</Check>
              <Check>Have your own Claude API key ready</Check>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Day-of</p>
              <Check>Print or bookmark this guide — have it on a second screen</Check>
              <Check>Have the participant list (10 names + emails) in front of you</Check>
              <Check>Prepare your own site brief (your name, role, description)</Check>
              <Check>Prepare your own AI tool system prompt</Check>
              <Check>Have WhatsApp group link ready to paste in chat</Check>
              <Check>Have digital certificate template ready</Check>
              <Check>Have water. Energy. A good night&rsquo;s sleep.</Check>
            </div>
          </div>
        </div>

        {/* Pre-bootcamp session June 25 */}
        <h2 className="font-bold text-lg mb-3 mt-8" style={{ fontFamily: "Poppins, sans-serif" }}>June 25 — Pre-Bootcamp Setup Session <span className="text-white/30 font-normal text-sm">7:00 PM – 8:30 PM IST</span></h2>

        <div className="rounded-2xl mb-8 overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.10)" }}>
          <div className="px-6 py-5" style={{ background: "rgba(255,255,255,0.03)" }}>
            <p className="text-white/60 text-sm"><strong className="text-white">Goal:</strong> Everyone arrives June 26 with Git installed, Claude Code running, and zero tech anxiety.</p>
          </div>
          <div className="px-6 py-5">
            <Block type={BLUE} label="Open with this">
              &ldquo;Welcome everyone. I&rsquo;m David. Tomorrow we build two real AI products. Tonight I just want to make sure your laptop is ready so we don&rsquo;t lose a single minute tomorrow. This will take about 45 minutes. If you hit any issues, stay on after — we&rsquo;ll fix it together.&rdquo;
            </Block>
            <Block type={GREEN} label="Walk through together">
              <ol className="space-y-2 list-decimal list-inside">
                <li>Share your screen. Open GitHub repo: <code className="text-[#1E9DD9]">github.com/penterra-in/spark-session-00-day-zero-prep</code></li>
                <li>Walk through the README step by step. Do it yourself as you narrate.</li>
                <li>Git check — ask everyone to type in terminal: <code className="text-[#1E9DD9]">git --version</code></li>
                <li>Claude Code check: <code className="text-[#1E9DD9]">claude --version</code></li>
                <li>Quick test: Open Claude Code, type &ldquo;Hello, are you there?&rdquo; — celebrate when it responds</li>
              </ol>
            </Block>
            <Block type={YELLOW} label="If someone can't get it working">
              &ldquo;Don&rsquo;t stress at all — this happens. Stay on a few minutes after everyone else drops off and we&rsquo;ll sort it. It&rsquo;s always something simple.&rdquo; Never make anyone feel behind.
            </Block>
            <Block type={BLUE} label="Close with this">
              &ldquo;See you tomorrow at 9:45am. Join the Google Meet link 15 minutes early. We start at 10 sharp. Get some sleep — tomorrow is going to be a big day for you.&rdquo;
            </Block>
          </div>
        </div>

        {/* June 26 Sessions */}
        <h2 className="font-bold text-lg mb-4 mt-8" style={{ fontFamily: "Poppins, sans-serif" }}>June 26 — Full Day · Click each session to open</h2>

        <Session time="09:45" title="Pre-Event Check-in" duration="15 min" tag="setup">
          <Block type={BLUE} label="As people join — greet each by name">
            &ldquo;Hey [Name]! Great to see you. How are you feeling? Ready?&rdquo; Do this for every single person. It sets the energy immediately.
          </Block>
          <Block type={GREEN} label="At 09:55 — final check">
            &ldquo;Two minutes to go. Can everyone confirm audio and video are working? Drop a thumbs up in the chat. Also — make sure your terminal is open. We&rsquo;re starting right at 10.&rdquo;
          </Block>
          <Block type={BLUE} label="At 10:00 sharp — kick off">
            &ldquo;Alright. Let&rsquo;s go. By 6pm tonight, every single one of you is going to have two live products on the internet with your name on them. Not demos. Not prototypes. Real things that real people can use. Let&rsquo;s build.&rdquo;
          </Block>
        </Session>

        <Session time="10:00" title="Session 1 — Foundations" duration="45 min" tag="build">
          <Block type={BLUE} label="The reframe — say this first, exactly">
            &ldquo;Before we do anything, I need to tell you the single most important thing about today. Are you ready? We are NOT learning to code. There is not one line of code you are going to write today. What we ARE learning is how to talk to Claude. Claude builds. You direct. That&rsquo;s the whole game. That&rsquo;s everything.&rdquo;
          </Block>
          <Block type={BLUE} label="What is Claude Code? (5 min)">
            &ldquo;Claude Code is like having a senior developer sitting next to you, available right now, who builds whatever you describe in plain English. You type what you want. It builds it. You review it. You ask for changes. It changes. That loop — describe, build, review, refine — is what we&rsquo;re doing all day.&rdquo;
            <br/><br/>
            [Share your screen. Show your terminal.] &ldquo;This is a terminal. Don&rsquo;t worry about what it is. Think of it as a text message app where Claude lives.&rdquo;
          </Block>
          <Block type={GREEN} label="Everyone runs their first command together (10 min)">
            &ldquo;Open your terminal. Type this and press Enter:&rdquo;
            <Code>claude</Code>
            &ldquo;Now type: &lsquo;Hello, I&rsquo;m going to build two products today. Are you ready to help me?&rsquo;&rdquo;
            <br/>Wait for everyone. Celebrate the responses out loud.
            &ldquo;See that? Claude just talked to you. That&rsquo;s it. That&rsquo;s the foundation of everything we build today.&rdquo;
          </Block>
          <Block type={BLUE} label="The Build Loop — your framework for the day (8 min)">
            &ldquo;Here&rsquo;s the loop we use all day. Write this down if you want:
            One — DESCRIBE what you want.
            Two — Claude BUILDS it.
            Three — you REVIEW what came out.
            Four — you REFINE: ask for changes in plain English.
            Five — repeat until you&rsquo;re happy.
            The better you describe, the better Claude builds. Your job today is to be a great director.&rdquo;
          </Block>
          <Block type={GREEN} label="Git in 60 seconds (8 min)">
            &ldquo;One more tool and then we build. It&rsquo;s called Git. Think of it as a USB drive in the cloud for your projects. You&rsquo;ll use exactly two commands today — that&rsquo;s it.&rdquo;
            <Code>git clone [URL]</Code>
            <Code>cd [folder-name]</Code>
            &ldquo;Clone means: download this project. cd means: go inside it. That&rsquo;s everything you need to know.&rdquo;
            <br/><br/>Everyone clones the foundations repo:
            <Code>git clone https://github.com/penterra-in/spark-session-01-foundations</Code>
            <Code>cd spark-session-01-foundations</Code>
          </Block>
          <Block type={GREEN} label="Live demo — Claude builds something (10 min)">
            &ldquo;Watch me. I&rsquo;m going to describe something in plain English and Claude is going to build it.&rdquo;
            <br/><br/>Ask Claude to build a simple landing page with your name and role. Narrate as it builds:
            &ldquo;See those files appearing? That&rsquo;s your website being created right now. Claude is writing every line. I haven&rsquo;t typed a single character of code.&rdquo;
            <br/><br/>Then ask participants: &ldquo;Now you try. Tell Claude to create a simple webpage that says Hello [your name] in big text. Go.&rdquo;
          </Block>
          <Block type={YELLOW} label="Common issues">
            <strong>Claude seems stuck:</strong> &ldquo;Type &lsquo;continue&rsquo; and press Enter.&rdquo;<br/>
            <strong>Error messages appear:</strong> &ldquo;Copy the error, paste it back to Claude and say &lsquo;fix this error&rsquo;.&rdquo;<br/>
            <strong>Terminal won&rsquo;t open:</strong> Mac → Spotlight (Cmd+Space) → &ldquo;Terminal&rdquo;. Windows → Start menu → &ldquo;Command Prompt&rdquo;.
          </Block>
        </Session>

        <Session time="10:45" title="Session 2 — Website Build" duration="45 min" tag="build">
          <Block type={BLUE} label="Open">
            &ldquo;Now we build Build 1 — your professional website. By lunch, you&rsquo;re going to have a real website with your name on it, deployed to the internet. This is the one you&rsquo;ll share on LinkedIn today.&rdquo;
          </Block>
          <Block type={GREEN} label="Clone the session repo">
            <Code>git clone https://github.com/penterra-in/spark-session-02-website-build</Code>
            <Code>cd spark-session-02-website-build</Code>
          </Block>
          <Block type={BLUE} label="Introduce the site brief (3 min)">
            &ldquo;Before Claude can build your site, it needs to know who you are. We call this a brief. Think of briefing a designer — the more specific you are, the better the output. Vague gets you vague. Specific gets you exceptional.&rdquo;
          </Block>
          <Block type={GREEN} label="Fill the brief — give them 12 minutes">
            &ldquo;Open BRIEF.md in your folder. Fill in every field. A couple of things that matter: don&rsquo;t write &lsquo;manager&rsquo; — write &lsquo;Sales Manager at TechCorp, leading a team of 8, responsible for ₹50cr annual revenue&rsquo;. Specific. Real. Yours.&rdquo;
            <br/><br/>Brief fields:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your full name and current role + company</li>
              <li>What you do — 3 sentences, specific and real</li>
              <li>Your biggest professional achievement</li>
              <li>What you want visitors to do (contact you, hire you, collaborate)</li>
              <li>Colour preference for the website</li>
            </ul>
            <br/>While they write: fill your own brief on screen and narrate.
          </Block>
          <Block type={GREEN} label="Prompt Claude — the magic moment (20 min)">
            &ldquo;Has everyone finished? Good. Now copy everything from your BRIEF.md. Open Claude Code. Type this:&rdquo;
            <br/><br/>
            <div className="bg-black/40 rounded-lg p-3 mt-2 font-mono text-xs text-white/70">
              Build me a professional personal website. Here is my brief: [paste your brief]. Build it with Next.js and Tailwind CSS. Make it clean, modern, and professional. Deploy-ready.
            </div>
            <br/>&ldquo;Press Enter. Watch. Don&rsquo;t touch anything. Let it build.&rdquo;
            <br/><br/>Let the silence breathe. This is a powerful moment. Narrate softly: &ldquo;It&rsquo;s creating your files right now. That folder — that&rsquo;s your website.&rdquo;
          </Block>
          <Block type={YELLOW} label="Watch for">
            <strong>Brief too vague → generic output:</strong> Ask them to add one more specific detail and re-run.<br/>
            <strong>Build stopped mid-way:</strong> Type &ldquo;continue&rdquo; and press Enter.<br/>
            <strong>Someone&rsquo;s overwhelmed:</strong> &ldquo;You&rsquo;re doing great. Just let Claude run. Your job right now is to watch.&rdquo;
          </Block>
        </Session>

        <Session time="11:30" title="Coffee Break" duration="15 min" tag="break">
          <Block type={BLUE} label="Send them off">
            &ldquo;Take 15. Get water, stretch, move around. Back at 11:45 sharp — that&rsquo;s when we put your website on the internet. Don&rsquo;t be late.&rdquo;
          </Block>
          <Block type={YELLOW} label="During the break">
            Stay on the call. Help anyone who wants to troubleshoot. Check in on anyone who seemed stuck. This is your catch-up buffer.
          </Block>
        </Session>

        <Session time="11:45" title="Session 3 — Website Deploy + Showcase" duration="1 hr 45 min" tag="build">
          <Block type={BLUE} label="Return energy">
            &ldquo;Welcome back. In the next 45 minutes, your website goes live. Let&rsquo;s not waste a second.&rdquo;
          </Block>
          <Block type={GREEN} label="Preview locally first (10 min)">
            &ldquo;Let&rsquo;s see what Claude built. In your terminal:&rdquo;
            <Code>npm install</Code>
            <Code>npm run dev</Code>
            &ldquo;Now open your browser. Go to: localhost:3000&rdquo;
            <br/><br/>Pause. Let them see it.
            &ldquo;That&rsquo;s your website. Running on your computer right now. Take it in. Now let&rsquo;s put it on the internet.&rdquo;
          </Block>
          <Block type={GREEN} label="Deploy to Vercel — demo first, then they follow (20 min)">
            &ldquo;Go to vercel.com. Sign up with your GitHub account if you haven&rsquo;t.&rdquo;
            <br/><br/>Demo on your screen step by step:
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Create new project → Import from GitHub</li>
              <li>Upload your project folder</li>
              <li>Click Deploy</li>
              <li>Wait 60–90 seconds</li>
              <li>Your URL appears</li>
            </ol>
            <br/>&ldquo;Now everyone do exactly what I just did. Drop your URL in the chat the moment you have it.&rdquo;
          </Block>
          <Block type={BLUE} label="The showcase — most important moment of the morning (30 min)">
            As URLs come in the chat: &ldquo;[Name] is live! Opening it now —&rdquo; [share your screen, open the URL]
            <br/><br/>&ldquo;Everyone look at this. [Name] walked in this morning with no website. Look at it now. That&rsquo;s real. That URL exists. Anyone on the planet can see it.&rdquo;
            <br/><br/>Do this for every single person. Be genuinely excited — because it IS exciting. These people just built something they couldn&rsquo;t imagine 2 hours ago.
          </Block>
          <Block type={BLUE} label="Before lunch — the line they&rsquo;ll remember">
            &ldquo;Drop your live URL in the WhatsApp group right now. You earned the right to share it. See you in 30 minutes. Build 2 is going to be even more powerful than this.&rdquo;
          </Block>
          <Block type={YELLOW} label="Common issues">
            <strong>Vercel build error:</strong> &ldquo;Copy the full error, paste it to Claude, say &lsquo;fix this Vercel deployment error&rsquo;.&rdquo;<br/>
            <strong>GitHub not connected:</strong> Help them create a GitHub account and push their folder.<br/>
            <strong>Site looks different from preview:</strong> Probably fine — prod vs dev differences. Tell them to keep going.
          </Block>
        </Session>

        <Session time="13:30" title="Lunch" duration="30 min" tag="break">
          <Block type={BLUE} label="Send them to lunch">
            &ldquo;30 minutes. Eat something real. You&rsquo;ve been building for 3.5 hours. The afternoon is going to be even more powerful — an AI that knows your actual job. See you at 2.&rdquo;
          </Block>
          <Block type={YELLOW} label="During lunch">
            Stay on. Catch up with anyone who needs more time on their website. Take notes on who needs extra support in the afternoon.
          </Block>
        </Session>

        <Session time="14:00" title="Session 4 — AI Tool Build" duration="1 hr 30 min" tag="build">
          <Block type={BLUE} label="Afternoon energy reset — say this">
            &ldquo;Good afternoon. You built a website this morning. Now we&rsquo;re building something you&rsquo;ll use every single day at work. Imagine a version of ChatGPT that has been given your exact job title, your company, your goals, your communication style — and it drafts emails the way you do, prepares for the exact meetings you have, and thinks about the problems you actually face. That&rsquo;s what we&rsquo;re building right now.&rdquo;
          </Block>
          <Block type={GREEN} label="Get Claude API key (10 min)">
            &ldquo;Go to console.anthropic.com. Sign up. Go to API Keys → Create Key. Copy it somewhere safe — treat it like a password.&rdquo;
            <br/>Wait for everyone. Help anyone who can&rsquo;t find it.
          </Block>
          <Block type={GREEN} label="Clone the starter (5 min)">
            <Code>git clone https://github.com/penterra-in/spark-session-03-build-ai-tool</Code>
            <Code>cd spark-session-03-build-ai-tool/starter</Code>
          </Block>
          <Block type={GREEN} label="Add API key to .env (5 min)">
            &ldquo;Find the file called .env.example. Rename it to .env — just remove the word &lsquo;example&rsquo;. Open it. Replace the placeholder with your Claude API key.&rdquo;
            <br/>Demo on screen. This is a common stumbling point — move slowly.
          </Block>
          <Block type={BLUE} label="The system prompt — this is the real magic (20 min)">
            &ldquo;This is the most important part of the afternoon. The system prompt is what you tell Claude about you before it ever answers a single question. It&rsquo;s what makes this your tool, not a generic AI.&rdquo;
            <br/><br/>&ldquo;Open system-prompt.txt. Write 6-8 sentences about:
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Your name and exact role</li>
              <li>Your company and what it does</li>
              <li>The work tasks you deal with every single day</li>
              <li>How you like to communicate — formal, direct, friendly?</li>
              <li>What you most need help with at work</li>
            </ol>
            Give them 15 minutes. Demo yours on screen while they write. Read yours out loud — this models the level of specificity they should aim for.
          </Block>
          <Block type={GREEN} label="Run the tool (10 min)">
            <Code>npm install</Code>
            <Code>npm run dev</Code>
            &ldquo;Open localhost:3000. That&rsquo;s your AI tool. Now ask it something you actually need done at work today.&rdquo;
          </Block>
          <Block type={BLUE} label="Live testing moment — the emotional peak of the day (20 min)">
            Ask 3-4 participants to share what they tested:
            &ldquo;[Name] — what did you ask it? And what did it say? Could you use that? Would that have taken you 20 minutes to write yourself?&rdquo;
            <br/><br/>These moments of genuine usefulness are what create testimonials. Let them breathe.
          </Block>
          <Block type={YELLOW} label="Common issues">
            <strong>API key error:</strong> Check .env file — no spaces around the = sign, no quotes around the key.<br/>
            <strong>App won&rsquo;t start:</strong> Try <code className="text-[#1E9DD9]">npm install</code> again, then <code className="text-[#1E9DD9]">npm run dev</code>.<br/>
            <strong>Responses feel generic:</strong> Their system prompt is too vague. Ask them to add 2 more specific sentences.
          </Block>
        </Session>

        <Session time="15:30" title="Coffee Break" duration="15 min" tag="break">
          <Block type={BLUE} label="Energy check">
            &ldquo;Last break. 15 minutes. Come back ready — we&rsquo;re deploying the AI tool and doing the final showcase. You are 90 minutes away from having two live products. Go.&rdquo;
          </Block>
        </Session>

        <Session time="15:45" title="Session 5 — AI Tool Deploy" duration="1 hr 45 min" tag="build">
          <Block type={BLUE} label="Final push">
            &ldquo;Same process as this morning. We&rsquo;ve done this once. It&rsquo;ll be faster this time. One important difference — your API key can&rsquo;t go in the code. We&rsquo;ll put it safely in Vercel.&rdquo;
          </Block>
          <Block type={GREEN} label="Add API key to Vercel environment variables (10 min)">
            &ldquo;In Vercel → your project → Settings → Environment Variables. Add:
            Name: ANTHROPIC_API_KEY
            Value: [your key]
            Click Save.&rdquo;
            <br/>Demo on screen. This is critical — if they miss this, their deployed tool won&rsquo;t work.
          </Block>
          <Block type={GREEN} label="Deploy (20 min)">
            Same Vercel flow. They&rsquo;ve done it once — it should take half the time. Be available for anyone stuck.
          </Block>
          <Block type={GREEN} label="Test the live version (15 min)">
            &ldquo;Open your live URL. Test the exact same task you tested on localhost. It should work identically. This is now on the internet. Anyone can use it.&rdquo;
          </Block>
          <Block type={BLUE} label="Screenshot moment">
            &ldquo;Before we go to showcase — take a screenshot of your live AI tool in action. A real question and a real answer. You&rsquo;re going to use this on LinkedIn in about an hour.&rdquo;
          </Block>
          <Block type={YELLOW} label="Common issues">
            <strong>API key missing on deployed version:</strong> Go back to Vercel → Environment Variables — they likely forgot to add it. Redeploy after adding.<br/>
            <strong>Build fails:</strong> Copy error → Claude → &ldquo;fix this Vercel error&rdquo;.<br/>
            <strong>Someone is still on Session 4:</strong> Let them keep going — deploy is 15 minutes and they can catch up.
          </Block>
        </Session>

        <Session time="17:30" title="Session 6 — Showcase + Wrap Up" duration="30 min" tag="showcase">
          <Block type={BLUE} label="Open the showcase">
            &ldquo;This is my favourite part of the day. Everyone gets two minutes. Share your screen, show us your website URL, show us your AI tool, and tell us one thing you&rsquo;re going to use your AI tool for tomorrow at work. [Name] — do you want to go first?&rdquo;
            <br/><br/>Go around the room. Celebrate every single person loudly and genuinely. &ldquo;That is live. Anyone in the world can see that right now. You built that today. That&rsquo;s remarkable.&rdquo;
          </Block>
          <Block type={GREEN} label="Certificate (2 min)">
            Send certificates to each participant&rsquo;s email one by one. Name each person as you do:
            &ldquo;[Full Name] — Spark Bootcamp Cohort 1 — certified builder. Congratulations.&rdquo;
          </Block>
          <Block type={GREEN} label="LinkedIn post — put this in the chat now">
            <div className="bg-black/30 rounded-lg p-3 font-mono text-xs text-white/60 mt-2">
              {`I just spent 8 hours at Spark AI Bootcamp and walked out with two live AI products — a professional website and a custom AI assistant built for my exact role.

I'm not a developer. I'm a [your role].

Here's what I built today:
🌐 Website: [your URL]
🤖 AI Tool: [your URL]

8 hours. Zero lines of code. Two live products.

Thank you David Paul M and Penterra AI. If you're a professional who's been watching others build with AI — it's your turn.

#SparkBootcamp #AIForProfessionals #ClaudeCode #PenterraAI`}
            </div>
            &ldquo;Tag me, tag Spark AI Bootcamp, post your URLs. You earned this. I&rsquo;ll reshare every single post.&rdquo;
          </Block>
          <Block type={GREEN} label="Feedback form (1 min)">
            &ldquo;One last thing — drop this link in the chat: sparkaibootcamp.com/feedback. Takes 3 minutes. Your feedback shapes what Cohort 2 looks like. Please do it tonight while it&rsquo;s fresh.&rdquo;
          </Block>
          <Block type={GREEN} label="WhatsApp group (1 min)">
            Paste the WhatsApp group link in the chat. &ldquo;This is your Spark Cohort 1 community. Share what you build next. Ask questions. Help each other.&rdquo;
          </Block>
          <Block type={BLUE} label="The close — say this last">
            &ldquo;I want to say something before you go. When I started building with AI 90 days ago, I didn&rsquo;t know if it would work. What you proved today is that it does work — for anyone who is willing to show up and direct. You are builders now. You always were. You just needed the right tool. I&rsquo;m incredibly proud of what you did today. Go use it. Go build more. See you in the community.&rdquo;
          </Block>
        </Session>

        {/* Post bootcamp */}
        <div className="rounded-2xl p-6 mt-8" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.02)" }}>
          <h2 className="font-bold text-lg mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>Post-Bootcamp Actions <span className="text-white/30 font-normal text-sm">(Complete within 24 hours)</span></h2>
          <Check>Send thank-you email to all participants with their URLs, WhatsApp link, feedback form link, and LinkedIn post template</Check>
          <Check>Post your own LinkedIn recap — tag every participant, share their URLs</Check>
          <Check>Screenshot every LinkedIn post participants share — collect them for the website testimonials section</Check>
          <Check>Follow up with anyone who hasn&rsquo;t submitted feedback after 48 hours</Check>
          <Check>Add approved testimonials to sparkaibootcamp.com/admin (coming soon)</Check>
          <Check>Start planning Cohort 2 — announce it on LinkedIn within 7 days of Cohort 1</Check>
        </div>

        <p className="text-white/20 text-xs text-center mt-10">Spark Facilitator Guide · Internal use only · sparkaibootcamp.com</p>
      </main>
    </div>
  );
}
