const classOrder = [
  'Layout — display, position, flex, grid',
  'Sizing — width, height, min/max',
  'Spacing — padding, margin',
  'Typography — font, text, leading, tracking',
  'Colors — text, bg (via CSS variable)',
  'Borders — border, rounded',
  'Shadows — shadow (via token)',
  'Effects — opacity, transition, cursor',
  'States — hover:, focus:, disabled:',
]

const tokenExamples = [
  {
    label: 'CSS Variable direta',
    code: `background-color: var(--background);`,
  },
  {
    label: 'Inline style no JSX',
    code: `style={{ color: "var(--foreground)" }}`,
  },
  {
    label: 'Classe Tailwind nativa',
    code: `className="bg-card text-foreground"`,
  },
  {
    label: 'Classe Tailwind arbitrária',
    code: `className="bg-[hsl(var(--muted))]"`,
  },
]

export default function DocsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Radial gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,hsl(var(--foreground)/0.04),transparent)]" />
      </div>

      {/* Decorative vertical lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="via-border to-border/50 absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        <div className="via-border to-border/50 absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="max-w-3xl px-10 pt-16 pb-20">
        {/* Header */}
        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-10 duration-500"
          style={{ animationDelay: '0ms' }}
        >
          <p className="text-2xs text-muted-foreground/50 mb-3 font-mono tracking-widest uppercase">
            Design System — Docs
          </p>
          <h1 className="text-foreground mb-3 text-5xl leading-[1.05] tracking-tight [text-shadow:0_0_60px_hsl(var(--foreground)/0.15)]">
            Documentação
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Guias de implementação, convenções e boas práticas.
          </p>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards space-y-10 duration-500"
          style={{ animationDelay: '120ms' }}
        >
          {/* Ordem de classes */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-border h-px flex-1" />
              <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                01
              </span>
              <div className="bg-border h-px flex-1" />
            </div>
            <h2 className="text-foreground mb-2 text-lg font-semibold">
              Ordem obrigatória de classes Tailwind
            </h2>
            <p className="text-muted-foreground mb-4 font-mono text-xs">
              Sempre aplique nesta sequência para consistência e evitar
              conflitos.
            </p>
            <ol className="space-y-1.5">
              {classOrder.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs">
                  <span className="bg-card border-border text-muted-foreground text-3xs flex h-4 w-4 shrink-0 items-center justify-center rounded border font-mono">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground font-mono">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* Tokens */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-border h-px flex-1" />
              <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                02
              </span>
              <div className="bg-border h-px flex-1" />
            </div>
            <h2 className="text-foreground mb-2 text-lg font-semibold">
              Como referenciar tokens
            </h2>
            <div className="space-y-3">
              {tokenExamples.map((ex) => (
                <div key={ex.label}>
                  <p className="text-2xs text-muted-foreground/50 mb-1 font-mono">
                    {ex.label}
                  </p>
                  <pre className="bg-background border-border text-2xs text-muted-foreground overflow-x-auto rounded border p-2.5 font-mono">
                    <code>{ex.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>

          {/* Tipografia */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-border h-px flex-1" />
              <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                03
              </span>
              <div className="bg-border h-px flex-1" />
            </div>
            <h2 className="text-foreground mb-2 text-lg font-semibold">
              Sistema tipográfico
            </h2>
            <p className="text-muted-foreground mb-4 font-mono text-xs">
              Três fontes com papéis distintos. Nunca intercambiáveis.
            </p>
            <div className="space-y-3">
              {/* Lora */}
              <div className="border-border bg-card rounded border p-4">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-2xs text-muted-foreground/50 mb-1 font-mono tracking-widest uppercase">
                      Display / Authority
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '28px',
                        fontWeight: 700,
                        lineHeight: 1.1,
                      }}
                      className="text-foreground"
                    >
                      Lora
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xs text-muted-foreground/50 mb-1 font-mono">
                      pesos
                    </p>
                    <p className="text-muted-foreground font-mono text-xs">
                      400 · 600 · 700
                    </p>
                  </div>
                </div>
                <p className="text-2xs text-muted-foreground/50 mb-1.5 font-mono">
                  uso
                </p>
                <p className="text-muted-foreground mb-3 text-xs">
                  Títulos principais · Hero sections · Nome de produtos ·
                  Impacto editorial
                </p>
                <p className="text-2xs text-muted-foreground/50 mb-1 font-mono">
                  classe Tailwind
                </p>
                <pre className="bg-background border-border text-2xs text-muted-foreground rounded border p-2 font-mono">
                  <code>{`font-display          // via Tailwind\nvar(--font-display)   // via CSS\n// h1, h2 → automático via globals.css`}</code>
                </pre>
              </div>

              {/* Geist */}
              <div className="border-border bg-card rounded border p-4">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-2xs text-muted-foreground/50 mb-1 font-mono tracking-widest uppercase">
                      Interface / Legibilidade
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '24px',
                        fontWeight: 400,
                        lineHeight: 1.1,
                      }}
                      className="text-foreground"
                    >
                      Geist
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xs text-muted-foreground/50 mb-1 font-mono">
                      pesos
                    </p>
                    <p className="text-muted-foreground font-mono text-xs">
                      400 · 500 · 600
                    </p>
                  </div>
                </div>
                <p className="text-2xs text-muted-foreground/50 mb-1.5 font-mono">
                  uso
                </p>
                <p className="text-muted-foreground mb-3 text-xs">
                  Texto corrido · Descrições · Botões · Forms · Labels · body
                  default
                </p>
                <p className="text-2xs text-muted-foreground/50 mb-1 font-mono">
                  classe Tailwind
                </p>
                <pre className="bg-background border-border text-2xs text-muted-foreground rounded border p-2 font-mono">
                  <code>{`font-sans             // padrão do body\nvar(--font-sans)      // via CSS`}</code>
                </pre>
              </div>

              {/* JetBrains Mono */}
              <div className="border-border bg-card rounded border p-4">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-2xs text-muted-foreground/50 mb-1 font-mono tracking-widest uppercase">
                      Intelligence / Data
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '22px',
                        fontWeight: 500,
                        lineHeight: 1.1,
                      }}
                      className="text-foreground"
                    >
                      JetBrains Mono
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xs text-muted-foreground/50 mb-1 font-mono">
                      pesos
                    </p>
                    <p className="text-muted-foreground font-mono text-xs">
                      400 · 500 · 600
                    </p>
                  </div>
                </div>
                <p className="text-2xs text-muted-foreground/50 mb-1.5 font-mono">
                  uso
                </p>
                <p className="text-muted-foreground mb-3 text-xs">
                  Métricas · KPIs · Números · Dashboards · Análises técnicas ·
                  Códigos de acesso
                </p>
                <p className="text-2xs text-muted-foreground/50 mb-1 font-mono">
                  classe Tailwind
                </p>
                <pre className="bg-background border-border text-2xs text-muted-foreground rounded border p-2 font-mono">
                  <code>{`font-mono             // via Tailwind\nvar(--font-mono)      // via CSS`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* cn() */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-border h-px flex-1" />
              <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                04
              </span>
              <div className="bg-border h-px flex-1" />
            </div>
            <h2 className="text-foreground mb-2 text-lg font-semibold">
              Utilitário cn()
            </h2>
            <p className="text-muted-foreground mb-3 font-mono text-xs">
              Sempre use cn() para merge de classes. Resolve conflitos e
              condicionais com segurança.
            </p>
            <pre className="bg-background border-border text-2xs text-muted-foreground overflow-x-auto rounded border p-3 font-mono">
              <code>
                {`import { cn } from "@/lib/utils"

// Básico
cn("base-class", condition && "conditional-class")

// Com variantes
cn(
  "flex items-center px-4 py-2",
  variant === "primary" && "bg-foreground text-background",
  variant === "ghost"   && "bg-transparent text-muted-foreground",
  disabled             && "opacity-40 cursor-not-allowed"
)`}
              </code>
            </pre>
          </section>

          {/* Zero hardcode */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-border h-px flex-1" />
              <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                05
              </span>
              <div className="bg-border h-px flex-1" />
            </div>
            <h2 className="text-foreground mb-2 text-lg font-semibold">
              Regra absoluta: zero hardcode
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="border-inv-error/30 bg-inv-error/5 rounded border p-3">
                <p className="text-2xs text-inv-error mb-2 font-mono">Errado</p>
                <pre className="text-2xs text-muted-foreground font-mono">
                  <code>{`color: #1a1410;
bg: #0a0a0a;
border: 1px solid #242424;`}</code>
                </pre>
              </div>
              <div className="border-inv-green/30 bg-inv-green/5 rounded border p-3">
                <p className="text-2xs text-inv-green mb-2 font-mono">
                  Correto
                </p>
                <pre className="text-2xs text-muted-foreground font-mono">
                  <code>{`color: var(--foreground);
bg: var(--background);
border: 1px solid var(--border);`}</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
