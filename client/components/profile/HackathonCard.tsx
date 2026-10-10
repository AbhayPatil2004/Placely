import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { StudentHackathon } from "@/types/student";
import { formatDate } from "./formatDate";

const roleLabel: Record<StudentHackathon["role"], string> = {
  PARTICIPANT: "Participant",
  TEAM_LEAD: "Team lead",
  TEAM_MEMBER: "Team member",
  MENTOR: "Mentor",
  OTHER: "Other",
};

export function HackathonCard({ hackathon }: { hackathon: StudentHackathon }) {
  const links = [
    ["Certificate", hackathon.certificateUrl],
    ["Project", hackathon.projectUrl],
  ] as const;
  const teamProject = [hackathon.teamName, hackathon.projectName].filter((value) => value?.trim());
  const date = formatDate(hackathon.date);

  return (
    <Card as="article" className="flex h-full flex-col border border-graphite/60 bg-abyss/70 p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold leading-6 text-bright-gray">{hackathon.name}</h3>
          {hackathon.organization?.trim() ? (
            <p className="mt-1 text-sm text-medium-gray">{hackathon.organization}</p>
          ) : null}
        </div>
        <Badge>{roleLabel[hackathon.role]}</Badge>
      </div>
      {teamProject.length ? (
        <p className="mt-3 text-sm text-medium-gray">{teamProject.join(" · ")}</p>
      ) : null}
      {hackathon.position?.trim() ? (
        <p className="mt-2 text-sm text-bright-gray">{hackathon.position}</p>
      ) : null}
      {hackathon.description?.trim() ? (
        <p className="mt-3 whitespace-pre-line text-sm leading-[1.5] text-medium-gray">
          {hackathon.description}
        </p>
      ) : null}
      {hackathon.technologies.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {hackathon.technologies.map((technology) => (
            <li key={technology}><Badge>{technology}</Badge></li>
          ))}
        </ul>
      ) : null}
      {date ? <p className="mt-4 text-xs text-medium-gray">{date}</p> : null}
      {links.some(([, url]) => url?.trim()) ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {links.map(([label, url]) => url?.trim() ? (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open hackathon ${label.toLowerCase()} in a new tab`}
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
