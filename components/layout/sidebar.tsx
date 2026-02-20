'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

// ── Estrutura de navegação ─────────────────────────────────────────
const navigation = [
  {
    group: 'Fundações',
    items: [
      { label: 'Introdução', href: '/' },
      { label: 'Tokens', href: '/tokens' },
      { label: 'Documentação', href: '/docs' },
    ],
  },
  {
    group: 'Componentes',
    items: [
      {
        label: 'Biblioteca',
        href: '/components',
        children: [
          { label: 'Logos', href: '/components/logos' },
          { label: 'Alerts & Dialogs', href: '/components/alerts' },
          { label: 'Avatares', href: '/components/avatars' },
          { label: 'Badges', href: '/components/badges' },
          { label: 'Toggles & Switches', href: '/components/toggles' },
          { label: 'Loaders', href: '/components/loaders' },
          { label: 'Navegação', href: '/components/navigation' },
        ],
      },
      { label: 'Patterns', href: '/patterns' },
      { label: 'Export', href: '/export' },
    ],
  },
  {
    group: 'Conteúdo',
    items: [
      { label: 'Tom e Voz', href: '/content/tom-e-voz' },
    ],
  },
]

// ── Item de nav simples ────────────────────────────────────────────
function NavItem({
  label,
  href,
  isActive,
}: {
  label: string
  href: string
  isActive: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'flex h-10 items-center rounded-md px-3 text-sm transition-colors',
          isActive
            ? 'bg-accent text-foreground font-medium'
            : 'text-muted-foreground hover:bg-accent hover:text-foreground',
        )}
      >
        {label}
      </Link>
    </li>
  )
}

// ── Item com sub-itens (collapsible) ──────────────────────────────
function NavItemCollapsible({
  label,
  href,
  children,
  pathname,
}: {
  label: string
  href: string
  children: { label: string; href: string }[]
  pathname: string
}) {
  const isParentActive = pathname.startsWith(href)
  const [open, setOpen] = useState(isParentActive)

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex h-10 w-full items-center gap-1 rounded-md px-3 text-sm transition-colors',
          isParentActive
            ? 'text-foreground font-medium'
            : 'text-muted-foreground hover:bg-accent hover:text-foreground',
        )}
      >
        <ChevronRightIcon
          className={cn(
            'h-3 w-3 shrink-0 transition-transform duration-150',
            open && 'rotate-90',
          )}
        />
        {label}
      </button>
      {open && (
        <ul className="ml-3 mt-0.5 border-l border-border pl-3 space-y-0.5">
          {children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={cn(
                  'flex h-8 items-center rounded-md px-2 text-[13px] transition-colors',
                  pathname === child.href
                    ? 'bg-accent text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

// ── Sidebar principal ─────────────────────────────────────────────
export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="border-border bg-sidebar fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)] w-[260px] flex-col border-r md:flex">
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-6">
          {navigation.map((section) => (
            <li key={section.group}>
              <p className="mb-1.5 px-3 text-[11px] font-medium tracking-widest text-muted-foreground/60 uppercase">
                {section.group}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) =>
                  'children' in item && item.children ? (
                    <NavItemCollapsible
                      key={item.href}
                      label={item.label}
                      href={item.href}
                      children={item.children}
                      pathname={pathname}
                    />
                  ) : (
                    <NavItem
                      key={item.href}
                      label={item.label}
                      href={item.href}
                      isActive={pathname === item.href}
                    />
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
