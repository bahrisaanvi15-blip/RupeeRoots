export default function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
      <section className="rounded-[2rem] border border-amber-500/20 bg-slate-900 p-8 shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">About the platform</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Finance is about disciplined decision-making under uncertainty.</h2>
        <p className="mt-4 text-lg text-slate-300">
          Corporate finance is the study of how firms allocate capital, price risk, and structure financing in ways that create long-term shareholder value. This platform translates that discipline into an accessible learning experience rooted in research and analytical reasoning.
        </p>
        <p className="mt-4 text-lg text-slate-300">
          Rather than presenting finance as isolated rules, the course emphasises the relationship between risk, valuation, governance, and capital structure. Students learn how to interrogate investment choices, interpret market signals, and understand why financing decisions matter to firm value.
        </p>
      </section>

      <section className="rounded-[2rem] border border-amber-500/20 bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 p-8 text-slate-950 shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
        <h3 className="text-2xl font-semibold">What this curriculum builds</h3>
        <p className="mt-4 text-slate-900/90">
          Students develop a practical understanding of risk-adjusted investment decisions, equity-versus-debt financing, capital structure trade-offs, valuation frameworks, and the governance mechanisms that sustain value creation.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-900/20 bg-slate-950/5 p-4 backdrop-blur">
          <p className="font-semibold">Built for</p>
          <ul className="mt-2 space-y-2 text-slate-900/90">
            <li>• Students studying business, finance, and economics</li>
            <li>• Learners seeking analytical depth beyond introductory money basics</li>
            <li>• Serious corporate finance learners with interest in capital structure and valuation</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

