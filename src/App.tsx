import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { Home, BookOpen, BarChart3, Info, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-stone-50 text-black">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-[2rem] border border-emerald-100 bg-white/90 px-4 py-4 shadow-soft backdrop-blur sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link to="/" className="flex items-center gap-3 text-emerald-700">
              <div className="rounded-2xl bg-emerald-600 p-3 text-white shadow-lg">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xl font-semibold">RupeeRoots</p>
                <p className="text-sm text-black/70">Learn Money. Build Your Future.</p>
              </div>
            </Link>

            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-emerald-600 text-white shadow-lg' : 'bg-stone-100 text-black hover:bg-emerald-50 hover:text-emerald-700'}`
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
          <section className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-700 via-emerald-600 to-forest-700 p-6 text-white shadow-soft sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">Financial literacy for beginners</p>
                <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{currentModule.subtitle} • {currentModule.title}</h1>
                <p className="mt-3 text-lg text-emerald-50/90">Progress saved locally so your journey stays with you on this device.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-emerald-100">Completed Modules</p>
                <p className="text-3xl font-semibold">{completedCount}/5</p>
                <div className="mt-3 h-2 w-40 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${overallCompletion}%` }} />
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
