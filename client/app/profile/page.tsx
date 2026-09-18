"use client";

import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, FileText, Link2 } from "lucide-react";
import { AcademicsTab } from "@/components/profile/AcademicsTab";
import { ActivityHeatmap } from "@/components/profile/ActivityHeatmap";
import { CodingProfilesTab } from "@/components/profile/CodingProfilesTab";
import { OverviewTab } from "@/components/profile/OverviewTab";
import { ProfileCompletionCard, profileCompletion } from "@/components/profile/ProfileCompletionCard";
import { ProfileEditSheet } from "@/components/profile/ProfileEditSheet";
import { ProfileHeaderCard } from "@/components/profile/ProfileHeaderCard";
import { ProfileTabs, type ProfileTab } from "@/components/profile/ProfileTabs";
import { SkillsTab } from "@/components/profile/SkillsTab";
import { useAuth, type AuthUser } from "@/lib/auth-context";

function ProfileSkeleton() {
  return <div className="mx-auto max-w-7xl animate-pulse space-y-5 px-4 py-6"><div className="h-4 w-32 rounded bg-surface" /><div className="h-44 rounded-cards bg-surface" /><div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]"><div className="h-80 rounded-cards bg-surface" /><div className="h-64 rounded-cards bg-surface" /></div></div>;
}

export default function ProfilePage() {
  const { user, loading, setUser } = useAuth();
  const [activeTab, setActiveTab] = useState<ProfileTab>("Overview");
  const [editing, setEditing] = useState(false);

  if (loading) return <ProfileSkeleton />;
  if (!user) return <main className="grid min-h-screen place-items-center bg-abyss text-sm text-muted-gray">Unable to load your profile.</main>;

  const { percentage } = profileCompletion(user);
  const saveProfile = (nextUser: AuthUser) => setUser(nextUser);
  const tabContent = {
    Overview: <OverviewTab user={user} onEdit={() => setEditing(true)} />,
    Academics: <AcademicsTab user={user} />,
    Skills: <SkillsTab user={user} onEdit={() => setEditing(true)} />,
    "Coding Profiles": <CodingProfilesTab user={user} onEdit={() => setEditing(true)} />,
    Activity: <ActivityHeatmap data={[]} />,
  }[activeTab];

  return <div>
    <main className="mx-auto max-w-7xl px-0 py-0">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-gray"><span>Explore</span><span className="mx-2 text-graphite">&gt;</span><span className="text-white">Profile</span></nav>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-5">
          <ProfileHeaderCard user={user} completion={percentage} onEdit={() => setEditing(true)} />
          <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
            <ProfileTabs activeTab={activeTab} onChange={setActiveTab} />
            <div className="pt-5">{tabContent}</div>
          </section>
        </div>
        <aside className="space-y-5">
          <ProfileCompletionCard user={user} />
          <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
            <h2 className="text-base font-semibold text-white">Career Links</h2>
            <div className="mt-4 space-y-3">
              {(user.codingProfiles ?? []).slice(0, 3).map((profile) => <a key={`${profile.platform}-${profile.profileUrl}`} href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 text-sm text-medium-gray hover:text-lavender"><span className="flex items-center gap-2"><Link2 className="size-4" />{profile.platform}</span><ArrowUpRight className="size-3.5" /></a>)}
              <a href={user.resumeUrl || "#"} target={user.resumeUrl ? "_blank" : undefined} rel={user.resumeUrl ? "noopener noreferrer" : undefined} className="flex items-center justify-between gap-3 text-sm text-medium-gray hover:text-lavender"><span className="flex items-center gap-2"><FileText className="size-4" />Resume</span><ArrowUpRight className="size-3.5" /></a>
              <a href={user.portfolioUrl || "#"} target={user.portfolioUrl ? "_blank" : undefined} rel={user.portfolioUrl ? "noopener noreferrer" : undefined} className="flex items-center justify-between gap-3 text-sm text-medium-gray hover:text-lavender"><span className="flex items-center gap-2"><BriefcaseBusiness className="size-4" />Portfolio</span><ArrowUpRight className="size-3.5" /></a>
              {!user.codingProfiles?.length && !user.resumeUrl && !user.portfolioUrl ? <button type="button" onClick={() => setEditing(true)} className="text-sm text-lavender hover:underline">Add a career link</button> : null}
            </div>
          </section>
          <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
            <h2 className="text-base font-semibold text-white">Quick Stats</h2>
            <dl className="mt-4 grid grid-cols-2 gap-4"><div><dt className="text-xs uppercase tracking-wide text-zinc-500">Skills</dt><dd className="mt-1 text-lg font-semibold text-white">{user.skills?.length ?? 0}</dd></div><div><dt className="text-xs uppercase tracking-wide text-zinc-500">Profiles</dt><dd className="mt-1 text-lg font-semibold text-white">{user.codingProfiles?.length ?? 0}</dd></div><div><dt className="text-xs uppercase tracking-wide text-zinc-500">CGPA</dt><dd className="mt-1 text-lg font-semibold text-white">{user.cgpa ?? "—"}</dd></div><div><dt className="text-xs uppercase tracking-wide text-zinc-500">Batch</dt><dd className="mt-1 text-lg font-semibold text-white">{user.passingYear}</dd></div></dl>
          </section>
        </aside>
      </div>
    </main>
    <ProfileEditSheet user={user} open={editing} onOpenChange={setEditing} onSave={saveProfile} />
  </div>;
}
