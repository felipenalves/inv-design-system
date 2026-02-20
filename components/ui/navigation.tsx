'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export interface NavigationLink {
  href: string
  label: string
  icon?: React.ReactNode
}

interface NavigationProps {
  links: NavigationLink[]
  className?: string
}

export function Navigation({ links, className }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn('flex items-center gap-1', className)}>
      {links.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-150',
              'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
              isActive
                ? 'text-foreground bg-primary/10 border-primary border-b-2'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.icon && <div className="h-4 w-4">{link.icon}</div>}
            <span>{link.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
