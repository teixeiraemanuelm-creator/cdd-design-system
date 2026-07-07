import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "error" | "info" | "steel" | "teal";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "sm" | "md";
  dot?: boolean;
}

const variantMap: Record<BadgeVariant, string> = {
  primary:   "bg-cdd-gold/15 text-cdd-gold border-cdd-gold/30",
  secondary: "bg-surface-4 text-text-secondary border-[var(--border-default)]",
  success:   "bg-cdd-success/12 text-cdd-success border-cdd-success/25",
  warning:   "bg-cdd-warning/12 text-cdd-warning border-cdd-warning/25",
  error:     "bg-cdd-error/12 text-cdd-error border-cdd-error/25",
  info:      "bg-cdd-steel/15 text-cdd-steel-light border-cdd-steel/30",
  steel:     "bg-cdd-steel/15 text-cdd-steel-light border-cdd-steel/30",
  teal:      "bg-cdd-teal/12 text-cdd-teal border-cdd-teal/25",
};

const dotMap: Record<BadgeVariant, string> = {
  primary: "bg-cdd-gold", secondary: "bg-text-secondary",
  success: "bg-cdd-success", warning: "bg-cdd-warning",
  error: "bg-cdd-error", info: "bg-cdd-steel-light",
  steel: "bg-cdd-steel-light", teal: "bg-cdd-teal",
};

export function Badge({ variant = "secondary", size = "md", dot, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        size === "sm" ? "px-1.5 py-0.5 text-2xs" : "px-2 py-0.5 text-xs",
        variantMap[variant],
        className,
      )}
      {...props}
    >
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotMap[variant])} />}
      {children}
    </span>
  );
}
