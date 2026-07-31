"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  featuredProjectAssets,
  type FeaturedProjectAsset,
} from "@/lib/featured-projects.assets";
import { EASE } from "@/lib/motion";

export function FeaturedProjects() {
  const t = useTranslations("featuredProjects");

  return (
    <Section id="proiecte" className="border-t border-white/[0.04]">
      <SectionHeading
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {featuredProjectAssets.map((item, i) => (
          <ProjectCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  item,
  index,
}: {
  item: FeaturedProjectAsset;
  index: number;
}) {
  const t = useTranslations("featuredProjects");
  const title = t(`items.${item.id}.title`);
  const category = t(`items.${item.id}.category`);
  const description = t(`items.${item.id}.description`);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 22 });
  const springY = useSpring(y, { stiffness: 200, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.015);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.015);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: EASE.out }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_12px_48px_rgba(0,0,0,0.28)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          style={{ x: springX, y: springY, scale: 1.06 }}
          className="absolute inset-[-3%]"
        >
          <Image
            src={item.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <p className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm">
          {category}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg font-semibold tracking-[-0.02em] md:text-xl">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <Button href={item.url} variant="secondary" size="sm">
            {t("viewProject")}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
