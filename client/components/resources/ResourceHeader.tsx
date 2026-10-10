import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type ResourceHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function ResourceHeader({
  eyebrow = "Resource library",
  title,
  description,
  actionLabel,
  onAction,
}: ResourceHeaderProps) {
  return (
    <div className="flex flex-col gap-5 border-b border-graphite pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-medium-gray">
          {eyebrow}
        </p>
        <h1 className="text-heading font-semibold tracking-[-0.56px] text-bright-gray">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-body-sm text-medium-gray">{description}</p>
        ) : null}
      </div>
      {actionLabel ? (
        <Button onClick={onAction} variant="outline">
          {actionLabel}
          <ArrowUpRight aria-hidden="true" />
        </Button>
      ) : null}
    </div>
  );
}
