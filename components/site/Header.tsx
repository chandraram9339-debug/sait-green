"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const locales = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" }
] as const;

function getLocaleFromPath(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "en" || seg === "es" || seg === "pt") return seg;
  return "en";
}

export function Header() {
  const pathname = usePathname();
  const activeLocale = getLocaleFromPath(pathname || "/en");
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b border-white/6">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href={`/${activeLocale}`} className="group flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-b from-emerald-300/25 to-emerald-300/5 ring-1 ring-emerald-300/25 shadow-glowGreen" />
            <div className="leading-tight">
              <div className="text-[13px] font-semibold tracking-[0.18em] text-white/90">
                PALLADIUM
              </div>
              <div className="text-[11px] tracking-[0.22em] text-white/50">
                AI TRADING
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white transition-colors" href="#performance">
              {t("performance")}
            </a>
            <a className="hover:text-white transition-colors" href="#technology">
              {t("technology")}
            </a>
            <a className="hover:text-white transition-colors" href="#risk">
              {t("risk")}
            </a>
            <a className="hover:text-white transition-colors" href="#fees">
              {t("fees")}
            </a>
            <a className="hover:text-white transition-colors" href="#faq">
              {t("faq")}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/3 p-1 md:flex">
              {locales.map((l) => (
                <Link
                  key={l.code}
                  href={`/${l.code}`}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-semibold tracking-wider transition-colors",
                    activeLocale === l.code
                      ? "bg-white/8 text-white"
                      : "text-white/55 hover:text-white"
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Button asChild variant="neon" size="sm" className="h-10">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Launch Palladium AI in Telegram"
                >
                  <Send className="h-4 w-4 text-emerald-200" />
                  {t("launch")}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

