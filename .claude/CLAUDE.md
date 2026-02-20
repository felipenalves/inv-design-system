# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**INV Design System** — A comprehensive React component library and design system built with Next.js 16, TypeScript, Tailwind CSS 4, and Radix UI. The project demonstrates production-grade patterns for enterprise design systems.

### Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19 with Radix UI
- **Styling:** Tailwind CSS 4 + PostCSS
- **Forms:** React Hook Form + Zod validation
- **Component Patterns:** CVA (class-variance-authority)
- **Package Manager:** pnpm
- **Orchestration:** Synkra AIOS (for story-driven development)

## Quick Commands

```bash
npm run dev          # Start dev server on port 3002
npm run build        # Production build
npm run lint         # Run ESLint
npm run typecheck    # Type check with TypeScript
npm start            # Start production server
```

## Project Structure

```
app/                            # Next.js App Router pages
├── layout.tsx                 # Root layout — AppHeader + AppSidebar + main
├── page.tsx                   # Introdução/overview
├── tokens/page.tsx            # Design tokens (cores, tipografia, spacing, shadows, radius)
├── components/page.tsx        # Component library showcase
│   ├── logos/page.tsx
│   ├── alerts/page.tsx
│   ├── avatars/page.tsx
│   ├── badges/page.tsx
│   ├── toggles/page.tsx
│   ├── loaders/page.tsx
│   └── navigation/page.tsx
├── patterns/page.tsx          # Pattern examples (forms, layouts)
│   └── forms/page.tsx
├── content/                   # Editorial / Content system
│   └── tom-e-voz/page.tsx    # Tom e Voz — princípios, contextos, vocabulário
├── export/page.tsx            # CSS/JSON token export
└── docs/page.tsx              # Documentação técnica

components/
├── ui/                        # Primitivos UI (Radix UI based)
│   ├── button.tsx             # Button com CVA variants
│   ├── input.tsx              # Form inputs
│   ├── card.tsx               # Card/container
│   ├── dialog.tsx             # Modal dialogs
│   ├── select.tsx             # Select dropdowns
│   ├── tabs.tsx               # Tabs
│   ├── avatar.tsx             # Avatares
│   ├── badge.tsx              # Badges
│   ├── label.tsx              # Form labels
│   ├── textarea.tsx           # Textarea
│   ├── skeleton.tsx           # Skeleton loader (usa bg-muted)
│   ├── sidebar.tsx            # Primitivos de sidebar (contexto legado)
│   ├── collapsible.tsx        # Collapsible
│   ├── sonner.tsx             # Toast notifications
│   ├── index.ts               # Barrel export
│   └── utils.ts               # cn() utility
│
├── ds/                        # Design system components (alto nível)
│   ├── token-card.tsx         # Card genérico click-to-copy (spacing, shadows, radius)
│   ├── color-scale-grid.tsx   # Grid de chips por família de cor (overview)
│   ├── color-semantic-row.tsx # Row semântica: swatch círculo + nome + uso + CSS var
│   ├── color-scale-row.tsx    # Row alternativa com swatch largo (legado)
│   ├── typography-table.tsx   # Tabela de escala tipográfica estilo Geist
│   └── page-nav.tsx           # Navegação Anterior/Próximo no rodapé
│
├── layout/                    # Layout global
│   ├── header.tsx             # AppHeader — fixo h-16, logo + search + theme
│   ├── sidebar.tsx            # AppSidebar — fixed w-[260px], navegação por grupos
│   └── theme-toggle.tsx       # Botão dark/light mode
│
└── providers/
    └── theme-provider.tsx     # next-themes provider

lib/
├── utils.ts                   # cn() — clsx + tailwind-merge
└── navigation.ts              # Configuração de navegação (legado)
```

## Layout Architecture

O layout global segue o padrão **Geist Design System** (Vercel):

```
┌─────────────────────────────────────────────────────┐
│  AppHeader  h-16  fixed top-0  z-50                 │
│  [logo INV Design System] [search ⌘K] [v0.1 theme] │
├──────────────┬──────────────────────────────────────┤
│              │                                      │
│  AppSidebar  │  <main>                              │
│  w-[260px]   │  pl-[260px] pt-16                    │
│  fixed       │  children (pages)                    │
│  top-16      │                                      │
│              │                                      │
└──────────────┴──────────────────────────────────────┘
```

### AppHeader (`components/layout/header.tsx`)

