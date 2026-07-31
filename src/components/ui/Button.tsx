"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer select-none overflow-hidden";

  const variants = {
    primary:
      "bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]",
    secondary:
      "border border-white/[0.1] bg-white/[0.02] text-foreground hover:bg-white/[0.06] hover:border-white/[0.15]",
    ghost:
      "text-muted hover:text-foreground hover:bg-white/[0.04]",
  };

  const sizes = {
    sm: "h-8 px-3.5 text-[13px] gap-1.5",
    md: "h-10 px-5 text-[14px] gap-2",
    lg: "h-12 px-6 text-[15px] gap-2",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const inner = (
    <>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <span className="relative flex items-center gap-inherit">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(classes, "group")}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        classes,
        "group",
        disabled && "pointer-events-none opacity-50"
      )}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {inner}
    </motion.button>
  );
}
