import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AuthFormFieldProps = {
  id: string;
  label: string;
  error?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function AuthFormField({
  id,
  label,
  error,
  description,
  children,
  className,
}: AuthFormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-bright-gray">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-error-red" role="alert">
          {error}
        </p>
      ) : description ? (
        <p id={`${id}-description`} className="text-xs text-muted-gray">
          {description}
        </p>
      ) : null}
    </div>
  );
}
