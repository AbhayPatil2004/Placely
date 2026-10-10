export type LearnMaterial = {
  slug: string;
  title: string;
  description: string;
  type: "Read" | "Watch";
  duration: string;
};

export type PracticeProblem = {
  slug: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "solved" | "attempted" | "unsolved";
};

export type DsaTopic = {
  slug: string;
  title: string;
  total: number;
  completed: number;
  materials: LearnMaterial[];
  problems: PracticeProblem[];
};

export const dsaTopics: DsaTopic[] = [
  {
    slug: "basics",
    title: "Basics",
    total: 9,
    completed: 0,
    materials: [
      { slug: "time-complexity", title: "Time Complexity", description: "Understand how to reason about algorithm efficiency.", type: "Read", duration: "10 min read" },
      { slug: "space-complexity", title: "Space Complexity", description: "Learn to measure memory used by your solutions.", type: "Watch", duration: "8 min watch" },
    ],
    problems: [
      { slug: "swap-two-numbers", title: "Swap Two Numbers", difficulty: "Easy", status: "unsolved" },
      { slug: "reverse-a-number", title: "Reverse a Number", difficulty: "Easy", status: "unsolved" },
      { slug: "check-prime", title: "Check Prime", difficulty: "Medium", status: "unsolved" },
    ],
  },
  {
    slug: "arrays",
    title: "Arrays",
    total: 12,
    completed: 0,
    materials: [
      { slug: "introduction-to-arrays", title: "Introduction to Arrays", description: "Build a strong foundation with indexed collections.", type: "Read", duration: "12 min read" },
      { slug: "two-pointer-technique", title: "Two Pointer Technique", description: "Solve array problems with a focused traversal strategy.", type: "Watch", duration: "15 min watch" },
      { slug: "kadanes-algorithm", title: "Kadane's Algorithm", description: "Find the best contiguous subarray efficiently.", type: "Read", duration: "10 min read" },
    ],
    problems: [
      { slug: "find-max-element", title: "Find Max Element", difficulty: "Easy", status: "unsolved" },
      { slug: "two-sum", title: "Two Sum", difficulty: "Easy", status: "unsolved" },
      { slug: "kadanes-algorithm", title: "Kadane's Algorithm", difficulty: "Medium", status: "unsolved" },
      { slug: "trapping-rain-water", title: "Trapping Rain Water", difficulty: "Hard", status: "unsolved" },
    ],
  },
  {
    slug: "strings",
    title: "Strings",
    total: 8,
    completed: 0,
    materials: [
      { slug: "string-basics", title: "String Basics", description: "Work confidently with characters and substrings.", type: "Read", duration: "9 min read" },
      { slug: "pattern-matching", title: "Pattern Matching", description: "Explore practical ways to find patterns in text.", type: "Watch", duration: "14 min watch" },
      { slug: "palindrome-techniques", title: "Palindrome Techniques", description: "Recognize and solve palindrome-based problems.", type: "Read", duration: "11 min read" },
    ],
    problems: [
      { slug: "reverse-a-string", title: "Reverse a String", difficulty: "Easy", status: "unsolved" },
      { slug: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", status: "unsolved" },
      { slug: "longest-substring-without-repeating-characters", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "unsolved" },
    ],
  },
];
