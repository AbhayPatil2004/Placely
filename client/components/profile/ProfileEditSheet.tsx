"use client";

import { useMemo, useState, type ReactNode } from "react";
import { CircleX, Link2, Plus, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { AuthUser } from "@/lib/auth-context";
import { branchOptions, collegeOptions } from "@/lib/auth";
import { ApiError } from "@/lib/api/client";
import { getPlatformLabel, PlatformIcon } from "./PlatformIcon";

const platformOptions = [
  "LEETCODE",
  "GITHUB",
  "CODECHEF",
  "CODEFORCES",
  "GEEKSFORGEEKS",
  "HACKERRANK",
  "LINKEDIN",
  "OTHER",
] as const;

type ProfileEditSheetProps = {
  user: AuthUser;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (value: AuthUser) => Promise<AuthUser>;
};

const emptyUrl = (value?: string | null) => (value && value.trim() ? value.trim() : "");

function isValidUrl(value: string) {
  if (!value.trim()) return true;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

const inputClassName = cn(
  "h-10 w-full rounded-buttons border border-graphite bg-[#171717] px-3 text-sm text-white outline-none",
  "placeholder:text-muted-gray focus:border-white focus:ring-2 focus:ring-white/10",
);

const formatDateValue = (value?: string | null) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().slice(0, 10);
};

const parseTechnologies = (value: string) => value
  .split(",")
  .map((entry) => entry.trim())
  .filter(Boolean);

export function ProfileEditSheet({ user, open, onOpenChange, onSave }: ProfileEditSheetProps) {
  const [form, setForm] = useState<AuthUser>({ ...user });
  const [newSkill, setNewSkill] = useState("");
  const [newProfilePlatform, setNewProfilePlatform] = useState<(typeof platformOptions)[number]>("LEETCODE");
  const [newProfileUrl, setNewProfileUrl] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const skillList = useMemo(() => form.skills ?? [], [form.skills]);
  const codingProfiles = useMemo(() => form.codingProfiles ?? [], [form.codingProfiles]);

  const syncForm = (next: AuthUser) => {
    setForm(next);
    setError("");
  };

  if (!open) return null;

  const handleSubmit = async () => {
    const trimmedFullName = form.fullname.trim();
    if (!trimmedFullName) {
      setError("Full name is required.");
      return;
    }

    if (form.currentYear <= 0 || form.passingYear <= 0) {
      setError("Current year and passing year must be valid.");
      return;
    }

    if (form.cgpa !== undefined && form.cgpa !== null && (form.cgpa < 0 || form.cgpa > 10)) {
      setError("CGPA must be between 0 and 10.");
      return;
    }

    if (form.tenthPercentage !== undefined && form.tenthPercentage !== null && (form.tenthPercentage < 0 || form.tenthPercentage > 100)) {
      setError("10th percentage must be between 0 and 100.");
      return;
    }

    if (form.twelfthPercentage !== undefined && form.twelfthPercentage !== null && (form.twelfthPercentage < 0 || form.twelfthPercentage > 100)) {
      setError("12th percentage must be between 0 and 100.");
      return;
    }

    for (const profile of codingProfiles) {
      if (!isValidUrl(profile.profileUrl)) {
        setError(`Please provide a valid URL for ${profile.platform}.`);
        return;
      }
    }
    if (new Set(codingProfiles.map((profile) => profile.platform.toUpperCase())).size !== codingProfiles.length) {
      setError("Each coding platform can only have one profile.");
      return;
    }

    if (!isValidUrl(form.resumeUrl ?? "") || !isValidUrl(form.portfolioUrl ?? "")) {
      setError("Resume and portfolio URLs must be valid URLs.");
      return;
    }

    const updatedProfile: AuthUser = {
      ...form,
      fullname: trimmedFullName,
      email: form.email.trim(),
      studentId: form.studentId.trim(),
      university: emptyUrl(form.university),
      college: form.college.trim() || user.college,
      branch: form.branch,
      collegeId: form.collegeId.trim() || user.collegeId,
      profileImage: form.profileImage && form.profileImage.trim() ? form.profileImage.trim() : null,
      resumeUrl: emptyUrl(form.resumeUrl),
      portfolioUrl: emptyUrl(form.portfolioUrl),
      skills: skillList.map((skill) => skill.trim()).filter(Boolean),
      codingProfiles: codingProfiles
        .map((profile) => ({
          platform: profile.platform,
          profileUrl: profile.profileUrl.trim(),
        }))
        .filter((profile) => profile.profileUrl),
    };

    setSaving(true);
    setError("");
    try {
      setForm(await onSave(updatedProfile));
      onOpenChange(false);
    } catch (requestError) {
      if (requestError instanceof ApiError) {
        setError(
          requestError.status === 401 || requestError.status === 403
            ? "Your session has expired. Sign in again to save your profile."
            : requestError.status === 404
              ? "Your profile could not be found. Please sign in again."
              : requestError.status === 409
                ? "That student ID is already in use."
                : requestError.status === 400 || requestError.status === 422
                  ? requestError.message
                  : "Unable to save your profile right now. Please try again.",
        );
      } else {
        setError("Unable to connect to the server. Please try again.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col border-l border-graphite bg-[#111111] shadow-[inset_1px_0_0_rgba(255,255,255,0.05)]">
        <div className="flex items-center justify-between border-b border-graphite px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-muted-gray">Update profile</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Edit details</h2>
          </div>
          <button
            type="button"
            disabled={saving}
            onClick={() => onOpenChange(false)}
            className="rounded-buttons border border-graphite p-2 text-medium-gray transition hover:bg-surface hover:text-white"
            aria-label="Close edit profile"
          >
            <CircleX className="size-4" />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name">
              <input
                value={form.fullname}
                onChange={(event) => syncForm({ ...form, fullname: event.target.value })}
                className={inputClassName}
              />
            </Field>
            <Field label="Email">
              <input value={form.email} disabled className={`${inputClassName} cursor-not-allowed opacity-70`} />
            </Field>
            <Field label="Student ID">
              <input value={form.studentId} disabled className={`${inputClassName} cursor-not-allowed opacity-70`} />
            </Field>
            <Field label="Authentication">
              <input value={form.authProvider ?? "local"} disabled className={`${inputClassName} cursor-not-allowed opacity-70`} />
            </Field>
          </div>

          <div className="space-y-4 rounded-xl border border-graphite bg-surface p-4">
            <h3 className="text-sm font-semibold text-white">Academic information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="University">
                <input
                  value={form.university ?? ""}
                  onChange={(event) => syncForm({ ...form, university: event.target.value })}
                  className={inputClassName}
                  placeholder="University"
                />
              </Field>
              <Field label="College">
                <select
                  value={form.college}
                  onChange={(event) => syncForm({ ...form, college: event.target.value })}
                  className={inputClassName}
                >
                  {!form.college ? <option value="" disabled>Select a college</option> : null}
                  {form.college && !collegeOptions.some((college) => college.name === form.college) ? (
                    <option value={form.college}>{form.college} (current)</option>
                  ) : null}
                  {collegeOptions.map((college) => (
                    <option key={college.id} value={college.name}>{college.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="College ID">
                <input
                  value={form.collegeId}
                  onChange={(event) => syncForm({ ...form, collegeId: event.target.value })}
                  className={inputClassName}
                />
              </Field>
              <Field label="Branch">
                <select
                  value={form.branch}
                  onChange={(event) => syncForm({ ...form, branch: event.target.value as AuthUser["branch"] })}
                  className={inputClassName}
                >
                  {form.branch && !branchOptions.some((branch) => branch.value === form.branch) ? (
                    <option value={form.branch}>{form.branch} (current)</option>
                  ) : null}
                  {branchOptions.map((branch) => (
                    <option key={branch.value} value={branch.value}>{branch.label}</option>
                  ))}
                </select>
              </Field>
              <Field label="Current year">
                <input
                  type="number"
                  value={form.currentYear ?? ""}
                  onChange={(event) => syncForm({ ...form, currentYear: Number(event.target.value) || 0 })}
                  className={inputClassName}
                />
              </Field>
              <Field label="Passing year">
                <input
                  type="number"
                  value={form.passingYear ?? ""}
                  onChange={(event) => syncForm({ ...form, passingYear: Number(event.target.value) || 0 })}
                  className={inputClassName}
                />
              </Field>
              <Field label="CGPA">
                <input
                  type="number"
                  min={0}
                  max={10}
                  step="0.1"
                  value={form.cgpa ?? ""}
                  onChange={(event) => syncForm({ ...form, cgpa: event.target.value ? Number(event.target.value) : null })}
                  className={inputClassName}
                />
              </Field>
              <Field label="10th %">
                <input
                  type="number"
                  min={0}
                  max={100}
                  step="0.1"
                  value={form.tenthPercentage ?? ""}
                  onChange={(event) => syncForm({ ...form, tenthPercentage: event.target.value ? Number(event.target.value) : null })}
                  className={inputClassName}
                />
              </Field>
              <Field label="12th %">
                <input
                  type="number"
                  min={0}
                  max={100}
                  step="0.1"
                  value={form.twelfthPercentage ?? ""}
                  onChange={(event) => syncForm({ ...form, twelfthPercentage: event.target.value ? Number(event.target.value) : null })}
                  className={inputClassName}
                />
              </Field>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-graphite bg-surface p-4">
            <h3 className="text-sm font-semibold text-white">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.length === 0 ? <span className="text-sm text-medium-gray">No skills added yet.</span> : null}
              {skillList.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => syncForm({ ...form, skills: skillList.filter((item) => item !== skill) })}
                  className="inline-flex items-center gap-1 rounded-full border border-graphite bg-[#171717] px-2.5 py-1.5 text-xs text-white transition hover:border-white/60"
                >
                  {skill}
                  <Trash2 className="size-3 text-muted-gray" />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newSkill}
                onChange={(event) => setNewSkill(event.target.value)}
                placeholder="Add a skill"
                className={`${inputClassName} flex-1`}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const skill = newSkill.trim();
                  if (!skill) return;
                  if (!skillList.includes(skill)) {
                    syncForm({ ...form, skills: [...skillList, skill] });
                  }
                  setNewSkill("");
                }}
              >
                <Plus className="mr-1 size-3" /> Add
              </Button>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-graphite bg-surface p-4">
            <h3 className="text-sm font-semibold text-white">Coding profiles</h3>
            <div className="space-y-3">
              {codingProfiles.length === 0 ? <p className="text-sm text-medium-gray">No coding profiles connected.</p> : null}
              {codingProfiles.map((profile, index) => (
                <div key={`${profile.platform}-${index}`} className="flex flex-col gap-2 rounded-xl border border-graphite bg-[#171717] p-3 sm:flex-row">
                  <div className="flex min-w-0 items-center gap-2 sm:max-w-[210px]">
                    <PlatformIcon platform={profile.platform} className="size-[18px] shrink-0 text-medium-gray" />
                    <select
                      value={profile.platform}
                      aria-label="Coding platform"
                      onChange={(event) => {
                        const nextProfiles = [...codingProfiles];
                        nextProfiles[index] = { ...nextProfiles[index], platform: event.target.value as typeof platformOptions[number] };
                        syncForm({ ...form, codingProfiles: nextProfiles });
                      }}
                      className={inputClassName}
                    >
                      {platformOptions.map((platform) => (
                        <option key={platform} value={platform}>{getPlatformLabel(platform)}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    value={profile.profileUrl}
                    aria-label={`${getPlatformLabel(profile.platform)} profile URL`}
                    onChange={(event) => {
                      const nextProfiles = [...codingProfiles];
                      nextProfiles[index] = { ...nextProfiles[index], profileUrl: event.target.value };
                      syncForm({ ...form, codingProfiles: nextProfiles });
                    }}
                    className={`${inputClassName} flex-1`}
                    placeholder="https://..."
                  />
                  <button
                    type="button"
                    onClick={() => syncForm({ ...form, codingProfiles: codingProfiles.filter((_, itemIndex) => itemIndex !== index) })}
                    className="rounded-xl border border-graphite p-2 text-medium-gray transition hover:border-red-500/50 hover:text-red-300"
                    aria-label="Remove coding profile"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-dashed border-graphite p-3 sm:flex-row">
              <div className="flex min-w-0 items-center gap-2 sm:max-w-[210px]">
                <PlatformIcon platform={newProfilePlatform} className="size-[18px] shrink-0 text-medium-gray" />
                <select
                  value={newProfilePlatform}
                  aria-label="New coding platform"
                  onChange={(event) => setNewProfilePlatform(event.target.value as (typeof platformOptions)[number])}
                  className={inputClassName}
                >
                  {platformOptions.map((platform) => (
                    <option key={platform} value={platform}>{getPlatformLabel(platform)}</option>
                  ))}
                </select>
              </div>
              <input
                value={newProfileUrl}
                onChange={(event) => setNewProfileUrl(event.target.value)}
                className={`${inputClassName} flex-1`}
                placeholder="Profile URL"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const trimmedUrl = newProfileUrl.trim();
                  if (!trimmedUrl) return;
                  syncForm({
                    ...form,
                    codingProfiles: [...codingProfiles, { platform: newProfilePlatform, profileUrl: trimmedUrl }],
                  });
                  setNewProfileUrl("");
                }}
              >
                <Link2 className="mr-1 size-3" /> Add
              </Button>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-graphite bg-surface p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">Projects</h3>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => syncForm({
                  ...form,
                  projects: [
                    ...(form.projects ?? []),
                    { _id: "", title: "", description: "", technologies: [], githubUrl: "", liveUrl: "", startDate: null, endDate: null },
                  ],
                })}
              >
                <Plus className="mr-1 size-3" /> Add
              </Button>
            </div>
            <div className="space-y-3">
              {(form.projects ?? []).length === 0 ? <p className="text-sm text-medium-gray">No projects added yet.</p> : null}
              {(form.projects ?? []).map((project, index) => (
                <div key={project._id ?? `project-${index}`} className="space-y-3 rounded-xl border border-graphite bg-[#171717] p-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={project.title ?? ""}
                      onChange={(event) => {
                        const nextProjects = [...(form.projects ?? [])];
                        nextProjects[index] = { ...project, title: event.target.value };
                        syncForm({ ...form, projects: nextProjects });
                      }}
                      className={inputClassName}
                      placeholder="Project title"
                    />
                    <input
                      value={project.githubUrl ?? ""}
                      onChange={(event) => {
                        const nextProjects = [...(form.projects ?? [])];
                        nextProjects[index] = { ...project, githubUrl: event.target.value };
                        syncForm({ ...form, projects: nextProjects });
                      }}
                      className={inputClassName}
                      placeholder="GitHub URL"
                    />
                  </div>
                  <textarea
                    value={project.description ?? ""}
                    onChange={(event) => {
                      const nextProjects = [...(form.projects ?? [])];
                      nextProjects[index] = { ...project, description: event.target.value };
                      syncForm({ ...form, projects: nextProjects });
                    }}
                    className={`${inputClassName} min-h-[80px] resize-y`}
                    placeholder="Project summary"
                  />
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input
                      value={project.liveUrl ?? ""}
                      onChange={(event) => {
                        const nextProjects = [...(form.projects ?? [])];
                        nextProjects[index] = { ...project, liveUrl: event.target.value };
                        syncForm({ ...form, projects: nextProjects });
                      }}
                      className={inputClassName}
                      placeholder="Live URL"
                    />
                    <input
                      type="date"
                      value={formatDateValue(project.startDate ?? null)}
                      onChange={(event) => {
                        const nextProjects = [...(form.projects ?? [])];
                        nextProjects[index] = { ...project, startDate: event.target.value || null };
                        syncForm({ ...form, projects: nextProjects });
                      }}
                      className={inputClassName}
                    />
                    <input
                      type="date"
                      value={formatDateValue(project.endDate ?? null)}
                      onChange={(event) => {
                        const nextProjects = [...(form.projects ?? [])];
                        nextProjects[index] = { ...project, endDate: event.target.value || null };
                        syncForm({ ...form, projects: nextProjects });
                      }}
                      className={inputClassName}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <input
                      value={(project.technologies ?? []).join(", ")}
                      onChange={(event) => {
                        const nextProjects = [...(form.projects ?? [])];
                        nextProjects[index] = { ...project, technologies: parseTechnologies(event.target.value) };
                        syncForm({ ...form, projects: nextProjects });
                      }}
                      className={`${inputClassName} flex-1`}
                      placeholder="Technologies (comma separated)"
                    />
                    <button
                      type="button"
                      onClick={() => syncForm({ ...form, projects: (form.projects ?? []).filter((_, itemIndex) => itemIndex !== index) })}
                      className="rounded-xl border border-graphite p-2 text-medium-gray transition hover:border-red-500/50 hover:text-red-300"
                      aria-label="Remove project"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-graphite bg-surface p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">Certificates</h3>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => syncForm({
                  ...form,
                  certificates: [
                    ...(form.certificates ?? []),
                    { _id: "", name: "", issuingOrganization: "", credentialId: "", credentialUrl: "", issueDate: null },
                  ],
                })}
              >
                <Plus className="mr-1 size-3" /> Add
              </Button>
            </div>
            <div className="space-y-3">
              {(form.certificates ?? []).length === 0 ? <p className="text-sm text-medium-gray">No certificates added yet.</p> : null}
              {(form.certificates ?? []).map((certificate, index) => (
                <div key={certificate._id ?? `certificate-${index}`} className="space-y-3 rounded-xl border border-graphite bg-[#171717] p-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={certificate.name ?? ""}
                      onChange={(event) => {
                        const nextCertificates = [...(form.certificates ?? [])];
                        nextCertificates[index] = { ...certificate, name: event.target.value };
                        syncForm({ ...form, certificates: nextCertificates });
                      }}
                      className={inputClassName}
                      placeholder="Certificate name"
                    />
                    <input
                      value={certificate.issuingOrganization ?? ""}
                      onChange={(event) => {
                        const nextCertificates = [...(form.certificates ?? [])];
                        nextCertificates[index] = { ...certificate, issuingOrganization: event.target.value };
                        syncForm({ ...form, certificates: nextCertificates });
                      }}
                      className={inputClassName}
                      placeholder="Issuing organization"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input
                      value={certificate.credentialId ?? ""}
                      onChange={(event) => {
                        const nextCertificates = [...(form.certificates ?? [])];
                        nextCertificates[index] = { ...certificate, credentialId: event.target.value };
                        syncForm({ ...form, certificates: nextCertificates });
                      }}
                      className={inputClassName}
                      placeholder="Credential ID"
                    />
                    <input
                      value={certificate.credentialUrl ?? ""}
                      onChange={(event) => {
                        const nextCertificates = [...(form.certificates ?? [])];
                        nextCertificates[index] = { ...certificate, credentialUrl: event.target.value };
                        syncForm({ ...form, certificates: nextCertificates });
                      }}
                      className={inputClassName}
                      placeholder="Credential URL"
                    />
                    <input
                      type="date"
                      value={formatDateValue(certificate.issueDate ?? null)}
                      onChange={(event) => {
                        const nextCertificates = [...(form.certificates ?? [])];
                        nextCertificates[index] = { ...certificate, issueDate: event.target.value || null };
                        syncForm({ ...form, certificates: nextCertificates });
                      }}
                      className={inputClassName}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => syncForm({ ...form, certificates: (form.certificates ?? []).filter((_, itemIndex) => itemIndex !== index) })}
                      className="rounded-xl border border-graphite p-2 text-medium-gray transition hover:border-red-500/50 hover:text-red-300"
                      aria-label="Remove certificate"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-graphite bg-surface p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">Achievements</h3>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => syncForm({
                  ...form,
                  achievements: [
                    ...(form.achievements ?? []),
                    { _id: "", title: "", description: "", organization: "", proofUrl: "", date: null },
                  ],
                })}
              >
                <Plus className="mr-1 size-3" /> Add
              </Button>
            </div>
            <div className="space-y-3">
              {(form.achievements ?? []).length === 0 ? <p className="text-sm text-medium-gray">No achievements added yet.</p> : null}
              {(form.achievements ?? []).map((achievement, index) => (
                <div key={achievement._id ?? `achievement-${index}`} className="space-y-3 rounded-xl border border-graphite bg-[#171717] p-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={achievement.title ?? ""}
                      onChange={(event) => {
                        const nextAchievements = [...(form.achievements ?? [])];
                        nextAchievements[index] = { ...achievement, title: event.target.value };
                        syncForm({ ...form, achievements: nextAchievements });
                      }}
                      className={inputClassName}
                      placeholder="Achievement title"
                    />
                    <input
                      value={achievement.organization ?? ""}
                      onChange={(event) => {
                        const nextAchievements = [...(form.achievements ?? [])];
                        nextAchievements[index] = { ...achievement, organization: event.target.value };
                        syncForm({ ...form, achievements: nextAchievements });
                      }}
                      className={inputClassName}
                      placeholder="Organization"
                    />
                  </div>
                  <textarea
                    value={achievement.description ?? ""}
                    onChange={(event) => {
                      const nextAchievements = [...(form.achievements ?? [])];
                      nextAchievements[index] = { ...achievement, description: event.target.value };
                      syncForm({ ...form, achievements: nextAchievements });
                    }}
                    className={`${inputClassName} min-h-[80px] resize-y`}
                    placeholder="Achievement details"
                  />
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input
                      value={achievement.proofUrl ?? ""}
                      onChange={(event) => {
                        const nextAchievements = [...(form.achievements ?? [])];
                        nextAchievements[index] = { ...achievement, proofUrl: event.target.value };
                        syncForm({ ...form, achievements: nextAchievements });
                      }}
                      className={inputClassName}
                      placeholder="Proof URL"
                    />
                    <input
                      type="date"
                      value={formatDateValue(achievement.date ?? null)}
                      onChange={(event) => {
                        const nextAchievements = [...(form.achievements ?? [])];
                        nextAchievements[index] = { ...achievement, date: event.target.value || null };
                        syncForm({ ...form, achievements: nextAchievements });
                      }}
                      className={inputClassName}
                    />
                    <button
                      type="button"
                      onClick={() => syncForm({ ...form, achievements: (form.achievements ?? []).filter((_, itemIndex) => itemIndex !== index) })}
                      className="rounded-xl border border-graphite p-2 text-medium-gray transition hover:border-red-500/50 hover:text-red-300"
                      aria-label="Remove achievement"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-graphite bg-surface p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">Hackathons</h3>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => syncForm({
                  ...form,
                  hackathons: [
                    ...(form.hackathons ?? []),
                    { _id: "", name: "", organization: "", role: "PARTICIPANT", teamName: "", projectName: "", description: "", technologies: [], position: "", date: null, certificateUrl: "", projectUrl: "" },
                  ],
                })}
              >
                <Plus className="mr-1 size-3" /> Add
              </Button>
            </div>
            <div className="space-y-3">
              {(form.hackathons ?? []).length === 0 ? <p className="text-sm text-medium-gray">No hackathons added yet.</p> : null}
              {(form.hackathons ?? []).map((hackathon, index) => (
                <div key={hackathon._id ?? `hackathon-${index}`} className="space-y-3 rounded-xl border border-graphite bg-[#171717] p-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={hackathon.name ?? ""}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, name: event.target.value };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                      placeholder="Hackathon name"
                    />
                    <input
                      value={hackathon.organization ?? ""}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, organization: event.target.value };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                      placeholder="Organization"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <select
                      value={hackathon.role ?? "PARTICIPANT"}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, role: event.target.value as typeof hackathon.role };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                    >
                      <option value="PARTICIPANT">Participant</option>
                      <option value="TEAM_LEAD">Team Lead</option>
                      <option value="TEAM_MEMBER">Team Member</option>
                      <option value="MENTOR">Mentor</option>
                      <option value="OTHER">Other</option>
                    </select>
                    <input
                      value={hackathon.position ?? ""}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, position: event.target.value };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                      placeholder="Position / result"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={hackathon.teamName ?? ""}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, teamName: event.target.value };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                      placeholder="Team name"
                    />
                    <input
                      value={hackathon.projectName ?? ""}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, projectName: event.target.value };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                      placeholder="Project name"
                    />
                  </div>
                  <textarea
                    value={hackathon.description ?? ""}
                    onChange={(event) => {
                      const nextHackathons = [...(form.hackathons ?? [])];
                      nextHackathons[index] = { ...hackathon, description: event.target.value };
                      syncForm({ ...form, hackathons: nextHackathons });
                    }}
                    className={`${inputClassName} min-h-[80px] resize-y`}
                    placeholder="What did you build?"
                  />
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input
                      value={(hackathon.technologies ?? []).join(", ")}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, technologies: parseTechnologies(event.target.value) };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                      placeholder="Technologies"
                    />
                    <input
                      type="date"
                      value={formatDateValue(hackathon.date ?? null)}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, date: event.target.value || null };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                    />
                    <button
                      type="button"
                      onClick={() => syncForm({ ...form, hackathons: (form.hackathons ?? []).filter((_, itemIndex) => itemIndex !== index) })}
                      className="rounded-xl border border-graphite p-2 text-medium-gray transition hover:border-red-500/50 hover:text-red-300"
                      aria-label="Remove hackathon"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={hackathon.certificateUrl ?? ""}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, certificateUrl: event.target.value };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                      placeholder="Certificate URL"
                    />
                    <input
                      value={hackathon.projectUrl ?? ""}
                      onChange={(event) => {
                        const nextHackathons = [...(form.hackathons ?? [])];
                        nextHackathons[index] = { ...hackathon, projectUrl: event.target.value };
                        syncForm({ ...form, hackathons: nextHackathons });
                      }}
                      className={inputClassName}
                      placeholder="Project URL"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-graphite bg-surface p-4">
            <h3 className="text-sm font-semibold text-white">Career links</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Resume URL">
                <Input
                  value={form.resumeUrl ?? ""}
                  onChange={(event) => syncForm({ ...form, resumeUrl: event.target.value })}
                  className="focus:border-lavender focus:ring-2 focus:ring-lavender/20"
                  placeholder="https://..."
                />
                <span className="text-xs leading-5 text-muted-gray">
                  Paste a Google Drive link with sharing set to &apos;Anyone with the link can view&apos;.
                </span>
              </Field>
              <Field label="Portfolio URL">
                <Input
                  value={form.portfolioUrl ?? ""}
                  onChange={(event) => syncForm({ ...form, portfolioUrl: event.target.value })}
                  className="focus:border-lavender focus:ring-2 focus:ring-lavender/20"
                  placeholder="https://..."
                />
              </Field>
            </div>
          </div>

          {error ? <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p> : null}
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-graphite bg-[#111111] px-5 py-4">
          <Button type="button" variant="ghost" disabled={saving} onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="button" disabled={saving} onClick={() => void handleSubmit()}>
            <Save className="mr-2 size-4" /> {saving ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-1.5 text-sm text-medium-gray">
      <span className="text-xs uppercase tracking-[0.12em] text-muted-gray">{label}</span>
      {children}
    </label>
  );
}
