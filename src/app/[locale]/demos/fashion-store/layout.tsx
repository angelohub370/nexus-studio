import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DemoBackBar } from "@/components/demos/shared/DemoBackBar";
import { FashionNav } from "@/components/demos/fashion/FashionNav";
import { FashionFooter } from "@/components/demos/fashion/FashionFooter";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "demos.fashion.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <DemoBackBar />
      <FashionNav />
      <main>{children}</main>
      <FashionFooter />
    </div>
  );
}
