# Patina — Project Context

Read this file at the start of every session. It defines the project structure, tools, and rules that apply to all work in this repo.

---

## Project

Patina is an Android live-wallpaper app that tints the lock screen from neutral to yellow to orange to red as daily screen time increases. This repo is the marketing landing page.

---

## Figma

- **Design system file**: https://www.figma.com/design/LsWSFs00HCGOqLeo2Rtfc1/Patina-Design-System?node-id=0-1&t=Z6wMf10uaNkICX4k-1
  - Variables and text styles live here
  - Component library lives here
  - This is the Figma source — all other Figma files consume it as a library

- **Design file**: https://www.figma.com/design/KiBHJ8r7iqXc77iVx5Uj0A/Patina-Website?node-id=0-1&t=VCcKS0v6qIFgKX47-1
  - Layouts and page designs live here
  - Consumes the design system file via Figma library
  - Use this file as the layout reference when building components

---

## Repo Structure

```
patina-website/
├── src/
│   ├── styles/
│   │   └── tokens.css        ← all design tokens, Tailwind v4 @theme
│   ├── components/           ← React components
│   └── main.tsx
├── public/
│   └── assets/               ← images, icons, SVGs
├── CLAUDE.md                 ← this file
├── index.html
└── vite.config.ts
```

---

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4 (`@theme` directive, no `tailwind.config.js`)
- Storybook 8

---

## Source of Truth

**Code is the source of truth.** The hierarchy is:

```
tokens.css  →  Figma variables (synced via Console MCP)
            →  Tailwind → components
            →  Storybook (documents what exists, not what should exist)
```

Figma reflects the token system — it does not define it. If there is ever a conflict between Figma and `tokens.css`, `tokens.css` wins.

Storybook is documentation and component testing only. Build components in code first, Storybook reflects them.

---

## Design Token Pipeline

This is the required order — never skip or reverse steps:

1. Token decisions approved by Fatima
2. Claude Code writes tokens to `src/styles/tokens.css` via `@theme {}`
3. Claude Code creates Figma variables and text styles in the design system file via Console MCP
4. Components built against token system only
5. Storybook updated to reflect new components

---

## Connected MCPs

- **Figma MCP**: read layout context from the design file
- **Figma Console MCP**: write variables and text styles to the design system file

---

## Rules

- No hardcoded hex values, px values, or font names anywhere in components
- Always use `var(--token-name)` referencing `tokens.css`
- No inline styles
- Radius tokens are named (`--radius-sm`) never numbered
- Spell `tertiary` correctly — never `terciary`
- Before creating similar-looking tokens, flag and confirm with Fatima
- When in doubt about a design decision, ask — never assume
- Always write variables and text styles to the design system file, never the design file

---

## Out of Scope

- User authentication
- CMS
- Dark mode
