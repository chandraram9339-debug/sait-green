"use client";

import { motion } from "framer-motion";
import { Check, Cpu, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { IphoneEmulator } from "@/components/landing/iphone/IphoneEmulator";
import { HomeWalletScreen } from "@/components/landing/iphone/figma/wallet/HomeWalletScreen";
import { WalletHistoryScreen } from "@/components/landing/iphone/figma/wallet/WalletHistoryScreen";
import { TradingScreen } from "@/components/landing/iphone/figma/trading/TradingScreen";

export function Hero() {
  const t = useTranslations("hero");
  const cta = useTranslations("cta");
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 pb-10 pt-8 md:grid-cols-2 md:px-6 md:pb-14 md:pt-14">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-white/70"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-200" />
            {t("pill")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="mt-5 text-balance text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-white md:text-[56px]"
          >
            {t("titleA")}{" "}
            <span className="text-palladium-green">{t("titleB")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="mt-4 max-w-[62ch] text-[15px] leading-7 text-white/70 md:text-[16px]"
          >
            {t("subtitleA")}{" "}
            <span className="text-white/90">{t("subtitleB")}</span>{" "}
            {t("subtitleC")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="neon" size="lg" className="w-full sm:w-auto">
              <a href={cta("telegramUrl")} target="_blank" rel="noreferrer">
                {t("ctaPrimary")}
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#performance">{t("ctaSecondary")}</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
            className="mt-10 glass rounded-2xl px-4 py-3"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-semibold tracking-wide text-white/65">
              <span className="inline-flex items-center gap-2">
                <Cpu className="h-4 w-4 text-cyan-200" />
                Powered by NVIDIA Deep Learning
              </span>
              <span className="text-white/25">•</span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-200" />
                6 Months Internal Testing
              </span>
              <span className="text-white/25">•</span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-200" />
                2,847 Active Traders
              </span>
              <span className="text-white/25">•</span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-200" />
                Infrastructure Upgraded April 2026
              </span>
            </div>
            <div className="mt-2 text-xs font-semibold text-white/55">
              Recommended minimum deposit:{" "}
              <span className="text-white/85">100 USDT</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="relative flex items-center justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[520px]">
            <div className="absolute -inset-8 rounded-[40px] bg-grid-fade opacity-80 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-palladium-card/40 p-3 shadow-[0_34px_140px_rgba(0,0,0,0.72)] backdrop-blur-[14px]">
              <IphoneEmulator
                heightClassName="h-[560px] md:h-[640px]"
                contentPaddingPx={10}
                contentScale={0.9}
              >
                <HomeWalletScreen />
                <WalletHistoryScreen />
                <TradingScreen />
              </IphoneEmulator>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-white/60">
                    BACKTEST
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    40–70%
                    <span className="text-sm font-semibold text-white/70"> /month</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-white/60">
                    WIN RATE
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    73%
                    <span className="text-sm font-semibold text-white/70"> avg</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-10 hidden h-28 w-28 rounded-full bg-palladium-green/20 blur-3xl md:block" />
            <div className="pointer-events-none absolute -left-8 -bottom-10 hidden h-28 w-28 rounded-full bg-palladium-cyan/15 blur-3xl md:block" />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent" />
    </section>
  );
}

