'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface ColorSemanticRowProps {
  /** Label curto: "Background 1", "Color 3" */
  label: string
  /** Descrição de uso semântico */
  usage: string
  /** CSS variable: '--background' */
  cssVar: string
  /** Valor hex/hsl para exibição */
  value?: string
  className?: string
}

export function ColorSemanticRow({
  label,
  usage,
  cssVar,
  value,
  className,
}: ColorSemanticRowProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`var(${cssVar})`)
    setCopied(true)
    toast.success(`var(${cssVar}) copiado`)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'group flex h-10 w-full items-center gap-4 rounded-md px-2 text-left transition-colors',
        'hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      aria-label={`Copiar var(${cssVar})`}
    >
      {/* Swatch — círculo */}
      <div
        className="border-border/40 h-6 w-6 shrink-0 rounded-full border shadow-sm"
        style={{ background: `var(${cssVar})` }}
        aria-hidden
      />

      {/* Label */}
      <span className="text-foreground w-36 shrink-0 text-sm font-medium">
        {label}
      </span>

      {/* Uso semântico */}
      <span className="text-muted-foreground flex-1 truncate font-mono text-xs">
        {usage}
      </span>

      {/* CSS var + valor */}
      <div className="flex shrink-0 items-center gap-3">
        {value && (
          <span className="text-muted-foreground/50 hidden font-mono text-[10px] xl:inline">
            {value}
          </span>
        )}
        <code
          className={cn(
            'font-mono text-[11px] transition-colors',
            copied ? 'text-inv-green' : 'text-muted-foreground/70 group-hover:text-muted-foreground',
          )}
        >
          {copied ? 'copiado ✓' : `var(${cssVar})`}
        </code>
      </div>
    </button>
  )
}
