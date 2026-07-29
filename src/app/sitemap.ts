import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";
import { locales } from "@/i18n/routing";

const demoPaths = [
  "",
  "/demos/fashion-store",
  "/demos/fashion-store/produse",
  "/demos/fashion-store/despre",
  "/demos/fashion-store/contact",
  "/demos/restaurant",
  "/demos/restaurant/meniu",
  "/demos/restaurant/rezervare",
  "/demos/restaurant/contact",
  "/demos/salon",
  "/demos/salon/servicii",
  "/demos/salon/galerie",
  "/demos/salon/programare",
  "/demos/auto-service",
  "/demos/auto-service/servicii",
  "/demos/auto-service/preturi",
  "/demos/auto-service/contact",
  "/demos/clinica",
  "/demos/clinica/servicii",
  "/demos/clinica/echipa",
  "/demos/clinica/programare",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    demoPaths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    }))
  );
}
