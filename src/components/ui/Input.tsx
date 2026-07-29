import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[13px] font-medium text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted/40 transition-all duration-300",
          "focus:border-white/20 focus:bg-white/[0.04] focus:outline-none focus:ring-0",
          className
        )}
        {...props}
      />
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, className, id, ...props }: TextareaProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[13px] font-medium text-muted"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={cn(
          "w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted/40 transition-all duration-300",
          "focus:border-white/20 focus:bg-white/[0.04] focus:outline-none focus:ring-0",
          className
        )}
        {...props}
      />
    </div>
  );
}
