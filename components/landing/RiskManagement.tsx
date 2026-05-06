"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Layers, Radar, Scale, Shield } from "lucide-react";

export function RiskManagement() {
  return (
    <section
      id="risk"
      className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16"
    >
      <div className="glass rounded-[32px] p-6 md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
              RISK MANAGEMENT
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              Institutional-Level Risk Management
            </h2>
            <p className="mt-4 text-white/70">
              Risk controls are not an afterthought. Palladium’s execution is designed to be
              risk-calibrated across volatility regimes and liquidity conditions.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-2">
                  <AlertTriangle className="h-4 w-4 text-white/75" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/85">
                    Transparent disclaimer
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    Trading involves risk. Past performance is not indicative of future results.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <RiskCard
                icon={<Radar className="h-4 w-4 text-cyan-200" />}
                title="Real-time portfolio risk calibration"
                body="Continuous monitoring of exposure and drawdown constraints."
              />
              <RiskCard
                icon={<Scale className="h-4 w-4 text-emerald-200" />}
                title="Adaptive position sizing"
                body="Size adjusts based on signal confidence and volatility conditions."
              />
              <RiskCard
                icon={<Shield className="h-4 w-4 text-emerald-200" />}
                title="Automatic defensive mode"
                body="System reduces aggressiveness during high volatility periods."
              />
              <RiskCard
                icon={<Layers className="h-4 w-4 text-cyan-200" />}
                title="Multi-layer signal validation"
                body="Signals are validated across models to reduce single-source bias."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RiskCard({
  icon,
  title,
  body
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-3xl border border-white/10 bg-white/4 p-5"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white/65">
        {icon}
        CONTROL
      </div>
      <div className="mt-2 text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-white/60">{body}</div>
    </motion.div>
  );
}

