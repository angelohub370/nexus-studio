"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function RestaurantReservationPage() {
  const [sent, setSent] = useState(false);
  const t = useTranslations("demos.restaurant.reservation");

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <div className="text-center">
        <p className="font-[family-name:var(--font-playfair)] italic text-[#c4704a]">{t("label")}</p>
        <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-4xl">{t("title")}</h1>
        <p className="mt-4 text-sm text-[#2c1810]/60">
          {t("subtitle")}
        </p>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="mt-10 space-y-5"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-[#2c1810]/50">{t("form.name")}</label>
            <input required className="mt-1 w-full border border-[#e8ddd0] bg-white px-4 py-3 text-sm focus:border-[#c4704a] focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-[#2c1810]/50">{t("form.phone")}</label>
            <input type="tel" required className="mt-1 w-full border border-[#e8ddd0] bg-white px-4 py-3 text-sm focus:border-[#c4704a] focus:outline-none" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-[#2c1810]/50">{t("form.date")}</label>
            <input type="date" required className="mt-1 w-full border border-[#e8ddd0] bg-white px-4 py-3 text-sm focus:border-[#c4704a] focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-[#2c1810]/50">{t("form.time")}</label>
            <select required className="mt-1 w-full border border-[#e8ddd0] bg-white px-4 py-3 text-sm focus:border-[#c4704a] focus:outline-none">
              <option>12:00</option><option>13:00</option><option>14:00</option>
              <option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-[#2c1810]/50">{t("form.guests")}</label>
          <select className="mt-1 w-full border border-[#e8ddd0] bg-white px-4 py-3 text-sm focus:border-[#c4704a] focus:outline-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? t("form.guestSingular") : t("form.guestPlural")}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-[#2c1810]/50">{t("form.notes")}</label>
          <textarea rows={3} placeholder={t("form.notesPlaceholder")} className="mt-1 w-full border border-[#e8ddd0] bg-white px-4 py-3 text-sm focus:border-[#c4704a] focus:outline-none resize-none" />
        </div>
        <button type="submit" className="w-full bg-[#c4704a] py-3.5 font-[family-name:var(--font-playfair)] text-white transition hover:bg-[#b0603a]">
          {sent ? t("form.submitted") : t("form.submit")}
        </button>
      </form>
    </div>
  );
}
