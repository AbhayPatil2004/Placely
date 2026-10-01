import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-buttons border border-graphite bg-abyss px-3 text-sm text-bright-gray outline-none placeholder:text-muted-gray focus-visible:ring-2 focus-visible:ring-lavender/50 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
