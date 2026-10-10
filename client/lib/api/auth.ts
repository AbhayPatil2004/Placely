import { apiRequest } from "./client";
import type {
  Student,
  StudentAchievement,
  StudentCertificate,
  StudentCodingProfile,
  StudentHackathon,
  StudentProject,
} from "@/types/student";

export type {
  StudentAchievement,
  StudentCertificate,
  StudentHackathon,
  StudentProject,
} from "@/types/student";
export type CodingProfile = StudentCodingProfile;
export type AuthUser = Student;

export type LoginCredentials = {
  email: string;
  password: string;
};

export type SignupPayload = {
  fullname: string;
  studentId: string;
  email: string;
  password: string;
  branch: string;
  college: string;
  collegeId: string;
  currentYear: number;
  passingYear: number;
};

export type StudentProfileUpdate = Partial<
  Pick<
    AuthUser,
    | "fullname"
    | "profileImage"
    | "studentId"
    | "university"
    | "college"
    | "collegeId"
    | "branch"
    | "currentYear"
    | "passingYear"
    | "cgpa"
    | "tenthPercentage"
    | "twelfthPercentage"
    | "skills"
    | "resumeUrl"
    | "portfolioUrl"
  >
>;

export type ResetPasswordPayload = {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
};

async function syncEntityCollection<T extends { _id?: string }>(
  previousItems: T[] = [],
  nextItems: T[] = [],
  createItem: (payload: Partial<T>) => Promise<T>,
  updateItem: (id: string, payload: Partial<T>) => Promise<T>,
  deleteItem: (id: string) => Promise<void>,
) {
  const previousById = new Map(
    (previousItems ?? [])
      .filter((item) => item?._id)
      .map((item) => [String(item._id), item]),
  );

  const nextById = new Map(
    (nextItems ?? [])
      .filter((item) => item?._id)
      .map((item) => [String(item._id), item]),
  );

  for (const [id, previousItem] of previousById) {
    const nextItem = nextById.get(id);

    if (!nextItem) {
      await deleteItem(id);
      continue;
    }

    if (JSON.stringify(previousItem) !== JSON.stringify(nextItem)) {
      const payload = { ...nextItem } as Partial<T>;
      delete payload._id;
      await updateItem(id, payload);
    }
  }

  for (const item of nextItems ?? []) {
    if (!item?._id) {
      const payload = { ...item } as Partial<T>;
      delete payload._id;
      await createItem(payload);
    }
  }

  for (const [id, nextItem] of nextById) {
    if (!previousById.has(id)) {
      const payload = { ...nextItem } as Partial<T>;
      delete payload._id;
      await createItem(payload);
    }
  }
}

