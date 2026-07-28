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
};

export type Module = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
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
