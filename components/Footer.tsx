export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-ink">Hussan Almosawi</span>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Supply Chain · Data · Finance · Documentation
        </span>
        <span className="font-mono text-xs text-muted">© {year}</span>
      </div>
    </footer>
  );
}
