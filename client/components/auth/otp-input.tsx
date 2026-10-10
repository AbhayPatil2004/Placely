"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
};

export function OtpInput({
  value,
  onChange,
  error,
  disabled,
}: OtpInputProps) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const digits = value.padEnd(6, " ").slice(0, 6).split("");

  const updateDigit = (index: number, nextDigit: string) => {
    const next = digits.map((digit) => (digit === " " ? "" : digit));
    next[index] = nextDigit;
    onChange(next.join(""));
    if (nextDigit && index < 5) refs.current[index + 1]?.focus();
  };

  return (
    <div className="flex gap-2 sm:gap-3" role="group" aria-label="6-digit OTP">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            refs.current[index] = element;
          }}
          aria-label={`OTP digit ${index + 1}`}
          aria-invalid={error || undefined}
          autoComplete={index === 0 ? "one-time-code" : "off"}
          className={cn(
            "h-12 min-w-0 flex-1 rounded-inputs border border-graphite bg-surface text-center text-lg font-semibold text-bright-gray outline-none focus:border-white focus:ring-2 focus:ring-white/20 disabled:opacity-60",
            error && "border-error-red focus:border-error-red",
          )}
          disabled={disabled}
          inputMode="numeric"
          maxLength={1}
          onChange={(event) => {
            const nextDigit = event.target.value.replace(/\D/g, "").slice(-1);
            updateDigit(index, nextDigit);
          }}
          onKeyDown={(event) => {
            if (event.key === "Backspace" && !digits[index] && index > 0) {
              refs.current[index - 1]?.focus();
            }
          }}
          onPaste={(event) => {
            const pasted = event.clipboardData
              .getData("text")
              .replace(/\D/g, "")
              .slice(0, 6);
            if (!pasted) return;
            event.preventDefault();
            onChange(pasted);
            refs.current[Math.min(pasted.length, 5)]?.focus();
          }}
          type="text"
          value={digit.trim()}
        />
      ))}
    </div>
  );
}
