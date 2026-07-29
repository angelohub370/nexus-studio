"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { statIds } from "@/lib/data";
import { EASE } from "@/lib/motion";

type StatTranslation = {
  value: string;
  suffix?: string;
  label: string;
};

export function Stats() {
  const t = useTranslations("stats");

  return (
    <Section className="py-20 md:py-24">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.04] lg:grid-cols-4">
        {statIds.map((id, i) => {
          const stat = t.raw(id) as StatTranslation;
          return <StatItem key={id} stat={stat} index={i} />;
        })}
      </div>
    </Section>
  );
}

function StatItem({
  stat,
  index,
}: {
  stat: StatTranslation;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE.out }}
      className="flex flex-col items-center justify-center bg-background px-6 py-10 md:py-14"
    >
      <p className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.03em]">
        {stat.value}
        {stat.suffix && (
          <span className="text-accent">{stat.suffix}</span>
        )}
      </p>
      <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
        {stat.label}
      </p>
    </motion.div>
  );
}
