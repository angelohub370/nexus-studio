"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function RestaurantNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("demos.restaurant");

  const nav = [
    { label: t("nav.home"), href: "/demos/restaurant" },
    { label: t("nav.menu"), href: "/demos/restaurant/meniu" },
    { label: t("nav.reservation"), href: "/demos/restaurant/rezervare" },
    { label: t("nav.contact"), href: "/demos/restaurant/contact" },
  ];

  return (
    <header className="sticky top-[33px] z-50 border-b border-[#e8ddd0] bg-[#faf7f2]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/demos/restaurant">
          <span className="font-[family-name:var(--font-playfair)] text-2xl text-[#2c1810]">{t("brand.name")}</span>
          <span className="font-[family-name:var(--font-playfair)] text-2xl italic text-[#c4704a]"> {t("brand.nameHighlight")}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-[family-name:var(--font-playfair)] text-sm transition-colors",
                pathname === item.href
                  ? "text-[#c4704a]"
                  : "text-[#2c1810]/60 hover:text-[#2c1810]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/demos/restaurant/rezervare"
            className="hidden items-center gap-2 bg-[#c4704a] px-5 py-2.5 font-[family-name:var(--font-playfair)] text-sm text-white transition hover:bg-[#b0603a] md:flex"
          >
            <Phone size={14} />
            {t("nav.bookTable")}
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={t("nav.menu")}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-[#e8ddd0] px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 font-[family-name:var(--font-playfair)] text-[#2c1810]/70">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
