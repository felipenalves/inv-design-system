'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

// ── Índice de busca ────────────────────────────────────────────────
const searchIndex = [
  {
    group: 'Fundações',
    items: [
      { label: 'Introdução', description: 'Visão geral do design system', href: '/' },
      { label: 'Tokens', description: 'Cores, tipografia, spacing, shadows, radius', href: '/tokens' },
      { label: 'Export', description: 'CSS variables e JSON prontos para uso', href: '/export' },
      { label: 'Documentação', description: 'Guias de implementação e convenções', href: '/docs' },
    ],
  },
  {
    group: 'Componentes',
    items: [
      { label: 'Biblioteca', description: 'Índice de todos os componentes', href: '/components' },
      { label: 'Typography', description: 'Lora, Geist Sans, JetBrains Mono', href: '/components/typography' },
      { label: 'Logos', description: 'Variantes de logotipo e marca INV', href: '/components/logos' },
      { label: 'Alerts & Dialogs', description: 'Alertas inline e modais de confirmação', href: '/components/alerts' },
      { label: 'Avatares', description: 'Avatar com imagem, fallback e tamanhos', href: '/components/avatars' },
      { label: 'Badges', description: 'Rótulos semânticos — success, warning, error, info', href: '/components/badges' },
      { label: 'Toggles & Switches', description: 'Checkbox, radio e switch acessíveis', href: '/components/toggles' },
      { label: 'Loaders', description: 'Skeleton e Spinner para estados de carregamento', href: '/components/loaders' },
      { label: 'Navegação', description: 'Breadcrumb, pagination e navigation menu', href: '/components/navigation' },
      { label: 'Tables', description: 'Tabela com header, body, footer e caption', href: '/components/table' },
      { label: 'Patterns', description: 'Composições e padrões de interface', href: '/patterns' },
    ],
  },
  {
    group: 'Conteúdo',
    items: [
      { label: 'Tom e Voz', description: 'Princípios, contextos e vocabulário INV', href: '/content/tom-e-voz' },
    ],
  },
]

// ── Componente ─────────────────────────────────────────────────────
export function SearchCommand() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  // ⌘K / Ctrl+K
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  function navigate(href: string) {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Trigger — mesmo visual do botão decorativo anterior */}
      <button
        onClick={() => setOpen(true)}
        className="border-border bg-card text-muted-foreground hover:border-border/80 flex h-8 w-full max-w-[320px] items-center gap-2 rounded-md border px-3 text-xs transition-colors"
        aria-label="Abrir busca"
      >
        <MagnifyingGlassIcon className="h-3.5 w-3.5 shrink-0" />
        <span className="flex-1 text-left">Buscar…</span>
        <kbd className="border-border bg-background rounded border px-1 py-px font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>

      {/* Dialog */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Buscar no Design System"
        description="Navegue para qualquer seção do INV Design System"
        showCloseButton={false}
      >
        <CommandInput placeholder="Buscar componente, token, página…" />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

          {searchIndex.map((section, i) => (
            <React.Fragment key={section.group}>
              {i > 0 && <CommandSeparator />}
              <CommandGroup heading={section.group}>
                {section.items.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={`${item.label} ${item.description}`}
                    onSelect={() => navigate(item.href)}
                    className="flex flex-col items-start gap-0 py-2"
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-muted-foreground text-xs font-mono">
                      {item.description}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
