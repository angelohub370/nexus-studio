"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function SalonNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("demos.salon");

  const nav = [
    { label: t("nav.home"), href: "/demos/salon" },
    { label: t("nav.services"), href: "/demos/salon/servicii" },
    { label: t("nav.gallery"), href: "/demos/salon/galerie" },
    { label: t("nav.booking"), href: "/demos/salon/programare" },
  ];

  return (
    <header className="sticky top-[33px] z-50 border-b border-[#f0dce4] bg-[#fdf2f4]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/demos/salon" className="text-xl font-light tracking-wide text-[#6b4c5e]">
          {t("brand.name")} <span className="font-semibold italic">{t("brand.nameHighlight")}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={cn("text-sm transition-colors", pathname === item.href ? "text-[#e8a0bf]" : "text-[#6b4c5e]/60 hover:text-[#6b4c5e]")}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/demos/salon/programare" className="hidden rounded-full bg-[#e8a0bf] px-5 py-2 text-sm text-white transition hover:bg-[#d890af] md:block">
          {t("nav.bookNow")}
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={t("nav.booking")}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#f0dce4] px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-[#6b4c5e]/70">{item.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
