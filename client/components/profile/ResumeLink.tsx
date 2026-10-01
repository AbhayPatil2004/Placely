import { ArrowUpRight, FileText, Globe2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Student } from "@/types/student";
import { ProfileSection } from "./ProfileSection";

export function ResumeLink({ student, onEdit }: { student: Student; onEdit: () => void }) {
  const links = [
    { title: "Resume", href: student.resumeUrl, icon: FileText, label: "View resume" },
    { title: "Portfolio", href: student.portfolioUrl, icon: Globe2, label: "Visit portfolio" },
  ].filter((link): link is typeof link & { href: string } => Boolean(link.href?.trim()));

  return (
    <ProfileSection
      title="Resume & Portfolio"
      onEdit={onEdit}
      isEmpty={!links.length}
      emptyMessage="No resume or portfolio added yet"
    >
      <div className="grid gap-3 md:grid-cols-2">
        {links.map(({ title, href, icon: Icon, label }) => (
          <Card key={title} className="flex items-center justify-between gap-3 border border-graphite/60 bg-abyss/70 p-4">
            <span className="flex min-w-0 items-center gap-3 text-sm text-bright-gray">
              <Icon className="size-4 shrink-0 text-medium-gray" aria-hidden="true" />
              <span className="truncate">{title}</span>
            </span>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} in a new tab`}
              className="inline-flex h-7 items-center gap-1 rounded-buttons px-2 text-sm text-medium-gray transition-colors hover:bg-surface hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
            >
              {label}<ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Card>
        ))}
      </div>
    </ProfileSection>
  );
}
