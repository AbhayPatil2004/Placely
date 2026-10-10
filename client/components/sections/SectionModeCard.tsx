import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionModeCardProps = {
  href: string;
  mode: "Learn" | "Test";
  title: string;
  description: string;
  points: string[];
};

export function SectionModeCard({
  href,
  mode,
  title,
  description,
  points,
}: SectionModeCardProps) {
  const Icon = mode === "Learn" ? BookOpen : ClipboardCheck;

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-cards border border-graphite bg-surface p-6 shadow-subtle transition-colors hover:border-white hover:bg-[#232323]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 place-items-center rounded-buttons bg-white text-black">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <ArrowRight
          aria-hidden="true"
          className="size-5 text-muted-gray transition-transform group-hover:translate-x-1 group-hover:text-white"
        />
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted-gray">
        {mode}
      </p>
      <h2 className="mt-2 text-heading-sm font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-medium-gray">{description}</p>
      <ul className="mt-6 space-y-2 border-t border-graphite pt-5 text-sm text-muted-gray">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-white" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
