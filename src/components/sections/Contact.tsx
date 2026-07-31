"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { siteConfig } from "@/lib/site.config";
import { EASE } from "@/lib/motion";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function Contact() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactLinks = [
    {
      label: t("labels.phone"),
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
    },
    {
      label: t("labels.email"),
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      label: t("labels.whatsapp"),
      value: t("labels.whatsappValue"),
      href: `https://wa.me/${siteConfig.contact.whatsapp}`,
      external: true,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
        saved?: boolean;
      };

      if (!response.ok) {
        throw new Error(result.error ?? t("form.errorGeneric"));
      }

      setIsSubmitted(true);
      setFormState(initialFormState);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t("form.errorGeneric");
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="border-t border-white/[0.04]">
      <SectionHeading
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE.out }}
          onSubmit={handleSubmit}
          className="space-y-4 lg:col-span-3"
          noValidate
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              id="name"
              label={t("form.name")}
              required
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              placeholder={t("form.namePlaceholder")}
              disabled={isSubmitting}
            />
            <Input
              id="email"
              label={t("form.email")}
              type="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              placeholder={t("form.emailPlaceholder")}
              disabled={isSubmitting}
            />
          </div>

          <Input
            id="phone"
            label={t("form.phone")}
            type="tel"
            value={formState.phone}
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
            placeholder={t("form.phonePlaceholder")}
            disabled={isSubmitting}
          />

          <Textarea
            id="message"
            label={t("form.message")}
            required
            rows={5}
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            placeholder={t("form.messagePlaceholder")}
            disabled={isSubmitting}
          />

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
          )}

          {isSubmitted && (
            <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
              {t("form.submitted")}
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("form.sending")
              : isSubmitted
                ? t("form.submitted")
                : t("form.submit")}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE.out }}
          className="space-y-6 lg:col-span-2"
        >
          <div className="space-y-1">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-lg px-3 py-3 transition-colors hover:bg-white/[0.03]"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-[14px] font-medium">{link.value}</p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted opacity-0 transition-all group-hover:opacity-100 group-hover:text-foreground"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
