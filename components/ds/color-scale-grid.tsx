'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface ColorChip {
  cssVar: string
  label?: string
}

interface ColorScale {
  name: string
  chips: ColorChip[]
}

interface ColorScaleGridProps {
  scales: ColorScale[]
}

function Chip({ chip }: { chip: ColorChip }) {
  const [hovered, setHovered] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`var(${chip.cssVar})`)
    toast.success(`var(${chip.cssVar}) copiado`)
  }

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border-border/30 h-9 w-full rounded transition-transform hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={{ background: `var(${chip.cssVar})` }}
        aria-label={`Copiar var(${chip.cssVar})`}
      />
      {/* Tooltip */}
      {hovered && (
        <div className="bg-foreground text-background pointer-events-none absolute bottom-full left-1/2 z-50 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 font-mono text-[10px]">
          {chip.label ?? chip.cssVar}
        </div>
      )}
    </div>
  )
}

export function ColorScaleGrid({ scales }: ColorScaleGridProps) {
  return (
    <div className="space-y-2">
      {scales.map((scale) => (
        <div key={scale.name} className="flex items-center gap-3">
          {/* Scale name */}
          <span className="text-muted-foreground w-28 shrink-0 font-mono text-[11px]">
            {scale.name}
          </span>
          {/* Chips row */}
          <div
            className="grid flex-1 gap-1"
            style={{ gridTemplateColumns: `repeat(${scale.chips.length}, 1fr)` }}
          >
            {scale.chips.map((chip) => (
              <Chip key={chip.cssVar} chip={chip} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
