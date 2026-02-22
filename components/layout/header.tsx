'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { SearchCommand } from './search-command'

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
        <SearchCommand />
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
