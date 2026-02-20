'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from './theme-toggle'

export function AppHeader() {
  return (
    <header className="border-border bg-background fixed inset-x-0 top-0 z-50 flex h-16 items-center border-b">
      {/* Left — logo */}
      <div className="flex h-full w-[260px] shrink-0 items-center border-r border-border px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/favicon-light.png"
            alt="INV"
            width={16}
            height={16}
            className="shrink-0 dark:hidden"
          />
          <Image
            src="/favicon-dark.png"
            alt="INV"
            width={16}
            height={16}
            className="hidden shrink-0 dark:block"
          />
          <span className="text-foreground text-sm font-semibold tracking-wide">
            INV Design System
          </span>
        </Link>
      </div>

      {/* Center — search */}
      <div className="flex flex-1 items-center justify-center px-6">
        <button
          className="border-border bg-card text-muted-foreground hover:border-border/80 flex h-8 w-full max-w-[320px] items-center gap-2 rounded-md border px-3 text-xs transition-colors"
          aria-label="Buscar"
        >
          <MagnifyingGlassIcon className="h-3.5 w-3.5 shrink-0" />
          <span className="flex-1 text-left">Buscar…</span>
          <kbd className="border-border bg-background rounded border px-1 py-px font-mono text-[10px]">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right — theme + version */}
      <div className="flex h-full items-center gap-1 px-4">
        <span className="text-muted-foreground/50 mr-2 font-mono text-[10px]">
          v0.1
        </span>
        <ThemeToggle />
      </div>
    </header>
  )
}
