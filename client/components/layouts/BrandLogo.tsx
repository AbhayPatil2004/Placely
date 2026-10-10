import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: number;
};

export function BrandLogo({ className, size = 28 }: BrandLogoProps) {
  return (
    <Image
      src="/NewLogo.svg"
      alt=""
      width={size}
      height={size}
      priority
      className={cn("h-auto w-auto shrink-0 object-contain", className)}
    />
  );
}
