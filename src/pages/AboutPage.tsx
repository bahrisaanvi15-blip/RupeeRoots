export default function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
      <section className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">About RupeeRoots</p>
        <h2 className="mt-3 text-3xl font-semibold text-black">Why financial literacy matters</h2>
        <p className="mt-4 text-lg text-black/80">
          Money touches everyday life, from buying lunch to planning for the future. When people understand money, they feel calmer and more confident making choices.
        </p>
        <p className="mt-4 text-lg text-black/80">
          RupeeRoots exists to make learning money feel friendly, simple, and encouraging. The goal is to help teenagers and beginners take their first steps without fear or confusion.
        </p>
      </section>

      <section className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-600 to-forest-700 p-8 text-white shadow-soft">
        <h3 className="text-2xl font-semibold">Our mission</h3>
        <p className="mt-4 text-emerald-50">
          We want every beginner to learn money basics through simple stories, clear examples, and warm support. We believe financial literacy should feel welcoming and practical.
        </p>
        <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
          <p className="font-semibold">Built for</p>
          <ul className="mt-2 space-y-2 text-emerald-50">
            <li>• Teenagers starting to learn money</li>
            <li>• Beginners with zero financial knowledge</li>
            <li>• Families who want an easy first lesson</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
