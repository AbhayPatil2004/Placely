import { Button } from "@/components/ui/button";

export function PracticeSection() {
  return (
    <section id="practice" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#a78bfa]">
          Practice
        </p>

        <div className="practice-preview mt-8 rounded-[12px] border border-white/10 bg-[#1e1e1e] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] sm:p-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#facc15]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
            </div>

            <span className="text-[11px] text-[#bcbcbc]">main.py</span>

            <Button size="sm" className="h-8 px-3 text-[11px]">
              Run
            </Button>
          </div>

          <div className="mt-4 rounded-[8px] border border-white/5 bg-[#171717] p-4">
            <div className="flex gap-4">
              <div className="w-8 select-none text-right text-[11px] leading-6 text-[#626262]">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>

              <pre className="flex-1 overflow-x-auto font-mono text-[12px] leading-6 text-[#eeeeee]">
                <span className="text-[#a78bfa]">def</span> prepare(roadmap):
                <br />
                &nbsp;&nbsp;for topic in roadmap:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a78bfa]">if</span> topic == <span className="text-[#facc15]">&quot;DSA&quot;</span>:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solve(patterns)
                <br />
                &nbsp;&nbsp;<span className="text-[#a78bfa]">return</span> <span className="text-[#facc15]">&quot;ready&quot;</span>
              </pre>
            </div>
          </div>

          <div className="mt-4 rounded-[8px] border border-white/5 bg-[#171717] p-4">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#a3a3a3]">
              <span>Output</span>
              <span className="rounded-full border border-[#4ade80]/40 bg-[#4ade80]/10 px-2 py-1 text-[#4ade80]">
                Completed
              </span>
            </div>

            <div className="mt-3 font-mono text-[12px] leading-6 text-[#d9d9d9]">
              ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
