import { projects } from "@/lib/content";
import SectionHeader from "@/components/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="wrap py-20 md:py-28">
        <SectionHeader
          index="03"
          kicker="Featured Projects"
          title="Hands-on work across analysis, modeling & documentation."
          lead="Selected projects demonstrating data analysis, process improvement, financial modeling, and professional documentation — the core skills for analyst and specialist roles in supply chain, operations, and finance."
        />

        <div className="border-t border-line">
          {projects.map((p) => (
            <article
              key={p.n}
              className="reveal group grid gap-6 border-b border-line py-10 transition-colors duration-300 md:grid-cols-[auto_1fr] md:gap-10 md:py-14"
            >
              <div className="font-display text-4xl leading-none text-line2 transition-colors duration-300 group-hover:text-accent md:text-6xl">
                {p.n}
              </div>

              <div>
                <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-accent-ink md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-2xl text-ink2">{p.objective}</p>

                <div className="mt-6 grid max-w-3xl gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                      Approach
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                      Deliverables
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.deliverables}</p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-line px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 max-w-2xl italic text-muted">
          These projects reflect the rigorous, documented work I deliver. Expanded details, actual
          artifacts, or live walkthroughs are available during the interview process.
        </p>
      </div>
    </section>
  );
}
