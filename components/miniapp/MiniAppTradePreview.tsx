"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Activity } from "lucide-react";

import { PhoneFrame } from "@/components/miniapp/PhoneFrame";

export function MiniAppTradePreview() {
  return (
    <PhoneFrame className="mx-auto max-w-[420px]">
      <div className="rounded-[22px] border border-white/10 bg-[#111111]/60 p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
              TRADING
            </div>
            <div className="mt-1 text-base font-semibold text-white">
              BTC/USDT • ETH/USDT
            </div>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
            <Activity className="h-4 w-4 text-cyan-200" />
            Live
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-3">
          <div className="flex items-center justify-between text-xs font-semibold text-white/70">
            <span>Equity curve</span>
            <span className="text-emerald-200">+34.21%</span>
          </div>
          <div className="mt-3 h-16 w-full rounded-xl bg-gradient-to-b from-white/6 to-transparent p-2">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <motion.div
                initial={{ x: "-30%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,159,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(0,229,255,0.12),transparent_60%)]"
              />
              <svg viewBox="0 0 200 60" className="absolute inset-0 h-full w-full">
                <motion.path
                  d="M 0 46 L 22 42 L 44 40 L 68 33 L 88 30 L 112 24 L 136 27 L 160 18 L 184 14 L 200 10"
                  fill="none"
                  stroke="rgba(0,255,159,0.85)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Row side="long" pair="BTC/USDT" pnl="+2.14%" />
          <Row side="short" pair="ETH/USDT" pnl="+1.08%" />
        </div>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/4 p-3">
          <div className="flex items-center justify-between text-xs font-semibold text-white/70">
            <span>Successful deals</span>
            <span className="text-white">260/358</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-white/8">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "73%" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
              className="h-2 rounded-full bg-gradient-to-r from-[#00E5FF]/55 via-[#00FF9F] to-[#39FF14]/75"
            />
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function Row({
  side,
  pair,
  pnl
}: {
  side: "long" | "short";
  pair: string;
  pnl: string;
}) {
  const isLong = side === "long";
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 p-3">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-white">{pair}</div>
        <div
          className={
            "inline-flex items-center gap-1 text-xs font-semibold " +
            (isLong ? "text-emerald-200" : "text-cyan-200")
          }
        >
          {isLong ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}
          {pnl}
        </div>
      </div>
      <div className="mt-2 text-[11px] font-semibold tracking-[0.18em] text-white/55">
        {isLong ? "LONG" : "SHORT"}
      </div>
    </div>
  );
}

