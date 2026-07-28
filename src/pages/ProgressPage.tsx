import { modules } from '../data/modules';
import { useProgress } from '../hooks/useProgress';

export default function ProgressPage() {
  const { progress, completedCount, overallCompletion } = useProgress();

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <section className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-semibold text-black">Progress Dashboard</h2>
        <p className="mt-2 text-sm text-black/80">Your learning journey is saved locally in this browser.</p>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm text-emerald-700">Completed Modules</p>
            <p className="mt-1 text-3xl font-semibold text-black">{completedCount}/5</p>
          </div>
          <div className="rounded-2xl bg-stone-50 p-4">
            <p className="text-sm text-black/80">Overall Completion</p>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-stone-200">
              <div className="h-full rounded-full bg-emerald-600 transition-all" style={{ width: `${overallCompletion}%` }} />
            </div>
            <p className="mt-2 text-sm font-semibold text-emerald-700">{overallCompletion}% complete</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-soft">
        <h3 className="text-xl font-semibold text-black">Module Overview</h3>
        <div className="mt-4 space-y-3">
          {modules.map((module) => {
            const isCompleted = progress.completedModules.includes(module.id);
            return (
              <div key={module.id} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-black">{module.title}</p>
                    <p className="text-sm text-black/80">{module.subtitle}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-medium ${isCompleted ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-black/80'}`}>
                    {isCompleted ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
