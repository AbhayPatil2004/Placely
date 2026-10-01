import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Student } from "@/types/student";
import { getPlatformLabel, PlatformIcon } from "./PlatformIcon";
import { ProfileSection } from "./ProfileSection";

export function CodingProfiles({ student, onEdit }: { student: Student; onEdit: () => void }) {
  const profiles = student.codingProfiles.filter((profile) => profile.profileUrl.trim());

  return (
    <ProfileSection
      title="Coding profiles"
      onEdit={onEdit}
      isEmpty={!profiles.length}
      emptyMessage="No coding profiles added yet"
    >
      <ul className="grid gap-3 md:grid-cols-2">
        {profiles.map((profile) => {
          const label = getPlatformLabel(profile.platform);
          return (
            <li key={`${profile.platform}-${profile.profileUrl}`}>
              <Card className="border border-graphite/60 bg-abyss/70 p-4">
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${label} profile in a new tab`}
                  className="group flex min-w-0 items-center gap-3 text-sm text-medium-gray transition-colors hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
                >
                  <PlatformIcon
                    platform={profile.platform}
                    className="size-[18px] shrink-0 text-medium-gray transition-colors group-hover:text-lavender"
                  />
                  <span className="min-w-0 flex-1 truncate">{label}</span>
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
              </Card>
            </li>
          );
        })}
      </ul>
    </ProfileSection>
  );
}
