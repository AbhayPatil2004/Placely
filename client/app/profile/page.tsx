"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AchievementCard } from "@/components/profile/AchievementCard";
import { AcademicDetails } from "@/components/profile/AcademicDetails";
import { CertificateCard } from "@/components/profile/CertificateCard";
import { CodingProfiles } from "@/components/profile/CodingProfiles";
import { HackathonCard } from "@/components/profile/HackathonCard";
import { ProfileEditSheet } from "@/components/profile/ProfileEditSheet";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileSection } from "@/components/profile/ProfileSection";
import { ProjectCard } from "@/components/profile/ProjectCard";
import { ResumeLink } from "@/components/profile/ResumeLink";
import { SkillsList } from "@/components/profile/SkillsList";
import { useAuth, type AuthUser } from "@/lib/auth-context";
import { updateProfile, type StudentProfileUpdate } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";

function ProfileSkeleton() {
  return (
    <main className="mx-auto max-w-[1120px] space-y-4 px-4 py-6 font-[system-ui]">
      <div className="h-36 animate-pulse rounded-xl bg-surface" />
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="h-36 animate-pulse rounded-xl bg-surface" />
      ))}
    </main>
  );
}

export default function ProfilePage() {
  const { user, loading, setUser } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);

  if (loading) return <ProfileSkeleton />;
  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center bg-abyss px-4 text-sm text-medium-gray">
        Unable to load your profile.
      </main>
    );
  }

  const editProfile = () => setEditing(true);
  const saveProfile = async (nextUser: AuthUser) => {
    try {
      const profileUpdate: StudentProfileUpdate = {};
      if (nextUser.fullname !== user.fullname) profileUpdate.fullname = nextUser.fullname;
      if (nextUser.profileImage !== user.profileImage) profileUpdate.profileImage = nextUser.profileImage;
      if (nextUser.studentId !== user.studentId) profileUpdate.studentId = nextUser.studentId;
      if (nextUser.university !== user.university) profileUpdate.university = nextUser.university;
      if (nextUser.college !== user.college) profileUpdate.college = nextUser.college;
      if (nextUser.collegeId !== user.collegeId) profileUpdate.collegeId = nextUser.collegeId;
      if (nextUser.branch !== user.branch) profileUpdate.branch = nextUser.branch;
      if (nextUser.currentYear !== user.currentYear) profileUpdate.currentYear = nextUser.currentYear;
      if (nextUser.passingYear !== user.passingYear) profileUpdate.passingYear = nextUser.passingYear;
      if (nextUser.cgpa !== user.cgpa) profileUpdate.cgpa = nextUser.cgpa;
      if (nextUser.tenthPercentage !== user.tenthPercentage) {
        profileUpdate.tenthPercentage = nextUser.tenthPercentage;
      }
      if (nextUser.twelfthPercentage !== user.twelfthPercentage) {
        profileUpdate.twelfthPercentage = nextUser.twelfthPercentage;
      }
      if (JSON.stringify(nextUser.skills) !== JSON.stringify(user.skills)) {
        profileUpdate.skills = nextUser.skills;
      }
      if (nextUser.resumeUrl !== user.resumeUrl) profileUpdate.resumeUrl = nextUser.resumeUrl;
      if (nextUser.portfolioUrl !== user.portfolioUrl) profileUpdate.portfolioUrl = nextUser.portfolioUrl;

      const updatedUser = await updateProfile(
        profileUpdate,
        user.codingProfiles,
        nextUser.codingProfiles,
        {
          previousProjects: user.projects,
          nextProjects: nextUser.projects,
          previousCertificates: user.certificates,
          nextCertificates: nextUser.certificates,
          previousAchievements: user.achievements,
          nextAchievements: nextUser.achievements,
          previousHackathons: user.hackathons,
          nextHackathons: nextUser.hackathons,
        },
      );
      setUser(updatedUser);
      return updatedUser;
    } catch (error) {
      if (error instanceof ApiError && (error.status === 401 || error.status === 403)) {
        setUser(null);
        router.replace("/");
      }
      throw error;
    }
  };

  return (
    <main className="mx-auto max-w-[1120px] space-y-4 px-4 py-6 font-[system-ui] sm:px-6">
      <ProfileHeader student={user} onEdit={editProfile} />

      <ProfileSection title="Academic details" onEdit={editProfile}>
        <AcademicDetails student={user} />
      </ProfileSection>

      <SkillsList student={user} onEdit={editProfile} />
      <CodingProfiles student={user} onEdit={editProfile} />

      <ProfileSection
        title="Projects"
        onEdit={editProfile}
        isEmpty={!user.projects.length}
        emptyMessage="No projects added yet"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {user.projects.map((project) => <ProjectCard key={project._id} project={project} />)}
        </div>
      </ProfileSection>

      <ProfileSection
        title="Hackathons"
        onEdit={editProfile}
        isEmpty={!user.hackathons.length}
        emptyMessage="No hackathons added yet"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {user.hackathons.map((hackathon) => (
            <HackathonCard key={hackathon._id} hackathon={hackathon} />
          ))}
        </div>
      </ProfileSection>

      <ProfileSection
        title="Certificates"
        onEdit={editProfile}
        isEmpty={!user.certificates.length}
        emptyMessage="No certificates added yet"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {user.certificates.map((certificate) => (
            <CertificateCard key={certificate._id} certificate={certificate} />
          ))}
        </div>
      </ProfileSection>

      <ProfileSection
        title="Achievements"
        onEdit={editProfile}
        isEmpty={!user.achievements.length}
        emptyMessage="No achievements added yet"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {user.achievements.map((achievement) => (
            <AchievementCard key={achievement._id} achievement={achievement} />
          ))}
        </div>
      </ProfileSection>

      <ResumeLink student={user} onEdit={editProfile} />

      {editing ? (
        <ProfileEditSheet
          key={user._id}
          user={user}
          open={editing}
          onOpenChange={setEditing}
          onSave={saveProfile}
        />
      ) : null}
    </main>
  );
}
