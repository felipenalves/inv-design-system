# Story EPIC-DS-02.4: Component Library Expansion — Table, Typography, CodeBlock, Command, Search

## Status

Done

## Metadata

- **Epic:** EPIC-DS-02 (Component Library)
- **Story ID:** EPIC-DS-02.4
- **Complexity:** 13 points (Large)
- **Priority:** 🔴 High
- **Created:** 2026-02-21
- **Executor:** @dev (Dex) + @ds-component (Pixel)
- **UX Review:** @ux-design-expert (Uma)
- **Quality Gate:** @qa (Quinn)

---

## Title

Adicionar Table, Typography, CodeBlock e Command ao design system + refatorar Badge, Skeleton e navegação

## Description

Expansão da biblioteca de componentes com 4 novos componentes (Table, Typography, CodeBlock, Command/Search), refatoração de Badge e Skeleton baseada em análise UX, conversão do índice de componentes de showcase para catálogo navegável, e adição do agente especialista `ds-component` (Pixel) para automatizar o workflow de adição de novos componentes shadcn.

### Current State

- Busca ⌘K decorativa (sem funcionalidade)
- Badge usando `<div>`, sem variantes semânticas INV
- Skeleton com `bg-accent` (invisível no tema)
- `/components` era um showcase monolítico, não um índice
- Export em grupo errado na sidebar (Componentes em vez de Fundações)
- Sem componente de tipografia sistemático
- Sem componente de tabela
- Sem visualizador de código com syntax highlighting

### Desired State

- Command palette funcional com índice de 16 páginas
- Badge com variantes CVA `success/warning/error/info` e semântica `<span>` correta
- Skeleton com contraste correto (`bg-muted`)
- `/components` como catálogo com cards clicáveis e "em breve"
- IA da sidebar correta (Export em Fundações)
- Typography com 14 variantes CVA e prop `as` polimórfica
- Table via shadcn/ui com showcase de domínio financeiro
- CodeBlock dark theme com tokenizer JSX, line numbers e copy button

---

## Acceptance Criteria

### AC1: Table Component

- [x] Instalado via shadcn/ui com todos os sub-componentes (TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption)
- [x] Barrel export em `components/ui/index.ts`
- [x] Showcase em `app/components/table/page.tsx` com 3 variações (básica, footer+status, ativos financeiros)
- [x] Adicionado à sidebar (`/components/table`) e ao search index
- [x] StatusBadge usa variantes CVA (`variant="success/warning/error"`)

### AC2: Typography Component

- [x] CVA com 14 variantes: Display (Lora: h1, h2), Interface (Geist: h3-h6, body, lead, small, muted, caption), Data (JetBrains Mono: code), Labels (label, overline)
- [x] Prop `as` polimórfica com mapa de elementos padrão por variante
- [x] `React.forwardRef` com `displayName`
- [x] Import correto de `@/lib/utils`
- [x] Barrel export em `components/ui/index.ts`
- [x] Showcase em `app/components/typography/page.tsx`
- [x] Adicionado à sidebar e ao search index

### AC3: CodeBlock Component

- [x] Dark theme (`#161b22`) sem dependências externas
- [x] Tokenizer JSX próprio (tag-bracket, tag-name, attr-name, attr-value, text)
- [x] Line numbers em layout de tabela
- [x] Copy button com feedback visual (✓ após cópia)
- [x] Barrel export em `components/ui/index.ts`

### AC4: Command / Search Funcional (⌘K)

- [x] Instalado via shadcn/ui (cmdk)
- [x] `dialog.tsx` estendido com `showCloseButton?: boolean`
- [x] `SearchCommand` com atalho ⌘K/Ctrl+K e cleanup de listener
- [x] Índice com 16 páginas em 3 grupos (Fundações, Componentes, Conteúdo)
- [x] Navegação via `router.push` ao selecionar item
- [x] Botão trigger preserva visual do botão decorativo anterior

### AC5: Badge — Refatoração UX (Uma)

- [x] `<div>` → `<span>` (semântica inline correta)
- [x] Variantes `success`, `warning`, `error`, `info` como CVA first-class com tokens INV
- [x] Hover states removidos de todas as variantes (badges não são interativos)
- [x] `font-mono font-medium` consistente em todas as variantes
- [x] Showcase reconstruído: variantes INV primeiro, base shadcn depois

### AC6: Skeleton — Fix

- [x] Reinstalado via shadcn MCP
- [x] `import * as React` adicionado (estava faltando)
- [x] `bg-accent` → `bg-muted` (correção de contraste)
- [x] Showcase reconstruído com Profile, Card e Dashboard INV compositions

