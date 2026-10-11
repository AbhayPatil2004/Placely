"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { AlertCircle, ArrowRight, Code2, Flame, ListChecks, UserRound } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { ApiError, apiRequest } from "@/lib/api/client";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type DashboardProblem = {
  _id: string;
  difficulty?: string;
};

type SolvedProblem = {
  problemId: string;
  status: string;
};

type DsaProgress = {
  total: number;
  solved: number;
  byDifficulty: {
    basic: { solved: number; remaining: number };
    easy: { solved: number; remaining: number };
    medium: { solved: number; remaining: number };
    hard: { solved: number; remaining: number };
  };
};

const difficultyLabels = ["Basic", "Easy", "Medium", "Hard"] as const;

const chartOptions: ChartOptions<"bar"> = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "#bcbcbc",
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => ` ${context.dataset.label}: ${context.parsed.x}`,
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      stacked: true,
      ticks: { color: "#a3a3a3", precision: 0 },
      grid: { color: "#3f3f3f" },
      title: { display: true, text: "Questions", color: "#a3a3a3" },
    },
    y: {
      stacked: true,
      ticks: { color: "#eeeeee" },
      grid: { display: false },
    },
  },
};

export function DashboardHome() {
  const { user } = useAuth();
  const name = user?.fullname?.split(" ")[0] || "there";
  const [progress, setProgress] = useState<DsaProgress | null>(null);
  const [progressLoading, setProgressLoading] = useState(true);
  const [progressError, setProgressError] = useState("");

  useEffect(() => {
    let active = true;

    const loadProgress = async () => {
      try {
        const [problems, solvedRecords] = await Promise.all([
          apiRequest<DashboardProblem[]>("/api/problem"),
          apiRequest<SolvedProblem[]>("/api/solved/problem").catch((error: unknown) => {
            if (error instanceof ApiError && error.status === 404) return [];
            throw error;
          }),
        ]);

        if (!Array.isArray(problems) || !Array.isArray(solvedRecords)) {
          throw new Error("The DSA progress response was invalid.");
        }

        const solvedIds = new Set(
          solvedRecords
            .filter((record) => record.status === "SOLVED")
            .map((record) => record.problemId),
        );
        const difficultyCounts = {
          basic: { solved: 0, remaining: 0 },
          easy: { solved: 0, remaining: 0 },
          medium: { solved: 0, remaining: 0 },
          hard: { solved: 0, remaining: 0 },
        };
        let solved = 0;

        for (const problem of problems) {
          const isSolved = solvedIds.has(problem._id);
          if (isSolved) solved += 1;

          const difficulty = problem.difficulty?.toLowerCase();
          if (difficulty && difficulty in difficultyCounts) {
            const counts = difficultyCounts[difficulty as keyof typeof difficultyCounts];
            if (isSolved) counts.solved += 1;
            else counts.remaining += 1;
          }
        }

        if (active) {
          setProgress({
            total: problems.length,
            solved,
            byDifficulty: difficultyCounts,
          });
        }
      } catch (error) {
        if (active) {
          setProgressError(
            error instanceof Error ? error.message : "Unable to load DSA progress.",
          );
        }
      } finally {
        if (active) setProgressLoading(false);
      }
    };

    void loadProgress();
    return () => {
      active = false;
    };
  }, []);

  const solvedPercentage = progress && progress.total > 0
    ? (progress.solved / progress.total) * 100
    : 0;
  const chartData = progress
    ? {
        labels: [...difficultyLabels],
        datasets: [
          {
            label: "Solved",
            data: difficultyLabels.map((label) => progress.byDifficulty[label.toLowerCase() as keyof DsaProgress["byDifficulty"]].solved),
            backgroundColor: "#2dd4bf",
            borderRadius: 4,
            barThickness: 18,
          },
          {
            label: "Remaining",
            data: difficultyLabels.map((label) => progress.byDifficulty[label.toLowerCase() as keyof DsaProgress["byDifficulty"]].remaining),
            backgroundColor: "#525252",
            borderRadius: 4,
            barThickness: 18,
          },
        ],
      }
    : null;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-gray">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-1 text-heading font-semibold text-white">
          Welcome back, {name}
        </h1>
        <p className="mt-2 text-sm text-medium-gray">
          Keep building the skills that move your placement journey forward.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat
          icon={<ListChecks />}
          label="Problems Solved"
          value={progressLoading ? "..." : progress ? `${progress.solved} / ${progress.total}` : "—"}
        />
        <Stat icon={<Flame />} label="Current Streak" value="0 days" />
        <Stat
          label="Overall DSA Progress"
          value={progressLoading ? "..." : progress ? `${Math.round(solvedPercentage)}%` : "—"}
          progress={progress ? solvedPercentage : undefined}
        />
        <Stat icon={<UserRound />} label="Profile Completion" value="14%" />
      </div>

      <section
        aria-labelledby="dsa-distribution-title"
        className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle"
      >
        <div className="mb-5">
          <p className="text-xs uppercase tracking-wide text-muted-gray">Your progress</p>
          <h2 id="dsa-distribution-title" className="mt-1 text-base font-semibold text-white">
            DSA question distribution
          </h2>
        </div>
        {progressLoading ? (
          <div className="h-64 animate-pulse rounded-buttons bg-abyss" role="status">
            Loading DSA progress...
          </div>
        ) : progressError ? (
          <div role="alert" className="flex items-start gap-2 rounded-buttons border border-error-red/40 bg-error-red/10 p-4 text-sm text-error-red">
            <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            <p>{progressError}</p>
          </div>
        ) : progress && chartData ? (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-center">
            <div className="rounded-buttons border border-graphite bg-abyss p-4">
              <p className="text-xs uppercase tracking-wide text-muted-gray">Questions solved</p>
              <p className="mt-2 text-3xl font-semibold tabular-nums text-white">
                {progress.solved.toLocaleString()}
                <span className="ml-1 text-base font-normal text-muted-gray">
                  / {progress.total.toLocaleString()}
                </span>
              </p>
              <p className="mt-2 text-sm text-medium-gray">
                {progress.total - progress.solved} questions remaining
              </p>
              <div
                role="progressbar"
                aria-label="Overall DSA progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(solvedPercentage)}
                className="mt-4 h-2 overflow-hidden rounded-full bg-graphite"
              >
                <div
                  className="h-full rounded-full bg-teal-400 transition-[width]"
                  style={{ width: `${solvedPercentage}%` }}
                />
              </div>
            </div>
            <div className="h-64 min-w-0">
              <Bar
                data={chartData}
                options={chartOptions}
                role="img"
                aria-label="Solved and remaining DSA questions by difficulty"
              />
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-gray">No DSA questions are available yet.</p>
        )}
      </section>

      <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-gray">
              Preparation workspace
            </p>
            <h2 className="mt-2 text-lg font-semibold text-white">
              Practice DSA with the coding workspace
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-medium-gray">
              Open the canonical DSA practice flow to select a problem, read its
              statement, and solve it in the existing Monaco editor.
            </p>
          </div>
          <Link
            href="/dsa/practice"
            className="inline-flex items-center gap-2 text-sm text-lavender hover:underline"
          >
            Open DSA <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-gray">
              Continue preparing
            </p>
            <h2 className="mt-1 text-base font-semibold text-white">
              Your subject areas
            </h2>
          </div>
          <Link
            href="/subjects"
            className="text-sm text-lavender hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PreparationCard
            href="/dsa/practice"
            icon={<Code2 className="size-5" />}
            title="DSA"
            description="Practice problems in the Monaco coding workspace."
          />
          <PreparationCard
            href="/subjects"
            title="SQL"
            description="Build confidence with structured subject practice."
          />
          <PreparationCard
            href="/aptitude"
            title="Aptitude"
            description="Sharpen problem solving with focused questions."
          />
          <PreparationCard
            href="/subjects"
            title="Core subjects"
            description="Review the foundations for technical interviews."
          />
        </div>
      </section>

      <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
        <h2 className="text-base font-semibold text-white">Recent activity</h2>
        <div className="mt-4 divide-y divide-graphite">
          <p className="py-3 text-sm text-muted-gray">
            No activity yet. Start learning or solving to see your progress here.
          </p>
        </div>
      </section>
    </div>
  );
}

function PreparationCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-cards border border-graphite bg-surface p-4 shadow-subtle transition-colors hover:border-lavender"
    >
      <div className="flex items-center gap-2 text-lavender">
        {icon}
        <h3 className="font-medium text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-5 text-muted-gray">{description}</p>
    </Link>
  );
}

function Stat({
  icon,
  label,
  value,
  progress,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  progress?: number;
}) {
  return (
    <div className="rounded-cards border border-graphite bg-surface p-4 shadow-subtle">
      <div className="flex items-center justify-between text-muted-gray">
        {icon ? <span className="size-4">{icon}</span> : <span />}
        {progress !== undefined ? <span className="text-lavender">◌</span> : null}
      </div>
      <p className="mt-4 text-xs uppercase tracking-wide text-muted-gray">{label}</p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
      {progress !== undefined ? (
        <div className="mt-3 h-1.5 rounded-full bg-graphite">
          <div className="h-full rounded-full bg-amethyst" style={{ width: `${progress}%` }} />
        </div>
      ) : null}
    </div>
  );
}
