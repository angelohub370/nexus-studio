"use client";

import { useTranslations } from "next-intl";

export function Marquee() {
  const t = useTranslations("marquee");
  const techStack = t.raw("items") as string[];
  const items = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.01] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-12">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 font-mono text-[13px] font-medium tracking-wide text-muted/60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
