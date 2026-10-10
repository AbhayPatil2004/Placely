import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { dsaTopics } from "@/data/dsaData";

export default async function MaterialPage({ params }: { params: Promise<{ topic: string; materialSlug: string }> }) {
  const { topic, materialSlug } = await params;
  const topicData = dsaTopics.find((item) => item.slug === topic);
  const material = topicData?.materials.find((item) => item.slug === materialSlug);
  if (!topicData || !material) notFound();
  return <main className="min-h-screen bg-abyss text-bright-gray"><div className="mx-auto max-w-[800px] space-y-6 px-4 py-10"><Link href="/dsa/learn" className="flex items-center gap-2 text-sm text-muted-gray hover:text-white"><ArrowLeft className="size-4" />Back to Learn</Link><article className="rounded-cards border border-graphite bg-surface p-6 shadow-subtle"><span className="text-xs uppercase tracking-wide text-lavender">{material.type} · {material.duration}</span><h1 className="mt-3 text-heading font-semibold text-white">{material.title}</h1><p className="mt-4 text-sm leading-7 text-medium-gray">{material.description}</p><div className="mt-8 rounded-buttons border border-graphite bg-abyss p-4 text-sm text-muted-gray">Learning content placeholder. The full lesson will be connected here when content storage is available.</div></article></div></main>;
}
