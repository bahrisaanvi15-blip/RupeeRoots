import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, BookOpenText, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    title: 'Risk-adjusted analysis',
    text: 'Understand how risk, expected return, and capital structure shape financial decision-making.',
    icon: BarChart3,
  },
  {
    title: 'Corporate finance foundations',
    text: 'Explore valuation, financing choices, governance, and the economics of value creation.',
    icon: BookOpenText,
  },
  {
    title: 'Research-led learning',
    text: 'Connect theory to scholarship from Modigliani, Sharpe, Jensen, and other foundational thinkers.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-[2rem] border border-amber-500/20 bg-slate-900 p-8 shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Corporate Finance Studio
        </p>
        <h2 className="mt-3 text-4xl font-semibold leading-tight text-white">
          Learn how firms create value, manage risk, and finance growth.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          This platform moves beyond beginner financial literacy into the analytical foundations of modern corporate finance—covering risk and return, equity versus preference shares, cost of capital, valuation, and governance.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/modules"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Begin learning <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-amber-500/30 bg-slate-800 px-6 py-3 font-semibold text-amber-200 transition hover:bg-slate-700"
          >
            Why it matters
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] border border-amber-500/20 bg-slate-900 p-6 shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
        <h3 className="text-xl font-semibold text-white">Core learning themes</h3>
        <div className="mt-4 space-y-3">
          {highlights.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-amber-400/10 p-2 text-amber-300">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-300">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

