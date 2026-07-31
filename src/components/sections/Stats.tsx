"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { statIds } from "@/lib/data";
import { EASE } from "@/lib/motion";

type StatTranslation = {
  value: number;
  suffix?: string;
  label: string;
};

function useAnimatedCounter(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

export function Stats() {
  const t = useTranslations("stats");

  return (
    <Section className="py-20 md:py-28">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.2)] lg:grid-cols-4">
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
  const count = useAnimatedCounter(stat.value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE.out }}
      className="flex flex-col items-center justify-center bg-background px-6 py-12 md:py-16"
    >
      <p className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.04em]">
        {count}
        {stat.suffix && (
          <span className="text-accent">{stat.suffix}</span>
        )}
      </p>
      <p className="mt-3 max-w-[12rem] text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-muted">
        {stat.label}
      </p>
    </motion.div>
  );
}
