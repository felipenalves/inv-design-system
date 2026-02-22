"use client"

import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"

export default function BadgesPage() {
  return (
    <div className="max-w-3xl px-10 pt-16 pb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Badges</h1>
        <p className="text-muted-foreground">
          Rótulos inline para status, classificações e categorias.
          Renderiza como <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">span</code> — compatível com qualquer contexto de texto.
        </p>
      </div>

      <div className="space-y-12">

        {/* ── Variantes INV (semânticas) ────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Semânticas INV</h2>
          <p className="text-sm text-muted-foreground">
            Variantes first-class para o domínio financeiro — status de operações, alertas e classificações.
          </p>
          <div className="flex gap-3 flex-wrap p-6 rounded-md border border-border bg-card">
            <Badge variant="success">Pago</Badge>
            <Badge variant="warning">Pendente</Badge>
            <Badge variant="error">Vencido</Badge>
            <Badge variant="info">Em análise</Badge>
          </div>
          <CodeBlock code={`<Badge variant="success">Pago</Badge>
<Badge variant="warning">Pendente</Badge>
<Badge variant="error">Vencido</Badge>
<Badge variant="info">Em análise</Badge>`} />
        </section>

        {/* ── Variantes base ────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Base shadcn</h2>
          <p className="text-sm text-muted-foreground">
            Variantes estruturais herdadas do shadcn/ui. Use para classificações neutras, tags e labels genéricos.
          </p>
          <div className="flex gap-3 flex-wrap p-6 rounded-md border border-border bg-card">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <CodeBlock code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`} />
        </section>

        {/* ── Uso em contexto real ──────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Uso em contexto</h2>
          <p className="text-sm text-muted-foreground">
            Badge como elemento inline — dentro de texto, células de tabela e headers.
          </p>

          {/* Em texto */}
          <div className="p-6 rounded-md border border-border bg-card space-y-4">
            <p className="text-sm">
              Operação <Badge variant="success">Executada</Badge> em 21 jan 2026 às 14h32.
            </p>
            <p className="text-sm">
              Fatura INV-004 está <Badge variant="error">Vencida</Badge> há 12 dias.
            </p>
            <p className="text-sm">
              Ordem de compra <Badge variant="warning">Pendente</Badge> de aprovação do gestor.
            </p>
            <p className="text-sm">
              Ativo PETR4 <Badge variant="info">Em análise</Badge> pelo comitê de risco.
            </p>
          </div>

          {/* Em tabela simulada */}
          <div className="rounded-md border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 text-left font-medium text-muted-foreground text-xs font-mono tracking-widest uppercase">Fatura</th>
                  <th className="px-4 py-2.5 text-left font-medium text-muted-foreground text-xs font-mono tracking-widest uppercase">Cliente</th>
                  <th className="px-4 py-2.5 text-left font-medium text-muted-foreground text-xs font-mono tracking-widest uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "INV-001", cliente: "Fundo Alpha", status: "success", label: "Pago" },
                  { id: "INV-002", cliente: "Gestora Beta", status: "warning", label: "Pendente" },
                  { id: "INV-003", cliente: "Holdings Gamma", status: "error", label: "Vencido" },
                ] .map((row) => (
                  <tr key={row.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{row.id}</td>
                    <td className="px-4 py-3">{row.cliente}</td>
                    <td className="px-4 py-3">
                      <Badge variant={row.status as "success" | "warning" | "error"}>
                        {row.label}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock code={`// inline em texto
<p>
  Operação <Badge variant="success">Executada</Badge> em 21 jan 2026.
</p>

// em célula de tabela
<TableCell>
  <Badge variant={status}>Pago</Badge>
</TableCell>`} />
        </section>

        {/* ── Import + todas as variantes ───────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Uso</h2>
          <CodeBlock code={`import { Badge } from "@/components/ui/badge"`} />
          <CodeBlock code={`// Variantes INV (financeiro)
<Badge variant="success">Pago</Badge>
<Badge variant="warning">Pendente</Badge>
<Badge variant="error">Vencido</Badge>
<Badge variant="info">Em análise</Badge>

// Variantes base
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`} />
        </section>

      </div>
    </div>
  )
}