- `fixed inset-x-0 top-0 z-50 h-16`
- Seção esquerda: `w-[260px]` alinhada com sidebar, logo INV + nome
- Centro: search bar decorativo `⌘K` (max-w-[320px])
- Direita: versão + ThemeToggle
- `border-b border-border bg-background`

### AppSidebar (`components/layout/sidebar.tsx`)

- `fixed left-0 top-16 w-[260px] h-[calc(100vh-4rem)]`
- `hidden md:flex` — oculta em mobile
- `border-r border-border bg-sidebar`
- Navegação por 3 grupos: **Fundações**, **Componentes**, **Conteúdo**
- Item: `h-10 px-3 rounded-md text-sm`
- Item ativo: `bg-accent text-foreground font-medium`
- Item hover: `hover:bg-accent hover:text-foreground`
- Group label: `text-[11px] font-medium tracking-widest uppercase text-muted-foreground/60`
- Sub-itens (Biblioteca): collapsible com `border-l border-border pl-3`

### Navegação atual

```
Fundações
  Introdução          /
  Tokens              /tokens
  Documentação        /docs

Componentes
  Biblioteca          /components  ← collapsible
    Logos             /components/logos
    Alerts & Dialogs  /components/alerts
    Avatares          /components/avatars
    Badges            /components/badges
    Toggles & Switches /components/toggles
    Loaders           /components/loaders
    Navegação         /components/navigation
  Patterns            /patterns
  Export              /export

Conteúdo
  Tom e Voz           /content/tom-e-voz
```

## Component Development Patterns

### Button Component Example (best practices)

Located at `components/ui/button.tsx`:

1. **CVA Variants:** Uses `class-variance-authority` for composable styling
   - `variant` prop: default, accent, destructive, outline, secondary, ghost, link
   - `size` prop: xs, sm, default, lg, icon, icon-sm
   - Supports custom `className` prop

2. **Composition:** Extends native HTML button with custom props
   - `asChild`: Use Slot to render as different element
   - `loading`: Shows spinner, disables interaction
   - Full TypeScript support with `ButtonProps` interface

3. **Accessibility:** Built-in ARIA attributes
   - `aria-busy` when loading
   - Focus management with ring styles
   - Proper disabled states

### Creating New Components

When adding UI components:

1. **Import pattern:**

   ```tsx
   import * as React from 'react'
   import { cva, type VariantProps } from 'class-variance-authority'
   import { cn } from './utils'
   ```

2. **Define variants with CVA:**

   ```tsx
   const componentVariants = cva(
     "base classes here",
     { variants: { ... } }
   )
   ```

3. **Extend HTML element props:**

   ```tsx
   interface ComponentProps
     extends
       React.HTMLAttributes<HTMLElement>,
       VariantProps<typeof componentVariants> {
     customProp?: string
   }
   ```

4. **Use forwardRef for ref access:**

   ```tsx
   const Component = React.forwardRef<HTMLElement, ComponentProps>(...)
   Component.displayName = "Component"
   ```

5. **Export both component and variants:**

   ```tsx
   export { Component, componentVariants }
   ```

6. **Add to `components/ui/index.ts` barrel export**

## Design System Architecture

### UI Layer (`components/ui/`)

- **Primitive components** mapped to Radix UI
- No business logic, purely presentational
- Full component variant coverage (size, state, color)
- Controlled + uncontrolled patterns
- All components should have loading/disabled states
- **`skeleton.tsx`**: usa `bg-muted` (não `bg-accent`) para contraste visível

### DS Layer (`components/ds/`)

Componentes de alto nível para documentação e apresentação do DS.

| Componente | Uso |
|---|---|
| `token-card.tsx` | Card genérico click-to-copy — spacing, shadows, radius |
| `color-scale-grid.tsx` | Grid de chips coloridos por família. Props: `scales[]` com `name` + `chips[]` |
| `color-semantic-row.tsx` | Row estilo Geist: swatch círculo 24px + label + uso semântico + CSS var. Click-to-copy com feedback |
| `color-scale-row.tsx` | Row alternativa com swatch largo (legado, mantido para compatibilidade) |
| `typography-table.tsx` | Tabela de tokens tipográficos: token / exemplo renderizado / size / weight / font / tracking |
| `page-nav.tsx` | Navegação Anterior/Próximo. Props: `prev?` e `next?` com `{ label, href }` |

#### ColorScaleGrid — padrão de uso

```tsx
import { ColorScaleGrid } from '@/components/ds/color-scale-grid'

const scales = [
  {
    name: 'Brand',
    chips: [
      { cssVar: '--inv-taupe', label: 'taupe' },
      { cssVar: '--inv-blue', label: 'blue' },
    ],
  },
]

<ColorScaleGrid scales={scales} />
```

