import { strengths, coursework } from "@/lib/content";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="wrap py-20 md:py-28">
        <SectionHeader
          index="01"
          kicker="About"
          title="Analytical rigor, translated into work people can actually use."
        />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="reveal space-y-6 text-lg leading-relaxed text-ink2">
            <p>
              Global Supply Chain Management student and alum at{" "}
              <span className="text-ink">Wayne State University</span> with strong capabilities in
              data-driven operations, procurement strategy, financial analysis within supply
              chains, and clear technical documentation.
            </p>
            <p>
              I combine analytical rigor with the ability to translate complex processes and data
              into actionable insights and well-structured documentation — building models,
              dashboards, process maps, and professional reports that support better decisions in
              operations and finance.
            </p>
            <p className="border-l-2 border-accent pl-5 text-ink">
              Seeking roles in <span className="italic">supply chain analysis, data analytics,
              operations/finance analysis, procurement, or technical writing</span> where structured
              problem-solving and clear communication deliver measurable value.
            </p>
          </div>

          <aside className="reveal">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Key strengths
            </h3>
            <ul className="mt-5 space-y-4">
              {strengths.map((s) => (
                <li key={s} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink2">
                  <span className="mt-0.5 select-none text-accent">—</span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</h3>
              <p className="mt-3 font-display text-lg text-ink">
                Global Supply Chain Management
              </p>
              <p className="text-sm text-muted">Wayne State University — Detroit, MI</p>
              <p className="mt-1 text-xs text-muted">
                Bachelor&apos;s program · Current Student / Recent Alum
              </p>
            </div>
          </aside>
        </div>

        <div className="reveal mt-14 border-t border-line pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Relevant coursework
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-ink2">
            {coursework.map((c) => (
              <li key={c} className="before:mr-2 before:text-accent before:content-['/']">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
