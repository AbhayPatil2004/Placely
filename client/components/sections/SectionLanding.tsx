import { SectionModeCard } from "@/components/sections/SectionModeCard";

type SectionLandingProps = {
  name: string;
  subtitle: string;
  description: string;
  learnHref: string;
  testHref: string;
};

export function SectionLanding({
  name,
  subtitle,
  description,
  learnHref,
  testHref,
}: SectionLandingProps) {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-gray">
          Preparation section
        </p>
        <h1 className="text-heading-lg font-semibold tracking-[-0.72px] text-white">
          {name}
        </h1>
        <p className="text-subheading text-medium-gray">{subtitle}</p>
        <p className="max-w-xl text-sm leading-6 text-muted-gray">{description}</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <SectionModeCard
          href={learnHref}
          mode="Learn"
          title="Build your foundation"
          description="Study concepts and solve curated resources at your own pace."
          points={["Study core concepts", "Track learning progress", "Bookmark resources"]}
        />
        <SectionModeCard
          href={testHref}
          mode="Test"
          title="Evaluate your preparation"
          description="Practice under test conditions with focused mock assessments."
          points={["Timed mock tests", "Measure topic readiness", "Test mode coming soon"]}
        />
      </div>
    </div>
  );
}
