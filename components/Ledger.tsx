import { ledger } from "@/lib/content";

export default function Ledger() {
  return (
    <section className="border-b border-line bg-paper2">
      <div className="wrap py-14 md:py-20">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-0">
          {ledger.map((item, i) => (
            <div
              key={item.figure}
              className={`reveal md:px-9 md:first:pl-0 md:last:pr-0 ${
                i > 0 ? "md:border-l md:border-line" : ""
              }`}
            >
              <span className="mb-5 block h-[3px] w-9 bg-accent" aria-hidden />
              <dt className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
                {item.figure}
              </dt>
              <dd className="mt-4 max-w-[22ch] text-sm leading-snug text-muted">
                {item.caption}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
