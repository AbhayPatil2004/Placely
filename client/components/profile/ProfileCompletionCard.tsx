import type { AuthUser } from "@/lib/auth-context";

export function profileCompletion(user: AuthUser) {
  const checks: Array<[string, boolean]> = [
    ["Full name", Boolean(user.fullname?.trim())],
    ["Profile image", Boolean(user.profileImage)],
    ["Academic details", Boolean(user.university && user.cgpa)],
    ["Skills", Boolean(user.skills?.length)],
    ["Coding profile", Boolean(user.codingProfiles?.length)],
    ["Resume", Boolean(user.resumeUrl)],
    ["Portfolio", Boolean(user.portfolioUrl)],
  ];
  const complete = checks.filter(([, value]) => value).length;
  return { checks, percentage: Math.round((complete / checks.length) * 100) };
}

export function ProfileCompletionCard({ user }: { user: AuthUser }) {
  const { checks, percentage } = profileCompletion(user);
  return <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
    <div className="flex items-center justify-between"><h2 className="text-base font-semibold text-white">Profile Completion</h2><span className="text-sm font-semibold text-lavender">{percentage}%</span></div>
    <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#2d333b]"><div className="h-full rounded-full bg-amethyst transition-all" style={{ width: `${percentage}%` }} /></div>
    <ul className="mt-4 space-y-2">{checks.map(([label, complete]) => <li key={label} className={`flex items-center gap-2 text-sm ${complete ? "text-medium-gray" : "text-muted-gray"}`}><span className={`size-1.5 rounded-full ${complete ? "bg-success-green" : "bg-graphite"}`} />{label}{!complete ? <span className="ml-auto text-xs text-lavender">Add</span> : null}</li>)}</ul>
  </section>;
}
