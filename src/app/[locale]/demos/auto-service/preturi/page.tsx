import { getTranslations } from "next-intl/server";

type PricingRow = {
  service: string;
  price: string;
  time: string;
};

export default async function AutoPricingPage() {
  const t = await getTranslations("demos.auto.pricing");
  const items = t.raw("items") as PricingRow[];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold uppercase">{t("title")} <span className="text-orange-500">{t("titleHighlight")}</span></h1>
      <p className="mt-2 text-neutral-500">{t("subtitle")}</p>
      <div className="mt-10 overflow-hidden border border-neutral-800">
        <table className="w-full">
          <thead className="bg-neutral-900">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-500">{t("columns.service")}</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-500">{t("columns.price")}</th>
              <th className="hidden px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-500 sm:table-cell">{t("columns.duration")}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, i) => (
              <tr key={row.service} className={i % 2 === 0 ? "bg-neutral-950" : "bg-neutral-900/50"}>
                <td className="px-6 py-4 text-sm">{row.service}</td>
                <td className="px-6 py-4 text-sm font-bold text-orange-500">{row.price}</td>
                <td className="hidden px-6 py-4 text-sm text-neutral-500 sm:table-cell">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-xs text-neutral-600">{t("disclaimer")}</p>
    </div>
  );
}
