import { competencies } from "@/lib/content";
import SectionHeader from "@/components/SectionHeader";

export default function Competencies() {
  return (
    <section id="competencies" className="border-t border-line bg-paper2">
      <div className="wrap py-20 md:py-28">
        <SectionHeader index="02" kicker="Core Competencies" title="Where I create leverage." />

        {/* Hairline grid — cells separated by 1px of --line showing through the gap */}
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          {competencies.map((c) => (
            <article key={c.n} className="reveal bg-surface p-8 md:p-10">
              <span className="font-mono text-sm text-accent">{c.n}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{c.title}</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">{c.body}</p>
            </article>
          ))}

          <article className="reveal flex flex-col justify-center bg-ink p-8 text-paper md:p-10">
            <span className="font-mono text-sm text-accent">*</span>
            <h3 className="mt-4 font-display text-xl">The through-line</h3>
            <p className="mt-3 text-[0.97rem] leading-relaxed text-paper/70">
              Complex inputs go in; clean models, usable documentation, and defensible
              recommendations come out — ready for decision-makers to act on.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
