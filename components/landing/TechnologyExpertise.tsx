"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export function TechnologyExpertise() {
  const t = useTranslations("technology");
  return (
    <section
      id="technology"
      className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:py-14"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 lg:gap-14">
        <div className="md:col-span-5">
          <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
            {t("eyebrow")}
          </div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-[70ch] text-[15px] leading-relaxed text-white/72 md:text-base">
            {t("intro")}
          </p>

          <div className="mt-8 grid gap-3">
            <Pill
              icon={<Cpu className="h-4 w-4 text-cyan-200" />}
              title={t("pill1Title")}
              body={t("pill1Body")}
            />
            <Pill
              icon={<Brain className="h-4 w-4 text-emerald-200" />}
              title={t("pill2Title")}
              body={t("pill2Body")}
            />
            <Pill
              icon={<ShieldCheck className="h-4 w-4 text-emerald-200" />}
              title={t("pill3Title")}
              body={t("pill3Body")}
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass h-full rounded-[28px] border border-white/[0.09] p-6 md:p-8 lg:p-10"
          >
            <div className="text-[11px] font-semibold tracking-[0.2em] text-white/45">
              {t("panelEyebrow")}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/58 md:text-[15px]">
              {t("panelLead")}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:mt-10">
              <Capability
                title={t("cap1Title")}
                body={t("cap1Body")}
              />
              <Capability
                title={t("cap2Title")}
                body={t("cap2Body")}
              />
              <Capability
                title={t("cap3Title")}
                body={t("cap3Body")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  icon,
  title,
  body
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="glass rounded-2xl px-4 py-3">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/78">
        {icon}
        {title}
      </div>
      <div className="mt-1 text-sm leading-relaxed text-white/62">{body}</div>
    </div>
  );
}

function Capability({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-4">
      <div className="text-[13px] font-semibold tracking-[-0.02em] text-white/92">{title}</div>
      <div className="mt-2 text-[12px] leading-relaxed text-white/55">{body}</div>
    </div>
  );
}
