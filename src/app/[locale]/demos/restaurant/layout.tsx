import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { DemoBackBar } from "@/components/demos/shared/DemoBackBar";
import { RestaurantNav } from "@/components/demos/restaurant/RestaurantNav";
import { RestaurantFooter } from "@/components/demos/restaurant/RestaurantFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "demos.restaurant.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${lato.variable} min-h-screen bg-[#faf7f2] font-[family-name:var(--font-lato)] text-[#2c1810]`}>
      <DemoBackBar />
      <RestaurantNav />
      <main>{children}</main>
      <RestaurantFooter />
    </div>
  );
}
