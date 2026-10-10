"use client";

import type { ReactNode } from "react";
import { Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ProfileSectionProps = {
  title: string;
  children: ReactNode;
  onEdit?: () => void;
  emptyMessage?: string;
  isEmpty?: boolean;
};

export function ProfileSection({
  title,
  children,
  onEdit,
  emptyMessage,
  isEmpty = false,
}: ProfileSectionProps) {
  return (
    <Card as="section" className="border border-white/[0.04] p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold leading-[1.4] tracking-[-0.02em] text-bright-gray">
          {title}
        </h2>
        {onEdit ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onEdit}
            aria-label={`${isEmpty ? "Add" : "Edit"} ${title.toLowerCase()}`}
          >
            {isEmpty ? <Plus aria-hidden="true" /> : <Pencil aria-hidden="true" />}
            {isEmpty ? "Add" : "Edit"}
          </Button>
        ) : null}
      </div>
      {isEmpty && emptyMessage ? (
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-medium-gray">
          <p>{emptyMessage}</p>
        </div>
      ) : (
        children
      )}
    </Card>
  );
}
