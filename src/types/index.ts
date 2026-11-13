export type ResearchPaper = {
  title: string;
  authors: string;
  year: string;
  summary: string;
  url: string;
};

export type Lesson = {
  id: string;
  title: string;
  summary: string;
  explanation: string;
  simpleExplanation?: string;
  example: string;
  analogy: string;
  reflectionQuestion: string;
  options: string[];
  correctAnswer: string;
  term: string;
  researchPapers?: ResearchPaper[];
};

export type Module = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  researchPapers?: ResearchPaper[];
  lessons: Lesson[];
};

export type ProgressState = {
  completedModules: string[];
  currentModuleId: string;
  currentLessonId: string;
  completedLessons: string[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};
