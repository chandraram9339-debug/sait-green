"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

import { AnimatedNumber } from "@/components/landing/motion/AnimatedNumber";
import { IphoneEmulator } from "@/components/landing/iphone/IphoneEmulator";
import { TelegramChatScreen } from "@/components/landing/iphone/screens/TelegramChatScreen";
import { cn } from "@/lib/utils";

export function ProvenPerformance() {
  const t = useTranslations("cta");
  return (
    <section
      id="performance"
      className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:py-28"
    >
      <div className="flex flex-col gap-12 md:gap-14">
        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
            PROVEN PERFORMANCE
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            Instant Access via Telegram
          </h2>
          <p className="max-w-[80ch] text-white/70">
            Launch PALLADIUM AI directly from Telegram—chat, app access, and channel updates in one place.
          </p>
        </div>

        {/* iPhone + Telegram-style CTA — tight pairing, centered row */}
        <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-9 md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-10">
          <div className="relative z-0 w-full max-w-[400px] shrink-0 md:max-w-[min(100%,420px)] lg:max-w-[430px]">
            <IphoneEmulator contentPaddingPx={10} contentScale={0.94} showDots={false} draggable={false}>
              <TelegramChatScreen
                launchUrl={t("telegramUrl")}
                chatUrl={t("telegramChatUrl")}
                channelUrl={t("telegramChannelUrl")}
                supportUrl={t("telegramSupportUrl")}
              />
            </IphoneEmulator>
          </div>

          <div className="relative z-10 flex w-full max-w-[340px] flex-col items-center md:max-w-[300px] md:items-stretch lg:max-w-[320px]">
            <a
              href={t("telegramUrl")}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group relative inline-flex min-h-[56px] w-full items-center justify-center gap-3.5 rounded-[16px] px-6 py-3.5",
                "border border-[#40FF96]/55 bg-[rgba(10,14,12,0.92)] text-[16px] font-semibold tracking-[-0.01em] text-white",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_36px_rgba(0,0,0,0.5),0_0_0_1px_rgba(64,255,150,0.08),0_0_28px_rgba(64,255,150,0.14)] backdrop-blur-md",
                "transition-all duration-200 hover:border-[#40FF96]/85 hover:bg-[rgba(12,20,16,0.96)] hover:shadow-[0_0_40px_rgba(64,255,150,0.22),0_8px_40px_rgba(0,0,0,0.55)]",
                "active:scale-[0.99]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#40FF96]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              )}
            >
              <TelegramNeonPlane className="h-[28px] w-[28px] shrink-0 drop-shadow-[0_0_10px_rgba(64,255,150,0.55)]" />
              <span className="leading-tight">{t("openInTelegram")}</span>
            </a>
            <p className="mt-5 text-center text-[14px] leading-relaxed text-white/58 md:text-left">
              {t("performanceNote")}
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <Kpi
              icon={<TrendingUp className="h-4 w-4 text-[#40FF96]" />}
              label="Profit"
              value="+34.21%"
              hint="After upgrade"
            />
            <Kpi
              icon={<BarChart3 className="h-4 w-4 text-[#40FF96]" />}
              label="Successful deals"
              value="260/358"
              hint="Win ratio"
            />
            <Kpi
              icon={<BarChart3 className="h-4 w-4 text-[#40FF96]" />}
              label="Win rate"
              value="73%"
              hint="Avg"
            />
            <Kpi
              icon={<BarChart3 className="h-4 w-4 text-[#40FF96]" />}
              label="Balance growth"
              value={
                <>
                  $<AnimatedNumber value={997.55} from={470.36} duration={1.6} />
                </>
              }
              hint="Demonstration"
            />
          </div>

          <div className="mt-6 text-sm font-semibold text-white/55">
            Real user results after April 2026 infrastructure upgrade
          </div>
        </div>
      </div>
    </section>
  );
}

/** Telegram mark: soft green fill inside + neon outline (vector only — no raster bg). */
function TelegramNeonPlane({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const fillId = `tg-fill-${uid}`;
  const blurId = `tg-blur-${uid}`;
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={fillId} x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="rgba(64,255,150,0.42)" />
          <stop offset="55%" stopColor="rgba(0,255,159,0.14)" />
          <stop offset="100%" stopColor="rgba(57,255,20,0.2)" />
        </linearGradient>
        <filter id={blurId} x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="0.35" result="g" />
          <feMerge>
            <feMergeNode in="g" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Official Telegram logo silhouette — reads as “plane in circle”; sits on site bg */}
      <path
        fill={`url(#${fillId})`}
        stroke="#40FF96"
        strokeWidth={0.42}
        strokeLinejoin="round"
        filter={`url(#${blurId})`}
        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
      />
    </svg>
  );
}

function Kpi({
  icon,
  label,
  value,
  hint
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  hint: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[12px] font-semibold tracking-wide text-white/70">
          {icon}
          {label}
        </div>
        <div className="text-xs text-white/45">{hint}</div>
      </div>
      <div className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
        {value}
      </div>
    </motion.div>
  );
}
