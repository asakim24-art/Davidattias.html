"use client";

import { useEffect, useState } from "react";

function getTargetTime() {
  // Countdown resets every day at midnight to keep the "flash sale" feel alive.
  const target = new Date();
  target.setHours(24, 0, 0, 0);
  return target;
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    function tick() {
      const diff = Math.max(0, getTargetTime().getTime() - Date.now());
      const hours = Math.floor(diff / 3_600_000);
      const minutes = Math.floor((diff % 3_600_000) / 60_000);
      const seconds = Math.floor((diff % 60_000) / 1000);
      setRemaining({ hours, minutes, seconds });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!remaining) return <span className="inline-block w-24" />;

  return (
    <span className="inline-flex items-center gap-1 font-mono font-bold">
      <span className="bg-black/80 text-white rounded px-1.5 py-0.5">{pad(remaining.hours)}</span>:
      <span className="bg-black/80 text-white rounded px-1.5 py-0.5">{pad(remaining.minutes)}</span>:
      <span className="bg-black/80 text-white rounded px-1.5 py-0.5">{pad(remaining.seconds)}</span>
    </span>
  );
}
