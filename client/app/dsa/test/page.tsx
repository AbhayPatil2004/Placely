import { TestHeader } from "@/components/tests/TestHeader";
import { TestList } from "@/components/tests/TestList";
import { dsaMockTests } from "@/lib/resources";

export default function DsaTestPage() {
  return (
    <div className="space-y-6">
      <TestHeader
        title="DSA Tests"
        description="Test your preparation with timed mock assessments. The test engine will be available in a future phase."
      />
      <TestList tests={dsaMockTests} />
    </div>
  );
}
