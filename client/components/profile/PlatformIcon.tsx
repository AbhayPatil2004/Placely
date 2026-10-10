import {
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiGithub,
  SiHackerrank,
  SiLeetcode,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link2 } from "lucide-react";
import type { IconType } from "react-icons";
import type { CodingPlatform } from "@/types/student";

const platformMeta: Record<CodingPlatform, { label: string; Icon: IconType }> = {
  LEETCODE: { label: "LeetCode", Icon: SiLeetcode },
  GITHUB: { label: "GitHub", Icon: SiGithub },
  CODECHEF: { label: "CodeChef", Icon: SiCodechef },
  CODEFORCES: { label: "Codeforces", Icon: SiCodeforces },
  GEEKSFORGEEKS: { label: "GeeksforGeeks", Icon: SiGeeksforgeeks },
  HACKERRANK: { label: "HackerRank", Icon: SiHackerrank },
  LINKEDIN: { label: "LinkedIn", Icon: FaLinkedin },
  OTHER: { label: "Other", Icon: Link2 },
};

export function getPlatformLabel(platform: CodingPlatform) {
  return platformMeta[platform].label;
}

export function PlatformIcon({
  platform,
  className,
}: {
  platform: CodingPlatform;
  className?: string;
}) {
  const { Icon, label } = platformMeta[platform];
  return <Icon className={className} aria-label={`${label} icon`} />;
}
