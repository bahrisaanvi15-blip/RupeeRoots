import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, Wallet } from 'lucide-react';

const highlights = [
  {
    title: 'Simple lessons',
    text: 'Each lesson explains money with everyday words and gentle examples.',
    icon: Wallet,
  },
  {
    title: 'Step-by-step growth',
    text: 'Practice one small idea at a time and build confidence as you go.',
    icon: TrendingUp,
  },
  {
    title: 'Confidence first',
    text: 'Every topic is explained slowly and clearly, with reflection questions to help understanding.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Welcome to RupeeRoots</p>
        <h2 className="mt-3 text-4xl font-semibold leading-tight text-black">Learn Money. Build Your Future.</h2>
        <p className="mt-4 max-w-2xl text-lg text-black/80">
          RupeeRoots teaches financial literacy from absolute basics using simple explanations and interactive lessons.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/modules" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700">
            Start Learning <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="rounded-full border border-emerald-200 px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
            Why It Matters
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-soft">
        <h3 className="text-xl font-semibold text-black">What you will learn</h3>
        <div className="mt-4 space-y-3">
          {highlights.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-stone-100 bg-stone-50 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-semibold text-black">{title}</p>
                  <p className="mt-1 text-sm text-black/80">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
