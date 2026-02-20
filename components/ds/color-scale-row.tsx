'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

interface ColorScaleRowProps {
  name: string
  cssVar: string
  usage: string
  hex?: string
  className?: string
}

export function ColorScaleRow({
  name,
  cssVar,
  usage,
  hex,
  className,
}: ColorScaleRowProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`var(${cssVar})`)
      setCopied(true)
      toast.success(`var(${cssVar}) copiado`)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Copie manualmente: ' + cssVar)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'group border-border bg-card hover:bg-accent flex w-full items-stretch gap-0 overflow-hidden rounded-lg border text-left transition-colors',
        className,
      )}
      aria-label={`Copiar var(${cssVar})`}
    >
      {/* Swatch — dominante, ocupa toda a altura da linha */}
      <div
        className="border-border/40 w-14 shrink-0 border-r"
        style={{ background: `var(${cssVar})` }}
        aria-hidden
      />

      {/* Conteúdo */}
      <div className="flex flex-1 items-center gap-4 px-4 py-3">
        {/* Nome do token */}
        <div className="w-44 shrink-0">
          <p className="text-foreground truncate text-xs font-medium font-mono">
            {name}
          </p>
          {hex && (
            <p className="text-muted-foreground/50 mt-0.5 truncate font-mono text-[10px]">
              {hex}
            </p>
          )}
        </div>

        {/* Uso semântico */}
        <p className="text-muted-foreground flex-1 truncate font-mono text-[11px]">
          {usage}
        </p>

        {/* CSS var + copy */}
        <div className="flex shrink-0 items-center gap-2">
          <code className="text-muted-foreground/70 font-mono text-[10px]">
            var({cssVar})
          </code>
          <span className="opacity-0 transition-opacity group-hover:opacity-100">
            {copied ? (
              <Check size={11} className="text-inv-green" />
            ) : (
              <Copy size={11} className="text-muted-foreground" />
            )}
          </span>
        </div>
      </div>
    </button>
  )
}
