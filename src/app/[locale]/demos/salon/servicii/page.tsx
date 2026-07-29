import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
};

export default async function SalonServicesPage() {
  const t = await getTranslations("demos.salon.services");
  const categories = t.raw("categories") as Record<string, string>;
  const services = t.raw("items") as Service[];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light">{t("title")}</h1>
      <p className="mt-2 text-[#6b4c5e]/60">{t("subtitle")}</p>

      {Object.values(categories).map((cat) => (
        <div key={cat} className="mt-12">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8a0bf]">{cat}</h2>
          <div className="mt-4 space-y-3">
            {services.filter((s) => s.category === cat).map((s) => (
              <div key={s.id} className="flex items-center justify-between rounded-xl border border-[#f0dce4] bg-white p-5">
                <div>
                  <h3 className="font-medium">{s.name}</h3>
                  <p className="mt-1 text-sm text-[#6b4c5e]/60">{s.description}</p>
                  <p className="mt-1 text-xs text-[#6b4c5e]/40">{s.duration}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#e8a0bf]">{s.price}</p>
                  <Link href="/demos/salon/programare" className="mt-2 block text-xs text-[#6b4c5e]/50 hover:text-[#e8a0bf]">{t("book")}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
