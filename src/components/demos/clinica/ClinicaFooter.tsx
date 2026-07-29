import { getTranslations } from "next-intl/server";

export async function ClinicaFooter() {
  const t = await getTranslations("demos.clinica");

  return (
    <footer className="border-t border-sky-100 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-slate-800">
              {t("brand.name")}<span className="text-sky-500">{t("brand.nameHighlight")}</span>
            </p>
            <p className="mt-3 text-sm text-slate-500">{t("footer.description")}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t("footer.hours.title")}</p>
            <p className="mt-3 text-sm text-slate-600">{t("footer.hours.value")}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t("footer.contact.title")}</p>
            <p className="mt-3 text-sm text-slate-600">{t("footer.contact.value")}</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-400">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
