import Image from "next/image";
import { Shield, Clock, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { autoHeroImage } from "@/lib/demos/auto.assets";

type Feature = {
  title: string;
  description: string;
};

type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
};

export default async function AutoHomePage() {
  const t = await getTranslations("demos.auto");
  const features = t.raw("home.features") as Feature[];
  const services = t.raw("services.items") as Service[];

  return (
    <>
      <section className="relative flex min-h-[85vh] items-center">
        <Image src={autoHeroImage} alt={t("brand.nameHighlight")} fill priority className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">{t("home.hero.badge")}</p>
          <h1 className="mt-4 max-w-2xl text-5xl font-bold uppercase leading-tight md:text-6xl">
            {t("home.hero.titleLine1")}<br />{t("home.hero.titleLine2")} <span className="text-orange-500">{t("home.hero.titleHighlight")}</span>
          </h1>
          <p className="mt-6 max-w-lg text-neutral-400">{t("home.hero.subtitle")}</p>
          <div className="mt-8 flex gap-4">
            <Link href="/demos/auto-service/contact" className="bg-orange-500 px-6 py-3 text-sm font-bold uppercase hover:bg-orange-600">{t("home.hero.ctaBook")}</Link>
            <Link href="/demos/auto-service/preturi" className="border border-neutral-700 px-6 py-3 text-sm font-bold uppercase text-neutral-300 hover:border-orange-500 hover:text-orange-500">{t("home.hero.ctaPricing")}</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {features.map(({ title, description }, i) => {
            const icons = [Shield, Clock, Wrench];
            const Icon = icons[i];
            return (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-orange-500/10">
                  <Icon size={22} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold uppercase">{title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold uppercase">{t("home.servicesTitle")} <span className="text-orange-500">{t("home.servicesHighlight")}</span></h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="border border-neutral-800 bg-neutral-900 p-6 transition hover:border-orange-500/50">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="mt-4 font-bold uppercase">{s.name}</h3>
              <p className="mt-2 text-sm text-neutral-500">{s.description}</p>
              <p className="mt-4 text-sm font-bold text-orange-500">{s.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
