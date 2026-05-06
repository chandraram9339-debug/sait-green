import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales, type Locale } from "@/i18n/routing";

export default getRequestConfig(async ({ locale }) => {
  const maybeLocale = typeof locale === "string" ? locale : undefined;
  const resolved =
    maybeLocale && (locales as readonly string[]).includes(maybeLocale)
      ? (maybeLocale as Locale)
      : defaultLocale;

  return {
    locale: resolved,
    messages: (await import(`./messages/${resolved}.json`)).default
  };
});

