import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          <p className="hero-word text-[11px] font-medium uppercase tracking-[0.38em] text-[#bcbcbc]">
            Placely
          </p>

          <h1 className="hero-word mt-6 text-[clamp(3.3rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#eeeeee]">
            Prepare
            <br />
            for what comes next.
          </h1>

          <p className="hero-sub mt-6 max-w-[540px] text-base text-[#bcbcbc] md:text-[18px] md:leading-7">
            Focused preparation for the work that matters next.
          </p>

          <div className="hero-cta mt-8 flex items-center gap-3">
            <Button>Get Started</Button>
            <Button variant="ghost">Login</Button>
          </div>
        </div>

        <div className="hero-sub mt-16 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[#a3a3a3]">
          <span>Scroll to explore</span>
          <span className="h-px w-12 bg-white/10" />
          <span className="inline-block h-8 w-px bg-white/15" />
        </div>
      </div>
    </section>
  );
}
