import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  label?: string;
}

export function Divider({ className, label }: DividerProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="text-[13px] font-medium text-muted">{label}</span>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>
    );
  }

  return <div className={cn("h-px w-full bg-white/[0.06]", className)} />;
}
