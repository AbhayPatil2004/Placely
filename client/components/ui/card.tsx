import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
};

export function Card({ as: Component = "div", className, ...props }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-xl bg-surface shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]",
        className,
      )}
      {...props}
    />
  );
}
