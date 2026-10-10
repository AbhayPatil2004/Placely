import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[#8a5cf5]/[0.15] px-2 py-0.5 text-xs leading-5 text-lavender",
        className,
      )}
      {...props}
    />
  );
}
