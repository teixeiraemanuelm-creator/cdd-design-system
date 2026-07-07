import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?:  string;
  error?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, leadingIcon, trailingIcon, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-text-secondary">
            {label}
            {props.required && <span className="text-cdd-error ml-0.5">*</span>}
          </label>
        )}
        <div className="relative">
          {leadingIcon && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
              {leadingIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-sm border bg-surface-3 px-3 py-2 text-base text-text-primary",
              "placeholder:text-text-disabled transition-colors duration-[var(--transition-fast)]",
              "border-[var(--border-default)] hover:border-[var(--border-strong)]",
              "focus:outline-none focus:border-cdd-gold focus:shadow-[var(--ring)]",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              error && "border-cdd-error focus:border-cdd-error focus:shadow-[0_0_0_2px_rgba(224,49,49,0.3)]",
              leadingIcon  && "pl-9",
              trailingIcon && "pr-9",
              className,
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {trailingIcon && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary">
              {trailingIcon}
            </span>
          )}
        </div>
        {error && <p id={`${inputId}-error`} className="text-xs text-cdd-error" role="alert">{error}</p>}
        {hint && !error && <p id={`${inputId}-hint`} className="text-xs text-text-tertiary">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
