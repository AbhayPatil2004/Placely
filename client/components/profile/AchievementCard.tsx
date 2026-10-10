import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { StudentAchievement } from "@/types/student";
import { formatDate } from "./formatDate";

export function AchievementCard({ achievement }: { achievement: StudentAchievement }) {
  const date = formatDate(achievement.date);

  return (
    <Card as="article" className="flex h-full flex-col border border-graphite/60 bg-abyss/70 p-6">
      <h3 className="text-base font-semibold leading-6 text-bright-gray">{achievement.title}</h3>
      {achievement.organization?.trim() ? (
        <p className="mt-1 text-sm text-medium-gray">{achievement.organization}</p>
      ) : null}
      {achievement.description?.trim() ? (
        <p className="mt-3 whitespace-pre-line text-sm leading-[1.5] text-medium-gray">
          {achievement.description}
        </p>
      ) : null}
      {date ? <p className="mt-3 text-xs text-medium-gray">{date}</p> : null}
      {achievement.proofUrl?.trim() ? (
        <a
          href={achievement.proofUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open proof for ${achievement.title} in a new tab`}
          className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-medium-gray transition-colors hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
        >
          View proof<ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      ) : null}
    </Card>
  );
}
