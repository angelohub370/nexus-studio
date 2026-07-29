"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { serviceIds, serviceIcons } from "@/lib/data";
import { staggerContainer } from "@/lib/motion";

export function Services() {
  const t = useTranslations("services");

  return (
    <Section id="servicii" className="border-t border-white/[0.04]">
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
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {serviceIds.map((id, i) => {
          const Icon = serviceIcons[id];

          return (
            <SpotlightCard key={id} delay={i}>
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                  <Icon
                    size={18}
                    className="text-foreground/70"
                    strokeWidth={1.5}
                  />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent"
                />
              </div>
              <h3 className="mb-2 text-[16px] font-medium tracking-[-0.01em]">
                {t(`items.${id}.title`)}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted">
                {t(`items.${id}.description`)}
              </p>
            </SpotlightCard>
          );
        })}
      </motion.div>
    </Section>
  );
}
