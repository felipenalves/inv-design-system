'use client'

import { useState } from 'react'
import { Download, FileJson, FileCode } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import tokens from '@/data/tokens.json'

type ExportFormat = 'json' | 'css'

function generateCSS(): string {
  return `:root {
  /* shadcn native tokens */
  --background: 0 0% 98%;
  --foreground: 0 0% 4%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 4%;
  --muted: 0 0% 94%;
  --muted-foreground: 0 0% 45%;
  --accent: 0 0% 92%;
  --accent-foreground: 0 0% 4%;
  --border: 0 0% 88%;
  --input: 0 0% 88%;
  --ring: 0 0% 4%;
  --primary: 25 8% 50%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96%;
  --secondary-foreground: 0 0% 4%;
  --destructive: 0 84% 60%;
  --radius: 0.5rem;

  /* INV brand accents */
  --inv-blue: #3080ff;
  --inv-green: #00bb7f;
  --inv-warning: #f99c00;
  --inv-error: #fb2c36;

  /* Spacing */
  --inv-spacing-xs:  ${tokens.spacing_system.tokens.xs};
  --inv-spacing-sm:  ${tokens.spacing_system.tokens.sm};
  --inv-spacing-md:  ${tokens.spacing_system.tokens.md};
  --inv-spacing-lg:  ${tokens.spacing_system.tokens.lg};
  --inv-spacing-xl:  ${tokens.spacing_system.tokens.xl};
  --inv-spacing-2xl: ${tokens.spacing_system.tokens['2xl']};
  --inv-spacing-3xl: ${tokens.spacing_system.tokens['3xl']};
  --inv-spacing-4xl: ${tokens.spacing_system.tokens['4xl']};
  --inv-spacing-5xl: ${tokens.spacing_system.tokens['5xl']};
  --inv-spacing-6xl: ${tokens.spacing_system.tokens['6xl']};
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 98%;
  --card: 0 0% 7%;
  --card-foreground: 0 0% 98%;
  --muted: 0 0% 10%;
  --muted-foreground: 0 0% 60%;
  --accent: 0 0% 12%;
  --accent-foreground: 0 0% 98%;
  --border: 0 0% 14%;
  --input: 0 0% 14%;
  --ring: 0 0% 98%;
  --primary: 25 8% 50%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 9%;
  --secondary-foreground: 0 0% 98%;
  --destructive: 0 84% 60%;
}`
}

function generateJSON(): string {
  const flat: Record<string, string> = {}
  const addTokens = (obj: Record<string, unknown>, prefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key
      if (typeof value === 'string') {
        flat[newKey] = value
      } else if (typeof value === 'object' && value !== null) {
        addTokens(value as Record<string, unknown>, newKey)
      }
    }
  }
  addTokens(tokens as unknown as Record<string, unknown>, '')
  return JSON.stringify(flat, null, 2)
}

function downloadFile(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export default function ExportPage() {
  const [format, setFormat] = useState<ExportFormat>('css')
  const [loading, setLoading] = useState(false)

  const handleExport = async () => {
    setLoading(true)
    try {
      if (format === 'css') {
        downloadFile(generateCSS(), 'inv-tokens.css', 'text/css')
        toast.success('inv-tokens.css exportado')
      } else {
        downloadFile(generateJSON(), 'inv-tokens.json', 'application/json')
        toast.success('inv-tokens.json exportado')
      }
    } catch {
      toast.error('Falha ao exportar tokens')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,hsl(var(--foreground)/0.04),transparent)]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="via-border to-border/50 absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        <div className="via-border to-border/50 absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="max-w-xl px-10 pt-16 pb-20">
        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-10 duration-500"
          style={{ animationDelay: '0ms' }}
        >
          <p className="text-2xs text-muted-foreground/50 mb-3 font-mono tracking-widest uppercase">
            Design System — Export
          </p>
          <h1 className="text-foreground mb-3 text-5xl leading-[1.05] tracking-tight [text-shadow:0_0_60px_hsl(var(--foreground)/0.15)]">
            Exportar Tokens
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Exporte os tokens para usar em qualquer projeto externo.
          </p>
        </div>

        <div
          className="border-border bg-card animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards space-y-4 rounded-lg border p-5 duration-500"
          style={{ animationDelay: '120ms' }}
        >
          <p className="text-muted-foreground font-mono text-xs">
            Formato de exportação
          </p>
          <div className="space-y-2">
            {[
              {
                value: 'css' as ExportFormat,
                icon: FileCode,
                label: 'CSS Variables',
                desc: 'Arquivo .css com tokens prontos para importar',
              },
              {
                value: 'json' as ExportFormat,
                icon: FileJson,
                label: 'JSON',
                desc: 'Tokens em estrutura dot-notation (color.text.primary)',
              },
            ].map((opt) => {
              const Icon = opt.icon
              return (
                <button
                  key={opt.value}
                  onClick={() => setFormat(opt.value)}
                  className={`flex w-full items-center gap-3 rounded-md border p-3 text-left transition-all ${format === opt.value ? 'border-inv-taupe bg-accent' : 'border-border hover:border-border/80 hover:bg-accent'}`}
                >
                  <Icon size={14} className="text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-foreground text-xs font-medium">
                      {opt.label}
                    </p>
                    <p className="text-2xs text-muted-foreground font-mono">
                      {opt.desc}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
          <Button
            onClick={handleExport}
            disabled={loading}
            className="w-full rounded-full text-xs"
          >
            <Download size={14} className="mr-2" />
            {loading ? 'Gerando...' : `Exportar ${format.toUpperCase()}`}
          </Button>
        </div>
      </div>
    </div>
  )
}
