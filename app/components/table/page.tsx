"use client"

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"

// ── Dados de exemplo ──────────────────────────────────────────────
const invoices = [
  { id: "INV-001", cliente: "Investidor Alpha", valor: "R$ 12.400,00", status: "Pago", data: "Jan 2026" },
  { id: "INV-002", cliente: "Fundo Beta Capital", valor: "R$ 8.750,00", status: "Pendente", data: "Jan 2026" },
  { id: "INV-003", cliente: "Gestora Gamma", valor: "R$ 31.200,00", status: "Pago", data: "Dez 2025" },
  { id: "INV-004", cliente: "Holdings Delta", valor: "R$ 5.900,00", status: "Vencido", data: "Nov 2025" },
  { id: "INV-005", cliente: "Epsilon Ventures", valor: "R$ 19.600,00", status: "Pendente", data: "Dez 2025" },
]

const ativos = [
  { ticker: "PETR4", nome: "Petrobras PN", setor: "Energia", preco: "R$ 38,42", variacao: "+1,24%", positivo: true },
  { ticker: "VALE3", nome: "Vale ON", setor: "Mineração", preco: "R$ 62,15", variacao: "-0,87%", positivo: false },
  { ticker: "ITUB4", nome: "Itaú Unibanco PN", setor: "Financeiro", preco: "R$ 34,90", variacao: "+2,11%", positivo: true },
  { ticker: "BBDC4", nome: "Bradesco PN", setor: "Financeiro", preco: "R$ 12,78", variacao: "-1,33%", positivo: false },
]

function StatusBadge({ status }: { status: string }) {
  if (status === "Pago") return <Badge variant="success">Pago</Badge>
  if (status === "Pendente") return <Badge variant="warning">Pendente</Badge>
  return <Badge variant="error">Vencido</Badge>
}

export default function TablePage() {
  return (
    <div className="max-w-3xl px-10 pt-16 pb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Table</h1>
        <p className="text-muted-foreground">
          Componente de tabela semântico com suporte a header, body, footer e caption. Usa tokens do sistema de cores automaticamente.
        </p>
      </div>

      <div className="space-y-12">

        {/* ── Tabela básica ─────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Tabela Básica</h2>
          <p className="text-sm text-muted-foreground">Estrutura mínima com header e body.</p>
          <div className="rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fatura</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.slice(0, 3).map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-mono text-xs text-muted-foreground">{inv.id}</TableCell>
                    <TableCell className="font-medium">{inv.cliente}</TableCell>
                    <TableCell className="text-muted-foreground">{inv.data}</TableCell>
                    <TableCell className="text-right font-mono">{inv.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* ── Com footer e status badges ────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Com Footer e Status</h2>
          <p className="text-sm text-muted-foreground">Tabela completa com footer de totais e badges de status.</p>
          <div className="rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fatura</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-mono text-xs text-muted-foreground">{inv.id}</TableCell>
                    <TableCell className="font-medium">{inv.cliente}</TableCell>
                    <TableCell><StatusBadge status={inv.status} /></TableCell>
                    <TableCell className="text-right font-mono">{inv.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right font-mono">R$ 77.850,00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </section>

        {/* ── Tabela de ativos ──────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Tabela de Ativos</h2>
          <p className="text-sm text-muted-foreground">Exemplo aplicado ao domínio financeiro com variação colorida.</p>
          <div className="rounded-md border border-border">
            <Table>
              <TableCaption>Ativos monitorados — atualizado em Jan 2026</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticker</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Setor</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                  <TableHead className="text-right">Variação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ativos.map((ativo) => (
                  <TableRow key={ativo.ticker}>
                    <TableCell className="font-mono font-semibold text-xs">{ativo.ticker}</TableCell>
                    <TableCell>{ativo.nome}</TableCell>
                    <TableCell className="text-muted-foreground text-xs">{ativo.setor}</TableCell>
                    <TableCell className="text-right font-mono">{ativo.preco}</TableCell>
                    <TableCell
                      className={`text-right font-mono text-xs font-medium ${
                        ativo.positivo ? "text-inv-green" : "text-inv-error"
                      }`}
                    >
                      {ativo.variacao}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* ── Uso ──────────────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Uso</h2>
          <CodeBlock code={`import {
  Table, TableHeader, TableBody, TableFooter,
  TableHead, TableRow, TableCell, TableCaption,
} from "@/components/ui/table"`} />
          <CodeBlock code={`<Table>
  <TableCaption>Descrição opcional</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Fatura</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Valor</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV-001</TableCell>
      <TableCell>Pago</TableCell>
      <TableCell className="text-right">R$ 12.400,00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">R$ 12.400,00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`} />
        </section>

      </div>
    </div>
  )
}
