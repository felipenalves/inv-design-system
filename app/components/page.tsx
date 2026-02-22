'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

// ── Inventário de componentes ──────────────────────────────────────
const components = [
  {
    category: 'Tipografia & Identidade',
    items: [
      {
        name: 'Typography',
        description: 'Escala tipográfica — Lora, Geist, JetBrains Mono',
        href: '/components/typography',
      },
      {
        name: 'Logos',
        description: 'Variantes de logotipo e marca INV',
        href: '/components/logos',
      },
      {
        name: 'Avatares',
        description: 'Avatar com imagem, fallback e tamanhos',
        href: '/components/avatars',
      },
    ],
  },
  {
    category: 'Dados & Status',
    items: [
      {
        name: 'Badges',
        description: 'Rótulos semânticos — success, warning, error, info',
        href: '/components/badges',
      },
      {
        name: 'Tables',
        description: 'Tabela com header, body, footer e caption',
        href: '/components/table',
      },
    ],
  },
  {
    category: 'Formulários',
    items: [
      {
        name: 'Button',
        description: 'Ações primárias, secundárias, ghost e destructive',
        href: null,
      },
      {
        name: 'Input',
        description: 'Campo de texto com estados de erro e disabled',
        href: null,
      },
      {
        name: 'Textarea',
        description: 'Campo de texto multilinha',
        href: null,
      },
      {
        name: 'Select',
        description: 'Dropdown de seleção com Radix UI',
        href: null,
      },
    ],
  },
  {
    category: 'Feedback & Overlay',
    items: [
      {
        name: 'Loaders',
        description: 'Skeleton e Spinner para estados de carregamento',
        href: '/components/loaders',
      },
      {
        name: 'Alerts & Dialogs',
        description: 'Alertas inline e modais de confirmação',
        href: '/components/alerts',
      },
      {
        name: 'Toast',
        description: 'Notificações via Sonner — success, error, default',
        href: null,
      },
    ],
  },
  {
    category: 'Layout & Navegação',
    items: [
      {
        name: 'Card',
        description: 'Superfície elevada com header, content e footer',
        href: null,
      },
      {
        name: 'Tabs',
        description: 'Navegação por abas com Radix UI',
        href: null,
      },
      {
        name: 'Toggles & Switches',
        description: 'Checkbox, radio e switch acessíveis',
        href: '/components/toggles',
      },
      {
        name: 'Navegação',
        description: 'Breadcrumb, pagination e navigation menu',
        href: '/components/navigation',
      },
    ],
  },
]

export default function ComponentsPage() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,hsl(var(--foreground)/0.04),transparent)]" />
        <div className="via-border to-border/50 absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        <div className="via-border to-border/50 absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="max-w-3xl px-10 pt-16 pb-20">

        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-10 duration-500">
          <p className="text-2xs text-muted-foreground/50 mb-3 font-mono tracking-widest uppercase">
            Design System — Componentes
          </p>
          <h1 className="text-foreground mb-3 text-5xl leading-[1.05] tracking-tight [text-shadow:0_0_60px_hsl(var(--foreground)/0.15)]">
            Biblioteca de Componentes
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Todos os componentes do sistema, organizados por categoria.
            Clique em um componente para ver variantes, estados e código.
          </p>
        </div>

        {/* Categories */}
        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards space-y-10 duration-500" style={{ animationDelay: '120ms' }}>
          {components.map((group) => (
            <section key={group.category}>

              {/* Category label */}
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground/60 font-mono">
                  {group.category}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Component cards */}
              <div className="grid grid-cols-2 gap-2">
                {group.items.map((item) =>
                  item.href ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group border-border bg-card hover:bg-accent flex items-start justify-between gap-3 rounded-lg border p-4 transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="text-foreground text-sm font-medium mb-0.5">
                          {item.name}
                        </p>
                        <p className="text-2xs text-muted-foreground font-mono leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight
                        size={12}
                        className="text-muted-foreground/30 group-hover:text-muted-foreground mt-0.5 shrink-0 transition-colors"
                      />
                    </Link>
                  ) : (
                    <div
                      key={item.name}
                      className="border-border bg-card/50 flex items-start justify-between gap-3 rounded-lg border p-4"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-foreground/60 text-sm font-medium">
                            {item.name}
                          </p>
                          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                            em breve
                          </Badge>
                        </div>
                        <p className="text-2xs text-muted-foreground/60 font-mono leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

            </section>
          ))}
        </div>

      </div>
    </div>
  )
}
