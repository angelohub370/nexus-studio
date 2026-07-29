"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fashionProductImages } from "@/lib/demos/fashion.assets";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  tag?: string;
};

export default function FashionProductsPage() {
  const t = useTranslations("demos.fashion.products");
  const tCommon = useTranslations("common");
  const categories = t.raw("categories") as Record<string, string>;
  const categoryKeys = Object.keys(categories);
  const [activeKey, setActiveKey] = useState("all");

  const products = (t.raw("items") as Product[]).map((product) => ({
    ...product,
    image: fashionProductImages[product.id],
  }));

  const activeCategory = categories[activeKey];
  const filtered =
    activeKey === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-light">{t("title")}</h1>
      <p className="mt-2 text-neutral-500">{t("count", { count: filtered.length })}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categoryKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActiveKey(key)}
            className={`px-4 py-2 text-xs uppercase tracking-wider transition ${
              activeKey === key
                ? "bg-black text-white"
                : "border border-neutral-200 text-neutral-500 hover:border-black hover:text-black"
            }`}
          >
            {categories[key]}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
              <Image
                src={product.image}
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
              <button className="absolute bottom-3 left-3 right-3 bg-white py-2.5 text-xs uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100">
                {t("addToCart")}
              </button>
            </div>
            <p className="mt-3 text-xs text-neutral-400">{product.category}</p>
            <p className="text-sm font-medium">{product.name}</p>
            <p className="mt-1 text-sm">{product.price} {tCommon("currency")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
