import type { LucideIcon } from "lucide-react";
import {
  Brain,
  ChartNoAxesCombined,
  Code2,
  LayoutDashboard,
  UserRound,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Workspace",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        description: "Your learning overview",
      },
      {
        label: "Subjects",
        href: "/subjects",
        icon: Brain,
        description: "Explore your subjects",
      },
    ],
  },
  {
    label: "Practice",
    items: [
      {
        label: "DSA",
        href: "/dsa",
        icon: Code2,
        description: "Data structures and algorithms",
      },
      {
        label: "Aptitude",
        href: "/aptitude",
        icon: ChartNoAxesCombined,
        description: "Sharpen your problem solving",
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        label: "Profile",
        href: "/profile",
        icon: UserRound,
        description: "Manage your profile",
      },
    ],
  },
];

export const allNavigationItems = navigationGroups.flatMap(
  (group) => group.items,
);
