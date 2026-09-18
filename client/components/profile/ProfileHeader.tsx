import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AuthUser } from "@/lib/auth-context";

function getAvatarUrl(user: AuthUser) {
  if (user.profileImage) {
    return user.profileImage;
  }

  const seed = encodeURIComponent(user.studentId || user.email || user.fullname || "placely");
  return `https://api.dicebear.com/10.x/voxel-art/svg?seed=${seed}`;
}

export function ProfileHeader({
  user,
  progress,
  onEdit,
}: {
  user: AuthUser;
  progress: number;
  onEdit: () => void;
}) {
  return (
    <header className="overflow-hidden rounded-cards border border-graphite bg-surface shadow-subtle">
      <div className="flex flex-col gap-5 border-b border-graphite p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="group relative shrink-0">
            <img
              src={getAvatarUrl(user)}
              alt={`${user.fullname} profile avatar`}
              className="size-20 rounded-full border border-graphite object-cover shadow-subtle sm:size-24"
            />
            <button
              type="button"
              onClick={onEdit}
              className="absolute -bottom-1 -right-1 flex size-8 items-center justify-center rounded-full border border-graphite bg-[#171717] text-white shadow-subtle transition hover:border-white hover:bg-white hover:text-black"
              aria-label="Edit profile picture"
            >
              <Camera className="size-3.5" />
            </button>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-gray">
              Student profile
            </p>
            <h1 className="mt-1 truncate text-2xl font-semibold text-white sm:text-[2rem]">{user.fullname}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-medium-gray">
              <span>{user.studentId}</span>
              <span className="text-muted-gray">•</span>
              <span>{user.branch}</span>
              <span className="text-muted-gray">•</span>
              <span>{user.currentYear}th year</span>
            </div>
            <p className="mt-2 text-sm text-medium-gray">{user.college}</p>
            <p className="mt-1 text-sm text-medium-gray">{user.email}</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <div className="min-w-[180px] rounded-2xl border border-graphite bg-[#171717] p-3">
            <p className="text-[10px] uppercase tracking-[0.12em] text-muted-gray">Profile completion</p>
            <div className="mt-2 flex items-center justify-between text-sm text-white">
              <span>{progress}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#2a2a2a]">
              <div className="h-full rounded-full bg-white" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <Button type="button" variant="outline" onClick={onEdit}>
            Edit profile
          </Button>
        </div>
      </div>
    </header>
  );
}
