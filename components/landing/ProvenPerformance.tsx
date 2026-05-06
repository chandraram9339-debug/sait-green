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
    <section id="performance" className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col gap-10">
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

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-10 lg:gap-14">
          {/* iPhone left (desktop) / top (mobile) */}
          <div className="relative z-0 order-1 flex w-full justify-center md:col-span-7 md:justify-start lg:col-span-7">
            <div className="w-full max-w-[420px] md:max-w-none">
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

          {/* CTA right (desktop) / under phone (mobile) */}
          <div className="relative z-10 order-2 flex flex-col justify-center md:col-span-5 lg:col-span-5">
            <a
              href={t("telegramUrl")}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "neon", size: "lg" }),
                "flex min-h-[92px] w-full items-center justify-center px-5 py-5 text-center text-[17px] font-bold leading-snug tracking-[-0.02em] sm:text-[18px] md:min-h-[104px] md:px-7 md:text-[19px] lg:min-h-[110px] lg:text-xl",
                "rounded-[20px] shadow-[0_0_0_1px_rgba(0,255,159,.28),0_0_52px_rgba(0,255,159,.42),0_0_100px_rgba(0,255,159,.22)]",
                "transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(0,255,159,.34),0_0_72px_rgba(0,255,159,.55),0_0_140px_rgba(0,255,159,.28)]",
                "active:translate-y-0 active:scale-[1]"
              )}
            >
              Launch PALLADIUM AI in Telegram
            </a>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-white/65 md:mt-6">
              Direct access inside Telegram. One tap opens the mini app—no extra installs.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
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

          <div className="mt-5 text-sm font-semibold text-white/55">
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

