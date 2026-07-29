"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Service = {
  id: string;
  name: string;
};

export default function ClinicaBookingPage() {
  const [sent, setSent] = useState(false);
  const t = useTranslations("demos.clinica.booking");
  const tServices = useTranslations("demos.clinica.services");
  const services = tServices.raw("items") as Service[];

  return (
    <div className="mx-auto max-w-lg px-6 py-16">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-2 text-slate-500">{t("subtitle")}</p>

      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500">{t("form.fullName")}</label>
          <input required className="mt-1 w-full rounded-lg border border-sky-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">{t("form.phone")}</label>
          <input type="tel" required className="mt-1 w-full rounded-lg border border-sky-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">{t("form.email")}</label>
          <input type="email" className="mt-1 w-full rounded-lg border border-sky-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">{t("form.service")}</label>
          <select className="mt-1 w-full rounded-lg border border-sky-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none">
            <option>{t("form.freeConsultation")}</option>
            {services.map((s) => (
              <option key={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-slate-500">{t("form.date")}</label>
            <input type="date" required className="mt-1 w-full rounded-lg border border-sky-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none" />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500">{t("form.time")}</label>
            <select className="mt-1 w-full rounded-lg border border-sky-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none">
              {["08:00","09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00","18:00"].map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        <textarea rows={3} placeholder={t("form.notes")} className="w-full resize-none rounded-lg border border-sky-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none" />
        <button type="submit" className="w-full rounded-lg bg-sky-500 py-3.5 text-sm font-medium text-white hover:bg-sky-600">
          {sent ? t("form.submitted") : t("form.submit")}
        </button>
      </form>
    </div>
  );
}
