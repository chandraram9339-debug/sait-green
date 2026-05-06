"use client";

import { motion } from "framer-motion";

import { MiniBottomNav } from "@/components/landing/iphone/ui/MiniBottomNav";
import { MiniAppHeaderBalance } from "@/components/landing/iphone/ui/MiniAppHeaderBalance";

export function BalanceScreen({ active }: { active: boolean }) {
  return (
    <div className="relative h-full w-full bg-[#0A0A0A]">
      <MiniAppHeaderBalance balance={active ? 997.55 : 470.36} animate={active} />

      {/* Chart + footer */}
      <div className="px-5 pt-5">
        <MiniEquityChart active={active} />

        <div className="mt-5 flex items-end gap-5 text-white/70">
          <div className="text-[13px] font-normal">Bot status</div>
          <div className="flex items-end gap-[6px]">
            <div className="mb-[3px] h-[10px] w-[10px] rounded-full bg-white/90" />
            <div className="text-[20px] leading-none text-white">Active</div>
          </div>
        </div>

        <div className="mt-3 flex items-end gap-2 text-white/70">
          <div className="text-[13px] font-normal">Actual price</div>
          <div className="text-[20px] font-medium leading-none text-[#40FF96]">
            77&nbsp;315.47
          </div>
          <div className="pb-[2px] text-[9px] text-white/60">BTCUSDT</div>
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
        <MiniBottomNav active="bot" />
      </div>
    </div>
  );
}

function MiniEquityChart({ active }: { active: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
      <div className="flex items-center justify-between text-[11px] font-semibold tracking-[0.18em] text-white/55">
        <span>EQUITY</span>
        <span className="text-[#40FF96]">{active ? "+34.21%" : "+0.00%"}</span>
      </div>
      <div className="mt-3 h-[130px] w-full">
        <svg viewBox="0 0 300 120" className="h-full w-full">
          <defs>
            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#40FF96" stopOpacity="0.22" />
              <stop offset="1" stopColor="#40FF96" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0 104 L 22 101 L 44 97 L 68 84 L 88 80 L 112 72 L 136 76 L 160 64 L 184 60 L 210 54 L 236 44 L 260 32 L 282 28 L 300 18"
            fill="none"
            stroke="#40FF96"
            strokeWidth="3.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={active ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.25, ease: [0.2, 0.8, 0.2, 1] }}
          />
          <motion.path
            d="M 0 104 L 22 101 L 44 97 L 68 84 L 88 80 L 112 72 L 136 76 L 160 64 L 184 60 L 210 54 L 236 44 L 260 32 L 282 28 L 300 18 L 300 120 L 0 120 Z"
            fill="url(#fill)"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        </svg>
      </div>
    </div>
  );
}
