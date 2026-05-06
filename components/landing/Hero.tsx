"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Check, Cpu, Sparkles, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-10 md:px-6 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
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
            <div className="relative w-full max-w-[320px] md:max-w-[300px] lg:max-w-[340px]">
              <div className="absolute -inset-8 rounded-[40px] bg-grid-fade opacity-70 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-palladium-card/40 p-2.5 shadow-[0_34px_140px_rgba(0,0,0,0.72)] backdrop-blur-[14px] md:p-3">
                <IphoneEmulator
                  heightClassName="h-[380px] md:h-[420px]"
                  contentPaddingPx={10}
                  contentScale={0.72}
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

              <div className="pointer-events-none absolute -right-6 -top-10 hidden h-28 w-28 rounded-full bg-palladium-green/16 blur-3xl md:block" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 hidden h-28 w-28 rounded-full bg-palladium-cyan/12 blur-3xl md:block" />
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
                  "group relative inline-flex min-h-[64px] w-full items-center justify-center gap-3 rounded-[22px] px-8 py-5 text-[17px] font-semibold tracking-[-0.02em] text-white transition-all duration-300 ease-out sm:w-auto md:min-h-[68px] md:gap-3.5 md:px-11 md:py-5 md:text-[18px]",
                  "border border-[#00FF9F]/42 bg-[rgba(6,14,11,0.82)] backdrop-blur-xl",
                  "shadow-[inset_0_1px_0_rgba(0,255,159,0.14),0_0_0_1px_rgba(0,255,159,0.18),0_12px_48px_rgba(0,0,0,0.5),0_0_52px_rgba(0,255,159,0.35),0_0_100px_rgba(0,255,159,0.14)]",
                  "hover:scale-[1.03] hover:border-[#00FF9F]/62 hover:bg-[rgba(8,18,14,0.9)]",
                  "hover:shadow-[inset_0_1px_0_rgba(0,255,159,0.2),0_0_0_1px_rgba(0,255,159,0.28),0_16px_56px_rgba(0,0,0,0.55),0_0_72px_rgba(0,255,159,0.48),0_0_140px_rgba(0,255,159,0.2)]",
                  "active:scale-[1.01]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9F]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                )}
              >
                <HeroTelegramGlyph className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
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
              className="rounded-2xl border border-white/[0.1] bg-black/42 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,.07)] backdrop-blur-lg md:px-6 md:py-5"
            >
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3.5">
                <span className="inline-flex items-start gap-3 text-[13px] font-semibold leading-snug tracking-wide text-white/82 md:text-[14px]">
                  <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200/90" />
                  {t("trust1")}
                </span>
                <span className="inline-flex items-start gap-3 text-[13px] font-semibold leading-snug tracking-wide text-white/82 md:text-[14px]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200/90" />
                  {t("trust2")}
                </span>
                <span className="inline-flex items-start gap-3 text-[13px] font-semibold leading-snug tracking-wide text-white/82 md:text-[14px]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200/90" />
                  {t("trust3")}
                </span>
                <span className="inline-flex items-start gap-3 text-[13px] font-semibold leading-snug tracking-wide text-white/82 md:text-[14px]">
                  <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
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

/** Telegram mark for primary CTA — #00FF9F, vector only */
function HeroTelegramGlyph({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const fillId = `hero-tg-${uid}`;
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={fillId} x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="rgba(0,255,159,0.45)" />
          <stop offset="100%" stopColor="rgba(0,255,159,0.15)" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${fillId})`}
        stroke="#00FF9F"
        strokeWidth={0.45}
        strokeLinejoin="round"
        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
      />
    </svg>
  );
}
