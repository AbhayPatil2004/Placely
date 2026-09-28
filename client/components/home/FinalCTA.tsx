<<<<<<< HEAD
"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

export function FinalCTA() {
  const { user } = useAuth();

=======
import { Button } from "@/components/ui/button";

export function FinalCTA() {
>>>>>>> a6b8baa86f3ece7ad7a80b5d3640f6435511647f
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="cta-panel rounded-[12px] border border-white/10 bg-[#1e1e1e] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[500px] text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.06em] text-[#eeeeee]">
              Ready to start preparing?
            </h2>

<<<<<<< HEAD
            <Link href={user ? "/dashboard" : "/signup"} className={buttonVariants({ size: "lg" })}>
              {user ? "Continue" : "Get Started"}
            </Link>
=======
            <Button size="lg">Get Started</Button>
>>>>>>> a6b8baa86f3ece7ad7a80b5d3640f6435511647f
          </div>
        </div>
      </div>
    </section>
  );
}
