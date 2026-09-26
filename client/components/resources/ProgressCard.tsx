import { CheckCircle2, Clock3 } from "lucide-react";

type ProgressCardProps = {
  completed: number;
  total: number;
  label?: string;
};

export function ProgressCard({
  completed,
  total,
  label = "Your progress",
}: ProgressCardProps) {
  const progress = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;

  return (
    <section className="rounded-cards bg-surface p-6 shadow-subtle">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-medium-gray">{label}</p>
          <p className="mt-2 text-heading-sm font-semibold text-bright-gray">
            {progress}%
          </p>
        </div>
        <div className="grid size-10 place-items-center rounded-buttons bg-white text-black">
          <CheckCircle2 aria-hidden="true" className="size-5" />
        </div>
      </div>
      <div
        aria-label={`${progress}% complete`}
        className="mt-5 h-2 overflow-hidden rounded-full bg-graphite"
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
      >
        <div
          className="h-full rounded-full bg-white transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-caption text-muted-gray">
        <span>
          {completed} of {total} completed
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock3 aria-hidden="true" className="size-3.5" />
          Keep going
        </span>
      </div>
    </section>
  );
}
