import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger" | "success";
export type ButtonSize    = "xs" | "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantMap: Record<ButtonVariant, string> = {
  primary:   "bg-cdd-gold text-cdd-concrete hover:bg-cdd-gold-light shadow-glow-gold active:scale-95",
  secondary: "bg-surface-3 text-text-primary hover:bg-surface-4 border border-[var(--border-default)]",
  ghost:     "bg-transparent text-text-secondary hover:bg-surface-3 hover:text-text-primary",
  outline:   "bg-transparent border border-[var(--border-default)] text-text-primary hover:border-cdd-gold hover:text-cdd-gold",
  danger:    "bg-cdd-error text-white hover:bg-cdd-error-light active:scale-95",
  success:   "bg-cdd-success text-white hover:bg-cdd-success-light active:scale-95",
};

const sizeMap: Record<ButtonSize, string> = {
  xs: "h-6 px-2 text-2xs rounded-xs gap-1",
  sm: "h-8 px-3 text-sm rounded-sm gap-1.5",
  md: "h-10 px-4 text-base rounded-md gap-2",
  lg: "h-11 px-5 text-lg rounded-md gap-2",
  xl: "h-13 px-6 text-xl rounded-lg gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, fullWidth, className, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-[var(--transition-fast)]",
        "focus-visible:outline-none focus-visible:shadow-[var(--ring)]",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
        variantMap[variant],
        sizeMap[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="animate-spin shrink-0" size={size === "xs" ? 12 : size === "sm" ? 14 : 16} />}
      {children}
    </button>
  )
);
Button.displayName = "Button";
