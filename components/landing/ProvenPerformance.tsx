"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

import { AnimatedNumber } from "@/components/landing/motion/AnimatedNumber";
import { IphoneEmulator } from "@/components/landing/iphone/IphoneEmulator";
import { TelegramChatScreen } from "@/components/landing/iphone/screens/TelegramChatScreen";
import { TelegramPremiumIcon } from "@/components/icons/TelegramPremiumIcon";
import { cn } from "@/lib/utils";

export function ProvenPerformance() {
  const t = useTranslations("cta");
  return (
    <section
      id="performance"
      className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14 lg:py-16"
    >
      <div className="flex flex-col gap-6 md:gap-7">
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

        {/* Desktop: iPhone left, premium CTA right — tight pairing · Mobile: stacked, centered */}
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-12 xl:gap-14">
          <div className="relative z-0 w-full max-w-[320px] shrink-0 md:max-w-[340px] lg:max-w-[360px] md:translate-x-20 lg:translate-x-24">
            <IphoneEmulator
              heightClassName="h-[520px] md:h-[580px]"
              contentPaddingPx={10}
              contentScale={0.96}
              showDots={false}
              draggable={false}
            >
              <TelegramChatScreen
                launchUrl={t("telegramUrl")}
                chatUrl={t("telegramChatUrl")}
                channelUrl={t("telegramChannelUrl")}
                supportUrl={t("telegramSupportUrl")}
              />
            </IphoneEmulator>
          </div>

          <div className="relative z-10 flex w-full max-w-[440px] flex-col items-center md:max-w-[min(100%,440px)] md:flex-1 md:items-end">
            <a
              href={t("telegramUrl")}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group relative inline-flex min-h-[92px] w-full max-w-[420px] items-center justify-center gap-[18px] rounded-[24px] px-9 py-6 md:min-h-[98px] md:gap-5 md:px-11 md:py-6",
                "border border-[rgba(110,231,183,0.45)] bg-[rgba(7,15,13,0.88)] text-[17px] font-semibold tracking-[-0.02em] text-white backdrop-blur-xl md:text-[18px]",
                "shadow-[inset_0_1px_0_rgba(167,243,208,0.14),0_0_0_1px_rgba(94,234,212,0.18),0_14px_52px_rgba(0,0,0,0.52),0_0_56px_rgba(52,211,153,0.28),0_0_108px_rgba(45,212,191,0.14),0_0_160px_rgba(16,185,129,0.06)]",
                "transition-all duration-[380ms] ease-out",
                "hover:scale-[1.02] hover:border-[rgba(129,230,217,0.55)] hover:bg-[rgba(9,20,17,0.92)]",
                "hover:shadow-[inset_0_1px_0_rgba(167,243,208,0.18),0_0_0_1px_rgba(94,234,212,0.26),0_18px_60px_rgba(0,0,0,0.55),0_0_76px_rgba(52,211,153,0.38),0_0_140px_rgba(45,212,191,0.18)]",
                "active:scale-[1.01]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              )}
            >
              <TelegramPremiumIcon className="h-[52px] w-[52px] md:h-14 md:w-14" />
              <span className="min-w-0 flex-1 text-balance text-center leading-snug md:text-left">
                {t("primary")}
              </span>
            </a>
            <p className="mt-6 max-w-[36ch] text-center text-[14px] leading-relaxed text-white/58 md:text-right">
              {t("performanceNote")}
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <Kpi
              icon={<TrendingUp className="h-4 w-4 text-emerald-300/95" />}
              label="Profit"
              value="+34.21%"
              hint="After upgrade"
            />
            <Kpi
              icon={<BarChart3 className="h-4 w-4 text-emerald-300/95" />}
              label="Successful deals"
              value="260/358"
              hint="Win ratio"
            />
            <Kpi
              icon={<BarChart3 className="h-4 w-4 text-emerald-300/95" />}
              label="Win rate"
              value="73%"
              hint="Avg"
            />
            <Kpi
              icon={<BarChart3 className="h-4 w-4 text-emerald-300/95" />}
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
