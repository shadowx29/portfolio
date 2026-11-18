# shadowx29 — portfolio

A cybersecurity-engineer portfolio for **shadowx29**, built with React 19, TypeScript and Bun's native dev server. Dark terminal aesthetic, matrix rain, glitch typography and scroll-driven reveals. No UI framework, no runtime dependencies beyond React.

## Run it

```bash
bun install
bun run dev      # http://localhost:3000
```

## Build / serve

```bash
bun run build    # static bundle in dist/
bun run start    # production server on PORT (default 3000)
```

`/api/status` returns a small JSON health payload.

## Deploy to Vercel

The repo ships `vercel.json`, so Vercel uses Bun to install, runs `bun run build`, and serves `dist/` as the output directory. Import the repo in Vercel and deploy, no dashboard overrides needed.

`bun run start` is only for self-hosting the Bun server; Vercel serves the static build.

## Structure

```
index.html               entry document
src/index.ts             Bun server + HTML route
src/frontend.tsx         React root
src/App.tsx              page shell, scroll progress, reveal observer
src/data.ts              content (skills, projects, experience, certs)
src/styles.css           full design system
src/components/          nav, hero, terminal, sections, footer, boot overlay
```

## Editing content

All copy lives in `src/data.ts` plus the component files for section prose. Swap the alias, email, social handles and projects there — no other wiring needed.

## Notes

- Fonts load from Google Fonts (JetBrains Mono, Space Grotesk) with system fallbacks.
- Motion respects `prefers-reduced-motion`.
- Mobile navigation, copy-to-clipboard email, and keyboard focus states are included.
