"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PasswordFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export function PasswordField({
  className,
  error,
  ...props
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        aria-invalid={error || undefined}
        className={cn(
          "h-10 w-full rounded-inputs border border-graphite bg-surface px-3 pr-11 text-sm text-bright-gray outline-none transition-colors placeholder:text-muted-gray focus:border-white focus:ring-2 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-60",
          error && "border-error-red focus:border-error-red focus:ring-error-red/20",
          className,
        )}
        type={visible ? "text" : "password"}
      />
      <Button
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-1 top-1 text-muted-gray hover:text-bright-gray"
        onClick={() => setVisible((current) => !current)}
        size="icon-sm"
        type="button"
        variant="ghost"
      >
        {visible ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
      </Button>
    </div>
  );
}
