import { notFound } from "next/navigation";
import { ProblemSolvePage } from "@/components/dashboard/ProblemSolvePage";
import { dsaTopics } from "@/data/dsaData";

export default async function ProblemPage({ params }: { params: Promise<{ problemSlug: string }> }) {
  const { problemSlug } = await params;
  const problem = dsaTopics.flatMap((topic) => topic.problems).find((item) => item.slug === problemSlug);
  if (!problem) notFound();
  return <ProblemSolvePage problem={problem} />;
}
