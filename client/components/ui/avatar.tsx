"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AvatarProps = {
  src?: string | null;
  alt: string;
  fallback: string;
  className?: string;
};

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <span
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-[#2a2a2a] text-lg font-semibold text-bright-gray",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      {src && !imageFailed ? (
        <Image
          src={src}
          alt=""
          width={96}
          height={96}
          unoptimized
          className="size-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span aria-hidden="true">{fallback}</span>
      )}
    </span>
  );
}
