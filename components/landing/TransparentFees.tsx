"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function TransparentFees() {
  const t = useTranslations("fees");

  const items = [
    { k: t("depositFee.k"), v: t("depositFee.v") },
    { k: t("withdrawFee.k"), v: t("withdrawFee.v") },
    { k: t("minDeposit.k"), v: t("minDeposit.v") }
  ] as const;

  return (
    <section id="fees" className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10 lg:py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
            FEES
          </div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-[70ch] text-white/70">{t("subtitle")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass rounded-[32px] border border-white/10 bg-[#131413]/35 p-6 md:col-span-7 md:p-8"
        >
          <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
            TRANSPARENT TERMS
          </div>

          <div className="mt-5 divide-y divide-white/10 overflow-hidden rounded-[24px] border border-white/10 bg-black/25">
            {items.map((it) => (
              <div key={it.k} className="flex items-center justify-between gap-6 px-5 py-4">
                <div className="text-sm font-semibold text-white/75">{it.k}</div>
                <div className="text-sm font-semibold text-white">
                  <span className="text-[#40FF96]">{it.v}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-sm font-semibold text-white/55">
            {t("footnote")}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

