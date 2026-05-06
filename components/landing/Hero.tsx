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
      <div
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(0,255,159,0.07),transparent_55%),radial-gradient(ellipse_70%_45%_at_15%_40%,rgba(0,255,159,0.04),transparent_50%),radial-gradient(ellipse_60%_50%_at_85%_25%,rgba(0,229,255,0.05),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-5 md:px-6 md:pb-12 md:pt-8 lg:pb-14 lg:pt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-x-14 lg:gap-x-[4.5rem] xl:gap-x-24">
          {/* 1 — Copy */}
          <div className="order-1 md:col-start-1 md:row-start-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/78 md:text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-emerald-200/90" />
              {t("pill")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
              className="mt-7 text-balance"
            >
              <span className="block text-[2.65rem] font-bold uppercase leading-[0.98] tracking-[-0.045em] text-white antialiased [text-shadow:0_0_80px_rgba(255,255,255,0.16),0_2px_36px_rgba(255,255,255,0.1)] sm:text-6xl md:text-[3.35rem] lg:text-[3.75rem] xl:text-[4rem]">
                {t("titleA")}
              </span>
              <span className="mt-3 block text-[1.55rem] font-semibold leading-[1.18] tracking-[-0.035em] text-white/96 antialiased [text-shadow:0_0_60px_rgba(255,255,255,0.12)] md:mt-[0.85rem] md:text-[1.85rem] lg:text-[2.125rem] xl:text-[2.35rem]">
                {t("titleB")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              className="mt-6 max-w-[56ch] text-[15px] leading-[1.65] text-white/[0.74] md:text-[16px] md:leading-relaxed lg:text-[17px] lg:leading-8"
            >
              {t("subtitle")}
            </motion.p>
          </div>

          {/* 2 — iPhone (slightly reduced so copy breathes; still tall frame) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="order-2 flex justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:justify-end md:self-center"
          >
            <div className="relative w-full max-w-[292px] md:max-w-[312px] lg:max-w-[332px]">
              <div className="absolute -inset-8 rounded-[40px] bg-grid-fade opacity-65 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-palladium-card/40 p-2.5 shadow-[0_34px_140px_rgba(0,0,0,0.72)] backdrop-blur-[14px] md:p-3">
                <IphoneEmulator
                  heightClassName="h-[420px] sm:h-[455px] md:h-[495px] lg:h-[515px]"
                  contentPaddingPx={10}
                  contentScale={0.655}
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

          {/* 3 — CTAs + trust */}
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
                  "group relative inline-flex min-h-[78px] w-full items-center justify-center gap-4 rounded-[26px] px-11 py-6 text-[18px] font-semibold tracking-[-0.02em] text-white transition-all duration-[400ms] ease-out sm:w-auto md:min-h-[84px] md:gap-5 md:px-[3.25rem] md:py-[1.35rem] md:text-[20px] lg:text-[21px]",
                  "border border-[#00FF9F]/52 bg-[rgba(5,14,11,0.9)] backdrop-blur-xl",
                  "shadow-[inset_0_1px_0_rgba(0,255,159,0.22),0_0_0_1px_rgba(0,255,159,0.28),0_16px_56px_rgba(0,0,0,0.55),0_0_64px_rgba(0,255,159,0.48),0_0_120px_rgba(0,255,159,0.28),0_0_200px_rgba(0,255,159,0.14),0_0_260px_rgba(45,212,191,0.1)]",
                  "hover:scale-[1.03] hover:border-[#00FF9F]/75 hover:bg-[rgba(8,22,16,0.94)]",
                  "hover:shadow-[inset_0_1px_0_rgba(0,255,159,0.28),0_0_0_1px_rgba(0,255,159,0.38),0_20px_72px_rgba(0,0,0,0.6),0_0_96px_rgba(0,255,159,0.58),0_0_180px_rgba(0,255,159,0.34),0_0_280px_rgba(52,211,153,0.18)]",
                  "active:scale-[1.01]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9F]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                )}
              >
                <TelegramPremiumIcon className="h-12 w-12 shrink-0 md:h-[52px] md:w-[52px]" />
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
              className="rounded-[18px] border border-white/[0.16] bg-gradient-to-br from-white/[0.08] to-black/55 px-6 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,.1),0_14px_52px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.06] backdrop-blur-xl md:px-8 md:py-7"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5">
                <span className="inline-flex items-start gap-3.5 text-[14px] font-semibold leading-snug tracking-wide text-white/[0.9] md:text-[15px] lg:text-base">
                  <Cpu className="mt-0.5 h-5 w-5 shrink-0 text-teal-200/95 md:h-[22px] md:w-[22px]" />
                  {t("trust1")}
                </span>
                <span className="inline-flex items-start gap-3.5 text-[14px] font-semibold leading-snug tracking-wide text-white/[0.9] md:text-[15px] lg:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300/95 md:h-[22px] md:w-[22px]" />
                  {t("trust2")}
                </span>
                <span className="inline-flex items-start gap-3.5 text-[14px] font-semibold leading-snug tracking-wide text-white/[0.9] md:text-[15px] lg:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300/95 md:h-[22px] md:w-[22px]" />
                  {t("trust3")}
                </span>
                <span className="inline-flex items-start gap-3.5 text-[14px] font-semibold leading-snug tracking-wide text-white/[0.84] md:text-[15px] lg:text-base">
                  <Wallet className="mt-0.5 h-5 w-5 shrink-0 text-white/62 md:h-[22px] md:w-[22px]" />
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
