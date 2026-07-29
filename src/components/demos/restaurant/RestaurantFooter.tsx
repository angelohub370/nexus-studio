import { getTranslations } from "next-intl/server";

export async function RestaurantFooter() {
  const t = await getTranslations("demos.restaurant");
  const hours = t.raw("footer.hours.items") as string[];

  return (
    <footer className="border-t border-[#e8ddd0] bg-[#2c1810] text-[#faf7f2]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-playfair)] text-xl">
            {t("brand.name")} <span className="italic text-[#c4704a]">{t("brand.nameHighlight")}</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#faf7f2]/60">
            {t("footer.description")}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-[#faf7f2]/40">{t("footer.hours.title")}</p>
          <ul className="mt-4 space-y-1 text-sm text-[#faf7f2]/70">
            {hours.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-[#faf7f2]/40">{t("footer.contact.title")}</p>
          <ul className="mt-4 space-y-1 text-sm text-[#faf7f2]/70">
            <li>{t("footer.contact.address")}</li>
            <li>{t("footer.contact.phone")}</li>
            <li>{t("footer.contact.email")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#faf7f2]/10 py-6 text-center text-xs text-[#faf7f2]/30">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
