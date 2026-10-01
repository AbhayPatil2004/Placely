import { Badge } from "@/components/ui/badge";
import type { Student } from "@/types/student";
import { ProfileSection } from "./ProfileSection";

export function SkillsList({ student, onEdit }: { student: Student; onEdit: () => void }) {
  const skills = student.skills.filter((skill) => skill.trim());

  return (
    <ProfileSection title="Skills" onEdit={onEdit} isEmpty={!skills.length} emptyMessage="No skills added yet">
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill}><Badge>{skill}</Badge></li>
        ))}
      </ul>
    </ProfileSection>
  );
}
