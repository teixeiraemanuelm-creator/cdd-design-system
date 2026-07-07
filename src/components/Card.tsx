import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "elevated" | "outlined" | "ghost";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: "none" | "sm" | "md" | "lg";
  glow?: "gold" | "steel" | "teal" | false;
}

const variantMap: Record<CardVariant, string> = {
  default:  "bg-surface-2 border border-[var(--border-subtle)]",
  elevated: "bg-surface-3 border border-[var(--border-default)]",
  outlined: "bg-transparent border border-[var(--border-default)]",
  ghost:    "bg-transparent border-none",
};

const paddingMap = { none: "p-0", sm: "p-3", md: "p-4 md:p-5", lg: "p-6 md:p-8" };
const glowMap    = { gold: "shadow-glow-gold", steel: "shadow-glow-steel", teal: "shadow-glow-teal" };

export function Card({ variant = "default", padding = "md", glow = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md transition-all duration-[var(--transition-base)]",
        variantMap[variant],
        paddingMap[padding],
        glow && glowMap[glow],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 flex items-start justify-between gap-4", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold text-text-primary", className)} {...props}>{children}</h3>;
}

export function CardDescription({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-text-secondary mt-1", className)} {...props}>{children}</p>;
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-4 flex items-center gap-3 border-t border-[var(--border-subtle)] pt-4", className)} {...props}>
      {children}
    </div>
  );
}
