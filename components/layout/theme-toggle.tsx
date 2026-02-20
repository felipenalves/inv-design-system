'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-7 w-7" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-md transition-colors',
        'text-muted-foreground hover:text-foreground hover:bg-accent',
      )}
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
    </button>
  )
}
