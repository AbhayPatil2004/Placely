"use client";

const tabs = ["Overview", "Academics", "Skills", "Coding Profiles", "Activity"] as const;
export type ProfileTab = (typeof tabs)[number];

export function ProfileTabs({ activeTab, onChange }: { activeTab: ProfileTab; onChange: (tab: ProfileTab) => void }) {
  return <div className="overflow-x-auto border-b border-graphite">
    <div className="flex min-w-max gap-6" role="tablist" aria-label="Profile sections">
      {tabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => onChange(tab)} className={`border-b-2 px-1 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender ${activeTab === tab ? "border-lavender text-white" : "border-transparent text-muted-gray hover:text-white"}`}>{tab}</button>)}
    </div>
  </div>;
}
