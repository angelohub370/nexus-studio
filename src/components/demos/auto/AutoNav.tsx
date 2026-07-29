"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function AutoNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("demos.auto");

  const nav = [
    { label: t("nav.home"), href: "/demos/auto-service" },
    { label: t("nav.services"), href: "/demos/auto-service/servicii" },
    { label: t("nav.pricing"), href: "/demos/auto-service/preturi" },
    { label: t("nav.contact"), href: "/demos/auto-service/contact" },
  ];

  return (
    <header className="sticky top-[33px] z-50 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/demos/auto-service" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-orange-500 font-bold text-white">A</div>
          <span className="text-lg font-bold uppercase tracking-wider text-white">
            {t("brand.name")}<span className="text-orange-500">{t("brand.nameHighlight")}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={cn("text-sm font-medium uppercase tracking-wide transition-colors", pathname === item.href ? "text-orange-500" : "text-neutral-400 hover:text-white")}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="tel:+40745222333" className="hidden items-center gap-2 bg-orange-500 px-4 py-2 text-sm font-bold uppercase text-white hover:bg-orange-600 md:flex">
          <Phone size={14} /> {t("nav.callNow")}
        </Link>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label={t("nav.home")}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-neutral-800 px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm uppercase text-neutral-400">{item.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
