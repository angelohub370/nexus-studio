import Image from "next/image";
import { Shield, Microscope, Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { clinicaHeroImage } from "@/lib/demos/clinica.assets";

type Feature = {
  title: string;
  description: string;
};

type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export default async function ClinicaHomePage() {
  const t = await getTranslations("demos.clinica");
  const features = t.raw("home.features") as Feature[];
  const services = (t.raw("services.items") as Service[]).slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 to-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600">{t("home.badge")}</span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
              {t("home.titleLine1")}<br /><span className="text-sky-500">{t("home.titleLine2")}</span>
            </h1>
            <p className="mt-6 leading-relaxed text-slate-500">
              {t("home.subtitle")}
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/demos/clinica/programare" className="rounded-lg bg-sky-500 px-6 py-3 text-sm font-medium text-white hover:bg-sky-600">{t("home.ctaBook")}</Link>
              <Link href="/demos/clinica/servicii" className="rounded-lg border border-sky-200 px-6 py-3 text-sm font-medium text-sky-600 hover:bg-sky-50">{t("home.ctaServices")}</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-sky-100">
            <Image src={clinicaHeroImage} alt={t("home.imageAlt")} fill className="object-cover" sizes="50vw" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ title, description }, i) => {
            const icons = [Shield, Microscope, Heart];
            const Icon = icons[i];
            return (
              <div key={title} className="rounded-xl border border-sky-100 bg-sky-50/50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500 text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-500">{description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center">{t("home.servicesTitle")}</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.id} className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.description}</p>
                <p className="mt-4 text-sm font-semibold text-sky-500">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/demos/clinica/servicii" className="text-sm font-medium text-sky-500 hover:underline">{t("home.viewAll")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