export async function login(credentials: LoginCredentials): Promise<AuthUser> {
  await apiRequest<AuthUser>("/api/auth/student/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return getCurrentUser();
}

export async function signup(payload: SignupPayload): Promise<AuthUser> {
  await apiRequest<AuthUser>("/api/auth/student/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return getCurrentUser();
}

export async function logout(): Promise<{ message?: string }> {
  return apiRequest<{ message?: string }>("/api/auth/student/logout", {
    method: "POST",
  });
}

export async function getCurrentUser(): Promise<AuthUser> {
  return apiRequest<AuthUser>("/api/student/profile");
}

export async function updateStudentProfile(
  payload: StudentProfileUpdate,
): Promise<AuthUser> {
  return apiRequest<AuthUser>("/api/student/update", {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function addCodingProfile(payload: CodingProfile): Promise<CodingProfile[]> {
  return apiRequest<CodingProfile[]>("/api/student/coding-profiles", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateCodingProfile(
  platform: string,
  profileUrl: string,
): Promise<CodingProfile> {
  return apiRequest<CodingProfile>(
    `/api/student/coding-profiles/${encodeURIComponent(platform)}`,
    {
      method: "PUT",
      body: JSON.stringify({ profileUrl }),
    },
  );
}

export async function deleteCodingProfile(platform: string): Promise<void> {
  await apiRequest<unknown>(
    `/api/student/coding-profiles/${encodeURIComponent(platform)}`,
    { method: "DELETE" },
  );
}

export async function addProject(payload: Partial<StudentProject>): Promise<StudentProject> {
  return apiRequest<StudentProject>("/api/student/projects", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateProject(
  projectId: string,
  payload: Partial<StudentProject>,
): Promise<StudentProject> {
  return apiRequest<StudentProject>(`/api/student/projects/${encodeURIComponent(projectId)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deleteProject(projectId: string): Promise<void> {
  await apiRequest<unknown>(`/api/student/projects/${encodeURIComponent(projectId)}`, { method: "DELETE" });
}

export async function addCertificate(payload: Partial<StudentCertificate>): Promise<StudentCertificate> {
  return apiRequest<StudentCertificate>("/api/student/certificates", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateCertificate(
  certificateId: string,
  payload: Partial<StudentCertificate>,
): Promise<StudentCertificate> {
  return apiRequest<StudentCertificate>(`/api/student/certificates/${encodeURIComponent(certificateId)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deleteCertificate(certificateId: string): Promise<void> {
  await apiRequest<unknown>(`/api/student/certificates/${encodeURIComponent(certificateId)}`, { method: "DELETE" });
}

export async function addAchievement(payload: Partial<StudentAchievement>): Promise<StudentAchievement> {
  return apiRequest<StudentAchievement>("/api/student/achievements", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateAchievement(
  achievementId: string,
  payload: Partial<StudentAchievement>,
): Promise<StudentAchievement> {
  return apiRequest<StudentAchievement>(`/api/student/achievements/${encodeURIComponent(achievementId)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deleteAchievement(achievementId: string): Promise<void> {
  await apiRequest<unknown>(`/api/student/achievements/${encodeURIComponent(achievementId)}`, { method: "DELETE" });
}

export async function addHackathon(payload: Partial<StudentHackathon>): Promise<StudentHackathon> {
  return apiRequest<StudentHackathon>("/api/student/hackathons", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateHackathon(
  hackathonId: string,
  payload: Partial<StudentHackathon>,
): Promise<StudentHackathon> {
  return apiRequest<StudentHackathon>(`/api/student/hackathons/${encodeURIComponent(hackathonId)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deleteHackathon(hackathonId: string): Promise<void> {
  await apiRequest<unknown>(`/api/student/hackathons/${encodeURIComponent(hackathonId)}`, { method: "DELETE" });
}

export async function updateProfile(
  payload: StudentProfileUpdate,
  previousProfiles: CodingProfile[],
  nextProfiles: CodingProfile[],
  collectionState?: {
    previousProjects?: StudentProject[];
    nextProjects?: StudentProject[];
    previousCertificates?: StudentCertificate[];
    nextCertificates?: StudentCertificate[];
    previousAchievements?: StudentAchievement[];
    nextAchievements?: StudentAchievement[];
    previousHackathons?: StudentHackathon[];
    nextHackathons?: StudentHackathon[];
  },
): Promise<AuthUser> {
  const updatedUser = Object.keys(payload).length
    ? await updateStudentProfile(payload)
    : null;
  const previousByPlatform = new Map(
    previousProfiles.map((profile) => [profile.platform.toUpperCase(), profile]),
  );
  const nextByPlatform = new Map(
    nextProfiles.map((profile) => [profile.platform.toUpperCase(), profile]),
  );

  for (const [platform, profile] of previousByPlatform) {
    const nextProfile = nextByPlatform.get(platform);
    if (!nextProfile || nextProfile.platform.toUpperCase() !== platform) {
      await deleteCodingProfile(profile.platform);
    } else if (nextProfile.profileUrl !== profile.profileUrl) {
      await updateCodingProfile(profile.platform, nextProfile.profileUrl);
    }
  }

  for (const [platform, profile] of nextByPlatform) {
    if (!previousByPlatform.has(platform)) {
      await addCodingProfile(profile);
    }
  }

  await syncEntityCollection(
    collectionState?.previousProjects ?? [],
    collectionState?.nextProjects ?? [],
    addProject,
    updateProject,
    deleteProject,
  );
  await syncEntityCollection(
    collectionState?.previousCertificates ?? [],
    collectionState?.nextCertificates ?? [],
    addCertificate,
    updateCertificate,
    deleteCertificate,
  );
  await syncEntityCollection(
    collectionState?.previousAchievements ?? [],
    collectionState?.nextAchievements ?? [],
    addAchievement,
    updateAchievement,
    deleteAchievement,
  );
  await syncEntityCollection(
    collectionState?.previousHackathons ?? [],
    collectionState?.nextHackathons ?? [],
    addHackathon,
    updateHackathon,
    deleteHackathon,
  );
  return updatedUser && !nextProfiles.length && !previousProfiles.length
    ? updatedUser
    : getCurrentUser();
}

export async function forgotPassword(payload: { email: string }): Promise<{ message?: string }> {
  return apiRequest<{ message?: string }>("/api/auth/student/forgot-password", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function resetPassword(
  payload: ResetPasswordPayload,
): Promise<{ message?: string }> {
  return apiRequest<{ message?: string }>(
    "/api/auth/student/verify-otp-reset-password",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
}
