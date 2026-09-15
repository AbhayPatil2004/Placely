"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const options = [
  "Practice on every topic repeatedly",
  "Search for random tutorials",
  "Skip the fundamentals and jump ahead",
  "Focus only on interview wording",
];

export function TestSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="test" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#a78bfa]">
          Test
        </p>

        <div className="test-card mt-8 max-w-[720px] rounded-[12px] border border-white/10 bg-[#1e1e1e] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#a3a3a3]">
              Question 03
            </span>
            <span className="rounded-full border border-white/10 bg-[#171717] px-2 py-1 text-[10px] text-[#bcbcbc]">
              MCQ
            </span>
          </div>

          <h3 className="mt-5 text-[clamp(1.4rem,2vw,2rem)] font-medium leading-tight tracking-[-0.05em] text-[#eeeeee]">
            Which approach gives the strongest preparation for an interview round?
          </h3>

          <div className="mt-6 space-y-3">
            {options.map((option, index) => {
              const active = selected === index;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelected(index);
                    setSubmitted(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[8px] border px-4 py-3 text-left transition-colors ${
                    active
                      ? "border-[#7c3aed]/60 bg-[#7c3aed]/10 text-[#eeeeee]"
                      : "border-white/10 bg-[#171717] text-[#bcbcbc] hover:border-white/20"
                  }`}
                >
                  <span className="text-sm">{option}</span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#a3a3a3]">
                    {String.fromCharCode(65 + index)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button onClick={() => setSubmitted(true)} disabled={selected === null}>
              Submit
            </Button>

            {submitted && selected === 0 ? (
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#4ade80]">
                Correct
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
