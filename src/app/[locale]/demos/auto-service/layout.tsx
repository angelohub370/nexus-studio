import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DemoBackBar } from "@/components/demos/shared/DemoBackBar";
import { AutoNav } from "@/components/demos/auto/AutoNav";
import { AutoFooter } from "@/components/demos/auto/AutoFooter";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "demos.auto.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AutoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <DemoBackBar />
      <AutoNav />
      <main>{children}</main>
      <AutoFooter />
    </div>
  );
}
