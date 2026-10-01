"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthHeader } from "@/components/auth/auth-header";
import { OtpInput } from "@/components/auth/otp-input";
import { Button } from "@/components/ui/button";
import { otpSchema, type OtpValues } from "@/lib/auth";
import { ApiError } from "@/lib/api/client";
import { forgotPassword } from "@/lib/api/auth";
import { useAuth } from "@/lib/auth-context";

export function VerifyOtpForm() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(600);
  const [resending, setResending] = useState(false);
  const [resendError, setResendError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { resetEmail, setResetOtp } = useAuth();
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });
  const otp = useWatch({ control, name: "otp" });

  useEffect(() => {
    if (seconds === 0) {
      return;
    }
    const timer = window.setInterval(() => setSeconds((current) => current - 1), 1000);
    return () => window.clearInterval(timer);
  }, [seconds]);
  const isExpired = seconds === 0;

  const onSubmit = () => {
    setErrorMessage("");
    if (!resetEmail) {
      setErrorMessage("Your reset session is missing. Request a new code.");
      return;
    }
    setResetOtp(otp);
    router.push("/reset-password");
  };

  const resend = async () => {
    if (!resetEmail || resending) return;

    setResending(true);
    setResendError("");
    try {
      await forgotPassword({ email: resetEmail });
      setSeconds(600);
      setErrorMessage("");
      setValue("otp", "");
    } catch (error) {
      setResendError(
        error instanceof ApiError && error.status === 429
          ? "Please wait before requesting another code."
          : "Unable to resend the code. Please try again.",
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <section className="space-y-6 rounded-cards bg-surface p-6 shadow-subtle sm:p-8">
      <AuthHeader title="Verify reset code" description="Enter the 6-digit OTP sent to your email. It expires in 10 minutes." />
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <OtpInput value={otp} onChange={(value) => setValue("otp", value, { shouldValidate: true })} error={Boolean(errors.otp || errorMessage || isExpired)} disabled={isSubmitting || isExpired} />
        {errors.otp?.message ? <p className="text-xs text-error-red" role="alert">{errors.otp.message}</p> : null}
        {errorMessage ? <p className="text-xs text-error-red" role="alert">{errorMessage}</p> : null}
        {isExpired ? <p className="text-xs text-error-red" role="alert">This OTP has expired. Request a new code.</p> : null}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-gray">{seconds > 0 ? `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")} remaining` : "Code expired"}</span>
          <button className="font-medium text-medium-gray hover:text-white disabled:cursor-not-allowed disabled:opacity-50" disabled={!isExpired || resending} onClick={() => void resend()} type="button">{resending ? "Sending..." : "Resend OTP"}</button>
        </div>
        {resendError ? <p className="text-xs text-error-red" role="alert">{resendError}</p> : null}
        <Button className="w-full" disabled={isSubmitting || isExpired} type="submit">
          {isSubmitting ? "Continuing..." : "Continue"}
        </Button>
        <Link href="/forgot-password" className="block text-center text-sm text-medium-gray hover:text-white">Use a different email</Link>
      </form>
    </section>
  );
}
