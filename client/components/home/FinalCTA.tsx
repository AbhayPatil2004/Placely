import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="cta-panel rounded-[12px] border border-white/10 bg-[#1e1e1e] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[500px] text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.06em] text-[#eeeeee]">
              Ready to start preparing?
            </h2>

            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
