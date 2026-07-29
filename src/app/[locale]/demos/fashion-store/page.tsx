import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  fashionHeroImage,
  fashionProductImages,
} from "@/lib/demos/fashion.assets";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  tag?: string;
};

export default async function FashionHomePage() {
  const t = await getTranslations("demos.fashion");
  const tCommon = await getTranslations("common");
  const products = t.raw("products.items") as Product[];
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="relative flex min-h-[85vh] items-center">
        <Image
          src={fashionHeroImage}
          alt={t("home.hero.badge")}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {t("home.hero.badge")}
          </p>
          <h1 className="mt-4 max-w-xl text-5xl font-light leading-tight text-white md:text-7xl">
            {t("home.hero.titleLine1")}<br />
            <span className="font-semibold">{t("home.hero.titleLine2")}</span>
          </h1>
          <p className="mt-6 max-w-md text-white/80">
            {t("home.hero.subtitle")}
          </p>
          <Link
            href="/demos/fashion-store/produse"
            className="mt-8 inline-flex items-center gap-2 bg-white px-8 py-3 text-xs uppercase tracking-[0.2em] text-black transition hover:bg-neutral-100"
          >
            {t("home.hero.cta")}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">{t("home.featured.label")}</p>
            <h2 className="mt-2 text-3xl font-light">{t("home.featured.title")}</h2>
          </div>
          <Link href="/demos/fashion-store/produse" className="hidden text-sm text-neutral-500 hover:text-black md:block">
            {t("home.featured.viewAll")}
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((product) => (
            <Link key={product.id} href="/demos/fashion-store/produse" className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <Image
                  src={fashionProductImages[product.id]}
                  alt={product.name}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute left-3 top-3 bg-black px-2 py-1 text-[10px] uppercase tracking-wider text-white">
                    {product.tag}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-neutral-500">{product.category}</p>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="mt-1 text-sm">{product.price} {tCommon("currency")}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{t("home.newsletter.label")}</p>
          <h2 className="mt-4 text-3xl font-light">{t("home.newsletter.title")}</h2>
          <div className="mx-auto mt-8 flex max-w-md gap-2">
            <input
              type="email"
              placeholder={t("home.newsletter.placeholder")}
              className="flex-1 border border-neutral-700 bg-transparent px-4 py-3 text-sm placeholder:text-neutral-600 focus:border-white focus:outline-none"
            />
            <button className="bg-white px-6 py-3 text-xs uppercase tracking-wider text-black">
              {t("home.newsletter.cta")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
