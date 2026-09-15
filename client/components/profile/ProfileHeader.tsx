import type { AuthUser } from "@/lib/auth-context";

function initials(fullname: string) {
  return fullname
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ProfileHeader({ user }: { user: AuthUser }) {
  return (
    <header className="flex items-center gap-4 border-b border-graphite pb-6">
      <div className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-lg font-semibold text-black">
        {initials(user.fullname)}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-gray">
          Student profile
        </p>
        <h1 className="mt-1 truncate text-heading font-semibold text-white">
          {user.fullname}
        </h1>
        <p className="truncate text-sm text-medium-gray">{user.email}</p>
      </div>
    </header>
  );
}
