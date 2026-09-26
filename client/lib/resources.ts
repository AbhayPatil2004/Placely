export const resourceCategories = [
  "DSA",
  "SQL",
  "System Design",
  "Core Subjects",
  "Interview Questions",
] as const;

export type ResourceCategory = (typeof resourceCategories)[number];
export type Difficulty = "Easy" | "Medium" | "Hard";

export type Resource = {
  id: string;
  title: string;
  category: ResourceCategory;
  difficulty: Difficulty;
  topic: string;
  duration: string;
  completed?: boolean;
  description?: string;
};

export type MockTest = {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  duration: string;
  difficulty: Difficulty;
  available: boolean;
};

export const mockResources: Resource[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    category: "DSA",
    difficulty: "Easy",
    topic: "Arrays & Hashing",
    duration: "20 min",
    completed: true,
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    category: "DSA",
    difficulty: "Medium",
    topic: "Intervals",
    duration: "35 min",
  },
  {
    id: "lru-cache",
    title: "Design an LRU Cache",
    category: "DSA",
    difficulty: "Hard",
    topic: "Linked Lists",
    duration: "45 min",
  },
  {
    id: "sql-joins",
    title: "SQL Joins",
    category: "SQL",
    difficulty: "Easy",
    topic: "Query Fundamentals",
    duration: "25 min",
  },
  {
    id: "rate-limiter",
    title: "Design a Rate Limiter",
    category: "System Design",
    difficulty: "Hard",
    topic: "Distributed Systems",
    duration: "50 min",
  },
  {
    id: "solid-principles",
    title: "SOLID Principles",
    category: "Core Subjects",
    difficulty: "Medium",
    topic: "Object-Oriented Design",
    duration: "30 min",
  },
  {
    id: "behavioral-interview",
    title: "Tell me about a challenge",
    category: "Interview Questions",
    difficulty: "Easy",
    topic: "Behavioral",
    duration: "15 min",
  },
];

export const dsaLearnResources: Resource[] = [
  {
    id: "dsa-arrays",
    title: "Arrays",
    category: "DSA",
    difficulty: "Easy",
    topic: "Foundations",
    duration: "25 min",
    completed: true,
    description: "Build a reliable mental model for indexing, traversal, and in-place updates.",
  },
  {
    id: "dsa-strings",
    title: "Strings",
    category: "DSA",
    difficulty: "Easy",
    topic: "Foundations",
    duration: "20 min",
  },
  {
    id: "dsa-linked-lists",
    title: "Linked Lists",
    category: "DSA",
    difficulty: "Medium",
    topic: "Linear Data Structures",
    duration: "30 min",
  },
  {
    id: "dsa-stacks-queues",
    title: "Stacks & Queues",
    category: "DSA",
    difficulty: "Easy",
    topic: "Linear Data Structures",
    duration: "25 min",
  },
  {
    id: "dsa-binary-trees",
    title: "Binary Trees",
    category: "DSA",
    difficulty: "Medium",
    topic: "Trees",
    duration: "35 min",
  },
  {
    id: "dsa-bst",
    title: "Binary Search Trees",
    category: "DSA",
    difficulty: "Medium",
    topic: "Trees",
    duration: "30 min",
  },
  {
    id: "dsa-heaps",
    title: "Heaps",
    category: "DSA",
    difficulty: "Medium",
    topic: "Priority Structures",
    duration: "30 min",
  },
  {
    id: "dsa-hashing",
    title: "Hashing",
    category: "DSA",
    difficulty: "Easy",
    topic: "Arrays & Hashing",
    duration: "25 min",
  },
  {
    id: "dsa-two-pointers",
    title: "Two Pointer Patterns",
    category: "DSA",
    difficulty: "Medium",
    topic: "Problem Patterns",
    duration: "35 min",
  },
  {
    id: "dsa-sliding-window",
    title: "Sliding Window",
    category: "DSA",
    difficulty: "Medium",
    topic: "Problem Patterns",
    duration: "35 min",
  },
  {
    id: "dsa-graphs",
    title: "Graphs",
    category: "DSA",
    difficulty: "Hard",
    topic: "Graph Algorithms",
    duration: "45 min",
  },
  {
    id: "dsa-dynamic-programming",
    title: "Dynamic Programming",
    category: "DSA",
    difficulty: "Hard",
    topic: "Algorithmic Thinking",
    duration: "50 min",
  },
];

export const dsaMockTests: MockTest[] = [
  {
    id: "dsa-test-1",
    title: "DSA Mock Test 1",
    description: "A balanced introduction to core data structures and patterns.",
    questionCount: 20,
    duration: "30 minutes",
    difficulty: "Easy",
    available: false,
  },
  {
    id: "dsa-test-2",
    title: "DSA Mock Test 2",
    description: "Practice intermediate problem solving across common interview topics.",
    questionCount: 25,
    duration: "40 minutes",
    difficulty: "Medium",
    available: false,
  },
  {
    id: "dsa-test-3",
    title: "DSA Mock Test 3",
    description: "Challenge yourself with advanced algorithms and optimization problems.",
    questionCount: 30,
    duration: "45 minutes",
    difficulty: "Hard",
    available: false,
  },
];
