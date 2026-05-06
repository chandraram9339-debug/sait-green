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
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 pb-12 pt-8 md:grid-cols-2 md:gap-12 md:px-6 md:pb-16 md:pt-14">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/72 md:text-xs"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-emerald-200" />
            {t("pill")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="mt-5 text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-white"
          >
            <span className="block text-[36px] md:text-[48px]">{t("titleA")}</span>
            <span className="mt-1 block text-[28px] font-semibold text-white/92 md:mt-2 md:text-[38px]">
              {t("titleB")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-white/72 md:text-[16px] md:leading-8"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              variant="neon"
              size="lg"
              className="w-full min-h-[62px] px-10 py-7 text-[17px] font-semibold shadow-[0_0_0_1px_rgba(0,255,159,.32),0_0_56px_rgba(0,255,159,.48),0_0_112px_rgba(0,255,159,.22),0_14px_44px_rgba(0,0,0,.38)] transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.03] hover:shadow-[0_0_0_1px_rgba(0,255,159,.4),0_0_80px_rgba(0,255,159,.58),0_0_150px_rgba(0,255,159,.26)] sm:w-auto md:min-h-[66px] md:px-11 md:py-7 md:text-[18px]"
            >
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
            className="mt-9 rounded-2xl border border-white/[0.1] bg-black/35 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-md md:px-5 md:py-4"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-2">
              <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-wide text-white/78 md:text-[13px]">
                <Cpu className="h-4 w-4 shrink-0 text-cyan-200/95" />
                {t("trust1")}
              </span>
              <span className="hidden text-white/20 lg:inline">•</span>
              <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-wide text-white/78 md:text-[13px]">
                <Check className="h-4 w-4 shrink-0 text-emerald-200/95" />
                {t("trust2")}
              </span>
              <span className="hidden text-white/20 lg:inline">•</span>
              <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-wide text-white/78 md:text-[13px]">
                <Check className="h-4 w-4 shrink-0 text-emerald-200/95" />
                {t("trust3")}
              </span>
              <span className="hidden text-white/20 lg:inline">•</span>
              <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-wide text-white/78 md:text-[13px]">
                <Check className="h-4 w-4 shrink-0 text-emerald-200/95" />
                {t("trust4")}
              </span>
            </div>
            <div className="mt-3 border-t border-white/[0.08] pt-3 text-[12px] font-semibold text-white/58 md:text-[13px]">
              {t("trustDepositLabel")}{" "}
              <span className="text-white/88">{t("trustDepositValue")}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="relative flex items-center justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[360px] md:max-w-[340px] lg:max-w-[380px]">
            <div className="absolute -inset-8 rounded-[40px] bg-grid-fade opacity-75 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-palladium-card/40 p-2.5 shadow-[0_34px_140px_rgba(0,0,0,0.72)] backdrop-blur-[14px] md:p-3">
              <IphoneEmulator
                heightClassName="h-[400px] md:h-[462px]"
                contentPaddingPx={10}
                contentScale={0.74}
              >
                <HomeWalletScreen />
                <WalletHistoryScreen />
                <TradingScreen />
              </IphoneEmulator>

              <div className="mt-2.5 grid grid-cols-2 gap-2.5 md:mt-3 md:gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2.5 md:px-4 md:py-3">
                  <div className="text-[10px] font-semibold tracking-[0.18em] text-white/58 md:text-[11px]">
                    BACKTEST
                  </div>
                  <div className="mt-1 text-base font-semibold text-white md:text-lg">
                    40–70%
                    <span className="text-xs font-semibold text-white/65 md:text-sm"> /month</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2.5 md:px-4 md:py-3">
                  <div className="text-[10px] font-semibold tracking-[0.18em] text-white/58 md:text-[11px]">
                    WIN RATE
                  </div>
                  <div className="mt-1 text-base font-semibold text-white md:text-lg">
                    73%
                    <span className="text-xs font-semibold text-white/65 md:text-sm"> avg</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-10 hidden h-28 w-28 rounded-full bg-palladium-green/18 blur-3xl md:block" />
            <div className="pointer-events-none absolute -bottom-10 -left-8 hidden h-28 w-28 rounded-full bg-palladium-cyan/14 blur-3xl md:block" />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/22 to-transparent" />
    </section>
  );
}
