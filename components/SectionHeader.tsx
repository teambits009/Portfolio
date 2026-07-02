export default function SectionHeader({
  index,
  kicker,
  title,
  lead,
}: {
  index: string;
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="reveal mb-12 max-w-3xl md:mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-medium text-accent">§ {index}</span>
        <span className="h-px w-12 bg-accent/50" aria-hidden />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">{kicker}</span>
      </div>
      <h2 className="mt-6 font-display text-[clamp(2.2rem,5.2vw,3.7rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink">
        {title}
      </h2>
      {lead && <p className="mt-6 text-lg leading-relaxed text-ink2">{lead}</p>}
    </header>
  );
}
