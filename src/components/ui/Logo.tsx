import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export function Logo({ className, showText = true, size = 32 }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={size}
        height={size}
        className="shrink-0"
        priority
      />
      {showText && (
        <span className="text-[15px] font-medium tracking-[-0.01em]">
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
