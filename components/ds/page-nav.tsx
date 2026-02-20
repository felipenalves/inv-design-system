import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface PageNavProps {
  prev?: { label: string; href: string }
  next?: { label: string; href: string }
}

export function PageNav({ prev, next }: PageNavProps) {
  return (
    <div className="border-border mt-16 flex items-center justify-between border-t pt-6">
      {prev ? (
        <Link
          href={prev.href}
          className="border-border bg-card hover:bg-accent group flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors"
        >
          <ChevronLeftIcon className="text-muted-foreground h-4 w-4" />
          <div>
            <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest">
              Anterior
            </p>
            <p className="text-foreground text-sm font-medium">{prev.label}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="border-border bg-card hover:bg-accent group flex items-center gap-3 rounded-lg border px-4 py-3 text-right transition-colors"
        >
          <div>
            <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest">
              Próximo
            </p>
            <p className="text-foreground text-sm font-medium">{next.label}</p>
          </div>
          <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
