export type StudentBranch =
  | "Computer Science and Engineering"
  | "Information Technology"
  | "Artificial Intelligence and Data Science"
  | "Electronics and Telecommunication Engineering"
  | "Other";

export type CodingPlatform =
  | "LEETCODE"
  | "GITHUB"
  | "CODECHEF"
  | "CODEFORCES"
  | "GEEKSFORGEEKS"
  | "HACKERRANK"
  | "LINKEDIN"
  | "OTHER";

export type HackathonRole =
  | "PARTICIPANT"
  | "TEAM_LEAD"
  | "TEAM_MEMBER"
  | "MENTOR"
  | "OTHER";

export interface StudentCodingProfile {
  platform: CodingPlatform;
  profileUrl: string;
}

export interface StudentProject {
  _id: string;
  title: string;
  description?: string | null;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  startDate?: string | null;
  endDate?: string | null;
}

export interface StudentCertificate {
  _id: string;
  name: string;
  issuingOrganization: string;
  issueDate?: string | null;
  credentialId?: string | null;
  credentialUrl?: string | null;
}

export interface StudentAchievement {
  _id: string;
  title: string;
  description?: string | null;
  date?: string | null;
  organization?: string | null;
  proofUrl?: string | null;
}

export interface StudentHackathon {
  _id: string;
  name: string;
  organization?: string | null;
  role: HackathonRole;
  teamName?: string | null;
  projectName?: string | null;
  description?: string | null;
  technologies: string[];
  position?: string | null;
  date?: string | null;
  certificateUrl?: string | null;
  projectUrl?: string | null;
}

export interface Student {
  _id: string;
  fullname: string;
  email: string;
  profileImage: string | null;
  role: "student";
  authProvider: "local" | "google";
  studentId: string;
  university?: string | null;
  college: string;
  collegeId: string;
  branch: StudentBranch;
  currentYear: number;
  passingYear: number;
  cgpa?: number | null;
  tenthPercentage?: number | null;
  twelfthPercentage?: number | null;
  skills: string[];
  codingProfiles: StudentCodingProfile[];
  projects: StudentProject[];
  certificates: StudentCertificate[];
  achievements: StudentAchievement[];
  hackathons: StudentHackathon[];
  resumeUrl?: string | null;
  portfolioUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}
