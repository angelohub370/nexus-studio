import Image from "next/image";
import { Star, Clock, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  restaurantHeroImage,
  restaurantSignatureImage,
} from "@/lib/demos/restaurant.assets";

type Feature = {
  title: string;
  description: string;
};

export default async function RestaurantHomePage() {
  const t = await getTranslations("demos.restaurant");
  const features = t.raw("home.features") as Feature[];

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center text-center">
        <Image
          src={restaurantHeroImage}
          alt={t("brand.nameHighlight")}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2c1810]/60" />
        <div className="relative px-6">
          <p className="font-[family-name:var(--font-playfair)] text-sm italic text-[#c4704a]">
            {t("home.hero.badge")}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-5xl text-[#faf7f2] md:text-7xl">
            {t("home.hero.titleLine1")}<br />
            <span className="italic text-[#c4704a]">{t("home.hero.titleLine2")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[#faf7f2]/80">
            {t("home.hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/demos/restaurant/rezervare" className="bg-[#c4704a] px-8 py-3 font-[family-name:var(--font-playfair)] text-[#faf7f2] transition hover:bg-[#b0603a]">
              {t("home.hero.ctaBook")}
            </Link>
            <Link href="/demos/restaurant/meniu" className="border border-[#faf7f2]/40 px-8 py-3 font-[family-name:var(--font-playfair)] text-[#faf7f2] transition hover:bg-[#faf7f2]/10">
              {t("home.hero.ctaMenu")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {features.map(({ title, description }, i) => {
            const icons = [Star, Clock, MapPin];
            const Icon = icons[i];
            return (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c4704a]/10">
                  <Icon size={22} className="text-[#c4704a]" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl">{title}</h3>
                <p className="mt-2 text-sm text-[#2c1810]/60">{description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#2c1810] py-20 text-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={restaurantSignatureImage} alt={t("home.signature.title")} fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <p className="font-[family-name:var(--font-playfair)] italic text-[#c4704a]">{t("home.signature.label")}</p>
              <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-4xl">{t("home.signature.title")}</h2>
              <p className="mt-4 leading-relaxed text-[#faf7f2]/70">
                {t("home.signature.description")}
              </p>
              <p className="mt-4 font-[family-name:var(--font-playfair)] text-2xl text-[#c4704a]">{t("home.signature.price")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
