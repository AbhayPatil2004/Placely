import type { ReactNode } from "react";

export function ProfileInfoCard({
  title,
  children,
}: Readonly<{ title: string; children: ReactNode }>) {
  return (
    <section className="rounded-cards border border-graphite bg-surface p-6 shadow-subtle">
      <h2 className="text-subheading font-semibold text-white">{title}</h2>
      <dl className="mt-5 grid gap-5 sm:grid-cols-2">{children}</dl>
    </section>
  );
}
