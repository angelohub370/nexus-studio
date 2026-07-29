import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="2"
          y="2"
          width="8"
          height="8"
          rx="1.5"
          className="fill-foreground"
        />
        <rect
          x="10"
          y="10"
          width="8"
          height="8"
          rx="1.5"
          className="fill-accent"
        />
      </svg>
      {showText && (
        <span className="text-[15px] font-medium tracking-[-0.01em]">
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
