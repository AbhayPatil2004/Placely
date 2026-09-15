"use client";

import { ProfileField } from "@/components/profile/ProfileField";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileInfoCard } from "@/components/profile/ProfileInfoCard";
import { useAuth } from "@/lib/auth-context";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-6">
      <ProfileHeader user={user} />
      <div className="grid gap-4 lg:grid-cols-2">
        <ProfileInfoCard title="Personal information">
          <ProfileField label="Full name" value={user.fullname} />
          <ProfileField label="Student ID" value={user.studentId} />
          <ProfileField label="Email" value={user.email} />
          <ProfileField label="Authentication provider" value={user.authProvider} />
        </ProfileInfoCard>
        <ProfileInfoCard title="Academic information">
          <ProfileField label="Branch" value={user.branch} />
          <ProfileField label="College" value={user.college} />
          <ProfileField label="Current year" value={user.currentYear} />
          <ProfileField label="Passing year" value={user.passingYear} />
        </ProfileInfoCard>
      </div>
    </div>
  );
}