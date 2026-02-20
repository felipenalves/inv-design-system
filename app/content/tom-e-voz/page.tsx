const principles = [
  {
    title: 'Direto',
    description:
      'Uma direção clara. Sem múltiplas opções que jogam a decisão de volta pro usuário. Se há uma resposta certa, diga ela.',
  },
  {
    title: 'Analítico',
    description:
      'Baseado em dados e raciocínio, não em feeling. Quando afirmar algo, mostre o porquê. Evite adjetivos sem substância.',
  },
  {
    title: 'Sem clichês',
    description:
      'Sem "revolucionário", "transformador", "ecossistema robusto". Palavras que não dizem nada porque disseram tudo antes.',
  },
  {
    title: 'Confrontador quando necessário',
    description:
      'Apontar o que está errado faz parte. Tom respeitoso, mas sem papas na língua. Concordar por reflexo é inútil.',
  },
]

const contexts = [
  {
    label: 'Produto',
    tone: 'Preciso e funcional',
    description:
      'Labels, tooltips, mensagens de erro e estados vazios. Foco no que o usuário precisa fazer, não em como nos sentimos sobre isso.',
    examples: [
      { ok: true, text: 'Nenhum resultado encontrado. Tente outro termo.' },
      { ok: false, text: 'Ops! Parece que não encontramos nada aqui ainda...' },
      { ok: true, text: 'Salvo.' },
      { ok: false, text: 'Suas alterações foram salvas com sucesso!' },
    ],
  },
  {
    label: 'Marketing',
    tone: 'Confiante e específico',
    description:
      'Comunicação externa da INV. Afirmações com evidência, não hipérboles. O produto fala por si — o copy não precisa compensar.',
    examples: [
      { ok: true, text: 'Gestão patrimonial para investidores com R$1M+.' },
      { ok: false, text: 'A plataforma que vai revolucionar seus investimentos.' },
      { ok: true, text: 'Relatórios em tempo real. Sem planilha, sem intermediário.' },
      { ok: false, text: 'Tecnologia de ponta para uma experiência incrível.' },
    ],
  },
  {
    label: 'Suporte',
    tone: 'Claro e sem enrolação',
    description:
      'Quando algo deu errado, o usuário quer solução, não empatia performática. Explique o que aconteceu e o que fazer.',
    examples: [
      { ok: true, text: 'Erro de autenticação. Verifique suas credenciais e tente novamente.' },
      { ok: false, text: 'Lamentamos muito pelo inconveniente. Nossa equipe está aqui para ajudar!' },
      { ok: true, text: 'Timeout na requisição. Aguarde 30 segundos e recarregue.' },
      { ok: false, text: 'Algo deu errado. Por favor, tente novamente mais tarde.' },
    ],
  },
]

const vocabulary = [
  { use: 'patrimônio', avoid: 'dinheiro, grana, recursos' },
  { use: 'carteira', avoid: 'portfolio (em pt-BR)' },
  { use: 'rendimento', avoid: 'lucro (em contextos de RF)' },
  { use: 'alocação', avoid: 'distribuição de ativos' },
  { use: 'cliente', avoid: 'usuário (para investidores)' },
  { use: 'posição', avoid: 'ativo comprado' },
]

export default function TomEVozPage() {
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
            Conteúdo — Tom e Voz
          </p>
          <h1 className="text-foreground mb-3 text-5xl leading-[1.05] tracking-tight [text-shadow:0_0_60px_hsl(var(--foreground)/0.15)]">
            Tom e Voz
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Como a INV fala. Quatro princípios, três contextos, vocabulário definido.
          </p>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards space-y-12 duration-500"
          style={{ animationDelay: '120ms' }}
        >

          {/* Princípios */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-border h-px flex-1" />
              <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                01
              </span>
              <div className="bg-border h-px flex-1" />
            </div>
            <h2 className="text-foreground mb-1 text-lg font-semibold">
              Princípios de comunicação
            </h2>
            <p className="text-muted-foreground mb-5 font-mono text-xs">
              Não são aspirações. São filtros: se o texto viola um princípio, reescreve.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="border-border bg-card rounded-lg border p-4"
                >
                  <p className="text-foreground mb-1.5 text-sm font-semibold">
                    {p.title}
                  </p>
                  <p className="text-2xs text-muted-foreground font-mono leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tom por contexto */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-border h-px flex-1" />
              <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                02
              </span>
              <div className="bg-border h-px flex-1" />
            </div>
            <h2 className="text-foreground mb-1 text-lg font-semibold">
              Tom por contexto
            </h2>
            <p className="text-muted-foreground mb-5 font-mono text-xs">
              O princípio é o mesmo, a calibração muda.
            </p>
            <div className="space-y-4">
              {contexts.map((ctx) => (
                <div key={ctx.label} className="border-border bg-card rounded-lg border p-5">
                  <div className="mb-3 flex items-baseline gap-3">
                    <p className="text-foreground text-sm font-semibold">{ctx.label}</p>
                    <span className="text-2xs text-muted-foreground/50 font-mono">{ctx.tone}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 font-mono text-xs leading-relaxed">
                    {ctx.description}
                  </p>
                  <div className="space-y-2">
                    {ctx.examples.map((ex, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className={`text-2xs mt-0.5 shrink-0 font-mono ${ex.ok ? 'text-inv-green' : 'text-inv-error'}`}>
                          {ex.ok ? '✓' : '✗'}
                        </span>
                        <p className={`text-xs font-mono ${ex.ok ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                          {ex.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Vocabulário */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-border h-px flex-1" />
              <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                03
              </span>
              <div className="bg-border h-px flex-1" />
            </div>
            <h2 className="text-foreground mb-1 text-lg font-semibold">
              Vocabulário da marca
            </h2>
            <p className="text-muted-foreground mb-5 font-mono text-xs">
              Termos preferidos no domínio financeiro da INV.
            </p>
            <div className="border-border bg-card overflow-hidden rounded-lg border">
              <div className="border-border grid grid-cols-2 border-b px-4 py-2">
                <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">Usar</span>
                <span className="text-2xs text-muted-foreground/50 font-mono tracking-widest uppercase">Evitar</span>
              </div>
              {vocabulary.map((v, i) => (
                <div
                  key={v.use}
                  className={`grid grid-cols-2 px-4 py-2.5 ${i < vocabulary.length - 1 ? 'border-border border-b' : ''}`}
                >
                  <span className="text-foreground font-mono text-xs">{v.use}</span>
                  <span className="text-muted-foreground font-mono text-xs">{v.avoid}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
