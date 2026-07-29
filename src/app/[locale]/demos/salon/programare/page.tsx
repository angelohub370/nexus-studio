"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Service = {
  id: string;
  name: string;
  price: string;
};

export default function SalonBookingPage() {
  const [sent, setSent] = useState(false);
  const t = useTranslations("demos.salon.booking");
  const tServices = useTranslations("demos.salon.services");
  const services = tServices.raw("items") as Service[];

  return (
    <div className="mx-auto max-w-lg px-6 py-16">
      <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light">{t("title")}</h1>
      <p className="mt-2 text-[#6b4c5e]/60">{t("subtitle")}</p>

      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 space-y-5">
        <div>
          <label className="text-xs uppercase tracking-wider text-[#6b4c5e]/50">{t("form.fullName")}</label>
          <input required className="mt-1 w-full rounded-lg border border-[#f0dce4] bg-white px-4 py-3 text-sm focus:border-[#e8a0bf] focus:outline-none" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-[#6b4c5e]/50">{t("form.phone")}</label>
          <input type="tel" required className="mt-1 w-full rounded-lg border border-[#f0dce4] bg-white px-4 py-3 text-sm focus:border-[#e8a0bf] focus:outline-none" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-[#6b4c5e]/50">{t("form.service")}</label>
          <select required className="mt-1 w-full rounded-lg border border-[#f0dce4] bg-white px-4 py-3 text-sm focus:border-[#e8a0bf] focus:outline-none">
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.name} — {s.price}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-[#6b4c5e]/50">{t("form.preferredDate")}</label>
            <input type="date" required className="mt-1 w-full rounded-lg border border-[#f0dce4] bg-white px-4 py-3 text-sm focus:border-[#e8a0bf] focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-[#6b4c5e]/50">{t("form.time")}</label>
            <select className="mt-1 w-full rounded-lg border border-[#f0dce4] bg-white px-4 py-3 text-sm focus:border-[#e8a0bf] focus:outline-none">
              {["09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00","18:00"].map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="w-full rounded-full bg-[#e8a0bf] py-3.5 text-sm text-white transition hover:bg-[#d890af]">
          {sent ? t("form.submitted") : t("form.submit")}
        </button>
      </form>
    </div>
  );
}
