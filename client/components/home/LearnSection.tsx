<<<<<<< HEAD
import Link from "next/link";

const areas = [
  { name: "DSA", href: "/dsa/practice" },
  { name: "SQL", href: "/subjects" },
  { name: "Aptitude", href: "/aptitude" },
  { name: "Core Subjects", href: "/subjects" },
=======
const areas = [
  { name: "DSA", tone: "bg-[#1e1e1e]" },
  { name: "SQL", tone: "bg-[#1e1e1e]" },
  { name: "Aptitude", tone: "bg-[#1e1e1e]" },
  { name: "Core Subjects", tone: "bg-[#1e1e1e]" },
>>>>>>> a6b8baa86f3ece7ad7a80b5d3640f6435511647f
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
<<<<<<< HEAD
            <Link
              key={area.name}
              href={area.href}
              className={`learn-card block rounded-[12px] border border-white/10 bg-[#1e1e1e] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-colors duration-200 hover:border-[#7c3aed]/60 ${
=======
            <div
              key={area.name}
              className={`learn-card rounded-[12px] border border-white/10 bg-[#1e1e1e] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-colors duration-200 ${
>>>>>>> a6b8baa86f3ece7ad7a80b5d3640f6435511647f
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
<<<<<<< HEAD
            </Link>
=======
            </div>
>>>>>>> a6b8baa86f3ece7ad7a80b5d3640f6435511647f
          ))}
        </div>
      </div>
    </section>
  );
}
