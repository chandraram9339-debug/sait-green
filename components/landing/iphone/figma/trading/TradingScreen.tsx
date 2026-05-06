"use client";

import { useEffect, useRef, useState } from "react";
import BotHeader from "./components/BotHeader";
import BotChart from "./components/BotChart";
import StatsTabs from "./components/StatsTabs";
import StatsCard from "./components/StatsCard";
import BottomNav from "./components/BottomNav";

export function TradingScreen() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;
    let holdUntil = 0;
    const speedPxPerFrame = 0.55;

    const tick = () => {
      const now = performance.now();
      if (now < holdUntil) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
      if (maxScroll <= 1) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const next = el.scrollTop + speedPxPerFrame;
      if (next >= maxScroll) {
        el.scrollTop = 0;
        holdUntil = now + 800;
      } else {
        el.scrollTop = next;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <div className="h-full w-full bg-[#0A0A0A] font-outfit">
      <div className="relative flex h-full w-full flex-col">
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto pb-28"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          style={{ scrollbarWidth: "none" }}
        >
          <BotHeader />
          <BotChart />
          <StatsTabs activeTab="24h" />
          <StatsCard />
        </div>

        {/* Bottom nav fixed */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pb-4 pt-6">
          <BottomNav active="bot" />
        </div>
      </div>
    </div>
  );
}

