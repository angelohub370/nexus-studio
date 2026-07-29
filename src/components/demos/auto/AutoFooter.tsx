import { getTranslations } from "next-intl/server";

export async function AutoFooter() {
  const t = await getTranslations("demos.auto");

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold uppercase text-white">
              {t("brand.name")}<span className="text-orange-500">{t("brand.nameHighlight")}</span>
            </p>
            <p className="mt-3 text-sm text-neutral-500">{t("footer.description")}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">{t("footer.hours.title")}</p>
            <p className="mt-3 text-sm text-neutral-400">{t("footer.hours.value")}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">{t("footer.contact.title")}</p>
            <p className="mt-3 text-sm text-neutral-400">{t("footer.contact.value")}</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-neutral-700">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
