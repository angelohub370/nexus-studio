"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
  highlight?: string;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "span",
  highlight,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline", className)}>
      {words.map((word, i) => {
        const isHighlight = highlight && word.includes(highlight.replace(".", ""));
        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className={cn("inline-block", isHighlight && "text-accent")}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.04,
                ease: EASE.out,
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
