"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site.config";
import { EASE } from "@/lib/motion";

const metricKeys = ["design", "performance", "conversions"] as const;

export function Hero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");
  const titleWords = t.raw("titleWords") as string[];
  const siteDomain = new URL(siteConfig.url).hostname;

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-24">
      <AnimatedBackground />

      <Container className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: EASE.out }}
            className="mb-8 flex justify-center"
          >
            <Badge>{t("badge")}</Badge>
          </motion.div>

          <h1 className="text-balance text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.05,
                    ease: EASE.out,
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
            <motion.span
              className="inline-block text-gradient-accent"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE.out }}
            >
              {t("titleHighlight")}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE.out }}
            className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted md:text-lg"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: EASE.out }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="#contact" size="lg">
              {tCommon("requestQuote")}
              <ArrowRight size={16} />
            </Button>
            <Button href="#portofoliu" variant="secondary" size="lg">
              {tCommon("viewPortfolio")}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE.out }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] shadow-[0_0_80px_rgba(59,130,246,0.06)]">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="ml-2 font-mono text-[11px] text-muted">
                {siteDomain}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-px bg-white/[0.04] p-px">
              {metricKeys.map((key) => {
                const metric = t.raw(`metrics.${key}`) as {
                  label: string;
                  value: string;
                };
                const colors: Record<(typeof metricKeys)[number], string> = {
                  design: "from-blue-500/20",
                  performance: "from-emerald-500/20",
                  conversions: "from-violet-500/20",
                };

                return (
                  <div
                    key={key}
                    className={`bg-gradient-to-br ${colors[key]} to-transparent p-6 md:p-8`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                      {metric.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
