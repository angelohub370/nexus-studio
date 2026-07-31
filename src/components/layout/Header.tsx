"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const navLinks = [
  { key: "about", href: "#despre" },
  { key: "services", href: "#servicii" },
  { key: "projects", href: "#proiecte" },
  { key: "pricing", href: "#preturi" },
  { key: "process", href: "#proces" },
  { key: "portfolio", href: "#portofoliu" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6">
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-500 md:px-5",
            isScrolled
              ? "border border-white/[0.06] bg-background/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              : "bg-transparent"
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE.out }}
          >
            <Link href="/">
              <Logo />
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher />
            <Button href="#contact" size="sm" variant="primary">
              {tCommon("requestQuote")}
            </Button>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="rounded-md p-2 text-muted transition-colors hover:text-foreground md:hidden"
            aria-label={tCommon("menu")}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: EASE.out }}
              className="flex h-full flex-col items-center justify-center gap-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg px-6 py-3 text-lg font-medium text-muted transition-colors hover:text-foreground"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="mt-4">
                <LanguageSwitcher />
              </div>
              <Button
                href="#contact"
                className="mt-6"
                onClick={() => setIsMobileOpen(false)}
              >
                {tCommon("requestQuote")}
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
