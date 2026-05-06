"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function FAQ() {
  const t = useTranslations("faq");

  const items = [
    { q: t("q1.q"), a: t("q1.a") },
    { q: t("q2.q"), a: t("q2.a") },
    { q: t("q3.q"), a: t("q3.a") },
    { q: t("q4.q"), a: t("q4.a") },
    { q: t("q5.q"), a: t("q5.a") },
    { q: t("q6.q"), a: t("q6.a") },
    { q: t("q7.q"), a: t("q7.a") }
  ];

  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-6xl px-4 pb-16 pt-20 md:px-6 md:pb-20 md:pt-28 lg:pb-24 lg:pt-36"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
            {t("eyebrow")}
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-[80ch] text-white/70">{t("subtitle")}</p>
        </div>

        <Accordion.Root type="single" collapsible className="grid gap-3">
          {items.map((it, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-white/10 bg-white/4"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="text-[15px] font-semibold text-white/90 md:text-base">
                    {it.q}
                  </span>
                  <ChevronDown className="h-5 w-5 text-white/60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content asChild>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="px-5 pb-5 text-sm leading-relaxed text-white/70"
                >
                  {it.a}
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

