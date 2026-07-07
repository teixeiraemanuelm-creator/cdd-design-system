"use client";
import { useEffect, type HTMLAttributes, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children: ReactNode;
  footer?: ReactNode;
}

const sizeMap = {
  sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg",
  xl: "max-w-2xl", full: "max-w-full mx-4",
};

export function Modal({ open, onClose, title, description, size = "md", children, footer }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog" aria-modal="true" aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cdd-concrete/80 backdrop-blur-sm animate-cdd-fade-in"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={cn(
          "relative w-full rounded-lg bg-surface-2 border border-[var(--border-default)]",
          "shadow-cdd-xl animate-cdd-scale-in",
          sizeMap[size],
        )}
      >
        {/* Header */}
        {(title || description) && (
          <div className="border-b border-[var(--border-subtle)] px-6 py-4">
            {title && <h2 id="modal-title" className="text-xl font-semibold text-text-primary">{title}</h2>}
            {description && <p className="mt-1 text-sm text-text-secondary">{description}</p>}
          </div>
        )}
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm p-1 text-text-tertiary hover:text-text-primary hover:bg-surface-4 transition-colors"
          aria-label="Fechar modal"
        >
          <X size={18} />
        </button>
        {/* Body */}
        <div className="px-6 py-5">{children}</div>
        {/* Footer */}
        {footer && (
          <div className="border-t border-[var(--border-subtle)] px-6 py-4 flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
