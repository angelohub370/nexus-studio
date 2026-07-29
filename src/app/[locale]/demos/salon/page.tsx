import Image from "next/image";
import { Sparkles, Heart, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { salonHeroImage } from "@/lib/demos/salon.assets";

type Feature = {
  title: string;
  description: string;
};

type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
};

export default async function SalonHomePage() {
  const t = await getTranslations("demos.salon");
  const features = t.raw("home.features") as Feature[];
  const services = (t.raw("services.items") as Service[]).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[85vh] items-center">
        <Image src={salonHeroImage} alt={t("brand.nameHighlight")} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#6b4c5e]/50" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#e8a0bf]">{t("home.hero.badge")}</p>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-light text-white md:text-7xl">
            {t("home.hero.titleLine1")}<br /><span className="font-semibold italic">{t("home.hero.titleLine2")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-white/80">{t("home.hero.subtitle")}</p>
          <Link href="/demos/salon/programare" className="mt-8 inline-block rounded-full bg-[#e8a0bf] px-8 py-3 text-sm text-white transition hover:bg-[#d890af]">
            {t("home.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map(({ title, description }, i) => {
            const icons = [Sparkles, Heart, Star];
            const Icon = icons[i];
            return (
              <div key={title} className="rounded-2xl border border-[#f0dce4] bg-white p-8 text-center">
                <Icon size={24} className="mx-auto text-[#e8a0bf]" />
                <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-[#6b4c5e]/60">{description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-[family-name:var(--font-cormorant)] text-4xl">{t("home.popular.title")}</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.id} className="rounded-xl border border-[#f0dce4] p-6">
                <p className="text-xs uppercase tracking-wider text-[#e8a0bf]">{s.category}</p>
                <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-xl">{s.name}</h3>
                <p className="mt-2 text-sm text-[#6b4c5e]/60">{s.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-medium">{s.price}</span>
                  <span className="text-[#6b4c5e]/40">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/demos/salon/servicii" className="text-sm text-[#e8a0bf] hover:underline">{t("home.popular.viewAll")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
