"use client";
import { useEffect, useState } from "react";

const BOOTCAMP_DATE = new Date("2026-06-26T10:00:00+05:30").getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function tick() {
      const diff = BOOTCAMP_DATE - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-3 justify-center">
      {[
        { v: timeLeft.days,    l: "days"    },
        { v: timeLeft.hours,   l: "hours"   },
        { v: timeLeft.minutes, l: "minutes" },
        { v: timeLeft.seconds, l: "seconds" },
      ].map(({ v, l }) => (
        <div key={l} className="flex flex-col items-center">
          <div className="bg-white/10 border border-white/20 rounded-lg w-14 h-14 flex items-center justify-center">
            <span className="text-white font-bold text-xl tabular-nums" style={{ fontFamily: "Poppins, sans-serif" }}>
              {String(v).padStart(2, "0")}
            </span>
          </div>
          <span className="text-white/40 text-xs mt-1 uppercase tracking-wider">{l}</span>
        </div>
      ))}
    </div>
  );
}
