"use client";

import { motion } from "framer-motion";

import { MiniBottomNav } from "@/components/landing/iphone/ui/MiniBottomNav";
import { MiniAppHeaderBalance } from "@/components/landing/iphone/ui/MiniAppHeaderBalance";

export function StartStopScreen({ active }: { active: boolean }) {
  return (
    <div className="relative h-full w-full bg-[#0A0A0A]">
      {/* Reuse pixel-perfect header chrome */}
      <MiniAppHeaderBalance balance={725.62} animate={false} />

      <div className="px-5 pt-6">
        <div className="rounded-[24px] border border-white/10 bg-black/40 p-4 text-white/80">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
            BOT STATUS
          </div>
          <div className="mt-2 text-[16px] font-semibold text-white">
            {active ? "Active" : "Inactive"}
          </div>
          <div className="mt-2 text-[13px] text-white/60">
            Execution monitored. Defensive mode toggles automatically during volatility spikes.
          </div>
        </div>

        <div className="mt-6 flex gap-3 pb-6">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-[54px] bg-[#40FF96] px-5 py-[14px] text-[16px] font-normal text-[#191919] shadow-glowBright">
            Start
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-[54px] bg-white/50 px-5 py-[14px] text-[16px] font-normal text-white">
            Stop
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <MiniBottomNav active="home" />
      </div>
    </div>
  );
}
