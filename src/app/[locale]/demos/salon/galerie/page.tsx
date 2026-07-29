import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { salonGallery } from "@/lib/demos/salon.assets";

export default async function SalonGalleryPage() {
  const t = await getTranslations("demos.salon.gallery");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light">{t("title")}</h1>
      <p className="mt-2 text-[#6b4c5e]/60">{t("subtitle")}</p>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {salonGallery.map((src, i) => (
          <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
            <Image src={src} alt={t("imageAlt", { number: i + 1 })} width={600} height={400} className="w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
