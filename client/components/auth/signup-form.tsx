"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthHeader } from "@/components/auth/auth-header";
import { PasswordField } from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { branchOptions, collegeOptions, signupSchema, type SignupValues } from "@/lib/auth";
import { ApiError } from "@/lib/api/client";
import { signup } from "@/lib/api/auth";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

const inputClassName =
  "h-10 w-full rounded-inputs border border-graphite bg-surface px-3 text-sm text-bright-gray outline-none placeholder:text-muted-gray focus:border-white focus:ring-2 focus:ring-white/20";

export function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { college: "", collegeId: "" },
  });
  const collegeField = register("collegeId");

  const onSubmit = async (values: SignupValues) => {
    setStatus("loading");
    setError("");
    try {
      const { confirmPassword, ...payload } = values;
      void confirmPassword;
      const user = await signup(payload);
      setUser(user);
      setSubmitted(true);
      router.replace("/dashboard");
    } catch (requestError) {
      setError(requestError instanceof ApiError ? requestError.message : "Unable to connect to the server. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section className="space-y-6 rounded-cards bg-surface p-6 shadow-subtle sm:p-8">
      <AuthHeader
        title="Create your account"
        description="Set up your student profile to start preparing."
        alternateText="Already registered?"
        alternateLabel="Sign in"
        alternateHref="/login"
      />
      {submitted ? (
        <p className="rounded-buttons border border-success-green/40 bg-success-green/10 px-3 py-2 text-sm text-success-green" role="status">
          Your account details are ready to submit when backend integration is connected.
        </p>
      ) : null}
      {error ? <p className="rounded-buttons border border-error-red/40 bg-error-red/10 px-3 py-2 text-sm text-error-red" role="alert">{error}</p> : null}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold text-bright-gray">Personal information</legend>
          <AuthFormField id="fullname" label="Full name" error={errors.fullname?.message}>
            <input {...register("fullname")} id="fullname" autoComplete="name" className={inputClassName} placeholder="Your full name" />
          </AuthFormField>
          <div className="grid gap-4 sm:grid-cols-2">
            <AuthFormField id="studentId" label="Student ID" error={errors.studentId?.message}>
              <input {...register("studentId")} id="studentId" className={inputClassName} placeholder="STU001" />
            </AuthFormField>
            <AuthFormField id="signup-email" label="Email" error={errors.email?.message}>
              <input {...register("email")} id="signup-email" autoComplete="email" className={inputClassName} type="email" />
            </AuthFormField>
          </div>
        </fieldset>
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold text-bright-gray">Academic information</legend>
          <AuthFormField id="branch" label="Branch" error={errors.branch?.message}>
            <select {...register("branch")} id="branch" className={inputClassName} defaultValue="">
              <option value="" disabled>Select your branch</option>
              {branchOptions.map((branch) => <option key={branch.value} value={branch.value}>{branch.label}</option>)}
            </select>
          </AuthFormField>
          <AuthFormField id="collegeId" label="College" error={errors.collegeId?.message}>
            <select
              {...collegeField}
              id="collegeId"
              className={inputClassName}
              defaultValue=""
              onChange={(event) => {
                collegeField.onChange(event);
                setValue("college", collegeOptions.find((college) => college.id === event.target.value)?.name ?? "", { shouldValidate: true });
              }}
            >
              <option value="" disabled>Select your college</option>
              {collegeOptions.map((college) => <option key={college.id} value={college.id}>{college.name}</option>)}
            </select>
          </AuthFormField>
          <div className="grid gap-4 sm:grid-cols-2">
            <AuthFormField id="currentYear" label="Current year" error={errors.currentYear?.message}>
              <select {...register("currentYear", { valueAsNumber: true })} id="currentYear" className={inputClassName} defaultValue="">
                <option value="" disabled>Select year</option>
                {[1, 2, 3, 4].map((year) => <option key={year} value={year}>Year {year}</option>)}
              </select>
            </AuthFormField>
            <AuthFormField id="passingYear" label="Passing year" error={errors.passingYear?.message}>
              <input {...register("passingYear", { valueAsNumber: true })} id="passingYear" className={inputClassName} inputMode="numeric" type="number" />
            </AuthFormField>
          </div>
        </fieldset>
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold text-bright-gray">Security</legend>
          <AuthFormField id="signup-password" label="Password" error={errors.password?.message}>
            <PasswordField {...register("password")} id="signup-password" autoComplete="new-password" error={Boolean(errors.password)} />
          </AuthFormField>
          <AuthFormField id="confirmPassword" label="Confirm password" error={errors.confirmPassword?.message}>
            <PasswordField {...register("confirmPassword")} id="confirmPassword" autoComplete="new-password" error={Boolean(errors.confirmPassword)} />
          </AuthFormField>
        </fieldset>
        <Button className="w-full" disabled={status === "loading"} type="submit">
          {status === "loading" ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </section>
  );
}
