"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function ClinicaNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("demos.clinica");

  const nav = [
    { label: t("nav.home"), href: "/demos/clinica" },
    { label: t("nav.services"), href: "/demos/clinica/servicii" },
    { label: t("nav.team"), href: "/demos/clinica/echipa" },
    { label: t("nav.booking"), href: "/demos/clinica/programare" },
  ];

  return (
    <header className="sticky top-[33px] z-50 border-b border-sky-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/demos/clinica" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          </div>
          <span className="text-lg font-semibold text-slate-800">
            {t("brand.name")}<span className="text-sky-500">{t("brand.nameHighlight")}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={cn("text-sm font-medium transition-colors", pathname === item.href ? "text-sky-500" : "text-slate-500 hover:text-slate-800")}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/demos/clinica/programare" className="hidden items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 md:flex">
          <Phone size={14} /> {t("nav.bookNow")}
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={t("nav.booking")}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-sky-100 px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-slate-600">{item.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
