import { getTranslations } from "next-intl/server";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
};

export default async function RestaurantMenuPage() {
  const t = await getTranslations("demos.restaurant.menu");
  const tCommon = await getTranslations("common");
  const categories = t.raw("categories") as Record<string, string>;
  const menuItems = t.raw("items") as MenuItem[];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-center">
        <p className="font-[family-name:var(--font-playfair)] italic text-[#c4704a]">{t("label")}</p>
        <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-5xl text-[#2c1810]">{t("title")}</h1>
        <p className="mt-4 text-[#2c1810]/60">{t("subtitle")}</p>
      </div>

      {Object.values(categories).map((category) => (
        <div key={category} className="mt-16">
          <h2 className="border-b border-[#e8ddd0] pb-3 font-[family-name:var(--font-playfair)] text-2xl text-[#c4704a]">
            {category}
          </h2>
          <div className="mt-6 space-y-6">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg">{item.name}</h3>
                    <p className="mt-1 text-sm text-[#2c1810]/60">{item.description}</p>
                  </div>
                  <p className="shrink-0 font-[family-name:var(--font-playfair)] text-lg text-[#c4704a]">
                    {item.price} {tCommon("currency")}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
