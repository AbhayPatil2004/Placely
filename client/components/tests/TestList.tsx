import type { MockTest } from "@/lib/resources";
import { TestCard } from "@/components/tests/TestCard";

type TestListProps = {
  tests: MockTest[];
};

export function TestList({ tests }: TestListProps) {
  if (tests.length === 0) {
    return (
      <div className="rounded-cards border border-dashed border-graphite bg-surface px-6 py-12 text-center">
        <p className="text-sm text-muted-gray">No mock tests are available yet.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
}
