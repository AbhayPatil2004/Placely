export type ResourceContentSection = {
  id?: string;
  heading?: string;
  title?: string;
  summary?: string;
  explanation?: string;
  content?: string;
  key_points?: string[];
  example?: string;
  code?: string;
  code_example?: string;
  syntax?: string;
  examples?: ResourceExample[];
  sections?: ResourceContentSection[];
  quick_revision?: string[];
  practice_questions?: ResourcePracticeQuestions;
  [field: string]: unknown;
};

export type ResourceExample = {
  title?: string;
  sql?: string;
  code?: string;
  explanation?: string;
  [field: string]: unknown;
};

export type ResourcePracticeQuestion = {
  id?: string;
  question?: string;
  answer?: string;
  sql?: string;
  explanation?: string;
  follow_up?: string;
  difficulty?: string;
  concepts?: string[];
  options?: Array<{
    option?: string;
    text?: string;
  }>;
  [field: string]: unknown;
};

export type ResourcePracticeQuestions =
  | {
      format?: string;
      items?: string[];
      [field: string]: unknown;
    }
  | ResourcePracticeQuestion[];

export type ResourceLearningStage = {
  stage: number;
  name: string;
  topics: string[];
};

export type ResourceInterviewQuestions = {
  title?: string;
  note?: string;
  question_count?: number;
  questions?: ResourcePracticeQuestion[];
};

export type ResourceSubsection = {
  id?: string;
  title?: string;
  summary?: string;
  sections?: ResourceContentSection[];
  quick_revision?: string[];
  practice_questions?: ResourcePracticeQuestions;
  [field: string]: unknown;
};

export type ResourceTopic = {
  id?: string;
  title: string;
  summary?: string;
  sections?: ResourceContentSection[];
  subsections?: ResourceSubsection[];
  category?: string;
  quick_revision?: string[];
  practice_questions?: ResourcePracticeQuestions;
  note?: string;
  [field: string]: unknown;
};

export type ResourceDocument = {
  subject: string;
  reading_style?: string | { description?: string; [field: string]: unknown };
  learning_path?: ResourceLearningStage[];
  placement_interview_questions?: ResourceInterviewQuestions;
  placement_preparation_checklist?: string[];
  dialect_note?: string;
  note?: string;
  topics: ResourceTopic[];
  [field: string]: unknown;
};
