import type { AuthUser } from "@/lib/auth-context";

export function SkillsTab({ user, onEdit }: { user: AuthUser; onEdit: () => void }) {
  const skills = user.skills ?? [];
  return skills.length ? <div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-amethyst/30 bg-amethyst/10 px-3 py-1.5 text-sm text-lavender">{skill}</span>)}<button type="button" onClick={onEdit} className="rounded-full border border-dashed border-graphite px-3 py-1.5 text-sm text-muted-gray hover:border-lavender hover:text-lavender">+ Add skill</button></div> : <div className="text-sm text-muted-gray">No skills added yet. <button type="button" onClick={onEdit} className="text-lavender hover:underline">Add skill</button></div>;
}
