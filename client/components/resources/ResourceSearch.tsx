"use client";

import { Search } from "lucide-react";

type ResourceSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ResourceSearch({ value, onChange }: ResourceSearchProps) {
  return (
    <label className="relative block w-full sm:max-w-xs">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-gray"
      />
      <span className="sr-only">Search resources</span>
      <input
        className="h-10 w-full rounded-inputs border border-graphite bg-surface pl-9 pr-3 text-sm text-bright-gray outline-none placeholder:text-muted-gray focus:border-white focus:ring-2 focus:ring-white/20"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search resources"
        type="search"
        value={value}
      />
    </label>
  );
}
