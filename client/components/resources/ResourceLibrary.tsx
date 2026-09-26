"use client";

import { useMemo, useState } from "react";
import { DifficultyTabs } from "@/components/resources/DifficultyTabs";
import { ProgressCard } from "@/components/resources/ProgressCard";
import { ResourceHeader } from "@/components/resources/ResourceHeader";
import { ResourceTable } from "@/components/resources/ResourceTable";
import { ResourceSearch } from "@/components/resources/ResourceSearch";
import type { Difficulty, Resource } from "@/lib/resources";

type ResourceLibraryProps = {
  resources: Resource[];
  title: string;
  description?: string;
  categoryLabel?: string;
};

export function ResourceLibrary({
  resources,
  title,
  description,
  categoryLabel,
}: ResourceLibraryProps) {
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [search, setSearch] = useState("");
  const initialCompleted = useMemo(
    () => resources.filter((resource) => resource.completed).length,
    [resources],
  );
  const [completed, setCompleted] = useState(initialCompleted);

  return (
    <div className="space-y-6">
      <ResourceHeader
        eyebrow={categoryLabel}
        title={title}
        description={description}
      />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="order-2 space-y-4 lg:order-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-subheading font-semibold text-bright-gray">
              Resources
            </h2>
            <div className="flex flex-col gap-3 sm:items-end">
              <ResourceSearch value={search} onChange={setSearch} />
              <DifficultyTabs value={difficulty} onChange={setDifficulty} />
            </div>
          </div>
          <ResourceTable
            resources={resources}
            difficulty={difficulty}
            search={search}
            onCompletedChange={setCompleted}
          />
        </div>
        <div className="order-1 lg:order-2">
          <ProgressCard completed={completed} total={resources.length} />
        </div>
      </div>
    </div>
  );
}
