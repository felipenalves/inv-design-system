import Link from 'next/link'
import {
  ArrowRight,
  Palette,
  Component,
  Download,
  BookOpen,
} from 'lucide-react'

const principles = [
  {
    title: 'Single Source',
    description:
      'Tokens definidos em um lugar, propagados em todo o sistema. Sem duplicação.',
  },
  {
    title: 'Semantic First',
    description:
      'Nomes descrevem intenção, não aparência. color.text.primary, não #0a0a0a.',
  },
  {
    title: 'Theme Aware',
    description:
      'Cada token muda automaticamente entre light e dark. Zero código extra.',
  },
  {
    title: 'Predictable Pairing',
    description:
      'Combinações de tokens seguem regras fixas. Sem surpresas visuais em produção.',
  },
]

const sections = [
  {
    label: 'Tokens',
    href: '/tokens',
    icon: Palette,
    description: 'Cores, tipografia, spacing, shadows, radius',
  },
  {
    label: 'Componentes',
    href: '/components',
    icon: Component,
    description: '10 componentes core com estados e código',
  },
  {
    label: 'Export',
    href: '/export',
    icon: Download,
    description: 'JSON ou CSS variables prontos para usar',
  },
  {
    label: 'Documentação',
    href: '/docs',
    icon: BookOpen,
    description: 'Guias de implementação e convenções',
  },
]

export default function DesignSystemPage() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,hsl(var(--foreground)/0.06),transparent)]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="via-border to-border/50 absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        <div className="via-border to-border/50 absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        <div className="via-border/40 absolute inset-y-0 left-12 w-px bg-gradient-to-b from-transparent to-transparent [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
        <div className="via-border/40 absolute inset-y-0 right-12 w-px bg-gradient-to-b from-transparent to-transparent [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      </div>

      <div className="max-w-3xl px-10 pt-16 pb-20">
        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-8 flex duration-500"
          style={{ animationDelay: '0ms' }}
        >
          <span className="border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm">
            <span className="bg-inv-taupe h-1.5 w-1.5 rounded-full" />
            Design System v0.1
          </span>
        </div>

        <h1
          className="text-foreground animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-5 text-5xl leading-[1.05] tracking-tight duration-500 [text-shadow:0_0_60px_hsl(var(--foreground)/0.15)]"
          style={{ animationDelay: '80ms' }}
        >
          Infraestrutura visual
          <br />
          do ecossistema INV.
        </h1>

        <p
          className="text-muted-foreground animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-10 max-w-md text-base leading-relaxed duration-500"
          style={{ animationDelay: '160ms' }}
        >
          Tokens, componentes e padrões que garantem consistência premium em
          todas as ferramentas construídas.
        </p>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-14 flex items-center gap-3 duration-500"
          style={{ animationDelay: '240ms' }}
        >
          <Link
            href="/tokens"
            className="bg-foreground text-background inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-opacity hover:opacity-80"
          >
            Explorar tokens
            <ArrowRight size={12} />
          </Link>
          <Link
            href="/components"
            className="border-border bg-card text-foreground hover:bg-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors"
          >
            Ver componentes
          </Link>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-12 grid grid-cols-2 gap-2 duration-500"
          style={{ animationDelay: '320ms' }}
        >
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group border-border bg-card hover:bg-accent hover:border-border/80 flex items-start gap-3 rounded-lg border p-4 transition-all"
              >
                <div className="border-border bg-background mt-0.5 rounded-md border p-1.5">
                  <Icon size={13} className="text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-foreground text-sm font-medium">
                      {section.label}
                    </p>
                    <ArrowRight
                      size={11}
                      className="text-muted-foreground/30 group-hover:text-muted-foreground transition-colors"
                    />
                  </div>
                  <p className="text-2xs text-muted-foreground mt-0.5 font-mono leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mb-8 flex items-center gap-3">
          <div className="bg-border h-px flex-1" />
          <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
            Princípios
          </span>
          <div className="bg-border h-px flex-1" />
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards grid grid-cols-2 gap-2 duration-500"
          style={{ animationDelay: '400ms' }}
        >
          {principles.map((p) => (
            <div
              key={p.title}
              className="border-border bg-card rounded-lg border p-4"
            >
              <p className="text-foreground mb-1 text-sm font-semibold">
                {p.title}
              </p>
              <p className="text-2xs text-muted-foreground font-mono leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