### AC7: Navegação & IA

- [x] `/components` convertido para catálogo com cards clicáveis (href) e "em breve" (Badge outline)
- [x] Export movido de Componentes → Fundações na sidebar
- [x] Typography e Tables adicionados à nav da sidebar
- [x] Showcase de badges reconstruído com uso em contexto e CodeBlock

### AC8: Agent ds-component (Pixel)

- [x] Workflow 7-step codificado em YAML: search MCP → view → install → build custom → barrel export → showcase → sidebar nav
- [x] Contexto de projeto com paths, brand tokens e convenções

---

## Scope

### IN

- Componentes: Table, Typography, CodeBlock, Command
- Fixes UX: Badge, Skeleton
- IA: sidebar, /components index
- Agent: ds-component

### OUT

- Implementação de Button, Input, Select, Textarea, Toast (próximas stories)
- Tokens OKLCH
- Testes automatizados (test runner não configurado)

---

## Dependencies

- **Prerequisite:** EPIC-DS-02.3 (Navigation + Sidebar base)
- **Blocked by:** Nenhum
- **Blocks:** EPIC-DS-02.5 (Forms — Button, Input, Select, Textarea, Toast)

---

## File List

| Arquivo | Ação |
|---|---|
| `components/ui/table.tsx` | NOVO |
| `components/ui/typography.tsx` | NOVO |
| `components/ui/code-block.tsx` | NOVO |
| `components/ui/command.tsx` | NOVO |
| `components/ui/dialog.tsx` | MODIFICADO — `showCloseButton` prop |
| `components/ui/badge.tsx` | MODIFICADO — refatoração UX completa |
| `components/ui/skeleton.tsx` | MODIFICADO — fix contraste + import |
| `components/ui/index.ts` | MODIFICADO — novos barrel exports |
| `components/layout/search-command.tsx` | NOVO |
| `components/layout/header.tsx` | MODIFICADO — SearchCommand integrado |
| `components/layout/sidebar.tsx` | MODIFICADO — Export movido, Typography/Tables adicionados |
| `app/components/table/page.tsx` | NOVO |
| `app/components/typography/page.tsx` | NOVO |
| `app/components/page.tsx` | REESCRITO — catálogo |
| `app/components/badges/page.tsx` | REESCRITO — showcase correto |
| `app/components/loaders/page.tsx` | REESCRITO — compositions corretas |
| `.aios-core/development/agents/ds-component.md` | NOVO |

---

## QA Results

### Review Date: 2026-02-21

### Reviewed By: Quinn (@qa)

### Code Quality Assessment

Build limpo (19/19 páginas), TypeScript sem erros. Todos os componentes com exports corretos no barrel. SearchCommand com cleanup adequado de event listener. Acessibilidade: `aria-label` no trigger, `title` e `description` no CommandDialog.

### Compliance Check

- Coding Standards: [✓]
- Project Structure: [✓]
- TypeScript: [✓]
- Build: [✓]

### Concerns Registrados

| ID | Severidade | Descrição | Resolução |
|---|---|---|---|
| C1 | LOW | `StatusBadge` em `table/page.tsx` usava `className` em vez de `variant="success/warning/error"` | ✅ Corrigido no mesmo ciclo |
| C2 | LOW | `code-block.tsx` usa `#161b22` hardcoded (não responde ao tema) | Intencional — GitHub dark style |
| C3 | LOW | Search index estático em `search-command.tsx` | Dívida de manutenção aceitável no escopo atual |

### Gate Status

**PASS**

### Change Log

| Data | Ação |
|---|---|
| 2026-02-21 09:00 | @ds-component (Pixel) — instalação Table via shadcn MCP |
| 2026-02-21 10:00 | @dev (Dex) — Typography CVA + CodeBlock custom |
| 2026-02-21 11:00 | @dev (Dex) — Command/Search funcional |
| 2026-02-21 12:00 | @ux-design-expert (Uma) — análise Badge, aplicação fixes 1-4 e 7 |
| 2026-02-21 13:00 | @ux-design-expert (Uma) — análise geral DS, fixes sidebar e /components |
| 2026-02-21 14:00 | @dev (Dex) — commit `86c89bc` |
| 2026-02-21 15:00 | @qa (Quinn) — gate review, C1 identificado |
| 2026-02-21 15:30 | @dev (Dex) — fix C1 (`variant="success/warning/error"`) — commit `9d61410` |
| 2026-02-21 16:00 | @devops (Gage) — push + redeploy Vercel — commit `39451c4` (docs) |
