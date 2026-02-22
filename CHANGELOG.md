# Changelog

Todas as mudanças notáveis do INV Design System são documentadas aqui.

---

## [0.2.0] — 2026-02-21 · [EPIC-DS-02.4](docs/stories/EPIC-DS-02.4.story.md)

### Adicionado
- **Table** — componente via shadcn/ui com showcase de domínio financeiro (faturas, ativos)
- **Typography** — CVA com 14 variantes: Display (Lora), Interface (Geist Sans), Data (JetBrains Mono), Labels. Prop `as` polimórfica
- **CodeBlock** — dark theme estilo GitHub, tokenizer JSX sem dependências externas, line numbers, copy button
- **Command** — palette funcional via cmdk + shadcn/ui. Atalho ⌘K/Ctrl+K. Índice com 16 páginas em 3 grupos (Fundações, Componentes, Conteúdo)
- **Agent ds-component (Pixel)** — AIOS agent com workflow 7-step para adicionar componentes shadcn ao DS

### Corrigido
- **Badge**: `<div>` → `<span>` (semântica inline correta)
- **Badge**: variantes `success`, `warning`, `error`, `info` como CVA first-class (eram className overrides)
- **Badge**: removidos hover states de badges não-interativos
- **Badge**: `font-mono font-medium` consistente em todas as variantes
- **Skeleton**: regressão `bg-accent` → `bg-muted` após reinstall shadcn + `import * as React` faltando
- **Dialog**: adicionado `showCloseButton?: boolean` prop ao `DialogContent`

### Melhorado
- `/components` convertido de showcase para índice organizado por categoria. Cards clicáveis para páginas existentes, "em breve" para as pendentes
- `/components/badges` reconstruído com variantes INV primeiro, base shadcn depois, uso em contexto
- `/components/loaders` reconstruído com Spinner + Skeleton Profile/Card/Dashboard INV
- **Sidebar**: Export movido de Componentes → Fundações (IA correta). Typography e Tables adicionados à nav
- **Search header**: botão decorativo substituído pelo `<SearchCommand />` funcional

---

## [0.1.0] — 2026-02-20 · [EPIC-DS-02.1](docs/stories/EPIC-DS-02.1.story.md) · [EPIC-DS-02.2](docs/stories/EPIC-DS-02.2.story.md) · [EPIC-DS-02.3](docs/stories/EPIC-DS-02.3.story.md) · [EPIC-DS-03.1](docs/stories/EPIC-DS-03.1.story.md)

### Adicionado
- **AppHeader** — fixo h-16 estilo Geist: logo INV + search bar + ThemeToggle
- **AppSidebar** — `<aside>` HTML puro, w-[260px], navegação em 3 grupos (Fundações, Componentes, Conteúdo)
- **ColorScaleGrid** — grid de chips por família de cor
- **ColorSemanticRow** — row estilo Geist com swatch círculo 24px + label + CSS var. Click-to-copy
- **ColorScaleRow** — row alternativa com swatch largo
- **TypographyTable** — tabela de tokens tipográficos: token / exemplo / size / weight / font / tracking
- **PageNav** — navegação Anterior/Próximo no rodapé das páginas
- **Tokens page** — 6 seções de cores + tipografia estilo Geist
- **Tom e Voz** — página editorial: princípios, tom por contexto, vocabulário INV

### Corrigido
- **Skeleton**: `bg-accent` → `bg-muted` (contraste visível)
- **Layout**: removido SidebarProvider/SidebarContext do Radix. Sidebar é `<aside>` puro
- **Layout root**: novo grid header + aside + main sem SidebarProvider
