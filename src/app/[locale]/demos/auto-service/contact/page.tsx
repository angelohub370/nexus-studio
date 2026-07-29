"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AutoContactPage() {
  const [sent, setSent] = useState(false);
  const t = useTranslations("demos.auto.contact");

  const infoItems = [
    { icon: MapPin, label: t("info.address"), value: t("info.addressValue") },
    { icon: Phone, label: t("info.phone"), value: t("info.phoneValue") },
    { icon: Mail, label: t("info.email"), value: t("info.emailValue") },
    { icon: Clock, label: t("info.hours"), value: t("info.hoursValue") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold uppercase">{t("title")} <span className="text-orange-500">{t("titleHighlight")}</span></h1>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input required placeholder={t("form.name")} className="border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
            <input type="tel" required placeholder={t("form.phone")} className="border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
          </div>
          <input placeholder={t("form.carModel")} className="w-full border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
          <input placeholder={t("form.year")} className="w-full border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
          <textarea rows={4} placeholder={t("form.issue")} className="w-full resize-none border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
          <button type="submit" className="w-full bg-orange-500 py-3 text-sm font-bold uppercase hover:bg-orange-600">
            {sent ? t("form.submitted") : t("form.submit")}
          </button>
        </form>
        <div className="space-y-6">
          {infoItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4 border border-neutral-800 bg-neutral-900 p-5">
              <Icon size={20} className="shrink-0 text-orange-500" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">{label}</p>
                <p className="mt-1 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
