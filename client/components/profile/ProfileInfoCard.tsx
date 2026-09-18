import type { ReactNode } from "react";

export function ProfileInfoCard({
  title,
  actions,
  children,
}: Readonly<{ title: string; actions?: ReactNode; children: ReactNode }>) {
  return (
    <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-subheading font-semibold text-white">{title}</h2>
        {actions}
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">{children}</dl>
    </section>
  );
}
