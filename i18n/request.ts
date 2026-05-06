import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales, type Locale } from "@/i18n/routing";

import en from "./messages/en.json";
import es from "./messages/es.json";
import pt from "./messages/pt.json";

const messagesByLocale = {
  en,
  es,
  pt
} as const satisfies Record<Locale, typeof en>;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const resolved: Locale =
    requested && (locales as readonly string[]).includes(requested)
      ? (requested as Locale)
      : defaultLocale;

  return {
    locale: resolved,
    messages: messagesByLocale[resolved]
  };
});
