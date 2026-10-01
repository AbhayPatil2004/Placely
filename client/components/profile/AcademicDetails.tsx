import type { Student } from "@/types/student";

const academicFields = (student: Student): Array<[string, string | number | null | undefined]> => [
  ["University", student.university],
  ["College", student.college],
  ["College ID", student.collegeId],
  ["Current year", student.currentYear],
  ["Passing year", student.passingYear],
  ["CGPA", student.cgpa],
  ["10th %", student.tenthPercentage == null ? null : `${student.tenthPercentage}%`],
  ["12th %", student.twelfthPercentage == null ? null : `${student.twelfthPercentage}%`],
];

export function AcademicDetails({ student }: { student: Student }) {
  const fields = academicFields(student).filter(([, value]) => value !== null && value !== undefined && value !== "");

  return (
    <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
      {fields.map(([label, value]) => (
        <div key={label} className="min-w-0 rounded-buttons border border-graphite/70 bg-abyss/70 p-3">
          <dt className="text-xs leading-5 text-medium-gray">{label}</dt>
          <dd className="mt-1 break-words text-sm leading-[1.5] text-bright-gray">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
