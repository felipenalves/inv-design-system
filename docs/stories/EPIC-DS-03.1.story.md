# Story EPIC-DS-03.1: Developer Experience (DX) & Tooling Quick Wins

## Status

Done

## Metadata

- **Epic:** EPIC-DS-03 (DX & Infrastructure Modernization)
- **Story ID:** EPIC-DS-03.1
- **Complexity:** 5 points (Medium)
- **Priority:** 🔴 High (Fundamental DX/Tooling blockers)
- **Created:** 2026-02-19
- **Executor:** @dev
- **Quality Gate:** @po
- **Quality Gate Tools:** component_validation, linting_check

---

## Title

Implement Tooling Quick Wins, Tailwind v4 Native Config, and AI Guidelines

## Description

This story aims to apply all "Quick Wins" identified during the design system audit. It focuses on resolving the hybrid Tailwind v3/v4 configuration by fully migrating to a native, CSS-first `@theme` block in `globals.css` and deleting `tailwind.config.ts`. Additionally, it establishes critical developer experience (DX) tooling (Prettier, Prettier-Tailwind, Husky, lint-staged) and introduces a comprehensive `.cursorrules` file to align AI assistants with the project's modern tech stack (React 19, Next.js 16, Tailwind v4).

### Current State

- `tailwind.config.ts` exists alongside native `@theme` directives in `globals.css` (hybrid v3/v4 state).
- Insufficient tooling for automatic code formatting (no Prettier, no Husky).
- No `.cursorrules` file to inform AI agents of the specific project context.

### Desired State

- Pure Tailwind v4 configuration in `app/globals.css`.
- `.cursorrules` explicitly specifying project frameworks and AIOS protocols.
- Automated code formatting on commit via `lint-staged` and Prettier.

---

## Acceptance Criteria

### Given

A repository containing the MVP Design System components and the need to scale cleanly.

### When

The developer implements the DX quick wins and resolves configuration hybridization.

### Then

#### AC1: Pure Tailwind CSS v4 Migration

- [ ] `tailwind.config.ts` is deleted completely.
- [ ] Any variables inside `tailwind.config.ts` (colors, border radius, animations) are migrated directly into the `@theme` block in `app/globals.css`.
- [ ] The `@tailwindcss/postcss` plugin in `postcss.config.mjs` continues to function properly.
- [ ] `.shadcnrc.json` is updated to point its `tailwind.config` to `""` or `app/globals.css` (as per shadcn v4 compatibility mode).

#### AC2: AI Guidelines Configuration

- [ ] `.cursorrules` file is created at the repository root.
- [ ] The file outlines project technologies (React 19, Next.js 16 App Router, Tailwind v4, shadcn/ui).
- [ ] The file requires using `*.tsx` extensions, functional components, and strict TypeScript.
- [ ] The file integrates the AIOS rules ensuring agents read `CLAUDE.md` and use the proper `cn()` utility without `.join(" ")`.

#### AC3: Code Formatting & Tooling

- [ ] `prettier` and `prettier-plugin-tailwindcss` are installed as dev dependencies.
- [ ] A `.prettierrc` (or equivalent) configuration is established.
- [ ] `npm run format` script is created to format all `*.tsx`, `*.ts`, and `*.css` files.
- [ ] Husky is set up to run `lint-staged` on pre-commit to automatically format changed files.

---

## Scope

### IN

- Deletion of `tailwind.config.ts` and porting values to `globals.css`
- Prettier setup and formatting script
- `.cursorrules` file creation
- Clean up of basic class-strings to match the new Prettier-Tailwind plugin rules

### OUT

- Converting colors to OKLCH (reserved for EPIC-DS-03.2)
- Rebuilding the `Button` or `Navigation` logic (unless affected by pure Prettier formatting)
- Adding new UI components

---

## Dependencies

- **Prerequisite:** Project Audit Completion
- **Blocked by:** None
- **Blocks:** EPIC-DS-03.2 (OKLCH Migration)

---

## Technical Details

**Tailwind v4 CSS Rules (`globals.css`):**
Make sure the syntax used converts the old `extend` blocks into pure v4 variables:

```css
@theme {
  --color-primary: hsl(var(--primary));
  --animate-accordion-down: accordion-down 0.2s ease-out;
}
```

**`.cursorrules` Minimum Context:**

```markdown
# Contexto do Projeto

- Next.js 16 (App Router)
- React 19 (Server Components default)
- Tailwind CSS v4 (Apenas CSS, sem tailwind.config.ts)
- shadcn/ui (Radix UI)
- Otimize o uso do 'cn' (clsx + tailwind-merge), evite .join(" ")
```

---

## Business Value

- **Enables:** Seamless auto-completion (IntelliSense) for Tailwind v4.
- **Unblocks:** Faster builds and AI agents perfectly aligned with project conventions.
- **Improves:** Code consistency across teams, eliminating manual formatting reviews.

---

## Quality Assurance

### Validation Steps

- [x] Run `npm run build` to verify Tailwind v4 parses correctly without `tailwind.config.ts`.
- [x] Intentionally break formatting in a file and run Prettier to confirm it corrects Tailwind class sorting.
- [x] Verify AI autocomplete (or Cursor/Claude Code) responds well to the `.cursorrules` directives.

---

## QA Results

### Review Date: 2026-02-19

### Reviewed By: Quinn (Test Architect)

### Code Quality Assessment

Configurations migrated correctly to pure Tailwind v4 in `app/globals.css`. Developer tooling successfully implemented. Typecheck, formatting, and linting scripts run without errors.

### Compliance Check

- Coding Standards: [✓]
- Project Structure: [✓]
- Testing Strategy: [✓]
- All ACs Met: [✓]

### Improvements Checklist

- [x] Verified `npm run build` succeeds using Turbopack and proper formatting.

### Security Review

No security vulnerabilities detected. Dependency addition only includes development tooling.

### Performance Considerations

Tooling changes will not impact application payload size. Formatting scripts configured to target appropriately specific files.

### Gate Status

Gate: PASS → docs/qa/gates/EPIC-DS-03.1-dx-tooling.yml

### Recommended Status

[✓ Ready for Done]
