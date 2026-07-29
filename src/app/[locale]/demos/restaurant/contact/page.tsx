import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function RestaurantContactPage() {
  const t = await getTranslations("demos.restaurant.contact");

  const items = [
    { icon: MapPin, label: t("labels.address"), value: t("values.address") },
    { icon: Phone, label: t("labels.phone"), value: t("values.phone") },
    { icon: Mail, label: t("labels.email"), value: t("values.email") },
    { icon: Clock, label: t("labels.hours"), value: t("values.hours") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl">{t("title")}</h1>
        <p className="mt-4 text-[#2c1810]/60">{t("subtitle")}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="border border-[#e8ddd0] bg-white p-6 text-center">
            <Icon size={22} className="mx-auto text-[#c4704a]" />
            <p className="mt-4 text-xs uppercase tracking-wider text-[#2c1810]/50">{label}</p>
            <p className="mt-2 font-[family-name:var(--font-playfair)]">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden border border-[#e8ddd0]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.844438807793!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMTAuMCJF!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          title={t("mapTitle")}
        />
      </div>
    </div>
  );
}
