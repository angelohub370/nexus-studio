import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DemoBackBar } from "@/components/demos/shared/DemoBackBar";
import { ClinicaNav } from "@/components/demos/clinica/ClinicaNav";
import { ClinicaFooter } from "@/components/demos/clinica/ClinicaFooter";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "demos.clinica.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ClinicaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <DemoBackBar />
      <ClinicaNav />
      <main>{children}</main>
      <ClinicaFooter />
    </div>
  );
}
