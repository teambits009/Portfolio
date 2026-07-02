# Hussan Almosawi — Portfolio

Personal portfolio site for **Hussan Almosawi** — Global Supply Chain Management,
data analysis, financial modeling, and technical documentation.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**. Editorial
"dossier" design: warm paper, ink, a single terracotta accent, a serif display
face (Fraunces) with monospace (JetBrains Mono) for data labels. Light/dark theme,
scroll reveals, fully responsive.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Editing content

All copy lives in one file: [`lib/content.ts`](lib/content.ts) — profile, stats,
competencies, projects, toolkit, and coursework. Update there and the whole site
follows.

> **Before publishing:** set `email` and `linkedin` in [`lib/content.ts`](lib/content.ts).
> Until then, the contact cards render clear placeholders.

## Structure

```
app/
  layout.tsx      # fonts, metadata, theme boot, shell
  page.tsx        # section composition
  globals.css     # Tailwind + design tokens (theme lives here)
components/        # SiteHeader, Hero, Ledger, About, Competencies,
                   # Projects, Toolkit, Contact, Footer, + client helpers
lib/content.ts     # all site content
```
