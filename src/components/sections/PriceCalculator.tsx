"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { calculateEstimate, type ProjectType } from "@/lib/calculator";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const projectTypes: ProjectType[] = ["landing", "website", "store", "custom"];

export function PriceCalculator() {
  const t = useTranslations("calculator");
  const [projectType, setProjectType] = useState<ProjectType>("website");
  const [pages, setPages] = useState(5);
  const [hosting, setHosting] = useState(true);
  const [seo, setSeo] = useState(true);
  const [payments, setPayments] = useState(false);
  const [multilingual, setMultilingual] = useState(false);

  const estimate = useMemo(
    () =>
      calculateEstimate({
        projectType,
        pages,
        hosting,
        seo,
        payments,
        multilingual,
      }),
    [projectType, pages, hosting, seo, payments, multilingual]
  );

  return (
    <Section id="calculator" className="border-t border-white/[0.04]">
      <SectionHeading
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE.out }}
          className="space-y-8 lg:col-span-3"
        >
          <FieldGroup label={t("questions.type.label")}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {projectTypes.map((type) => (
                <label
                  key={type}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-[14px] transition-all duration-200",
                    projectType === type
                      ? "border-accent/40 bg-accent/[0.08] text-foreground"
                      : "border-white/[0.08] bg-white/[0.02] text-muted hover:border-white/[0.14]"
                  )}
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={type}
                    checked={projectType === type}
                    onChange={() => setProjectType(type)}
                    className="accent-accent"
                  />
                  {t(`questions.type.options.${type}`)}
                </label>
              ))}
            </div>
          </FieldGroup>

          <FieldGroup
            label={t("questions.pages.label")}
            hint={`${pages} ${t("questions.pages.unit")}`}
          >
            <input
              type="range"
              min={1}
              max={30}
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full accent-accent"
            />
            <div className="mt-1 flex justify-between font-mono text-[11px] text-muted">
              <span>1</span>
              <span>30</span>
            </div>
          </FieldGroup>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ToggleField
              label={t("questions.hosting.label")}
              value={hosting}
              onChange={setHosting}
              yesLabel={t("yes")}
              noLabel={t("no")}
            />
            <ToggleField
              label={t("questions.seo.label")}
              value={seo}
              onChange={setSeo}
              yesLabel={t("yes")}
              noLabel={t("no")}
            />
            <ToggleField
              label={t("questions.payments.label")}
              value={payments}
              onChange={setPayments}
              yesLabel={t("yes")}
              noLabel={t("no")}
            />
            <ToggleField
              label={t("questions.multilingual.label")}
              value={multilingual}
              onChange={setMultilingual}
              yesLabel={t("yes")}
              noLabel={t("no")}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE.out }}
          className="lg:col-span-2"
        >
          <div className="sticky top-28 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_12px_48px_rgba(0,0,0,0.25)] md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {t("result.label")}
            </p>
            <p className="mt-4 text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-[-0.04em]">
              €{estimate.min.toLocaleString()}
              <span className="mx-2 text-muted">–</span>
              €{estimate.max.toLocaleString()}
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              {t("result.note")}
            </p>
            <Button href="#contact" className="mt-8 w-full" size="lg">
              {t("cta")}
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function FieldGroup({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-[14px] font-medium">{label}</p>
        {hint && (
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
            {hint}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function ToggleField({
  label,
  value,
  onChange,
  yesLabel,
  noLabel,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  yesLabel: string;
  noLabel: string;
}) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="mb-3 text-[13px] font-medium">{label}</p>
      <div className="flex gap-2">
        {[true, false].map((option) => (
          <button
            key={String(option)}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "flex-1 rounded-md border px-3 py-2 text-[13px] transition-all duration-200",
              value === option
                ? "border-accent/40 bg-accent/[0.1] text-foreground"
                : "border-white/[0.06] text-muted hover:border-white/[0.12]"
            )}
          >
            {option ? yesLabel : noLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
