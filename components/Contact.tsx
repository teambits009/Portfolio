import { profile } from "@/lib/content";

export default function Contact() {
  const emailHref = profile.email ? `mailto:${profile.email}` : undefined;
  const emailValue = profile.email || "your professional email";
  const linkedinHref = profile.linkedin || undefined;
  const linkedinValue = profile.linkedin
    ? profile.linkedin.replace(/^https?:\/\/(www\.)?/, "")
    : "connect with me";

  return (
    <section id="contact" className="border-t border-line">
      <div className="wrap py-20 md:py-28">
        <div className="reveal max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-medium text-accent">§ 05</span>
            <span className="h-px w-12 bg-accent/50" aria-hidden />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">Contact</span>
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
            Let&apos;s talk about how I can help your team.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink2">
            Available for <span className="text-ink">full-time, part-time, internship, or
            project-based contract</span> opportunities in supply chain, procurement, operations, or
            finance — remote-ready and based in Detroit, Michigan.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
          <ContactCard label="Email" value={`${emailValue} →`} href={emailHref} />
          <ContactCard
            label="LinkedIn"
            value={`${linkedinValue} →`}
            href={linkedinHref}
            external
          />
          <div className="bg-surface p-7">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              Location
            </span>
            <span className="mt-3 block font-display text-lg text-ink">
              Detroit, Michigan · Remote-ready
            </span>
          </div>
        </div>

        <p className="reveal mt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Portfolio &amp; résumé available upon request
        </p>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      <span className="mt-3 block font-display text-lg text-ink transition-colors group-hover:text-accent">
        {value}
      </span>
    </>
  );

  if (!href) {
    return <div className="bg-surface p-7">{inner}</div>;
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group bg-surface p-7 transition-colors hover:bg-paper2"
    >
      {inner}
    </a>
  );
}
