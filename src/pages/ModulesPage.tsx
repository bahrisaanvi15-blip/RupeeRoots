import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
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
    setFeedback(isCorrect ? 'That is right!' : 'Nice try. Review the idea and choose again.');
    if (isCorrect) {
      markLessonComplete(currentModule.id, selectedLesson.id);
    }
  };

  const handleExplainAgain = () => {
    setExplainAgain(true);
    setFeedback('Let us say it in an even simpler way.');
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
      <aside className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-soft">
        <div className="flex items-center gap-2 text-emerald-700">
          <Sparkles size={18} />
          <h2 className="text-xl font-semibold">Your Path</h2>
        </div>
<p className="mt-2 text-sm text-black/80">Learn each lesson gently, then test yourself at the end of the module.</p>

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
                className={`w-full rounded-2xl border p-4 text-left ${isActive ? 'border-emerald-500 bg-emerald-50' : 'border-stone-200 bg-white'} ${isUnlocked ? 'opacity-100' : 'opacity-60'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-black">{module.title}</span>
                  {progress.completedModules.includes(module.id) ? <CheckCircle2 className="text-emerald-600" size={18} /> : <ChevronRight className="text-stone-400" size={18} />}
                </div>
                <p className="mt-1 text-sm text-black/80">{module.subtitle}</p>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">{currentModule.title}</p>
            <h2 className="text-2xl font-semibold text-black">{currentModule.subtitle}</h2>
            <p className="mt-3 text-base leading-7 text-black/80">{currentModule.description}</p>
          </div>
          <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">{moduleLessons.length} lessons</div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {moduleLessons.map((lesson) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => handleLessonSelect(lesson)}
                className={`rounded-2xl border p-4 text-left ${selectedLesson.id === lesson.id ? 'border-emerald-500 bg-emerald-50' : 'border-stone-200 bg-stone-50'}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-black">{lesson.title}</span>
                  {isCompleted ? <CheckCircle2 className="text-emerald-600" size={18} /> : null}
                </div>
                <p className="mt-2 text-sm text-black/80">{lesson.summary}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Lesson {moduleLessons.findIndex((lesson) => lesson.id === selectedLesson.id) + 1}</p>
          <h3 className="mt-2 text-2xl font-semibold text-black">{selectedLesson.title}</h3>
          <div className="mt-3 space-y-4 text-black/80">
            {(explainAgain ? [selectedLesson.simpleExplanation || ''] : selectedLesson.explanation.split(/\n\s*\n/))
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index} className="leading-7">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">Definition</p>
              <p className="mt-1 text-sm text-black/80">{selectedLesson.term}: {selectedLesson.summary}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">Example</p>
              <p className="mt-1 text-sm text-black/80">{selectedLesson.example}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">Analogy</p>
              <p className="mt-1 text-sm text-black/80">{selectedLesson.analogy}</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm">
            <p className="font-semibold text-black">Reflection</p>
            <p className="mt-2 text-black/80">{selectedLesson.reflectionQuestion}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {selectedLesson.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-medium ${answer === option ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-stone-200 bg-stone-50 text-black hover:bg-emerald-50'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button onClick={handleExplainAgain} className="rounded-full border border-emerald-200 px-4 py-2 font-semibold text-emerald-700 hover:bg-emerald-50">
              Explain Again
            </button>
            {allLessonsCompleted ? (
              <button onClick={startQuiz} className="rounded-full bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700">
                Take Module Quiz
              </button>
            ) : (
              <p className="text-sm text-black/70">Complete all five lessons to unlock the quiz.</p>
            )}
          </div>

          {feedback ? <p className="mt-4 text-sm font-medium text-emerald-700">{feedback}</p> : null}
        </div>

        {showQuiz ? (
          <div className="mt-8 rounded-[2rem] border border-emerald-100 bg-emerald-50/60 p-6">
            <h3 className="text-xl font-semibold text-black">End of Module Assessment</h3>
            <p className="mt-2 text-sm text-black/80">You need 4 out of 5 correct answers to unlock the next module.</p>
            <div className="mt-4 space-y-3">
              {quizQuestions.map((question, index) => (
                <div key={question.id} className="rounded-2xl border border-emerald-100 bg-white p-4">
                  <p className="font-semibold text-black">{index + 1}. {question.question}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setQuizAnswers((prev) => ({ ...prev, [question.id]: option }))}
                        className={`rounded-xl border px-3 py-2 text-sm ${quizAnswers[question.id] === option ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-stone-200 text-black'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={submitQuiz} className="rounded-full bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700">
                Submit Quiz
              </button>
              <button onClick={() => setShowQuiz(false)} className="rounded-full border border-stone-300 px-4 py-2 font-semibold text-black">
                Close
              </button>
            </div>
            {quizScore !== null ? (
              <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-black">
                <p className="font-semibold">Your score: {quizScore}/5</p>
                {quizScore >= 4 ? <p className="mt-1 text-emerald-700">You unlocked the next module. Great work!</p> : <p className="mt-1 text-amber-700">Almost there! Review the lessons and try again.</p>}
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
    </div>
  );
}
