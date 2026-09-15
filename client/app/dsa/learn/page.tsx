import { ResourceLibrary } from "@/components/resources/ResourceLibrary";
import { dsaLearnResources } from "@/lib/resources";

export default function DsaLearnPage() {
  return (
    <ResourceLibrary
      resources={dsaLearnResources}
      title="DSA Learn"
      categoryLabel="Data Structures & Algorithms"
      description="Study concepts, patterns, and curated problems in a focused sequence."
    />
  );
}
