'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

interface TokenCardProps {
  name: string
  cssVar: string
  value?: string
  preview?: React.ReactNode
  className?: string
}

export function TokenCard({
  name,
  cssVar,
  value,
  preview,
  className,
}: TokenCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssVar)
      setCopied(true)
      toast.success(`${cssVar} copiado`)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Copie manualmente: ' + cssVar)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'group border-border bg-card flex items-center gap-3 rounded-lg border p-3',
        'hover:bg-accent w-full text-left transition-all',
        className,
      )}
      aria-label={`Copiar ${cssVar}`}
    >
      {preview && <div className="shrink-0">{preview}</div>}
      <div className="min-w-0 flex-1">
        <p className="text-foreground truncate text-xs font-medium">{name}</p>
        <p className="text-2xs text-muted-foreground mt-0.5 truncate font-mono">
          {cssVar}
        </p>
        {value && (
          <p className="text-2xs text-muted-foreground/60 truncate font-mono">
            {value}
          </p>
        )}
      </div>
      <div className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
        {copied ? (
          <Check size={11} className="text-inv-green" />
        ) : (
          <Copy size={11} className="text-muted-foreground" />
        )}
      </div>
    </button>
  )
}
