const ITEMS = [
  "Supply Chain Analytics",
  "Strategic Sourcing",
  "TCO Modeling",
  "Demand Planning",
  "Process Optimization",
  "Data Visualization",
  "Financial Analysis",
  "Technical Documentation",
  "Inventory Optimization",
  "Risk Assessment",
];

export default function Marquee() {
  // Two identical tracks so the loop is seamless.
  const track = (
    <ul className="marquee__track" aria-hidden>
      {ITEMS.map((item, i) => (
        <li key={i} className="flex items-center gap-8">
          <span className="font-display text-lg font-medium tracking-tight text-paper md:text-2xl">
            {item}
          </span>
          <span className="text-accent" aria-hidden>
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="Areas of focus"
      className="marquee border-y border-ink bg-ink py-5 md:py-6"
    >
      {track}
      {track}
    </section>
  );
}
