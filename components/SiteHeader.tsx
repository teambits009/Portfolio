"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/70"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Hussan Almosawi — home">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink font-display text-sm font-semibold text-paper">
            HA
          </span>
          <span className="font-display text-[1.05rem] font-medium text-ink">
            Hussan Almosawi
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-muted transition-colors hover:bg-paper2 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="grid h-10 w-10 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Get in touch
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink md:hidden"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-paper px-6 pb-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-ink2 last:border-none"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
