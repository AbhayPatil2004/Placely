"use client";

import Link from "next/link";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, ChevronRight, RotateCcw } from "lucide-react";
import { ApiError, apiRequest } from "@/lib/api/client";
import type { SubjectKey } from "@/services/coreSubjectService";
import { CPP_OOP_SUBSECTIONS, StaticCppOopResource } from "@/components/subjects/StaticCppOopResource";
import type {
  ResourceContentSection,
  ResourceDocument,
  ResourceExample,
  ResourceInterviewQuestions,
  ResourceLearningStage,
  ResourcePracticeQuestions,
} from "@/components/subjects/resourceTypes";

type ResourceCatalogItem = {
  id: string;
  heading: string;
  paragraphs: string[];
  keyPoints: string[];
  syntax?: string;
  examples: ResourceExample[];
  example?: string;
  code?: string;
  detailSections: ResourceContentBlock[];
  summary?: string;
  quickRevision?: string[];
  practiceQuestions?: ResourcePracticeQuestions;
  topicIndex: number;
  sectionIndex: number;
  topicTitle: string;
  topicId: number;
};

type ResourceContentBlock = {
  id?: string;
  heading?: string;
  paragraphs: string[];
  keyPoints: string[];
  syntax?: string;
  examples: ResourceExample[];
  example?: string;
  code?: string;
};

type ProgressSubsection = {
  id: string;
  heading: string;
  topicId: number;
};

type ResourceTopicView = {
  id?: string;
  title: string;
  summary?: string;
  category?: string;
  sections: ResourceCatalogItem[];
  quick_revision?: string[];
  answer_key?: Array<{
    question: number;
    correct_option: string;
    explanation: string;
  }>;
  practice_questions?: ResourcePracticeQuestions;
  note?: string;
};

type LearningProgressTopic = {
  topicId?: number | string;
  topic?: string;
  isCompleted?: boolean;
  completedAt?: string | null;
};

type LearningProgressResponse = {
  subjects?: Array<{
    subject: string;
    topics?: LearningProgressTopic[];
  }>;
};

const staticCppOopDocument: ResourceDocument = {
  subject: "Object Oriented Programming in C++",
  reading_style: "Short topic sections with key points, examples, and quick revision notes",
  topics: [],
};

const subjectDetails: Record<SubjectKey, { code: string; title: string; description: string }> = {
  oop: {
    code: "OOP",
    title: "Object-Oriented Programming",
    description: "Review the concepts and principles that shape object-oriented design.",
  },
  os: {
    code: "OS",
    title: "Operating Systems",
    description: "Study processes, memory, scheduling, and operating system concepts.",
  },
  cn: {
    code: "CN",
    title: "Computer Networks",
    description: "Study network architecture, protocols, and data communication.",
  },
  dbms: {
    code: "DBMS",
    title: "Database Management Systems",
    description: "Study data models, queries, transactions, and database systems.",
  },
  swe: {
    code: "SWE",
    title: "Software Engineering",
    description: "Study software processes, development methods, and system design.",
  },
  sql: {
    code: "SQL",
    title: "SQL",
    description: "Learn SQL syntax, queries, data types, and database operations.",
  },
};

const backendSubjectMap: Record<SubjectKey, string> = {
  oop: "Object Oriented Programming",
  os: "Operating System",
  cn: "Computer Networks",
  dbms: "DataBase Management System",
  swe: "Software Engineering",
  sql: "SQL",
};

type ResourceLoader = () => Promise<ResourceDocument>;

const resourceLoaders: Partial<Record<SubjectKey, ResourceLoader>> = {
  dbms: async () => (await import("@/data/dbmsResource")).default,
  os: async () => (await import("@/data/OSDataResource")).default,
  cn: async () => (await import("@/data/computerNetworkResource")).default,
  swe: async () => (await import("@/data/sweResource")).default,
  sql: async () => (await import("@/data/SQLLearn.json")).default as ResourceDocument,
};

function getBackendTopicId(topicIndex: number, subsectionIndex: number) {
  return (topicIndex + 1) * 1000 + (subsectionIndex + 1);
}

function splitParagraphs(content: string) {
  return content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function formatCompletionPercent(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, value));
}

