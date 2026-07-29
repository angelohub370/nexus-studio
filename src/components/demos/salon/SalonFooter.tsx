import { getTranslations } from "next-intl/server";

export async function SalonFooter() {
  const t = await getTranslations("demos.salon");

  return (
    <footer className="border-t border-[#f0dce4] bg-[#6b4c5e] py-12 text-[#fdf2f4]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-light">
              {t("brand.name")} <span className="font-semibold italic">{t("brand.nameHighlight")}</span>
            </p>
            <p className="mt-3 text-sm text-[#fdf2f4]/60">{t("footer.description")}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#fdf2f4]/40">{t("footer.hours.title")}</p>
            <p className="mt-3 text-sm text-[#fdf2f4]/70">{t("footer.hours.value")}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#fdf2f4]/40">{t("footer.contact.title")}</p>
            <p className="mt-3 text-sm text-[#fdf2f4]/70">{t("footer.contact.value")}</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-[#fdf2f4]/30">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
