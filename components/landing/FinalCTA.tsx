"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 md:px-6 md:pb-20 md:pt-8">
      <div className="glass relative overflow-hidden rounded-[36px] border border-white/10 px-6 py-10 md:px-10 md:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(800px 240px at 20% 20%, rgba(0,255,159,0.16), transparent 60%), radial-gradient(700px 260px at 80% 30%, rgba(0,229,255,0.12), transparent 60%)"
          }}
        />

        <div className="relative flex flex-col items-start gap-6">
          <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
            {t("eyebrow")}
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-[80ch] text-white/70">{t("subtitle")}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="neon">
              <a href={t("telegramUrl")} target="_blank" rel="noreferrer">
                {t("primary")}
              </a>
            </Button>
            <div className="text-sm font-semibold text-white/55">{t("trust")}</div>
          </div>

          <div className="mt-2 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white/65">
            <div className="font-semibold text-white/80">{t("disclaimerTitle")}</div>
            <div className="mt-1 leading-relaxed">{t("disclaimerBody")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