const ResourceSectionContent = memo(function ResourceSectionContent({
  section,
}: {
  section: ResourceContentBlock;
}) {
  return (
    <div className="mt-3 space-y-3">
      {section.paragraphs.map((paragraph, index) => (
        <p
          key={`${section.id}-paragraph-${index}`}
          className="whitespace-pre-wrap text-sm leading-7 text-medium-gray"
        >
          {paragraph}
        </p>
      ))}
      {section.keyPoints.length ? (
        <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
          {section.keyPoints.map((point, index) => (
            <li key={`${section.id}-point-${index}`} className="whitespace-pre-wrap">{point}</li>
          ))}
        </ul>
      ) : null}
      {section.syntax ? (
        <div>
          <h4 className="text-sm font-medium text-bright-gray">Syntax</h4>
          <pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-words rounded-buttons border border-graphite bg-abyss p-3 font-mono text-xs leading-5 text-medium-gray">
            <code>{section.syntax}</code>
          </pre>
        </div>
      ) : null}
      {section.example ? (
        <p className="whitespace-pre-wrap rounded-buttons border border-graphite bg-abyss p-3 text-sm leading-6 text-medium-gray">
          <span className="font-medium text-bright-gray">Example: </span>
          {section.example}
        </p>
      ) : null}
      {section.code ? (
        <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-buttons border border-graphite bg-abyss p-3 font-mono text-xs leading-5 text-medium-gray">
          <code>{section.code.replace(/\\n/g, "\n")}</code>
        </pre>
      ) : null}
      {section.examples.length ? (
        <div className="space-y-3">
          {section.examples.map((example, index) => (
            <section
              key={`${section.id}-example-${index}`}
              className="rounded-buttons border border-graphite bg-abyss p-3"
            >
              {example.title ? (
                <h4 className="text-sm font-medium text-bright-gray">{example.title}</h4>
              ) : null}
              {example.sql || example.code ? (
                <pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs leading-5 text-medium-gray">
                  <code>{example.sql ?? example.code}</code>
                </pre>
              ) : null}
              {example.explanation ? (
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">
                  {example.explanation}
                </p>
              ) : null}
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
});

const ResourceInterviewQuestions = memo(function ResourceInterviewQuestions({
  resource,
}: {
  resource: ResourceInterviewQuestions;
}) {
  return (
    <details className="group rounded-cards border border-graphite bg-surface">
      <summary className="cursor-pointer list-none px-5 py-4 text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
        <span className="flex items-center justify-between gap-3">
          <span>{resource.title ?? "Placement interview questions"}</span>
          <ChevronDown className="size-4 shrink-0 text-muted-gray transition-transform group-open:rotate-180" aria-hidden="true" />
        </span>
        {resource.question_count ? (
          <span className="mt-1 block text-xs text-muted-gray">
            {resource.question_count} questions
          </span>
        ) : null}
      </summary>
      <div className="space-y-3 border-t border-graphite px-5 py-4">
        {resource.note ? (
          <p className="whitespace-pre-wrap text-sm leading-6 text-medium-gray">{resource.note}</p>
        ) : null}
        <ol className="space-y-3">
          {(resource.questions ?? []).map((question, index) => (
            <li key={question.id ?? index}>
              <article className="rounded-buttons border border-graphite bg-abyss p-4">
                <h3 className="text-sm font-medium text-bright-gray">
                  {index + 1}. {question.question}
                </h3>
                {question.difficulty ? (
                  <p className="mt-1 text-xs text-muted-gray">{question.difficulty}</p>
                ) : null}
                {question.concepts?.length ? (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {question.concepts.map((concept) => (
                      <li
                        key={concept}
                        className="rounded-full border border-graphite px-2 py-1 text-xs text-medium-gray"
                      >
                        {concept}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {question.sql ? (
                  <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words rounded-buttons border border-graphite bg-surface p-3 font-mono text-xs leading-5 text-medium-gray">
                    <code>{question.sql}</code>
                  </pre>
                ) : null}
                {question.explanation ? (
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-medium-gray">
                    {question.explanation}
                  </p>
                ) : null}
                {question.follow_up ? (
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-muted-gray">
                    <span className="font-medium text-bright-gray">Follow-up: </span>
                    {question.follow_up}
                  </p>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
});

function ResourceLearningPath({
  stages,
  topics,
}: {
  stages: ResourceLearningStage[];
  topics: ResourceTopicView[];
}) {
  const titlesById = new Map(topics.map((topic) => [topic.id, topic.title]));

  return (
    <details className="group rounded-cards border border-graphite bg-surface">
      <summary className="cursor-pointer list-none px-5 py-4 text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
        <span className="flex items-center justify-between gap-3">
          Learning path
          <ChevronDown className="size-4 text-muted-gray transition-transform group-open:rotate-180" aria-hidden="true" />
        </span>
      </summary>
      <div className="grid gap-3 border-t border-graphite p-4 sm:grid-cols-2">
        {stages.map((stage) => (
          <section key={stage.stage} className="rounded-buttons border border-graphite bg-abyss p-4">
            <h3 className="text-sm font-semibold text-bright-gray">
              Stage {stage.stage}: {stage.name}
            </h3>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-medium-gray">
              {stage.topics.map((topicId) => (
                <li key={topicId}>{titlesById.get(topicId) ?? topicId}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </details>
  );
}

function ResourcePreparationChecklist({ items }: { items: string[] }) {
  return (
    <details className="group rounded-cards border border-graphite bg-surface">
      <summary className="cursor-pointer list-none px-5 py-4 text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
        <span className="flex items-center justify-between gap-3">
          Placement preparation checklist
          <ChevronDown className="size-4 text-muted-gray transition-transform group-open:rotate-180" aria-hidden="true" />
        </span>
      </summary>
      <ul className="list-disc space-y-2 border-t border-graphite px-10 py-4 text-sm leading-6 text-medium-gray">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </details>
  );
}

const ResourcePracticeQuestionsView = memo(function ResourcePracticeQuestionsView({
  questions,
}: {
  questions: ResourcePracticeQuestions;
}) {
  return (
    <section className="rounded-cards border border-graphite bg-surface p-4">
      <h4 className="text-sm font-semibold text-white">Practice questions</h4>
      {!Array.isArray(questions) ? (
        <>
          {questions.format ? (
            <p className="mt-2 whitespace-pre-wrap text-xs leading-5 text-muted-gray">
              {questions.format}
            </p>
          ) : null}
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-6 text-medium-gray">
            {(questions.items ?? []).map((item, index) => (
              <li key={index} className="whitespace-pre-wrap">{item}</li>
            ))}
          </ol>
        </>
      ) : (
        <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-6 text-medium-gray">
          {questions.map((item, index) => (
            <li key={index}>
              {item.question ? <p className="whitespace-pre-wrap">{item.question}</p> : null}
              {item.options?.length ? (
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {item.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="whitespace-pre-wrap">
                      {option.option ? `${option.option}. ` : ""}
                      {option.text}
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.answer ? (
                <p className="whitespace-pre-wrap text-muted-gray">{item.answer}</p>
              ) : null}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
});

function normalizeContentSection(section: ResourceContentSection): ResourceContentBlock {
  return {
    id: section.id,
    heading: section.heading ?? section.title,
    paragraphs: [
      ...(section.summary ? splitParagraphs(section.summary) : []),
      ...(section.explanation ? splitParagraphs(section.explanation) : []),
      ...(section.content ? splitParagraphs(section.content) : []),
    ],
    keyPoints: section.key_points ?? [],
    syntax: section.syntax,
    examples: section.examples ?? [],
    example: section.example,
    code: section.code ?? section.code_example,
  };
}

function normalizeResourceTopics(document: ResourceDocument): ResourceTopicView[] {
  return document.topics.map((topic, topicIndex) => {
    const nestedSections = topic.sections?.some((section) => section.sections?.length);
    const subsections = topic.subsections?.length
      ? topic.subsections
      : nestedSections
        ? topic.sections
        : undefined;
    const sections = subsections
      ? subsections.map((subsection, sectionIndex) => {
          const topicId = getBackendTopicId(topicIndex, sectionIndex);
          const subsectionContent = normalizeContentSection(subsection);
          const subsectionHeading = subsection.title
            ?? subsectionContent.heading
            ?? `Section ${sectionIndex + 1}`;

          return {
            id: subsection.id ?? String(topicId),
            heading: subsectionHeading,
            paragraphs: subsectionContent.paragraphs,
            keyPoints: [],
            syntax: subsectionContent.syntax,
            examples: subsectionContent.examples,
            example: subsectionContent.example,
            code: subsectionContent.code,
            detailSections: (subsection.sections ?? []).map(normalizeContentSection),
            quickRevision: subsection.quick_revision,
            practiceQuestions: subsection.practice_questions,
            topicIndex,
            sectionIndex,
            topicTitle: topic.title,
            topicId,
          };
        })
      : (topic.sections ?? []).map((section, sectionIndex) => {
        const topicId = getBackendTopicId(topicIndex, sectionIndex);
        const content = normalizeContentSection(section);

        return {
          id: section.id ?? String(topicId),
            heading: content.heading ?? `Section ${sectionIndex + 1}`,
            paragraphs: content.paragraphs,
            keyPoints: content.keyPoints,
            syntax: content.syntax,
            examples: content.examples,
            example: content.example,
            code: content.code,
            detailSections: [],
            topicIndex,
            sectionIndex,
            topicTitle: topic.title,
            topicId,
          };
        });

    return { ...topic, sections };
  });
}

export function CoreLearnPage({ subject }: { subject: SubjectKey }) {
  const details = subjectDetails[subject];
  const [resourceState, setResourceState] = useState<{
    subject: SubjectKey;
    document: ResourceDocument | null;
    error: string | null;
  } | null>(null);
  const currentResourceState = resourceState?.subject === subject ? resourceState : null;
  const isStaticOop = subject === "oop";
  const resourceDocument = currentResourceState?.document
    ?? (isStaticOop ? staticCppOopDocument : null);
  const resourceLoading = !isStaticOop && currentResourceState === null;
  const [checkedById, setCheckedById] = useState<Record<string, boolean>>({});
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [progressSubject, setProgressSubject] = useState<SubjectKey | null>(null);
  const [error, setError] = useState<string | null>(null);
  const progressLoading = loading || progressSubject !== subject;

  useEffect(() => {
    if (subject === "oop") {
      return;
    }

    if (resourceState?.subject === subject) {
      return;
    }

    let cancelled = false;
    const timeoutId = window.setTimeout(() => {
      const loadResource = resourceLoaders[subject];
      if (!loadResource) {
        setResourceState({ subject, document: null, error: null });
        return;
      }

      void loadResource()
        .then((document) => {
          if (!cancelled) {
            setResourceState({ subject, document, error: null });
          }
        })
        .catch(() => {
          if (!cancelled) {
            setResourceState({
              subject,
              document: null,
              error: "Unable to load this subject's bundled learning resource.",
            });
          }
        });
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [resourceState?.subject, subject]);

  const catalog = useMemo(
    () => (!isStaticOop && resourceDocument ? normalizeResourceTopics(resourceDocument) : []),
    [isStaticOop, resourceDocument],
  );

  const subsectionCatalog = useMemo<readonly ProgressSubsection[]>(() => (
    isStaticOop ? CPP_OOP_SUBSECTIONS : catalog.flatMap((topic) => topic.sections)
  ), [catalog, isStaticOop]);

  const totalSubsections = subsectionCatalog.length;
  const completedCount = subsectionCatalog.filter((item) => checkedById[item.id]).length;
  const progressPercent = totalSubsections
    ? formatCompletionPercent((completedCount / totalSubsections) * 100)
    : 0;

  const loadProgress = useCallback(
    async (subjectKey: SubjectKey) => {
      if (!isStaticOop && !resourceDocument) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const progressData = await apiRequest<LearningProgressResponse>("/api/progress/learning");
        const entry = progressData?.subjects?.find(
          (item) => item.subject === backendSubjectMap[subjectKey],
        );

        const nextChecked: Record<string, boolean> = {};

        for (const item of subsectionCatalog) {
          const topicRecord = entry?.topics?.find((progressTopic) => {
            const savedTopicId = Number(progressTopic.topicId);
            return Number.isFinite(savedTopicId) && savedTopicId === item.topicId;
          });

          nextChecked[item.id] = Boolean(topicRecord?.isCompleted);
        }

        setCheckedById(nextChecked);
      } catch (requestError) {
        setError(
          requestError instanceof ApiError
            ? requestError.message
            : "Unable to load saved progress for this subject.",
        );
      } finally {
        setProgressSubject(subjectKey);
        setLoading(false);
      }
    },
    [isStaticOop, resourceDocument, subsectionCatalog],
  );

  useEffect(() => {
    if (!resourceDocument) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      void loadProgress(subject);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [loadProgress, resourceDocument, subject]);

  const handleToggleSubsection = async (subsection: ProgressSubsection) => {
    const previousValue = Boolean(checkedById[subsection.id]);
    const nextValue = !previousValue;

    setCheckedById((current) => ({ ...current, [subsection.id]: nextValue }));

    try {
      await apiRequest("/api/progress/learning", {
        method: "POST",
        body: JSON.stringify({
          subject: backendSubjectMap[subject],
          topicId: subsection.topicId,
          topic: subsection.heading,
          isCompleted: nextValue,
        }),
      });
    } catch (requestError) {
      setCheckedById((current) => ({ ...current, [subsection.id]: previousValue }));
      setError(
        requestError instanceof ApiError
          ? requestError.message
          : "Unable to save your progress. Please try again.",
      );
    }
  };

  if (resourceLoading || !resourceDocument) {
    const resourceMessage = currentResourceState?.error
      ?? (resourceLoading
        ? null
        : "This subject does not yet have a static learning resource file configured.");

    return (
      <div className="space-y-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-gray">
          <Link href="/dashboard" className="hover:text-white">Home</Link>
          <ChevronRight className="size-4 text-graphite" aria-hidden="true" />
          <Link href="/subjects" className="hover:text-white">Core Subjects</Link>
          <ChevronRight className="size-4 text-graphite" aria-hidden="true" />
          <span className="text-white">{details.code} / Learn</span>
        </nav>

        {resourceLoading ? (
          <div className="space-y-3" aria-label={`Loading ${details.code} resources`}>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-20 animate-pulse rounded-cards border border-graphite bg-surface"
              />
            ))}
          </div>
        ) : (
          <div className={`rounded-cards border bg-surface p-6 text-sm ${currentResourceState?.error ? "border-error-red/40 text-error-red" : "border-graphite text-muted-gray"}`}>
            {resourceMessage}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-gray">
        <Link href="/dashboard" className="hover:text-white">Home</Link>
        <ChevronRight className="size-4 text-graphite" aria-hidden="true" />
        <Link href="/subjects" className="hover:text-white">Core Subjects</Link>
        <ChevronRight className="size-4 text-graphite" aria-hidden="true" />
        <span className="text-white">{details.code} / Learn</span>
      </nav>

      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-gray">{details.code}</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-heading font-semibold text-white">{resourceDocument.subject}</h1>
            <p className="mt-2 text-sm text-medium-gray">{details.description}</p>
            {typeof resourceDocument.reading_style === "string" ? (
              <p className="mt-2 text-sm text-medium-gray">{resourceDocument.reading_style}</p>
            ) : resourceDocument.reading_style?.description ? (
              <p className="mt-2 whitespace-pre-wrap text-sm text-medium-gray">
                {resourceDocument.reading_style.description}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-button border border-white bg-white px-4 py-2 text-sm font-medium text-abyss">Learn</span>
            <span className="rounded-button border border-graphite px-4 py-2 text-sm text-muted-gray" aria-disabled="true">
              Test · Coming soon
            </span>
          </div>
        </div>
      </header>

      <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-gray">{details.code} learning progress</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {completedCount} of {totalSubsections} subsections completed
            </p>
          </div>
            <span className="text-sm text-bright-gray">
              {progressLoading ? "Loading progress…" : `${Math.round(progressPercent)}%`}
            </span>
        </div>

        <div
          className="mt-4 h-2 overflow-hidden rounded-full bg-graphite"
          role="progressbar"
          aria-label={`${resourceDocument.subject} learning progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progressPercent)}
        >
          <div
            className="h-full rounded-full bg-white transition-[width]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </section>

      {error ? (
        <div className="rounded-cards border border-error-red/40 bg-surface p-6">
          <p className="text-sm text-error-red">Unable to synchronize learning progress.</p>
          <p className="mt-2 text-sm text-muted-gray">{error}</p>
          <button
            type="button"
            onClick={() => void loadProgress(subject)}
            className="mt-4 inline-flex items-center gap-2 rounded-button border border-white bg-white px-4 py-2 text-sm font-medium text-abyss"
          >
            <RotateCcw className="size-4" /> Retry
          </button>
        </div>
      ) : null}

      {isStaticOop ? (
        <StaticCppOopResource
          checkedById={checkedById}
          progressLoading={progressLoading}
          onToggle={(id, topicId, heading) => {
            void handleToggleSubsection({ id, topicId, heading });
          }}
        />
      ) : (
      <section
        aria-label={`${resourceDocument.subject} topics`}
        className="overflow-hidden rounded-cards border border-graphite bg-surface shadow-subtle"
      >
        {catalog.map((topic, topicIndex) => {
          const topicCompleted = topic.sections.filter((section) => checkedById[section.id]).length;
          const topicPercent = topic.sections.length
            ? formatCompletionPercent((topicCompleted / topic.sections.length) * 100)
            : 0;
          const expandedTopicKey = String(topicIndex);
          const isExpanded = expandedTopics[expandedTopicKey] ?? false;
          const toggleTopic = () =>
            setExpandedTopics((current) => ({
              ...current,
              [expandedTopicKey]: !(current[expandedTopicKey] ?? false),
            }));

          return (
            <article key={`${topicIndex}-${topic.title}`} className="border-b border-graphite last:border-b-0">
              <header className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray">
                    Main section {topicIndex + 1}
                  </p>
                  {topic.category ? (
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted-gray">{topic.category}</p>
                  ) : null}
                  <h2 className="mt-1 text-lg font-medium text-white">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`topic-content-${subject}-${topicIndex}`}
                      onClick={toggleTopic}
                      className="text-left"
                    >
                      {topic.title}
                    </button>
                  </h2>
                  {topic.summary ? (
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{topic.summary}</p>
                  ) : null}
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right text-xs text-medium-gray">
                    <div>{topicCompleted}/{topic.sections.length}</div>
                    <div>{Math.round(topicPercent)}%</div>
                  </div>
                  <div className="flex h-9 w-20 items-center overflow-hidden rounded-full border border-graphite bg-abyss">
                    <div
                      className="h-full rounded-full bg-white transition-[width]"
                      style={{ width: `${topicPercent}%` }}
                    />
                  </div>
                  <button
                    type="button"
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${topic.title}`}
                    aria-expanded={isExpanded}
                    aria-controls={`topic-content-${subject}-${topicIndex}`}
                    onClick={toggleTopic}
                    className="rounded-buttons p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {isExpanded ? (
                      <ChevronDown className="size-4 text-white" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="size-4 text-muted-gray" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </header>

              <div
                id={`topic-content-${subject}-${topicIndex}`}
                hidden={!isExpanded}
                className="space-y-4 border-t border-graphite bg-abyss/40 px-5 py-4"
              >
                {isExpanded ? (
                  <>
                  {topic.sections.map((section) => {
                    const isChecked = Boolean(checkedById[section.id]);
                    const checkboxId = `${subject}-complete-${encodeURIComponent(section.id)}`;

                    return (
                      <article
                        key={section.id}
                        id={`resource-${checkboxId}`}
                        className={`rounded-cards border p-4 ${
                          isChecked ? "border-white/10 bg-white/[0.02]" : "border-graphite bg-surface"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <label
                            htmlFor={checkboxId}
                            className="mt-1 flex size-5 shrink-0 cursor-pointer items-center justify-center"
                            aria-label={`Mark ${section.heading} complete`}
                          >
                            <input
                              id={checkboxId}
                              type="checkbox"
                              checked={isChecked}
                              disabled={progressLoading}
                              onChange={() => void handleToggleSubsection(section)}
                              className="peer sr-only"
                            />
                            <span
                              aria-hidden="true"
                              className="relative size-4 rounded-[4px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-[1px] after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white"
                            />
                          </label>

                          <div className="min-w-0 flex-1">
                            <header className="flex items-center justify-between gap-3">
                              <h3 id={`${checkboxId}-heading`} className={`text-base font-medium ${isChecked ? "text-medium-gray" : "text-bright-gray"}`}>
                                {section.heading}
                              </h3>
                              {isChecked ? (
                                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-medium-gray">
                                  <Check className="size-3" /> Complete
                                </span>
                              ) : null}
                            </header>
                            <section aria-labelledby={`${checkboxId}-heading`}>
                              <ResourceSectionContent section={section} />
                              {section.detailSections.map((detail, detailIndex) => (
                                <section
                                  key={`${section.id}-detail-${detailIndex}`}
                                  className="mt-4 border-t border-graphite/70 pt-3"
                                >
                                  {detail.heading ? (
                                    <h4 className="text-sm font-medium text-bright-gray">
                                      {detail.heading}
                                    </h4>
                                  ) : null}
                                  <ResourceSectionContent section={detail} />
                                </section>
                              ))}
                              {section.quickRevision?.length ? (
                                <aside className="mt-4 rounded-buttons border border-graphite bg-abyss p-3">
                                  <h4 className="text-sm font-semibold text-white">Quick revision</h4>
                                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                                    {section.quickRevision.map((point, index) => (
                                      <li
                                        key={`${section.id}-revision-${index}`}
                                        className="whitespace-pre-wrap"
                                      >
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </aside>
                              ) : null}
                              {section.practiceQuestions ? (
                                <div className="mt-4">
                                  <ResourcePracticeQuestionsView
                                    questions={section.practiceQuestions}
                                  />
                                </div>
                              ) : null}
                            </section>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                  {topic.quick_revision?.length ? (
                    <aside className="rounded-cards border border-graphite bg-surface p-4">
                      <h3 className="text-sm font-semibold text-white">Quick revision</h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-medium-gray">
                        {topic.quick_revision.map((point, index) => (
                          <li key={`${topicIndex}-revision-${index}`} className="whitespace-pre-wrap">{point}</li>
                        ))}
                      </ul>
                    </aside>
                  ) : null}
                  {topic.answer_key?.length ? (
                    <section className="rounded-cards border border-graphite bg-surface p-4">
                      <h3 className="text-sm font-semibold text-white">Answer key</h3>
                      <ol className="mt-2 space-y-3">
                        {topic.answer_key.map((answer) => (
                          <li key={answer.question} className="text-sm leading-6 text-medium-gray">
                            <span className="font-medium text-bright-gray">
                              Question {answer.question}: {answer.correct_option}
                            </span>
                            <p className="whitespace-pre-wrap">{answer.explanation}</p>
                          </li>
                        ))}
                      </ol>
                    </section>
                  ) : null}
                  {topic.practice_questions ? (
                    <ResourcePracticeQuestionsView questions={topic.practice_questions} />
                  ) : null}
                  {topic.note ? <p className="text-xs text-muted-gray">{topic.note}</p> : null}
                  </>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>
      )}
      {resourceDocument.note ? (
        <p className="whitespace-pre-wrap text-xs text-muted-gray">{resourceDocument.note}</p>
      ) : null}
      {resourceDocument.learning_path?.length ? (
        <ResourceLearningPath stages={resourceDocument.learning_path} topics={catalog} />
      ) : null}
      {resourceDocument.placement_interview_questions ? (
        <ResourceInterviewQuestions resource={resourceDocument.placement_interview_questions} />
      ) : null}
      {resourceDocument.placement_preparation_checklist?.length ? (
        <ResourcePreparationChecklist items={resourceDocument.placement_preparation_checklist} />
      ) : null}
      {resourceDocument.dialect_note ? (
        <aside className="rounded-cards border border-graphite bg-surface p-4">
          <h2 className="text-sm font-semibold text-bright-gray">SQL dialect note</h2>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">
            {resourceDocument.dialect_note}
          </p>
        </aside>
      ) : null}
    </div>
  );
}
