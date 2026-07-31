"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { trustBadgeIcons, trustBadgeIds } from "@/lib/trust-badges.data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function TrustBadges() {
  const t = useTranslations("trustBadges");

  return (
    <section className="border-b border-white/[0.04] bg-background py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
        >
          {trustBadgeIds.map((id, i) => {
            const Icon = trustBadgeIcons[id];
            return (
              <motion.div
                key={id}
                custom={i}
                variants={fadeUp}
                className="group flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-5 text-center shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-accent transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <p className="text-[13px] font-medium tracking-[-0.01em] text-foreground/90">
                  {t(`items.${id}.label`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
