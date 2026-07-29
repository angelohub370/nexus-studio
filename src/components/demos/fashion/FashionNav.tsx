"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function FashionNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("demos.fashion");

  const nav = [
    { label: t("nav.home"), href: "/demos/fashion-store" },
    { label: t("nav.products"), href: "/demos/fashion-store/produse" },
    { label: t("nav.about"), href: "/demos/fashion-store/despre" },
    { label: t("nav.contact"), href: "/demos/fashion-store/contact" },
  ];

  return (
    <header className="sticky top-[33px] z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/demos/fashion-store" className="text-xl font-light tracking-[0.3em] uppercase">
          {t("brand.name")}<span className="font-semibold">{t("brand.nameHighlight")}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] uppercase tracking-[0.15em] transition-colors",
                pathname === item.href
                  ? "text-black"
                  : "text-neutral-400 hover:text-black"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative text-neutral-600 hover:text-black" aria-label={t("nav.cart")}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
              2
            </span>
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={t("nav.menu")}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-neutral-100 px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-wider text-neutral-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
