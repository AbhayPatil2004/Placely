"use client";

import { useMemo, useState, type ReactNode } from "react";
import { CircleX, Link2, Plus, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AuthUser } from "@/lib/auth-context";

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
  onSave: (value: AuthUser) => void;
};

const emptyUrl = (value?: string | null) => (value && value.trim() ? value.trim() : "");

function isValidUrl(value: string) {
  if (!value.trim()) return true;

  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

const inputClassName = cn(
  "h-10 w-full rounded-xl border border-graphite bg-[#171717] px-3 text-sm text-white outline-none",
  "placeholder:text-muted-gray focus:border-white focus:ring-2 focus:ring-white/10",
);

export function ProfileEditSheet({ user, open, onOpenChange, onSave }: ProfileEditSheetProps) {
  const [form, setForm] = useState<AuthUser>({ ...user });
  const [newSkill, setNewSkill] = useState("");
  const [newProfilePlatform, setNewProfilePlatform] = useState<(typeof platformOptions)[number]>("LEETCODE");
  const [newProfileUrl, setNewProfileUrl] = useState("");
  const [error, setError] = useState("");

  const skillList = useMemo(() => form.skills ?? [], [form.skills]);
  const codingProfiles = useMemo(() => form.codingProfiles ?? [], [form.codingProfiles]);

  const syncForm = (next: AuthUser) => {
    setForm(next);
    setError("");
  };

  if (!open) return null;

  const handleSubmit = () => {
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

    if (!isValidUrl(form.resumeUrl ?? "") || !isValidUrl(form.portfolioUrl ?? "")) {
      setError("Resume and portfolio URLs must be valid URLs.");
      return;
    }

    onSave({
      ...form,
      fullname: trimmedFullName,
      email: form.email.trim(),
      studentId: form.studentId.trim(),
      university: emptyUrl(form.university),
      college: form.college.trim() || user.college,
      branch: form.branch.trim() || user.branch,
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
    });
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col border-l border-graphite bg-[#111111] shadow-2xl">
        <div className="flex items-center justify-between border-b border-graphite px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-muted-gray">Update profile</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Edit details</h2>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-full border border-graphite p-2 text-medium-gray transition hover:bg-surface hover:text-white"
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

          <div className="space-y-4 rounded-2xl border border-graphite bg-surface p-4">
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
                <input
                  value={form.college}
                  onChange={(event) => syncForm({ ...form, college: event.target.value })}
                  className={inputClassName}
                />
              </Field>
              <Field label="College ID">
                <input
                  value={form.collegeId}
                  onChange={(event) => syncForm({ ...form, collegeId: event.target.value })}
                  className={inputClassName}
                />
              </Field>
              <Field label="Branch">
                <input
                  value={form.branch}
                  onChange={(event) => syncForm({ ...form, branch: event.target.value })}
                  className={inputClassName}
                />
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

          <div className="space-y-4 rounded-2xl border border-graphite bg-surface p-4">
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

          <div className="space-y-4 rounded-2xl border border-graphite bg-surface p-4">
            <h3 className="text-sm font-semibold text-white">Coding profiles</h3>
            <div className="space-y-3">
              {codingProfiles.length === 0 ? <p className="text-sm text-medium-gray">No coding profiles connected.</p> : null}
              {codingProfiles.map((profile, index) => (
                <div key={`${profile.platform}-${index}`} className="flex flex-col gap-2 rounded-xl border border-graphite bg-[#171717] p-3 sm:flex-row">
                  <select
                    value={profile.platform}
                    onChange={(event) => {
                      const nextProfiles = [...codingProfiles];
                      nextProfiles[index] = { ...nextProfiles[index], platform: event.target.value as typeof platformOptions[number] };
                      syncForm({ ...form, codingProfiles: nextProfiles });
                    }}
                    className={`${inputClassName} sm:max-w-[180px]`}
                  >
                    {platformOptions.map((platform) => (
                      <option key={platform} value={platform}>{platform}</option>
                    ))}
                  </select>
                  <input
                    value={profile.profileUrl}
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
              <select
                value={newProfilePlatform}
                onChange={(event) => setNewProfilePlatform(event.target.value as (typeof platformOptions)[number])}
                className={`${inputClassName} sm:max-w-[180px]`}
              >
                {platformOptions.map((platform) => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
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

          <div className="space-y-4 rounded-2xl border border-graphite bg-surface p-4">
            <h3 className="text-sm font-semibold text-white">Career links</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Resume URL">
                <input
                  value={form.resumeUrl ?? ""}
                  onChange={(event) => syncForm({ ...form, resumeUrl: event.target.value })}
                  className={inputClassName}
                  placeholder="https://..."
                />
              </Field>
              <Field label="Portfolio URL">
                <input
                  value={form.portfolioUrl ?? ""}
                  onChange={(event) => syncForm({ ...form, portfolioUrl: event.target.value })}
                  className={inputClassName}
                  placeholder="https://..."
                />
              </Field>
            </div>
          </div>

          {error ? <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p> : null}
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-graphite bg-[#111111] px-5 py-4">
          <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit}>
            <Save className="mr-2 size-4" /> Save changes
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
