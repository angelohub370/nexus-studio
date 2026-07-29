"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-20 md:mb-24",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {label && (
        <p className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.15em] text-muted">
          {label}
        </p>
      )}
      <h2 className="text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[17px] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}
