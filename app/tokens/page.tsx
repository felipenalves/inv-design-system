import { ColorScaleGrid } from '@/components/ds/color-scale-grid'
import { ColorSemanticRow } from '@/components/ds/color-semantic-row'
import { TypographyTable } from '@/components/ds/typography-table'
import { PageNav } from '@/components/ds/page-nav'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TokenCard } from '@/components/ds/token-card'

// ── Color Scales (overview grid) ───────────────────────────────────
const colorScales = [
  {
    name: 'Backgrounds',
    chips: [
      { cssVar: '--background', label: 'background' },
      { cssVar: '--card', label: 'card' },
      { cssVar: '--muted', label: 'muted' },
      { cssVar: '--accent', label: 'accent' },
      { cssVar: '--popover', label: 'popover' },
    ],
  },
  {
    name: 'Text',
    chips: [
      { cssVar: '--foreground', label: 'foreground' },
      { cssVar: '--muted-foreground', label: 'muted-foreground' },
      { cssVar: '--card-foreground', label: 'card-foreground' },
      { cssVar: '--accent-foreground', label: 'accent-foreground' },
    ],
  },
  {
    name: 'Borders',
    chips: [
      { cssVar: '--border', label: 'border' },
      { cssVar: '--input', label: 'input' },
      { cssVar: '--ring', label: 'ring' },
    ],
  },
  {
    name: 'Brand',
    chips: [
      { cssVar: '--inv-taupe', label: 'taupe' },
      { cssVar: '--inv-taupe-hover', label: 'taupe-hover' },
      { cssVar: '--inv-taupe-subtle', label: 'taupe-subtle' },
      { cssVar: '--inv-blue', label: 'blue' },
      { cssVar: '--inv-blue-subtle', label: 'blue-subtle' },
      { cssVar: '--inv-green', label: 'green' },
      { cssVar: '--inv-green-subtle', label: 'green-subtle' },
      { cssVar: '--inv-warning', label: 'warning' },
      { cssVar: '--inv-error', label: 'error' },
    ],
  },
  {
    name: 'Semantic',
    chips: [
      { cssVar: '--primary', label: 'primary' },
      { cssVar: '--primary-foreground', label: 'primary-fg' },
      { cssVar: '--secondary', label: 'secondary' },
      { cssVar: '--destructive', label: 'destructive' },
    ],
  },
]

// ── Semantic color rows ────────────────────────────────────────────
const backgroundTokens = [
  { label: 'Background', usage: 'Fundo padrão da página', cssVar: '--background', value: '#fafafa / #0a0a0a' },
  { label: 'Card', usage: 'Superfície elevada — cards, modais, popovers', cssVar: '--card', value: '#fff / #121212' },
  { label: 'Muted', usage: 'Áreas de destaque suave, inputs desativados, skeleton', cssVar: '--muted', value: '#f0f0f0 / #1f1f1f' },
  { label: 'Accent', usage: 'Hover state de itens interativos de navegação', cssVar: '--accent', value: '#f0f0f0 / #1f1f1f' },
  { label: 'Popover', usage: 'Tooltips, dropdowns, popovers flutuantes', cssVar: '--popover', value: '#fff / #121212' },
]

const textTokens = [
  { label: 'Foreground', usage: 'Texto primário, ícones de alta ênfase', cssVar: '--foreground', value: '#0a0a0a / #fafafa' },
  { label: 'Muted Foreground', usage: 'Texto secundário, labels, metadados, placeholders', cssVar: '--muted-foreground', value: 'hsl(0 0% 46%)' },
  { label: 'Card Foreground', usage: 'Texto dentro de cards e modais', cssVar: '--card-foreground', value: '#0a0a0a / #fafafa' },
  { label: 'Accent Foreground', usage: 'Texto sobre estado hover/accent', cssVar: '--accent-foreground', value: '#1a1a1a / #fafafa' },
]

