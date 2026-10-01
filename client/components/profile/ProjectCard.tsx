import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { StudentProject } from "@/types/student";
import { formatDateRange } from "./formatDate";

export function ProjectCard({ project }: { project: StudentProject }) {
  const dateRange = formatDateRange(project.startDate, project.endDate);
  const links = [
    ["GitHub", project.githubUrl],
    ["Live demo", project.liveUrl],
  ] as const;

  return (
    <Card as="article" className="flex h-full flex-col border border-graphite/60 bg-abyss/70 p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-base font-semibold leading-6 text-bright-gray">{project.title}</h3>
        {dateRange ? <span className="text-xs leading-5 text-medium-gray">{dateRange}</span> : null}
      </div>
      {project.description?.trim() ? (
        <p className="mt-3 whitespace-pre-line text-sm leading-[1.5] text-medium-gray">
          {project.description}
        </p>
      ) : null}
      {project.technologies.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology}><Badge>{technology}</Badge></li>
          ))}
        </ul>
      ) : null}
      {links.some(([, url]) => url?.trim()) ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {links.map(([label, url]) => url?.trim() ? (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} ${label} link in a new tab`}
              className="inline-flex h-7 items-center gap-1 rounded-buttons px-2.5 text-xs text-medium-gray transition-colors hover:bg-surface hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
            >
              {label}<ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          ) : null)}
        </div>
      ) : null}
    </Card>
  );
}
