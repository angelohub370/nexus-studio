"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Divider } from "@/components/ui/Divider";
import { fadeUp, staggerContainer } from "@/lib/motion";

type AboutFeature = {
  title: string;
  description: string;
};

export function About() {
  const t = useTranslations("about");
  const features = t.raw("features") as AboutFeature[];
  const advantages = t.raw("advantages") as string[];

  return (
    <Section id="despre">
      <SectionHeading
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {features.map((feature, i) => (
          <SpotlightCard key={feature.title} delay={i}>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              0{i + 1}
            </p>
            <h3 className="mb-3 text-lg font-medium tracking-[-0.01em]">
              {feature.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-muted">
              {feature.description}
            </p>
          </SpotlightCard>
        ))}
      </motion.div>

      <Divider className="my-16 md:my-20" label={t("advantagesLabel")} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {advantages.map((advantage, i) => (
          <motion.div
            key={advantage}
            custom={i}
            variants={fadeUp}
            className="flex items-center gap-3 rounded-lg border border-white/[0.04] bg-white/[0.01] px-4 py-3.5"
          >
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Check size={12} className="text-accent" strokeWidth={2.5} />
            </div>
            <span className="text-[14px] text-foreground/80">{advantage}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