const borderTokens = [
  { label: 'Border', usage: 'Borda padrão de componentes, divisores de layout', cssVar: '--border', value: '#e0e0e0 / #242424' },
  { label: 'Input', usage: 'Borda de campos de formulário', cssVar: '--input', value: '#e0e0e0 / #242424' },
  { label: 'Ring', usage: 'Anel de foco — acessibilidade keyboard navigation', cssVar: '--ring', value: '#8b7f78 / #c4b5a8' },
]

const brandTokens = [
  { label: 'INV Taupe', usage: 'Cor de marca primária — CTAs, highlights de produto', cssVar: '--inv-taupe', value: '#e6e0d4 / #c4b5a8' },
  { label: 'INV Taupe Hover', usage: 'Estado hover sobre superfícies taupe', cssVar: '--inv-taupe-hover', value: '#d5cec3' },
  { label: 'INV Taupe Subtle', usage: 'Background sutil de destaque de marca', cssVar: '--inv-taupe-subtle', value: '#f0ece9' },
  { label: 'INV Blue', usage: 'Informativo, links, ações de leitura/navegação', cssVar: '--inv-blue', value: '#3080ff' },
  { label: 'INV Blue Subtle', usage: 'Background de estados informativos', cssVar: '--inv-blue-subtle', value: '#e8f0ff' },
  { label: 'INV Green', usage: 'Sucesso, confirmação, rendimento positivo', cssVar: '--inv-green', value: '#00bb7f' },
  { label: 'INV Green Subtle', usage: 'Background de estados de sucesso', cssVar: '--inv-green-subtle', value: '#e6f9f2' },
  { label: 'INV Warning', usage: 'Aviso, atenção, dados pendentes, risco moderado', cssVar: '--inv-warning', value: '#f99c00' },
  { label: 'INV Error', usage: 'Erro, destrutivo, perda, estado crítico', cssVar: '--inv-error', value: '#fb2c36' },
]

const semanticTokens = [
  { label: 'Primary', usage: 'Ação principal do produto — botão default, CTA primário', cssVar: '--primary', value: 'taupe alias' },
  { label: 'Primary Foreground', usage: 'Texto e ícones sobre superfície primary', cssVar: '--primary-foreground', value: '#0a0a0a' },
  { label: 'Secondary', usage: 'Ação secundária — badges, chips, botão outline', cssVar: '--secondary', value: '#f0f0f0 / #1f1f1f' },
  { label: 'Destructive', usage: 'Ação destrutiva — deletar, remover, cancelar irreversível', cssVar: '--destructive', value: '#fb2c36' },
]

// ── Typography tokens ──────────────────────────────────────────────
const typographyTokens = [
  { name: 'display.xl', size: '56px', weight: '700', font: 'Lora', tracking: '-0.03em' },
  { name: 'display.large', size: '48px', weight: '700', font: 'Lora', tracking: '-0.02em' },
  { name: 'heading.1', size: '36px', weight: '700', font: 'Lora', tracking: '-0.01em' },
  { name: 'heading.2', size: '28px', weight: '700', font: 'Lora', tracking: '0' },
  { name: 'heading.3', size: '22px', weight: '600', font: 'Geist', tracking: '0' },
  { name: 'body.large', size: '18px', weight: '400', font: 'Geist', tracking: '0.005em' },
  { name: 'body.regular', size: '16px', weight: '400', font: 'Geist', tracking: '0' },
  { name: 'body.small', size: '14px', weight: '400', font: 'Geist', tracking: '0' },
  { name: 'label', size: '12px', weight: '500', font: 'JetBrains Mono', tracking: '0.02em' },
  { name: 'caption', size: '11px', weight: '400', font: 'JetBrains Mono', tracking: '0.01em' },
  { name: 'technical.large', size: '16px', weight: '600', font: 'JetBrains Mono', tracking: '0' },
  { name: 'technical.small', size: '12px', weight: '400', font: 'JetBrains Mono', tracking: '0' },
]

