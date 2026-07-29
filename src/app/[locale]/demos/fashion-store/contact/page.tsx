"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FashionContactPage() {
  const [sent, setSent] = useState(false);
  const t = useTranslations("demos.fashion.contact");

  const infoItems = [
    { icon: MapPin, label: t("info.showroom"), value: t("info.showroomValue") },
    { icon: Phone, label: t("info.phone"), value: t("info.phoneValue") },
    { icon: Mail, label: t("info.email"), value: t("info.emailValue") },
    { icon: Clock, label: t("info.hours"), value: t("info.hoursValue") },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-light">{t("title")}</h1>
      <p className="mt-2 text-neutral-500">{t("subtitle")}</p>

      <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-5"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400">{t("form.firstName")}</label>
              <input required className="mt-2 w-full border-b border-neutral-200 py-2 text-sm focus:border-black focus:outline-none" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400">{t("form.lastName")}</label>
              <input required className="mt-2 w-full border-b border-neutral-200 py-2 text-sm focus:border-black focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-neutral-400">{t("form.email")}</label>
            <input type="email" required className="mt-2 w-full border-b border-neutral-200 py-2 text-sm focus:border-black focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-neutral-400">{t("form.message")}</label>
            <textarea rows={4} required className="mt-2 w-full border-b border-neutral-200 py-2 text-sm focus:border-black focus:outline-none resize-none" />
          </div>
          <button type="submit" className="bg-black px-8 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-neutral-800">
            {sent ? t("form.submitted") : t("form.submit")}
          </button>
        </form>

        <div className="space-y-8">
          {infoItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <Icon size={18} className="mt-0.5 text-neutral-400" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400">{label}</p>
                <p className="mt-1 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