#### ColorSemanticRow — padrão de uso

```tsx
import { ColorSemanticRow } from '@/components/ds/color-semantic-row'

<ColorSemanticRow
  label="Background"
  usage="Fundo padrão da página"
  cssVar="--background"
  value="#fafafa / #0a0a0a"
/>
```

#### PageNav — padrão de uso

```tsx
import { PageNav } from '@/components/ds/page-nav'

<PageNav
  prev={{ label: 'Introdução', href: '/' }}
  next={{ label: 'Componentes', href: '/components' }}
/>
```

### Layout Layer (`components/layout/`)

- **`header.tsx`**: `AppHeader` — global fixo. Não recebe props. Logo + search + ThemeToggle.
- **`sidebar.tsx`**: `AppSidebar` — navegação fixa. Dados de nav declarados inline no arquivo.
- **`theme-toggle.tsx`**: botão Sun/Moon com hydration guard (`mounted` state).

> ⚠️ A sidebar **não usa mais** `SidebarProvider`/`SidebarContext` do Radix. É um `<aside>` HTML puro.

## Styling Conventions

### Tailwind CSS 4

- Uses new `@tailwindcss/postcss` plugin
- Dark mode support via `next-themes`
- Custom CSS variables for tokens
- Utility-first approach

### Color System

Referenced in `button.tsx` variants:

- `primary` / `primary-foreground`
- `secondary` / `secondary-foreground`
- `destructive` / `destructive-foreground`
- `accent` / `accent-foreground`
- `muted` / `muted-foreground`
- `inv-taupe` / `inv-taupe-hover` (brand colors)
- `input`, `border`, `ring`, `background`

**Finding colors:** Check generated Tailwind CSS output or theme configuration

### Spacing & Sizing

- Use Tailwind scale (4px base): `p-4`, `gap-2`, etc.
- Icon sizes: SVGs use `size-4` class (16px default)
- Button sizes: h-7 (xs), h-9 (sm), h-10 (default), h-11 (lg)

## Form Handling

### React Hook Form Integration

Project uses `react-hook-form` + `zod` for validation:

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  // ...
})

