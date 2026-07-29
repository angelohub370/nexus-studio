import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { fashionAboutImage } from "@/lib/demos/fashion.assets";

type Stat = {
  value: string;
  label: string;
};

export default async function FashionAboutPage() {
  const t = await getTranslations("demos.fashion.about");
  const stats = t.raw("stats") as Stat[];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">{t("label")}</p>
          <h1 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            {t("titleLine1")}<br /><span className="font-semibold">{t("titleLine2")}</span>
          </h1>
          <p className="mt-6 leading-relaxed text-neutral-600">
            {t("paragraph1")}
          </p>
          <p className="mt-4 leading-relaxed text-neutral-600">
            {t("paragraph2")}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-light">{s.value}</p>
                <p className="mt-1 text-xs text-neutral-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={fashionAboutImage}
            alt={t("imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
