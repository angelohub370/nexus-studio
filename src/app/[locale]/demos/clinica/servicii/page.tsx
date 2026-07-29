import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export default async function ClinicaServicesPage() {
  const t = await getTranslations("demos.clinica.services");
  const services = t.raw("items") as Service[];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-2 text-slate-500">{t("subtitle")}</p>
      <div className="mt-10 space-y-4">
        {services.map((s) => (
          <div key={s.id} className="flex items-start justify-between rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
            <div>
              <h3 className="font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{s.description}</p>
            </div>
            <div className="ml-6 shrink-0 text-right">
              <p className="font-semibold text-sky-500">{s.price}</p>
              <Link href="/demos/clinica/programare" className="mt-2 block text-xs text-slate-400 hover:text-sky-500">{t("book")}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
