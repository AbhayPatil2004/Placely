import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { getDefaultProfileImage } from "@/lib/profile-image";
import type { Student } from "@/types/student";

export function ProfileHeader({
  student,
  onEdit,
}: {
  student: Student;
  onEdit: () => void;
}) {
  const initials = student.fullname
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((name) => name[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <Card as="header" className="flex flex-col gap-5 border border-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <Avatar
          src={student.profileImage || getDefaultProfileImage(student)}
          alt={`${student.fullname} profile picture`}
          fallback={initials}
          className="size-20 ring-1 ring-white/10 sm:size-24"
        />
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-gray">Student profile</p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <h1 className="break-words text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-bright-gray sm:text-[28px]">
              {student.fullname}
            </h1>
            <span className="rounded-buttons border border-graphite px-2 py-1 text-xs text-medium-gray">
              {student.studentId}
            </span>
          </div>
          <p className="mt-1 break-all text-sm leading-[1.5] text-medium-gray">{student.email}</p>
          <p className="mt-2 break-words text-sm text-medium-gray">{student.branch}</p>
          <p className="mt-1 text-sm text-medium-gray">
            Year {student.currentYear} · Batch {student.passingYear}
          </p>
        </div>
      </div>
      <Button
        type="button"
        onClick={onEdit}
        className="w-full bg-white text-black hover:bg-white/90 sm:w-auto"
      >
        Edit profile
      </Button>
    </Card>
  );
}
