"use client";

import { motion } from "framer-motion";
import { Check, Cpu, Sparkles, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TelegramPremiumIcon } from "@/components/icons/TelegramPremiumIcon";
import { IphoneEmulator } from "@/components/landing/iphone/IphoneEmulator";
import { HomeWalletScreen } from "@/components/landing/iphone/figma/wallet/HomeWalletScreen";
import { WalletHistoryScreen } from "@/components/landing/iphone/figma/wallet/WalletHistoryScreen";
import { TradingScreen } from "@/components/landing/iphone/figma/trading/TradingScreen";

export function Hero() {
  const t = useTranslations("hero");
  const cta = useTranslations("cta");

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Premium ambient — calm, no harsh bands */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(0,255,159,0.07),transparent_55%),radial-gradient(ellipse_70%_45%_at_15%_40%,rgba(0,255,159,0.04),transparent_50%),radial-gradient(ellipse_60%_50%_at_85%_25%,rgba(0,229,255,0.05),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-5 md:px-6 md:pb-12 md:pt-8 lg:pb-14 lg:pt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
          {/* 1 — Copy */}
          <div className="order-1 md:col-start-1 md:row-start-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/75 md:text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-emerald-200/90" />
              {t("pill")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
              className="mt-6 text-balance"
            >
              <span className="block text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white [text-shadow:0_0_72px_rgba(255,255,255,0.14),0_2px_32px_rgba(255,255,255,0.08)] md:text-6xl lg:text-7xl">
                {t("titleA")}
              </span>
              <span className="mt-2 block text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-white [text-shadow:0_0_56px_rgba(255,255,255,0.12)] md:mt-3 md:text-4xl lg:text-5xl">
                {t("titleB")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-white/70 md:text-[16px] md:leading-8 lg:text-[17px]"
            >
              {t("subtitle")}
            </motion.p>
          </div>

          {/* 2 — iPhone (mobile: under copy; desktop: right column, spans both rows) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="order-2 flex justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:justify-end md:self-center"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[340px] lg:max-w-[360px]">
              <div className="absolute -inset-8 rounded-[40px] bg-grid-fade opacity-65 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-palladium-card/40 p-2.5 shadow-[0_34px_140px_rgba(0,0,0,0.72)] backdrop-blur-[14px] md:p-3">
                <IphoneEmulator
                  heightClassName="h-[460px] sm:h-[500px] md:h-[540px] lg:h-[560px]"
                  contentPaddingPx={10}
                  contentScale={0.68}
                  showDots={false}
                >
                  <HomeWalletScreen />
                  <WalletHistoryScreen />
                  <TradingScreen />
                </IphoneEmulator>
              </div>

              <div className="pointer-events-none absolute -right-6 -top-10 hidden h-24 w-24 rounded-full bg-palladium-green/14 blur-3xl md:block" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 hidden h-24 w-24 rounded-full bg-palladium-cyan/10 blur-3xl md:block" />
            </div>
          </motion.div>

          {/* 3 — CTAs + trust (mobile: below iPhone) */}
          <div className="order-3 flex flex-col gap-9 md:col-start-1 md:row-start-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a
                href={cta("telegramUrl")}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "group relative inline-flex min-h-[72px] w-full items-center justify-center gap-4 rounded-[24px] px-10 py-6 text-[18px] font-semibold tracking-[-0.02em] text-white transition-all duration-[380ms] ease-out sm:w-auto md:min-h-[76px] md:gap-[18px] md:px-12 md:py-6 md:text-[19px]",
                  "border border-[#00FF9F]/48 bg-[rgba(6,14,11,0.86)] backdrop-blur-xl",
                  "shadow-[inset_0_1px_0_rgba(0,255,159,0.18),0_0_0_1px_rgba(0,255,159,0.22),0_14px_52px_rgba(0,0,0,0.52),0_0_56px_rgba(0,255,159,0.42),0_0_112px_rgba(0,255,159,0.2),0_0_180px_rgba(45,212,191,0.08)]",
                  "hover:scale-[1.025] hover:border-[#00FF9F]/68 hover:bg-[rgba(8,20,15,0.92)]",
                  "hover:shadow-[inset_0_1px_0_rgba(0,255,159,0.24),0_0_0_1px_rgba(0,255,159,0.32),0_18px_64px_rgba(0,0,0,0.58),0_0_88px_rgba(0,255,159,0.52),0_0_160px_rgba(0,255,159,0.26),0_0_220px_rgba(52,211,153,0.12)]",
                  "active:scale-[1.01]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9F]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                )}
              >
                <TelegramPremiumIcon className="h-11 w-11 md:h-12 md:w-12" />
                <span className="text-center leading-snug">{t("ctaPrimary")}</span>
              </a>

              <Button asChild variant="outline" size="lg" className="w-full min-h-[48px] sm:w-auto">
                <a href="#performance">{t("ctaSecondary")}</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26, ease: "easeOut" }}
              className="rounded-[18px] border border-white/[0.14] bg-gradient-to-br from-white/[0.07] to-black/55 px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,.09),0_12px_48px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.05] backdrop-blur-xl md:px-7 md:py-6"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4">
                <span className="inline-flex items-start gap-3 text-[13px] font-semibold leading-snug tracking-wide text-white/[0.88] md:text-[14px]">
                  <Cpu className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal-200/95" />
                  {t("trust1")}
                </span>
                <span className="inline-flex items-start gap-3 text-[13px] font-semibold leading-snug tracking-wide text-white/[0.88] md:text-[14px]">
                  <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-emerald-300/95" />
                  {t("trust2")}
                </span>
                <span className="inline-flex items-start gap-3 text-[13px] font-semibold leading-snug tracking-wide text-white/[0.88] md:text-[14px]">
                  <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-emerald-300/95" />
                  {t("trust3")}
                </span>
                <span className="inline-flex items-start gap-3 text-[13px] font-semibold leading-snug tracking-wide text-white/[0.82] md:text-[14px]">
                  <Wallet className="mt-0.5 h-[18px] w-[18px] shrink-0 text-white/60" />
                  {t("trustDepositLine")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent" />
    </section>
  );
}
