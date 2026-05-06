"use client";

import { motion } from "framer-motion";
import { Pause, Play, ShieldCheck } from "lucide-react";

import { PhoneFrame } from "@/components/miniapp/PhoneFrame";

export function MiniAppStartStopPreview() {
  return (
    <PhoneFrame className="mx-auto max-w-[420px]">
      <div className="rounded-[22px] border border-white/10 bg-[#111111]/60 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
              BOT STATUS
            </div>
            <div className="mt-1 text-base font-semibold text-white">
              Palladium Neural Trader
            </div>
          </div>
          <div className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
            ACTIVE
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Metric label="Balance" value="$997.55" accent="emerald" />
          <Metric label="Win rate" value="73%" accent="cyan" />
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-3">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-white/70">
              Risk calibration
            </div>
            <div className="inline-flex items-center gap-1 text-xs text-white/55">
              <ShieldCheck className="h-4 w-4 text-emerald-200" />
              Enabled
            </div>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-white/8">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "68%" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
              className="h-2 rounded-full bg-gradient-to-r from-[#00E5FF]/70 via-[#00FF9F] to-[#39FF14]/80"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(0,255,159,.20),0_0_35px_rgba(0,255,159,.18)]">
            <Play className="h-4 w-4 text-emerald-100" />
            Start
          </button>
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 text-sm font-semibold text-white/85">
            <Pause className="h-4 w-4 text-white/75" />
            Stop
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}

function Metric({
  label,
  value,
  accent
}: {
  label: string;
  value: string;
  accent: "emerald" | "cyan";
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 p-3">
      <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
        {label.toUpperCase()}
      </div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
      <div
        className={
          "mt-2 h-1.5 w-full rounded-full " +
          (accent === "emerald" ? "bg-[#00FF9F]/35" : "bg-[#00E5FF]/30")
        }
      />
    </div>
  );
}

