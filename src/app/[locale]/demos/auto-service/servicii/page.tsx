import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
};

export default async function AutoServicesPage() {
  const t = await getTranslations("demos.auto.services");
  const services = t.raw("items") as Service[];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold uppercase">{t("title")} <span className="text-orange-500">{t("titleHighlight")}</span></h1>
      <p className="mt-2 text-neutral-500">{t("subtitle")}</p>
      <div className="mt-10 space-y-4">
        {services.map((s) => (
          <div key={s.id} className="flex items-center justify-between border border-neutral-800 bg-neutral-900 p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">{s.icon}</span>
              <div>
                <h3 className="font-bold uppercase">{s.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{s.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-orange-500">{s.price}</p>
              <Link href="/demos/auto-service/contact" className="mt-2 block text-xs text-neutral-500 hover:text-orange-500">{t("book")}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
