import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export async function DemoBackBar() {
  const t = await getTranslations("demos.shared");

  return (
    <div className="sticky top-0 z-[100] border-b border-black/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link
          href="/#portofoliu"
          className="flex items-center gap-1.5 text-[12px] font-medium text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          {t("backToPortfolio")}
        </Link>
        <span className="hidden text-[11px] text-white/40 sm:block">
          {t("demoProject")} · {siteConfig.name}
        </span>
      </div>
    </div>
  );
}
