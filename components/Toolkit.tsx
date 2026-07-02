import { toolkit } from "@/lib/content";
import SectionHeader from "@/components/SectionHeader";

export default function Toolkit() {
  return (
    <section id="skills" className="border-t border-line bg-paper2">
      <div className="wrap py-20 md:py-28">
        <SectionHeader
          index="04"
          kicker="Tools & Technologies"
          title="The toolkit behind the work."
          lead="A core strength: taking complex operational, financial, and technical information and turning it into clear, accurate, usable documentation and analysis — precise yet accessible to technical and non-technical stakeholders alike."
        />

        <div className="border-y border-line">
          {toolkit.map((g) => (
            <div
              key={g.group}
              className="reveal grid gap-4 border-b border-line py-6 last:border-none md:grid-cols-[1fr_2.5fr] md:py-8"
            >
              <h3 className="font-display text-lg text-ink">{g.group}</h3>
              <ul className="flex flex-wrap gap-2 self-center">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line bg-surface px-3 py-1.5 font-mono text-sm text-ink2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
