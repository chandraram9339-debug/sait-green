"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

import { AnimatedNumber } from "@/components/landing/motion/AnimatedNumber";
import { IphoneEmulator } from "@/components/landing/iphone/IphoneEmulator";
import { TelegramChatScreen } from "@/components/landing/iphone/screens/TelegramChatScreen";
import { buttonVariants } from "@/components/ui/button";
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

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-x-12 lg:gap-x-20 xl:gap-x-28 md:gap-y-10">
          {/* iPhone left (desktop) / top (mobile) */}
          <div className="relative z-0 order-1 flex w-full justify-center md:col-span-7 md:justify-start">
            <div className="w-full max-w-[400px] md:max-w-[min(100%,420px)] lg:max-w-[440px]">
              <IphoneEmulator contentPaddingPx={10} contentScale={0.94} showDots={false} draggable={false}>
                <TelegramChatScreen
                  launchUrl={t("telegramUrl")}
                  chatUrl={t("telegramChatUrl")}
                  channelUrl={t("telegramChannelUrl")}
                  supportUrl={t("telegramSupportUrl")}
                />
              </IphoneEmulator>
            </div>
          </div>

          {/* CTA right (desktop); centered under phone on mobile */}
          <div className="relative z-10 order-2 flex w-full flex-col items-center justify-center md:col-span-5 md:items-stretch md:pl-2 lg:pl-4">
            <a
              href={t("telegramUrl")}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "neon", size: "lg" }),
                "flex min-h-[96px] w-full max-w-md items-center justify-center px-6 py-6 text-center text-[17px] font-bold leading-snug tracking-[-0.02em] sm:text-[18px] md:max-w-none md:min-h-[104px] md:px-8 md:text-[19px] lg:min-h-[110px] lg:text-xl",
                "rounded-[22px] shadow-[0_0_0_1px_rgba(0,255,159,.3),0_0_56px_rgba(0,255,159,.45),0_0_110px_rgba(0,255,159,.2)]",
                "transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(0,255,159,.38),0_0_88px_rgba(0,255,159,.58),0_0_160px_rgba(0,255,159,.26)]",
                "active:translate-y-0 active:scale-[1]"
              )}
            >
              Launch PALLADIUM AI in Telegram
            </a>
            <p className="mt-6 max-w-md text-center text-[15px] leading-relaxed text-white/65 md:mt-8 md:max-w-[42ch] md:text-left">
              Direct access inside Telegram. One tap opens the mini app—no extra installs.
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
