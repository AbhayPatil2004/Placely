const areas = [
  { name: "DSA", tone: "bg-[#1e1e1e]" },
  { name: "SQL", tone: "bg-[#1e1e1e]" },
  { name: "Aptitude", tone: "bg-[#1e1e1e]" },
  { name: "Core Subjects", tone: "bg-[#1e1e1e]" },
];

export function LearnSection() {
  return (
    <section id="learn" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#a78bfa]">
          Learn
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {areas.map((area, index) => (
            <div
              key={area.name}
              className={`learn-card rounded-[12px] border border-white/10 bg-[#1e1e1e] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-colors duration-200 ${
                index === 0 ? "ring-1 ring-[#7c3aed]/30" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#a3a3a3]">
                  0{index + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
              </div>

              <h3 className="mt-12 text-[clamp(1.65rem,2vw,2.25rem)] font-semibold tracking-[-0.06em] text-[#eeeeee]">
                {area.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
