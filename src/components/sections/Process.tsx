"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/motion";

type ProcessStepItem = {
  title: string;
  description: string;
};

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as ProcessStepItem[];

  return (
    <Section id="proces">
      <SectionHeading
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/[0.06] md:left-1/2 md:-translate-x-px" />

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`hidden flex-1 md:block ${
                  i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                }`}
              >
                <h3 className="text-lg font-medium tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>

              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-background font-mono text-[13px] font-medium text-accent md:absolute md:left-1/2 md:-translate-x-1/2">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex-1 md:hidden">
                <h3 className="text-lg font-medium tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>

              <div
                className={`hidden flex-1 md:block ${
                  i % 2 === 0 ? "pl-12" : "pr-12 text-right"
                }`}
              >
                {i % 2 !== 0 && (
                  <>
                    <h3 className="text-lg font-medium tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
