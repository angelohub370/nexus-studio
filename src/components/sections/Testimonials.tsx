"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialAvatars } from "@/lib/testimonial.assets";
import { EASE } from "@/lib/motion";

type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  content: string;
};

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as TestimonialItem[];
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = items[current];
  const avatar = testimonialAvatars[current];

  return (
    <Section className="border-t border-white/[0.04]">
      <SectionHeading
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-3xl">
        <div className="relative min-h-[220px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: EASE.out }}
              className="text-center"
            >
              <p className="text-[clamp(1.125rem,2.5vw,1.375rem)] font-medium leading-relaxed tracking-[-0.01em] text-foreground/90">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <footer className="mt-8 flex items-center justify-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src={avatar}
                    alt={testimonial.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[14px] font-medium">{testimonial.name}</p>
                  <p className="text-[13px] text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setCurrent(i)}
              className="group p-1"
              aria-label={item.name}
            >
              <span
                className={`block h-1 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-8 bg-foreground"
                    : "w-4 bg-white/15 group-hover:bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
