import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { modules } from '../data/modules';
import { useProgress } from '../hooks/useProgress';
import type { Lesson, QuizQuestion } from '../types';
import { shuffleArray } from '../utils/shuffle';

export default function ModulesPage() {
  const { progress, currentModule, currentLesson, markLessonComplete, completeModule, updateLesson } = useProgress();
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(currentLesson);
  const [explainAgain, setExplainAgain] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);

  const moduleLessons = useMemo(() => currentModule.lessons, [currentModule]);
  const allLessonsCompleted = moduleLessons.every((lesson) => progress.completedLessons.includes(lesson.id));

  useEffect(() => {
    setSelectedLesson(currentLesson);
  }, [currentLesson]);

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setExplainAgain(false);
    setFeedback(null);
    setAnswer(null);
    updateLesson(currentModule.id, lesson.id);
  };

  const handleAnswer = (option: string) => {
    setAnswer(option);
    const isCorrect = option === selectedLesson.correctAnswer;
    setFeedback(isCorrect ? 'Correct. The logic is consistent with the underlying finance theory.' : 'Not quite. Revisit the concept and test your understanding again.');
    if (isCorrect) {
      markLessonComplete(currentModule.id, selectedLesson.id);
    }
  };

  const handleExplainAgain = () => {
    setExplainAgain(true);
    setFeedback('Let us simplify the conceptual framing and reconnect it to the core finance principle.');
  };

  const startQuiz = () => {
    const questions = shuffleArray(currentModule.lessons)
      .slice(0, 5)
      .map((lesson) => ({
        id: lesson.id,
        question: `${lesson.title}: ${lesson.summary}`,
        options: shuffleArray(lesson.options),
        correctAnswer: lesson.correctAnswer,
      }));

    setQuizQuestions(questions);
    setQuizAnswers({});
    setQuizScore(null);
    setShowQuiz(true);
  };

  const submitQuiz = () => {
    const score = quizQuestions.reduce((count, question) => {
      const answer = quizAnswers[question.id];
      return count + (answer === question.correctAnswer ? 1 : 0);
    }, 0);

    setQuizScore(score);

    if (score >= 4) {
      completeModule(currentModule.id);
      const currentIndex = modules.findIndex((module) => module.id === currentModule.id);
      const nextModule = modules[currentIndex + 1];
      if (nextModule) {
        updateLesson(nextModule.id, nextModule.lessons[0].id);
      }
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
      <aside className="rounded-[2rem] border border-amber-500/20 bg-slate-900 p-6 shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-2 text-amber-300">
          <Sparkles size={18} />
          <h2 className="text-xl font-semibold text-white">Learning path</h2>
        </div>
        <p className="mt-2 text-sm text-slate-300">
          Work through each concept, then complete the module assessment to unlock the next stage.
        </p>

        <div className="mt-5 space-y-3">
          {modules.map((module) => {
            const isActive = module.id === currentModule.id;
            const isUnlocked = progress.completedModules.includes(module.id) || module.id === currentModule.id || modules.findIndex((item) => item.id === module.id) < modules.findIndex((item) => item.id === currentModule.id);

            return (
              <button
                key={module.id}
                onClick={() => {
                  if (!isUnlocked) return;
                  updateLesson(module.id, module.lessons[0].id);
                }}
                className={`w-full rounded-2xl border p-4 text-left ${
                  isActive ? 'border-amber-400 bg-amber-500/10' : 'border-slate-700 bg-slate-800'
                } ${isUnlocked ? 'opacity-100' : 'opacity-60'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{module.title}</span>
                  {progress.completedModules.includes(module.id) ? (
                    <CheckCircle2 className="text-amber-300" size={18} />
                  ) : (
                    <ChevronRight className="text-slate-400" size={18} />
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-300">{module.subtitle}</p>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="rounded-[2rem] border border-amber-500/20 bg-slate-900 p-6 shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">{currentModule.title}</p>
            <h2 className="text-2xl font-semibold text-white">{currentModule.subtitle}</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">{currentModule.description}</p>
          </div>
          <div className="rounded-full bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200">{moduleLessons.length} lessons</div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {moduleLessons.map((lesson) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => handleLessonSelect(lesson)}
                className={`rounded-2xl border p-4 text-left ${
                  selectedLesson.id === lesson.id ? 'border-amber-400 bg-amber-500/10' : 'border-slate-700 bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-white">{lesson.title}</span>
                  {isCompleted ? <CheckCircle2 className="text-amber-300" size={18} /> : null}
                </div>
                <p className="mt-2 text-sm text-slate-300">{lesson.summary}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-700 bg-slate-800/80 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Lesson {moduleLessons.findIndex((lesson) => lesson.id === selectedLesson.id) + 1}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{selectedLesson.title}</h3>
          <div className="mt-3 space-y-4 text-slate-300">
            {(explainAgain ? [selectedLesson.simpleExplanation || ''] : selectedLesson.explanation.split(/\n\s*\n/))
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index} className="leading-7">
                  {paragraph.trim()}
                </p>
              ))}
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-900 p-4 shadow-sm">
              <p className="text-sm font-semibold text-amber-300">Definition</p>
              <p className="mt-1 text-sm text-slate-300">{selectedLesson.term}: {selectedLesson.summary}</p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-4 shadow-sm">
              <p className="text-sm font-semibold text-amber-300">Example</p>
              <p className="mt-1 text-sm text-slate-300">{selectedLesson.example}</p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-4 shadow-sm">
              <p className="text-sm font-semibold text-amber-300">Analogy</p>
              <p className="mt-1 text-sm text-slate-300">{selectedLesson.analogy}</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-900 p-4 shadow-sm">
            <p className="font-semibold text-white">Reflection</p>
            <p className="mt-2 text-slate-300">{selectedLesson.reflectionQuestion}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {selectedLesson.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-medium ${
                    answer === option
                      ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                      : 'border-slate-700 bg-slate-800 text-slate-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {selectedLesson.researchPapers && selectedLesson.researchPapers.length > 0 ? (
            <div className="mt-5 rounded-2xl border border-amber-500/20 bg-slate-900 p-4">
              <p className="font-semibold text-white">Research references</p>
              <ul className="mt-3 space-y-3">
                {selectedLesson.researchPapers.map((paper) => (
                  <li key={`${paper.title}-${paper.year}`} className="rounded-xl border border-slate-700 bg-slate-800 p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-amber-200">{paper.title}</p>
                        <p className="text-xs text-slate-400">{paper.authors} • {paper.year}</p>
                      </div>
                      <a href={paper.url} target="_blank" rel="noreferrer" className="mt-1 text-amber-300">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{paper.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={handleExplainAgain}
              className="rounded-full border border-amber-500/30 px-4 py-2 font-semibold text-amber-200 transition hover:bg-slate-700"
            >
              Explain Again
            </button>
            {allLessonsCompleted ? (
              <button
                onClick={startQuiz}
                className="rounded-full bg-amber-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Take module quiz
              </button>
            ) : (
              <p className="text-sm text-slate-400">Complete all lessons to unlock the assessment.</p>
            )}
          </div>

          {feedback ? <p className="mt-4 text-sm font-medium text-amber-200">{feedback}</p> : null}
        </div>

        {showQuiz ? (
          <div className="mt-8 rounded-[2rem] border border-amber-500/20 bg-slate-800/60 p-6">
            <h3 className="text-xl font-semibold text-white">End-of-module assessment</h3>
            <p className="mt-2 text-sm text-slate-300">You need 4 out of 5 correct answers to unlock the next module.</p>
            <div className="mt-4 space-y-3">
              {quizQuestions.map((question, index) => (
                <div key={question.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                  <p className="font-semibold text-white">
                    {index + 1}. {question.question}
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setQuizAnswers((prev) => ({ ...prev, [question.id]: option }))}
                        className={`rounded-xl border px-3 py-2 text-sm ${
                          quizAnswers[question.id] === option
                            ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                            : 'border-slate-700 text-slate-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={submitQuiz} className="rounded-full bg-amber-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-amber-300">
                Submit quiz
              </button>
              <button onClick={() => setShowQuiz(false)} className="rounded-full border border-slate-600 px-4 py-2 font-semibold text-slate-200">
                Close
              </button>
            </div>
            {quizScore !== null ? (
              <div className="mt-4 rounded-2xl bg-slate-900 p-4 text-sm text-slate-200">
                <p className="font-semibold text-white">Your score: {quizScore}/5</p>
                {quizScore >= 4 ? (
                  <p className="mt-1 text-amber-200">Excellent. You have unlocked the next module.</p>
                ) : (
                  <p className="mt-1 text-amber-200">Close. Review the lessons and try again when ready.</p>
                )}
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
    </div>
  );
}

