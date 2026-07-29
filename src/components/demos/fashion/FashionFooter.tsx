import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function FashionFooter() {
  const t = await getTranslations("demos.fashion");
  const shopLinks = t.raw("footer.shop.links") as string[];

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="text-lg font-light tracking-[0.3em] uppercase">
            {t("brand.name")}<span className="font-semibold">{t("brand.nameHighlight")}</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500">
            {t("footer.description")}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{t("footer.shop.title")}</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            {shopLinks.map((link) => (
              <li key={link}>
                <Link href="/demos/fashion-store/produse" className="hover:text-black">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{t("footer.help.title")}</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            {(t.raw("footer.help.links") as string[]).map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{t("footer.contact.title")}</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li>{t("footer.contact.email")}</li>
            <li>{t("footer.contact.phone")}</li>
            <li>{t("footer.contact.address")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-400">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
