import { LiveProblemSolvePage } from "@/components/dashboard/LiveProblemSolvePage";

export default async function ProblemPage({ params }: { params: Promise<{ problemSlug: string }> }) {
  const { problemSlug } = await params;
  return <LiveProblemSolvePage slug={problemSlug} />;
}
