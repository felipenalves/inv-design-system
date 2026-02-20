import Link from 'next/link'
import { FileText, Brain } from 'lucide-react'
import { cn } from '@/lib/utils'

const patterns = [
  {
    id: 'forms',
    label: 'Forms',
    description:
      'Padrão de formulários com validação, estados de erro e layout consistente.',
    icon: FileText,
    active: true,
  },
  {
    id: 'clone-de-mente',
    label: 'Clone de Mente',
    description:
      'Página de perfil de persona com tabs (DNA, Comunicação, História, Artefatos, Prompts).',
    icon: Brain,
    active: false,
  },
]

export default function PatternsPage() {
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

      <div className="max-w-3xl px-10 pt-16 pb-20">
        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-10 duration-500"
          style={{ animationDelay: '0ms' }}
        >
          <p className="text-2xs text-muted-foreground/50 mb-3 font-mono tracking-widest uppercase">
            Design System — Patterns
          </p>
          <h1 className="text-foreground mb-3 text-5xl leading-[1.05] tracking-tight [text-shadow:0_0_60px_hsl(var(--foreground)/0.15)]">
            Page Patterns
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Templates de página pré-construídos combinando múltiplos
            componentes.
          </p>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards grid grid-cols-2 gap-2 duration-500"
          style={{ animationDelay: '120ms' }}
        >
          {patterns.map((pattern) => {
            const Icon = pattern.icon
            const card = (
              <div
                className={cn(
                  'border-border bg-card relative flex flex-col gap-3 rounded-lg border p-5',
                  pattern.active
                    ? 'hover:bg-accent hover:border-border/60 cursor-pointer transition-colors'
                    : 'cursor-not-allowed opacity-35',
                )}
              >
                {!pattern.active && (
                  <div className="absolute top-3 right-3">
                    <span className="text-3xs border-border bg-background text-muted-foreground/50 rounded-full border px-1.5 py-0.5 font-mono tracking-wide uppercase">
                      Em breve
                    </span>
                  </div>
                )}
                <div className="border-border bg-background w-fit rounded-md border p-2">
                  <Icon size={14} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-foreground mb-1 text-sm font-medium">
                    {pattern.label}
                  </p>
                  <p className="text-2xs text-muted-foreground font-mono leading-relaxed">
                    {pattern.description}
                  </p>
                </div>
              </div>
            )

            return pattern.active ? (
              <Link key={pattern.id} href={`/patterns/${pattern.id}`}>
                {card}
              </Link>
            ) : (
              <div key={pattern.id}>{card}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
