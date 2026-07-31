"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  pricingFeatureKeys,
  pricingPackageIcons,
  pricingPackageIds,
} from "@/lib/pricing.data";

export function Pricing() {
  const t = useTranslations("pricing");

  return (
    <Section id="preturi" className="border-t border-white/[0.04]">
      <SectionHeading
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {pricingPackageIds.map((id, i) => {
          const Icon = pricingPackageIcons[id];
          const features = pricingFeatureKeys[id];
          const highlighted = id === "website";

          return (
            <SpotlightCard
              key={id}
              delay={i}
              className={`flex h-full flex-col ${
                highlighted
                  ? "border-accent/25 bg-accent/[0.04] shadow-[0_8px_40px_rgba(59,130,246,0.12)]"
                  : ""
              }`}
            >
                {highlighted && (
                  <span className="mb-4 inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {t("popular")}
                  </span>
                )}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-accent">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {t(`packages.${id}.name`)}
                </h3>
                <p className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em]">
                  {t("from")}{" "}
                  <span className="text-accent">
                    {t(`packages.${id}.price`)}
                  </span>
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {features.map((featureKey) => (
                    <li
                      key={featureKey}
                      className="flex items-start gap-2.5 text-[14px] text-muted"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      {t(`packages.${id}.features.${featureKey}`)}
                    </li>
                  ))}
                </ul>
                <Button href="#contact" className="mt-8 w-full" size="md">
                  {t("cta")}
                </Button>
              </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
}
