"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, ShieldCheck } from "lucide-react";

export function TechnologyExpertise() {
  return (
    <section
      id="technology"
      className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
            TECHNOLOGY &amp; EXPERTISE
          </div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            Built by Experts. Powered by Advanced AI
          </h2>
          <p className="mt-4 max-w-[70ch] text-white/70">
            Developed in collaboration with quantitative trading specialists and NVIDIA deep
            learning engineers.
          </p>

          <div className="mt-6 grid gap-3">
            <Pill
              icon={<Cpu className="h-4 w-4 text-cyan-200" />}
              title="Advanced infrastructure"
              body="Dedicated compute, monitored execution, and rigorous release processes."
            />
            <Pill
              icon={<Brain className="h-4 w-4 text-emerald-200" />}
              title="Proprietary ensemble models"
              body="Multi-layer analysis with signal validation across regimes."
            />
            <Pill
              icon={<ShieldCheck className="h-4 w-4 text-emerald-200" />}
              title="Risk-calibrated behavior"
              body="Designed to reduce fragility during volatility spikes."
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ExpertCard
              name="Dr. Elena Vargas"
              role="Former Head of Research at Binance"
              focus="Market microstructure • On-chain analytics • Execution quality"
            />
            <ExpertCard
              name="Michael Chen"
              role="Ex-BlackRock Quantitative Strategist"
              focus="Portfolio construction • Risk models • Regime detection"
            />
            <ExpertCard
              name="Dr. Raj Patel"
              role="AI Systems Architect, ex-NVIDIA Deep Learning Team"
              focus="Model optimization • Inference pipelines • Monitoring"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  icon,
  title,
  body
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="glass rounded-2xl px-4 py-3">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/75">
        {icon}
        {title}
      </div>
      <div className="mt-1 text-sm text-white/60">{body}</div>
    </div>
  );
}

function ExpertCard({
  name,
  role,
  focus
}: {
  name: string;
  role: string;
  focus: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group glass rounded-3xl p-4 md:p-5"
    >
      <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
        EXPERT
      </div>
      <div className="mt-2 text-lg font-semibold tracking-[-0.02em] text-white">
        {name}
      </div>
      <div className="mt-1 text-sm font-semibold text-white/70">{role}</div>
      <div className="mt-3 text-sm text-white/55">{focus}</div>

      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent" />
      <div className="mt-3 text-xs font-semibold tracking-[0.16em] text-white/45">
        Institutional research background
      </div>
    </motion.div>
  );
}