function MyForm() {
  const form = useForm({ resolver: zodResolver(schema) })
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Use form.register() for inputs */}
    </form>
  )
}
```

## Key Dependencies

| Package                    | Version  | Purpose                         |
| -------------------------- | -------- | ------------------------------- |
| `@radix-ui/*`              | ^1.x     | Unstyled, accessible components |
| `class-variance-authority` | ^0.7.1   | Type-safe component variants    |
| `clsx`                     | ^2.1.1   | Conditional className merging   |
| `tailwindcss`              | ^4.1.18  | CSS framework                   |
| `framer-motion`            | ^12.34.0 | Animations                      |
| `react-hook-form`          | ^7.71.1  | Form state management           |
| `zod`                      | ^4.3.6   | Schema validation               |
| `next-themes`              | ^0.4.6   | Theme switching (dark/light)    |
| `sonner`                   | ^2.0.7   | Toast notifications             |
| `@heroicons/react`         | ^2.0.0   | Icon library                    |

## Development Workflow

### Story-Driven Development (AIOS)

This project uses Synkra AIOS framework:

1. **Stories:** All work comes from stories in `docs/stories/`
2. **Agents:** Use @sm, @po, @dev, @qa agents for structured workflow
3. **Progress tracking:** Update story checkboxes and File List sections

### Git & Commits

- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
- Reference story: `feat: add button loading state [Story 1.2]`
- Keep commits atomic and focused

## Debugging & Development

### Common Issues

**ESLint errors:**

```bash
npm run lint -- --fix  # Auto-fix lint issues
```

**Type errors:**

```bash
npm run typecheck      # Full type check
```

**Port conflict (3002):**

```bash
npm run dev -- --port 3003  # Use different port
```

### Environment Variables

Required for AIOS framework (see `.env.example`):

- `DEEPSEEK_API_KEY` (optional)
- `OPENROUTER_API_KEY` (optional)
- `GITHUB_TOKEN` (for GitHub CLI)
- Other LLM/service keys as needed

### Testing Pattern

Though no test runner configured, when adding components:

- Test props and variants work correctly
- Test accessibility (keyboard nav, ARIA)
- Test disabled/loading states
- Test responsive behavior

## Component Checklist

When creating new UI components, ensure:

- [ ] Uses CVA for variants
- [ ] Extends native HTML element
- [ ] Supports `className` override
- [ ] Uses `cn()` for merging classes
- [ ] Has displayName for debugging
- [ ] Exports component AND variants
- [ ] Added to `components/ui/index.ts`
- [ ] Accessible (keyboard, ARIA labels)
- [ ] Works in dark mode
- [ ] TypeScript types exported

## Useful Patterns

### Using the `cn()` utility (from components/ui/utils.ts)

```tsx
// Merges Tailwind classes intelligently (avoids conflicts)
cn('px-4 py-2', condition && 'bg-red-500', customClassName)
```

### Theme switching (next-themes)

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
  )
}
```

### Sidebar navigation (components/layout/sidebar.tsx)

- Import navigation config from `lib/navigation.ts`
- Rendered on all pages via root layout
- Active link highlighting

## Tokens Page Architecture (`app/tokens/page.tsx`)

A página de tokens segue o padrão visual do **Vercel Geist Design System**.

### Estrutura da aba Cores

```
01 — Escalas          ColorScaleGrid     (chips por família)
02 — Backgrounds      ColorSemanticRow × 5
03 — Text & Icons     ColorSemanticRow × 4
04 — Borders & Focus  ColorSemanticRow × 3
05 — Brand            ColorSemanticRow × 9
06 — Semantic Aliases ColorSemanticRow × 4
```

### Outras abas

| Aba | Componente |
|---|---|
| Tipografia | `TypographyTable` |
| Spacing | `TokenCard` com barra visual proporcional |
| Shadows | `TokenCard` com box-shadow preview |
| Radius | `TokenCard` com forma com border-radius |

### SectionHeader — padrão interno

```tsx
// Usado inline na tokens/page.tsx
<SectionHeader index="01" title="Escalas" description="..." />
// Renderiza: linha decorativa + número mono + h2 + p
```

## Content System (`app/content/`)

Seção para documentação editorial da INV.

### Tom e Voz (`/content/tom-e-voz`)

Três seções:
1. **Princípios** (4 cards em grid 2col): Direto, Analítico, Sem clichês, Confrontador
2. **Tom por contexto** (cards): Produto, Marketing, Suporte — cada um com exemplos ✓/✗
3. **Vocabulário** (tabela): Usar vs. Evitar no domínio financeiro

## Color Token System

### Famílias de tokens

| Família | Tokens | Propósito |
|---|---|---|
| Backgrounds | `--background`, `--card`, `--muted`, `--accent`, `--popover` | Superfícies |
| Text | `--foreground`, `--muted-foreground`, `--card-foreground`, `--accent-foreground` | Tipografia |
| Borders | `--border`, `--input`, `--ring` | Contornos e foco |
| Brand | `--inv-taupe*`, `--inv-blue*`, `--inv-green*`, `--inv-warning`, `--inv-error` | Identidade |
| Semantic | `--primary`, `--primary-foreground`, `--secondary`, `--destructive` | Componentes |

### Regra: tema-aware

Todos os tokens de background, text e border mudam automaticamente entre light e dark via `globals.css`. Tokens `--inv-*` são fixos (sem variante por tema, exceto `--inv-taupe` e `--inv-blue-subtle`/`--inv-green-subtle`).

## Performance Notes

- Components tree-shake via barrel exports (`index.ts`)
- Tailwind CSS automatically purges unused styles
- Image optimization via Next.js `<Image>` component
- Font optimization com Geist Sans, Lora, JetBrains Mono
- Layout com `position: fixed` para header e sidebar — sem reflow em scroll

## Related Documentation

- **AIOS Framework:** See sections below on agents and workflows
- **Story Development:** `.claude/rules/story-lifecycle.md`
- **Workflow Execution:** `.claude/rules/workflow-execution.md`
- **IDS Principles:** `.claude/rules/ids-principles.md`
- **Agent Authority:** `.claude/rules/agent-authority.md`

---

## Synkra AIOS Development Rules

You are working with Synkra AIOS, an AI-Orchestrated System for Full Stack Development.

### Agent System

**Agent Activation:** Use @agent-name syntax: @dev, @qa, @architect, @pm, @po, @sm, @analyst
**Master Agent:** @aios-master
**Agent Commands:** Use * prefix: *help, *create-story, *task, \*exit

When an agent is active:

- Follow that agent's specific persona and expertise
- Use the agent's designated workflow patterns
- Maintain the agent's perspective throughout the interaction

### Story-Driven Development

1. **Work from stories** - All development starts with a story in `docs/stories/`
2. **Update progress** - Mark checkboxes as tasks complete: [ ] → [x]
3. **Track changes** - Maintain the File List section in the story
4. **Follow criteria** - Implement exactly what the acceptance criteria specify

### Common Commands

**AIOS Master Commands:**

- `*help` - Show available commands
- `*create-story` - Create new story
- `*task {name}` - Execute specific task
- `*workflow {name}` - Run workflow

---

_INV Design System Development Guide_
**Last updated: 2026-02-20**
**Framework: Next.js 16, React 19, Tailwind CSS 4**

## Changelog desta sessão (2026-02-20)

| Arquivo | Mudança |
|---|---|
| `components/ui/skeleton.tsx` | Fix: `bg-accent` → `bg-muted` (contraste visível) |
| `components/layout/header.tsx` | **NOVO**: AppHeader fixo h-16 estilo Geist |
| `components/layout/sidebar.tsx` | **REESCRITO**: aside HTML puro, removido SidebarProvider/Radix |
| `app/layout.tsx` | Novo grid: header + aside + main sem SidebarProvider |
| `components/ds/color-scale-grid.tsx` | **NOVO**: grid de chips por família de cor |
| `components/ds/color-semantic-row.tsx` | **NOVO**: row estilo Geist com swatch círculo |
| `components/ds/color-scale-row.tsx` | **NOVO**: row alternativa com swatch largo |
| `components/ds/typography-table.tsx` | **NOVO**: tabela de tokens tipográficos |
| `components/ds/page-nav.tsx` | **NOVO**: navegação Anterior/Próximo |
| `app/tokens/page.tsx` | **REESCRITO**: 6 seções de cores + tabela tipografia estilo Geist |
| `app/content/tom-e-voz/page.tsx` | **NOVO**: página Tom e Voz (princípios, contextos, vocabulário) |

---

<!-- AIOS-MANAGED SECTIONS -->
<!-- These sections are managed by AIOS. Edit content between markers carefully. -->
<!-- Your custom content above will be preserved during updates. -->

<!-- AIOS-MANAGED-START: core-framework -->

## Core Framework Understanding

Synkra AIOS is a meta-framework that orchestrates AI agents to handle complex development workflows. Always recognize and work within this architecture.

<!-- AIOS-MANAGED-END: core-framework -->

<!-- AIOS-MANAGED-START: agent-system -->

## Agent System

### Agent Activation

- Agents are activated with @agent-name syntax: @dev, @qa, @architect, @pm, @po, @sm, @analyst
- The master agent is activated with @aios-master
- Agent commands use the * prefix: *help, *create-story, *task, \*exit

### Agent Context

When an agent is active:

- Follow that agent's specific persona and expertise
- Use the agent's designated workflow patterns
- Maintain the agent's perspective throughout the interaction
<!-- AIOS-MANAGED-END: agent-system -->

<!-- AIOS-MANAGED-START: framework-structure -->

## AIOS Framework Structure

```
aios-core/
├── agents/         # Agent persona definitions (YAML/Markdown)
├── tasks/          # Executable task workflows
├── workflows/      # Multi-step workflow definitions
├── templates/      # Document and code templates
├── checklists/     # Validation and review checklists
└── rules/          # Framework rules and patterns

docs/
├── stories/        # Development stories (numbered)
├── prd/            # Product requirement documents
├── architecture/   # System architecture documentation
└── guides/         # User and developer guides
```

<!-- AIOS-MANAGED-END: framework-structure -->

<!-- AIOS-MANAGED-START: aios-patterns -->

## AIOS-Specific Patterns

### Working with Templates

```javascript
const template = await loadTemplate('template-name')
const rendered = await renderTemplate(template, context)
```

### Agent Command Handling

```javascript
if (command.startsWith('*')) {
  const agentCommand = command.substring(1)
  await executeAgentCommand(agentCommand, args)
}
```

### Story Updates

```javascript
// Update story progress
const story = await loadStory(storyId)
story.updateTask(taskId, { status: 'completed' })
await story.save()
```

<!-- AIOS-MANAGED-END: aios-patterns -->

<!-- AIOS-MANAGED-START: common-commands -->

## Common Commands

### AIOS Master Commands

- `*help` - Show available commands
- `*create-story` - Create new story
- `*task {name}` - Execute specific task
- `*workflow {name}` - Run workflow

### Development Commands

- `npm run dev` - Start development
- `npm test` - Run tests
- `npm run lint` - Check code style
- `npm run build` - Build project
<!-- AIOS-MANAGED-END: common-commands -->
