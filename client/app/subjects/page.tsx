import Link from "next/link";

const subjects = [
  { key: "OOP", name: "Object-Oriented Programming", href: "/subjects/oop/learn", available: true },
  { key: "DBMS", name: "Database Management Systems", href: "/subjects/dbms/learn", available: true },
  { key: "CN", name: "Computer Networks", href: "/subjects/cn/learn", available: true },
  { key: "OS", name: "Operating Systems", href: "/subjects/os/learn", available: true },
  { key: "SWE", name: "Software Engineering", href: "/subjects/swe/learn", available: true },
];

export default function SubjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-gray">Subjects</p>
        <h1 className="mt-2 text-heading font-semibold text-white">Core subjects</h1>
        <p className="mt-2 text-sm text-medium-gray">
          Build the foundations you need for technical interviews.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {subjects.map((subject) => {
          const content = (
            <>
              <span className="text-xs font-medium tracking-[0.18em] text-lavender">{subject.key}</span>
              <h2 className="mt-8 text-lg font-semibold text-white">{subject.name}</h2>
              <p className="mt-2 text-sm text-muted-gray">
                {subject.available ? "Learn the core concepts." : "Learn and test modules coming soon."}
              </p>
            </>
          );
          return subject.available ? (
            <Link key={subject.key} href={subject.href} className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle transition-colors hover:border-lavender">
              {content}
            </Link>
          ) : (
            <div key={subject.key} aria-disabled="true" className="rounded-cards border border-graphite bg-surface p-5 opacity-60">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
