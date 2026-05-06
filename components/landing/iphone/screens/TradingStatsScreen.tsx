"use client";

import { motion } from "framer-motion";

import { AnimatedNumber } from "@/components/landing/motion/AnimatedNumber";

export function TradingStatsScreen({ active }: { active: boolean }) {
  return (
    <div className="h-full w-full bg-[#0A0A0A]">
      <div className="relative h-[28%] bg-[#2EDD7D]">
        <div className="flex items-center justify-between px-5 pt-10 text-black/85">
          <div className="text-[13px] font-medium">PALLADIUM</div>
          <div className="text-[13px] font-medium">AI</div>
        </div>
      </div>

      <div className="-mt-24 px-5">
        <div className="rounded-[28px] border border-white/10 bg-black/55 p-4 backdrop-blur-[10px]">
          <div className="text-center text-[18px] font-semibold text-white">
            Trading bot statistics for the period:
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {["24h", "3d", "7d", "1m"].map((t, i) => (
              <div
                key={t}
                className={
                  "rounded-[20px] px-3 py-3 text-center text-[14px] font-semibold " +
                  (i === 0 ? "bg-black/35 text-[#40FF96]" : "bg-black/25 text-white/55")
                }
              >
                {t}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[24px] border border-white/10 bg-black/45 p-4">
            <StatRow
              active={active}
              label="Total deals:"
              value={<AnimatedNumber value={358} from={320} decimals={0} duration={1.25} />}
              icon="🚀"
            />
            <StatRow
              active={active}
              label="Successful:"
              value={<AnimatedNumber value={260} from={220} decimals={0} duration={1.25} />}
              icon="✅"
            />
            <StatRow
              active={active}
              label="Unsuccessful:"
              value={<AnimatedNumber value={98} from={80} decimals={0} duration={1.25} />}
              icon="❌"
            />
            <StatRow
              active={active}
              label="Percentage of profit:"
              value={<AnimatedNumber value={34.21} from={18} decimals={2} duration={1.35} />}
              suffix="%"
              icon="📈"
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-3">
            <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
              GROWTH
            </div>
            <div className="mt-2 h-[150px] w-full">
              <svg viewBox="0 0 300 140" className="h-full w-full">
                {Array.from({ length: 7 }).map((_, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={(i * 140) / 6}
                    x2="300"
                    y2={(i * 140) / 6}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                ))}
                <motion.path
                  d="M 0 112 L 26 112 L 50 114 L 78 110 L 96 98 L 120 90 L 144 74 L 168 62 L 190 52 L 212 42 L 236 30 L 260 22 L 282 18 L 300 12"
                  fill="none"
                  stroke="#40FF96"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={active ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatRow({
  active,
  label,
  value,
  suffix,
  icon
}: {
  active: boolean;
  label: string;
  value: React.ReactNode;
  suffix?: string;
  icon: string;
}) {
  return (
    <div className="flex items-center justify-between py-2 text-white/85">
      <div className="flex items-center gap-2">
        <span className="text-[14px]">{icon}</span>
        <span className="text-[14px] font-semibold">{label}</span>
      </div>
      <div className="text-[18px] font-semibold">
        {active ? value : "—"}
        {suffix ? <span className="text-[14px] text-white/70"> {suffix}</span> : null}
      </div>
    </div>
  );
}