// ── Spacing / Shadows / Radius tokens ─────────────────────────────
const spacingTokens = [
  { name: 'spacing.xs', value: '2px', px: 2 },
  { name: 'spacing.sm', value: '4px', px: 4 },
  { name: 'spacing.md', value: '8px', px: 8 },
  { name: 'spacing.lg', value: '12px', px: 12 },
  { name: 'spacing.xl', value: '16px', px: 16 },
  { name: 'spacing.2xl', value: '24px', px: 24 },
  { name: 'spacing.3xl', value: '32px', px: 32 },
  { name: 'spacing.4xl', value: '48px', px: 48 },
  { name: 'spacing.5xl', value: '64px', px: 64 },
  { name: 'spacing.6xl', value: '80px', px: 80 },
]

const shadowTokens = [
  { name: 'shadow.none', value: 'none' },
  { name: 'shadow.sm', value: '0 1px 2px hsl(var(--foreground)/0.05)' },
  { name: 'shadow.md', value: '0 4px 6px hsl(var(--foreground)/0.08)' },
  { name: 'shadow.lg', value: '0 10px 15px hsl(var(--foreground)/0.10)' },
  { name: 'shadow.xl', value: '0 20px 25px hsl(var(--foreground)/0.12)' },
  { name: 'shadow.floating', value: '0 32px 40px hsl(var(--foreground)/0.16)' },
]

const radiusTokens = [
  { name: 'radius.none', value: '0px' },
  { name: 'radius.sm', value: 'calc(var(--radius) - 4px)' },
  { name: 'radius.md', value: 'calc(var(--radius) - 2px)' },
  { name: 'radius.lg', value: 'var(--radius)' },
  { name: 'radius.xl', value: 'calc(var(--radius) + 4px)' },
  { name: 'radius.full', value: '9999px' },
]

