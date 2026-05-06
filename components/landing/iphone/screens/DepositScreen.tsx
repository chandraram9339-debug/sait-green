"use client";

import { motion } from "framer-motion";

import { MiniBottomNav } from "@/components/landing/iphone/ui/MiniBottomNav";
import { MiniAppHeaderBalance } from "@/components/landing/iphone/ui/MiniAppHeaderBalance";

export function DepositScreen({ active }: { active: boolean }) {
  return (
    <div className="relative h-full w-full bg-[#0A0A0A]">
      {/* Reuse pixel-perfect header chrome */}
      <MiniAppHeaderBalance balance={725.62} animate={false} />

      <div className="-mt-16 px-5">
        <div className="rounded-[28px] border border-white/10 bg-black/55 p-4 backdrop-blur-[10px]">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
            RECOMMENDED
          </div>
          <div className="mt-2 text-[18px] font-semibold text-white">
            Minimum deposit: <span className="text-[#40FF96]">100 USDT</span>
          </div>

          <div className="mt-4 rounded-[22px] border border-white/10 bg-black/35 p-4">
            <div className="text-[12px] font-semibold text-white/70">Wallet address</div>
            <div className="mt-2 rounded-[18px] bg-white/5 p-3 font-mono text-[12px] text-white/75">
              TQ7x…palladium…usdt
            </div>
            <div className="mt-3 flex gap-3">
              <button className="flex-1 rounded-[54px] bg-[#40FF96] px-5 py-[14px] text-[16px] font-normal text-[#191919] shadow-glowBright">
                Copy
              </button>
              <button className="flex-1 rounded-[54px] bg-white/20 px-5 py-[14px] text-[16px] font-normal text-white/80">
                Share
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-[22px] border border-white/10 bg-black/35 p-4">
            <div className="text-[12px] font-semibold text-white/70">Status</div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[14px] font-semibold text-white/80">
                Awaiting confirmation
              </span>
              <motion.span
                initial={{ opacity: 0.35 }}
                animate={active ? { opacity: 1 } : { opacity: 0.35 }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                className="text-[12px] font-semibold text-[#40FF96]"
              >
                Live
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <MiniBottomNav active="wallet" />
      </div>
    </div>
  );
}
