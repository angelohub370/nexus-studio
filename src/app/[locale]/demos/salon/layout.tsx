import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { DemoBackBar } from "@/components/demos/shared/DemoBackBar";
import { SalonNav } from "@/components/demos/salon/SalonNav";
import { SalonFooter } from "@/components/demos/salon/SalonFooter";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "demos.salon.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function SalonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} min-h-screen bg-[#fdf2f4] text-[#6b4c5e]`}>
      <DemoBackBar />
      <SalonNav />
      <main>{children}</main>
      <SalonFooter />
    </div>
  );
}