// ── Section header ─────────────────────────────────────────────────
function SectionHeader({
  index,
  title,
  description,
}: {
  index: string
  title: string
  description: string
}) {
  return (
    <div className="mb-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="bg-border h-px flex-1" />
        <span className="text-muted-foreground/40 font-mono text-[10px] tracking-widest uppercase">
          {index}
        </span>
        <div className="bg-border h-px flex-1" />
      </div>
      <h2 className="text-foreground mb-1 text-base font-semibold">{title}</h2>
      <p className="text-muted-foreground font-mono text-xs leading-relaxed">{description}</p>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────
export default function TokensPage() {
  return (
    <div className="relative min-h-screen">
      {/* Gradiente sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,hsl(var(--foreground)/0.04),transparent)]" />
      </div>

      <div className="max-w-[800px] px-10 pt-14 pb-24">
        {/* Page header */}
        <div className="mb-10">
          <p className="text-muted-foreground/40 mb-3 font-mono text-[10px] tracking-widest uppercase">
            Fundações
          </p>
          <h1 className="text-foreground mb-2 text-[40px] font-bold leading-[1.05] tracking-tight">
            Tokens
          </h1>
          <p className="text-muted-foreground text-base leading-6">
            Variáveis fundacionais do sistema. Clique em qualquer token para copiar o CSS variable.
          </p>
        </div>

        <Tabs defaultValue="colors">
          <TabsList className="bg-card border-border mb-8 border">
            {['colors', 'typography', 'spacing', 'shadows', 'radius'].map((tab) => (
              <TabsTrigger key={tab} value={tab} className="font-mono text-xs capitalize">
                {tab === 'colors' ? 'Cores' : tab === 'typography' ? 'Tipografia' : tab === 'spacing' ? 'Spacing' : tab === 'shadows' ? 'Shadows' : 'Radius'}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ── CORES ──────────────────────────────────────────── */}
          <TabsContent value="colors" className="space-y-12">

            {/* Scales overview */}
            <section>
              <SectionHeader
                index="01"
                title="Escalas"
                description="Visão geral de todas as famílias de tokens. Há 5 escalas no sistema INV."
              />
              <ColorScaleGrid scales={colorScales} />
            </section>

            {/* Backgrounds */}
            <section>
              <SectionHeader
                index="02"
                title="Backgrounds"
                description="Superfícies de página e componentes. Nunca usar para texto."
              />
              <div className="space-y-1">
                {backgroundTokens.map((t) => (
                  <ColorSemanticRow key={t.cssVar} {...t} />
                ))}
              </div>
            </section>

            {/* Text */}
            <section>
              <SectionHeader
                index="03"
                title="Text & Icons"
                description="Cores de texto e ícones. Sempre sobre superfície de background correspondente."
              />
              <div className="space-y-1">
                {textTokens.map((t) => (
                  <ColorSemanticRow key={t.cssVar} {...t} />
                ))}
              </div>
            </section>

            {/* Borders */}
            <section>
              <SectionHeader
                index="04"
                title="Borders & Focus"
                description="Delimitadores de componentes e foco de acessibilidade."
              />
              <div className="space-y-1">
                {borderTokens.map((t) => (
                  <ColorSemanticRow key={t.cssVar} {...t} />
                ))}
              </div>
            </section>

            {/* Brand */}
            <section>
              <SectionHeader
                index="05"
                title="Brand"
                description="Paleta de identidade INV. Cada cor tem propósito semântico definido — não intercambiáveis."
              />
              <div className="space-y-1">
                {brandTokens.map((t) => (
                  <ColorSemanticRow key={t.cssVar} {...t} />
                ))}
              </div>
            </section>

            {/* Semantic aliases */}
            <section>
              <SectionHeader
                index="06"
                title="Semantic Aliases"
                description="Aliases de alta abstração para uso em componentes. Mapeiam para brand tokens e mudam com o tema."
              />
              <div className="space-y-1">
                {semanticTokens.map((t) => (
                  <ColorSemanticRow key={t.cssVar} {...t} />
                ))}
              </div>
            </section>
          </TabsContent>

          {/* ── TIPOGRAFIA ─────────────────────────────────────── */}
          <TabsContent value="typography">
            <section>
              <SectionHeader
                index="01"
                title="Escala tipográfica"
                description="Três fontes com papéis distintos e não intercambiáveis: Lora (display/autoridade), Geist (interface/legibilidade), JetBrains Mono (dados/técnico)."
              />
              <TypographyTable rows={typographyTokens} />
            </section>
          </TabsContent>

          {/* ── SPACING ────────────────────────────────────────── */}
          <TabsContent value="spacing" className="space-y-2">
            {spacingTokens.map((t) => (
              <TokenCard
                key={t.name}
                name={t.name}
                cssVar={`--spacing-${t.name.split('.')[1]}`}
                value={t.value}
                preview={
                  <div className="flex h-8 shrink-0 items-center">
                    <div
                      className="bg-inv-taupe h-2 rounded-sm"
                      style={{ width: `${Math.min(t.px, 64)}px` }}
                    />
                  </div>
                }
              />
            ))}
          </TabsContent>

          {/* ── SHADOWS ────────────────────────────────────────── */}
          <TabsContent value="shadows" className="space-y-2">
            {shadowTokens.map((t) => (
              <TokenCard
                key={t.name}
                name={t.name}
                cssVar={`--shadow-${t.name.split('.')[1]}`}
                value={t.value}
                preview={
                  <div
                    className="bg-card border-border h-8 w-8 shrink-0 rounded border"
                    style={{ boxShadow: t.value === 'none' ? 'none' : t.value }}
                  />
                }
              />
            ))}
          </TabsContent>

          {/* ── RADIUS ─────────────────────────────────────────── */}
          <TabsContent value="radius" className="space-y-2">
            {radiusTokens.map((t) => (
              <TokenCard
                key={t.name}
                name={t.name}
                cssVar={`--radius-${t.name.split('.')[1]}`}
                value={t.value}
                preview={
                  <div
                    className="bg-inv-taupe h-8 w-8 shrink-0"
                    style={{ borderRadius: t.value === '9999px' ? '9999px' : t.value }}
                  />
                }
              />
            ))}
          </TabsContent>
        </Tabs>

        <PageNav
          prev={{ label: 'Introdução', href: '/' }}
          next={{ label: 'Componentes', href: '/components' }}
        />
      </div>
    </div>
  )
}
