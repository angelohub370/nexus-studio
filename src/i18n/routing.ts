import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ro", "de", "fr", "es", "it", "nl", "pl"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: true,
});

export const localeNames: Record<Locale, string> = {
  en: "English",
  ro: "Română",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
};
