"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { CodeBlock } from "@/components/ui/code-block"

export default function LoadersPage() {
  return (
    <div className="max-w-3xl px-10 pt-16 pb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Loaders</h1>
        <p className="text-muted-foreground">
          Indicadores de progresso e estado de carregamento — Spinner animado e Skeleton para placeholders de conteúdo.
        </p>
      </div>

      <div className="space-y-12">

        {/* ── Spinner ───────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Spinner</h2>
          <p className="text-sm text-muted-foreground">SVG animado com variantes de tamanho e cor.</p>
          <div className="flex gap-8 items-center p-6 rounded-md border border-border bg-card">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="text-xs text-muted-foreground font-mono">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" color="primary" />
              <span className="text-xs text-muted-foreground font-mono">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" color="secondary" />
              <span className="text-xs text-muted-foreground font-mono">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" color="muted" />
              <span className="text-xs text-muted-foreground font-mono">xl</span>
            </div>
          </div>
        </section>

        {/* ── Skeleton — Profile ────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Skeleton — Profile</h2>
          <p className="text-sm text-muted-foreground">
            Avatar + linhas de texto. Padrão oficial do shadcn/ui.
          </p>
          <div className="p-6 rounded-md border border-border bg-card">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
          <CodeBlock code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`} />
        </section>

        {/* ── Skeleton — Card ───────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Skeleton — Card</h2>
          <p className="text-sm text-muted-foreground">
            Imagem + título + subtítulo. Padrão skeleton-card do shadcn/ui.
          </p>
          <div className="p-6 rounded-md border border-border bg-card">
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
          <CodeBlock code={`<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`} />
        </section>

        {/* ── Skeleton — Dashboard INV ──────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Skeleton — Dashboard INV</h2>
          <p className="text-sm text-muted-foreground">
            Composição de loading para painel financeiro com métricas e tabela.
          </p>
          <div className="p-6 rounded-md border border-border bg-card space-y-6">
            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2 rounded-lg border border-border p-4">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-7 w-32" />
                  <Skeleton className="h-3 w-16" />
                </div>
              ))}
            </div>
            {/* Chart area */}
            <Skeleton className="h-[160px] w-full rounded-xl" />
            {/* Table rows */}
            <div className="space-y-2">
              <div className="flex gap-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24 ml-auto" />
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-4 w-14" />
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20 ml-auto" />
                </div>
              ))}
            </div>
          </div>
          <CodeBlock code={`// KPI cards + chart + table rows
<div className="grid grid-cols-3 gap-4">
  {[1, 2, 3].map((i) => (
    <div key={i} className="space-y-2 rounded-lg border border-border p-4">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-7 w-32" />
      <Skeleton className="h-3 w-16" />
    </div>
  ))}
</div>
<Skeleton className="h-[160px] w-full rounded-xl" />
<div className="space-y-2">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex gap-4">
      <Skeleton className="h-4 w-14" />
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-4 flex-1" />
    </div>
  ))}
</div>`} />
        </section>

        {/* ── Import ───────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Uso</h2>
          <CodeBlock code={`import { Skeleton } from "@/components/ui/skeleton"`} />
          <CodeBlock code={`// Qualquer forma com className de tamanho
<Skeleton className="h-4 w-[200px]" />          // linha de texto
<Skeleton className="h-12 w-12 rounded-full" /> // avatar
<Skeleton className="h-[200px] w-full rounded-xl" /> // imagem/card`} />
        </section>

      </div>
    </div>
  )
}
