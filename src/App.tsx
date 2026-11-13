import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { Home, BookOpen, BarChart3, Info, ArrowUpRight } from 'lucide-react';
import { useProgress } from './hooks/useProgress';
import HomePage from './pages/HomePage';
import ModulesPage from './pages/ModulesPage';
import ProgressPage from './pages/ProgressPage';
import AboutPage from './pages/AboutPage';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/modules', label: 'Modules', icon: BookOpen },
  { to: '/progress', label: 'Progress', icon: BarChart3 },
  { to: '/about', label: 'About', icon: Info },
];

function App() {
  const { currentModule, completedCount, overallCompletion } = useProgress();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-[2rem] border border-amber-500/30 bg-slate-900/80 px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link to="/" className="flex items-center gap-3 text-amber-300">
              <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 p-3 text-slate-950 shadow-lg shadow-amber-500/20">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-amber-300 text-2xl font-bold">
                  £
                </span>
              </div>
              <div>
                <p className="text-xl font-semibold tracking-wide text-white">LSE Finance Studio</p>
                <p className="text-sm text-slate-300">Corporate Finance • Risk • Capital Structure</p>
              </div>
            </Link>

            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`
                  }
                >
                  <Icon size={16} />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="space-y-6">
          <section className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Corporate Finance Foundations
                </p>
                <h1 className="mt-2 text-3xl font-semibold sm:text-4xl text-white">
                  {currentModule.subtitle} • {currentModule.title}
                </h1>
                <p className="mt-3 text-lg text-slate-300">
                  Research-led, risk-adjusted learning designed to build analytical competence in finance and valuation.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-400/30 bg-slate-800/80 p-5 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">Modules Completed</p>
                    <p className="mt-1 text-3xl font-semibold text-white">{completedCount}/5</p>
                  </div>
                  <div className="rounded-xl bg-amber-400/10 p-2 text-amber-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="mt-4 h-2.5 w-44 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all" style={{ width: `${overallCompletion}%` }} />
                </div>
              </div>
            </div>
          </section>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;

