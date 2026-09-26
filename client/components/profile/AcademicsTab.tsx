import type { AuthUser } from "@/lib/auth-context";

export function AcademicsTab({ user }: { user: AuthUser }) {
  const fields: Array<[string, string | number | null | undefined]> = [["University", user.university], ["College", user.college], ["College ID", user.collegeId], ["Branch", user.branch], ["Current Year", user.currentYear], ["Passing Year", user.passingYear], ["CGPA", user.cgpa], ["10th Percentage", user.tenthPercentage ? `${user.tenthPercentage}%` : null], ["12th Percentage", user.twelfthPercentage ? `${user.twelfthPercentage}%` : null]];
  return <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">{fields.map(([label, value]) => <div key={label}><dt className="text-xs uppercase tracking-wide text-zinc-500">{label}</dt><dd className={`mt-1 text-sm ${value === null || value === undefined || value === "" ? "text-muted-gray" : "text-white"}`}>{value ?? "Not added"}</dd></div>)}</dl>;
}
