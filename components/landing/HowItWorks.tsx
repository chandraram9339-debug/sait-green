"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Bot, Coins, ShieldCheck, Wallet } from "lucide-react";

export function HowItWorks() {
  const t = useTranslations("how");

  const steps = [
    {
      icon: <Wallet className="h-5 w-5 text-[#40FF96]" />,
      title: t("s1.title"),
      body: t("s1.body")
    },
    {
      icon: <Bot className="h-5 w-5 text-[#40FF96]" />,
      title: t("s2.title"),
      body: t("s2.body")
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#40FF96]" />,
      title: t("s3.title"),
      body: t("s3.body")
    },
    {
      icon: <Coins className="h-5 w-5 text-[#40FF96]" />,
      title: t("s4.title"),
      body: t("s4.body")
    }
  ] as const;

  return (
    <section id="how" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20 lg:py-24">
      <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
        HOW IT WORKS
      </div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
        {t("title")}
      </h2>
      <p className="mt-4 max-w-[80ch] text-white/70">{t("subtitle")}</p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12">
        {steps.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.04 }}
            className="glass rounded-[28px] border border-white/10 bg-[#131413]/35 p-5 md:col-span-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-[18px] bg-black/35 ring-1 ring-white/10">
                {s.icon}
              </div>
              <div className="text-[11px] font-semibold tracking-[0.18em] text-white/45">
                {t("step", { n: idx + 1 })}
              </div>
            </div>

            <div className="mt-4 text-lg font-semibold tracking-[-0.02em] text-white">
              {s.title}
            </div>
            <div className="mt-2 text-sm text-white/60">{s.body}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/60">
        {t("note")}
        <ArrowRight className="h-4 w-4 text-[#40FF96]" />
      </div>
    </section>
  );
}

