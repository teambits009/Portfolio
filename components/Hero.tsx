import { spec, profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <span id="top" className="absolute -top-24" aria-hidden />

      {/* Backdrop presence: soft accent glow + fine dotted grid, masked at the edges */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[8%] -top-[18%] h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-line)_1.25px,transparent_1.25px)] [background-size:26px_26px] opacity-70 [mask-image:radial-gradient(75%_60%_at_50%_0%,#000,transparent_78%)]" />
      </div>

      <div className="wrap relative grid items-center gap-14 pb-16 pt-14 md:pb-24 md:pt-20 lg:min-h-[88vh] lg:grid-cols-[1.62fr_1fr] lg:gap-16">
        <div>
          <p className="reveal inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-accent-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new roles — Detroit, MI · Remote-ready
          </p>

          <h1 className="reveal mt-8 font-display text-[clamp(2rem,4.6vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            Turning complex operations &amp; data into{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 italic text-accent">decisions</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-2.5 bg-accent/25"
              />
            </span>{" "}
            people can act on.
          </h1>

          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-ink2 md:text-xl">
            I&apos;m <span className="font-medium text-ink">Hussan Almosawi</span> — a Global Supply
            Chain Management analyst blending procurement strategy, financial modeling, and data
            analysis with sharp technical documentation.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-mono text-sm uppercase tracking-[0.12em] text-paper shadow-xl transition-transform hover:-translate-y-0.5"
            >
              View projects
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 px-7 py-4 font-mono text-sm uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <ul className="reveal mt-10 flex flex-wrap gap-2">
            {profile.focus.map((f) => (
              <li
                key={f}
                className="rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-muted transition-colors duration-300 hover:border-accent/60 hover:text-ink"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Document-style profile panel — reads like a spec sheet, not a hero blob */}
        <aside className="reveal rounded-xl border border-line bg-surface p-7 shadow-xl md:p-8">
          <p className="mb-5 flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
            <span>Profile</span>
            <span className="text-accent">/ 01</span>
          </p>
          <dl className="divide-y divide-line">
            {spec.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                  {row.label}
                </dt>
                <dd className="text-right text-sm font-medium text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <a
        href="#about"
        aria-label="Scroll to content"
        className="reveal absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent lg:flex"
      >
        Scroll
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
