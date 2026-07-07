import { type HTMLAttributes, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Info, TriangleAlert, X } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  onClose?: () => void;
  icon?: ReactNode;
}

const config: Record<AlertVariant, { border: string; bg: string; title: string; icon: ReactNode }> = {
  info:    { border: "border-cdd-steel/40",   bg: "bg-cdd-steel/10",   title: "text-cdd-steel-light", icon: <Info size={16} /> },
  success: { border: "border-cdd-success/40", bg: "bg-cdd-success/10", title: "text-cdd-success",     icon: <CheckCircle2 size={16} /> },
  warning: { border: "border-cdd-warning/40", bg: "bg-cdd-warning/10", title: "text-cdd-warning",     icon: <TriangleAlert size={16} /> },
  error:   { border: "border-cdd-error/40",   bg: "bg-cdd-error/10",   title: "text-cdd-error",       icon: <AlertCircle size={16} /> },
};

export function Alert({ variant = "info", title, onClose, icon, className, children, ...props }: AlertProps) {
  const c = config[variant];
  return (
    <div
      role="alert"
      className={cn("flex gap-3 rounded-md border p-4 text-sm animate-cdd-fade-in", c.border, c.bg, className)}
      {...props}
    >
      <span className={cn("mt-0.5 shrink-0", c.title)}>{icon ?? c.icon}</span>
      <div className="flex-1 min-w-0">
        {title && <p className={cn("font-semibold mb-1", c.title)}>{title}</p>}
        <div className="text-text-secondary">{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} className="shrink-0 text-text-tertiary hover:text-text-primary transition-colors" aria-label="Fechar">
          <X size={16} />
        </button>
      )}
    </div>
  );
}
