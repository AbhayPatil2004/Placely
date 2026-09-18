import { ArrowUpRight, Code2 } from "lucide-react";
import type { AuthUser } from "@/lib/auth-context";
export function CodingProfilesTab({ user, onEdit }: { user: AuthUser; onEdit: () => void }) {
  const profiles = user.codingProfiles ?? [];
  if (!profiles.length) return <div className="text-sm text-muted-gray">No coding profiles connected. <button type="button" onClick={onEdit} className="text-lavender hover:underline">Add profile</button></div>;
  return <div className="divide-y divide-graphite">{profiles.map((profile) => <div key={`${profile.platform}-${profile.profileUrl}`} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-[#171717] text-lavender"><Code2 className="size-4" /></span><span className="text-sm text-white">{profile.platform}</span></div><a href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="flex max-w-[60%] items-center gap-1 truncate text-sm text-lavender hover:underline">View profile <ArrowUpRight className="size-3.5 shrink-0" /></a></div>)}</div>;
}
