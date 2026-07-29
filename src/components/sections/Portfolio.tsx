"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  portfolioAssets,
  type PortfolioAsset,
} from "@/lib/portfolio.assets";
import { EASE } from "@/lib/motion";

export function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <Section id="portofoliu" className="border-t border-white/[0.04]">
      <SectionHeading
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {portfolioAssets.map((item, i) => (
          <PortfolioCard
            key={item.id}
            item={item}
            index={i}
            featured={i === 0}
          />
        ))}
      </div>
    </Section>
  );
}

function PortfolioCard({
  item,
  index,
  featured = false,
}: {
  item: PortfolioAsset;
  index: number;
  featured?: boolean;
}) {
  const t = useTranslations("portfolio");
  const title = t(`items.${item.id}.title`);
  const category = t(`items.${item.id}.category`);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.02);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.02);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: EASE.out }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative block overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <Link
        href={item.url}
        className="block"
        aria-label={`${t("viewProject")}: ${title}`}
      >
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[21/9]" : "aspect-[4/3]"
          }`}
        >
          <motion.div
            style={{ x: springX, y: springY, scale: 1.08 }}
            className="absolute inset-[-4%]"
          >
            <Image
              src={item.image}
              alt={title}
              fill
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 100vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
            <div>
              <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-white/50">
                {category}
              </p>
              <h3 className="text-lg font-medium tracking-[-0.01em] text-white md:text-xl">
                {title}
              </h3>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
