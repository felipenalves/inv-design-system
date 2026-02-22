"use client"

import { Typography } from "@/components/ui/typography"
import { CodeBlock } from "@/components/ui/code-block"

export default function TypographyPage() {
  return (
    <div className="max-w-3xl px-10 pt-16 pb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Typography</h1>
        <p className="text-muted-foreground">
          Componente polimórfico com variantes tipográficas do INV Design System.
          Usa Lora (display), Geist Sans (interface) e JetBrains Mono (dados/código).
        </p>
      </div>

      <div className="space-y-12">

        {/* ── Display — Lora ──────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Display — Lora</h2>
          <p className="text-sm text-muted-foreground">
            Títulos de alta autoridade. Renderiza com font-display (Lora, serif).
          </p>
          <div className="space-y-4 p-6 rounded-md border border-border bg-card">
            <div className="space-y-1">
              <Typography variant="overline">h1</Typography>
              <Typography variant="h1">Gestão de Patrimônio</Typography>
            </div>
            <div className="space-y-1">
              <Typography variant="overline">h2</Typography>
              <Typography variant="h2">Análise de Portfólio</Typography>
            </div>
          </div>
        </section>

        {/* ── Interface — Geist Sans ────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Interface — Geist Sans</h2>
          <p className="text-sm text-muted-foreground">
            Hierarquia de seções e conteúdo. Renderiza com font-sans (Geist).
          </p>
          <div className="space-y-4 p-6 rounded-md border border-border bg-card">
            {(["h3", "h4", "h5", "h6"] as const).map((v) => (
              <div key={v} className="space-y-1">
                <Typography variant="overline">{v}</Typography>
                <Typography variant={v}>Rentabilidade Acumulada do Período</Typography>
              </div>
            ))}
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Body & Parágrafos</h2>
          <div className="space-y-6 p-6 rounded-md border border-border bg-card">
            <div className="space-y-1">
              <Typography variant="overline">lead</Typography>
              <Typography variant="lead">
                O fundo apresentou retorno de 18,4% no ano, superando o benchmark CDI em 6,2 pontos percentuais.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography variant="overline">body</Typography>
              <Typography variant="body">
                A estratégia combina alocação em renda fixa pós-fixada, multimercado e exposição seletiva a ações de alta liquidez.
                O comitê de investimentos revisa a composição mensalmente com base nos indicadores macroeconômicos.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography variant="overline">small</Typography>
              <Typography variant="small">
                Rentabilidade passada não garante rentabilidade futura. Leia o prospecto antes de investir.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography variant="overline">muted</Typography>
              <Typography variant="muted">
                Última atualização: 21 jan 2026 · Fonte: B3 / CVM
              </Typography>
            </div>
          </div>
        </section>

        {/* ── Labels & Overlines ────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Labels & Overlines</h2>
          <div className="space-y-6 p-6 rounded-md border border-border bg-card">
            <div className="space-y-1">
              <Typography variant="overline">overline</Typography>
              <Typography variant="overline">Fundações — Tokens de Cor</Typography>
            </div>
            <div className="space-y-1">
              <Typography variant="overline">label</Typography>
              <Typography variant="label">Valor patrimonial</Typography>
            </div>
            <div className="space-y-1">
              <Typography variant="overline">caption</Typography>
              <Typography variant="caption">* Valores em R$ — carteira consolidada</Typography>
            </div>
          </div>
        </section>

        {/* ── Code / Mono ───────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Code — JetBrains Mono</h2>
          <p className="text-sm text-muted-foreground">
            Dados técnicos, variáveis CSS, tickers, valores numéricos de precisão.
          </p>
          <div className="space-y-3 p-6 rounded-md border border-border bg-card">
            <Typography variant="body">
              O token <Typography as="code" variant="code">--inv-green</Typography> representa ganho.
              Use <Typography as="code" variant="code">--inv-error</Typography> para perdas.
            </Typography>
            <Typography variant="body">
              Ticker: <Typography as="code" variant="code">PETR4</Typography> · Preço:{" "}
              <Typography as="code" variant="code">R$ 38,42</Typography> · Var:{" "}
              <Typography as="code" variant="code" className="text-inv-green">+1,24%</Typography>
            </Typography>
          </div>
        </section>

        {/* ── as prop ──────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Prop <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">as</code></h2>
          <p className="text-sm text-muted-foreground">
            Sobrescreve o elemento HTML mantendo o estilo da variante.
          </p>
          <CodeBlock code={`// renderiza <h3>
<Typography variant="h3">Análise de Portfólio</Typography>

// renderiza <div> com estilo h3
<Typography variant="h3" as="div">Análise de Portfólio</Typography>

// code inline dentro de parágrafo
<Typography variant="code" as="span">PETR4</Typography>`} />
        </section>

        {/* ── Import ───────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Uso</h2>
          <CodeBlock code={`import { Typography } from "@/components/ui/typography"`} />
          <CodeBlock code={`// Display (Lora)
<Typography variant="h1">Gestão de Patrimônio</Typography>
<Typography variant="h2">Análise de Portfólio</Typography>

// Interface (Geist Sans)
<Typography variant="lead">Texto introdutório de destaque.</Typography>
<Typography variant="body">Parágrafo padrão de conteúdo.</Typography>
<Typography variant="muted">Metadado secundário.</Typography>

// Data (JetBrains Mono)
<Typography variant="code">--inv-green</Typography>

// Labels
<Typography variant="overline">Fundações</Typography>
<Typography variant="label">Valor patrimonial</Typography>`} />
        </section>

      </div>
    </div>
  )
}
