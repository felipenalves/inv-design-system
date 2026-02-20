'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    toast.success('Código copiado')
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="group relative">
      <pre className="bg-background border-border text-2xs text-muted-foreground overflow-x-auto rounded-md border p-3 font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="hover:bg-accent absolute top-2 right-2 rounded p-1 opacity-0 transition-opacity group-hover:opacity-100"
      >
        {copied ? (
          <Check size={12} className="text-inv-green" />
        ) : (
          <Copy size={12} className="text-muted-foreground/50" />
        )}
      </button>
    </div>
  )
}

function ComponentSection({
  title,
  children,
  code,
}: {
  title: string
  children: React.ReactNode
  code: string
}) {
  return (
    <div className="border-border mb-10 border-b pb-10 last:border-0">
      <h2 className="text-foreground mb-1 text-base font-semibold">{title}</h2>
      <div className="border-border bg-card mb-3 flex min-h-16 flex-wrap items-center gap-3 rounded-lg border p-4">
        {children}
      </div>
      <CodeBlock code={code} />
    </div>
  )
}

export default function ComponentsPage() {
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
            Design System — Componentes
          </p>
          <h1 className="text-foreground mb-3 text-5xl leading-[1.05] tracking-tight [text-shadow:0_0_60px_hsl(var(--foreground)/0.15)]">
            Biblioteca de Componentes
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            10 componentes core. Todos acessíveis, tokenizados e prontos para
            uso.
          </p>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-500"
          style={{ animationDelay: '120ms' }}
        >
          {/* 1. Button */}
          <ComponentSection
            title="Button"
            code={`import { Button } from "@inv/ui"\n\n<Button>Primary</Button>\n<Button variant="outline">Secondary</Button>\n<Button variant="ghost">Ghost</Button>\n<Button disabled>Disabled</Button>`}
          >
            <Button>Primary</Button>
            <Button variant="outline">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
          </ComponentSection>

          {/* 2. Input */}
          <ComponentSection
            title="Input"
            code={`import { Input } from "@inv/ui"\n\n<Input placeholder="Texto normal" />\n<Input placeholder="Com erro" className="border-destructive" />\n<Input disabled placeholder="Desabilitado" />`}
          >
            <Input placeholder="Texto normal" className="max-w-xs" />
            <Input
              placeholder="Com erro"
              className="border-inv-error max-w-xs"
            />
            <Input disabled placeholder="Desabilitado" className="max-w-xs" />
          </ComponentSection>

          {/* 3. Textarea */}
          <ComponentSection
            title="Textarea"
            code={`import { Textarea } from "@inv/ui"\n\n<Textarea placeholder="Escreva algo..." />`}
          >
            <Textarea
              placeholder="Escreva algo..."
              className="max-w-xs"
              rows={3}
            />
          </ComponentSection>

          {/* 4. Select */}
          <ComponentSection
            title="Select"
            code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@inv/ui"\n\n<Select>\n  <SelectTrigger>\n    <SelectValue placeholder="Selecione..." />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="op1">Opção 1</SelectItem>\n  </SelectContent>\n</Select>`}
          >
            <Select>
              <SelectTrigger className="max-w-xs">
                <SelectValue placeholder="Selecione uma opção..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="op1">Opção 1</SelectItem>
                <SelectItem value="op2">Opção 2</SelectItem>
                <SelectItem value="op3">Opção 3</SelectItem>
              </SelectContent>
            </Select>
          </ComponentSection>

          {/* 5. Card */}
          <ComponentSection
            title="Card"
            code={`import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@inv/ui"\n\n<Card>\n  <CardHeader>\n    <CardTitle>Título</CardTitle>\n    <CardDescription>Descrição</CardDescription>\n  </CardHeader>\n  <CardContent>Conteúdo</CardContent>\n</Card>`}
          >
            <Card className="w-full max-w-xs">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Título do Card</CardTitle>
                <CardDescription className="text-xs">
                  Descrição de apoio
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground text-xs">
                Conteúdo do card aqui.
              </CardContent>
            </Card>
          </ComponentSection>

          {/* 6. Badge */}
          <ComponentSection
            title="Badge"
            code={`import { Badge } from "@inv/ui"\n\n<Badge variant="outline">Default</Badge>\n<Badge className="bg-inv-green/10 text-inv-green">Sucesso</Badge>\n<Badge className="bg-inv-error/10 text-inv-error">Erro</Badge>`}
          >
            <Badge variant="outline" className="text-2xs font-mono">
              Default
            </Badge>
            <Badge className="bg-inv-green/10 text-inv-green border-inv-green/20 text-2xs border font-mono">
              Sucesso
            </Badge>
            <Badge className="bg-inv-warning/10 text-inv-warning border-inv-warning/20 text-2xs border font-mono">
              Atenção
            </Badge>
            <Badge className="bg-inv-error/10 text-inv-error border-inv-error/20 text-2xs border font-mono">
              Erro
            </Badge>
            <Badge className="bg-inv-blue/10 text-inv-blue border-inv-blue/20 text-2xs border font-mono">
              Info
            </Badge>
          </ComponentSection>

          {/* 7. Dialog */}
          <ComponentSection
            title="Dialog (Modal)"
            code={`import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@inv/ui"\n\n<Dialog>\n  <DialogTrigger asChild>\n    <Button variant="outline">Abrir modal</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Título</DialogTitle>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Abrir Modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Exemplo de Modal</DialogTitle>
                  <DialogDescription className="text-xs">
                    Modal com backdrop e foco correto para acessibilidade.
                  </DialogDescription>
                </DialogHeader>
                <p className="text-muted-foreground text-sm">
                  Conteúdo do modal. Fecha com Esc ou clicando fora.
                </p>
              </DialogContent>
            </Dialog>
          </ComponentSection>

          {/* 8. Tabs */}
          <ComponentSection
            title="Tabs"
            code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@inv/ui"\n\n<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Conteúdo 1</TabsContent>\n</Tabs>`}
          >
            <Tabs defaultValue="tab1" className="w-full max-w-xs">
              <TabsList>
                <TabsTrigger value="tab1" className="font-mono text-xs">
                  Tab A
                </TabsTrigger>
                <TabsTrigger value="tab2" className="font-mono text-xs">
                  Tab B
                </TabsTrigger>
                <TabsTrigger value="tab3" className="font-mono text-xs">
                  Tab C
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="tab1"
                className="text-muted-foreground p-2 text-xs"
              >
                Conteúdo da Tab A
              </TabsContent>
              <TabsContent
                value="tab2"
                className="text-muted-foreground p-2 text-xs"
              >
                Conteúdo da Tab B
              </TabsContent>
              <TabsContent
                value="tab3"
                className="text-muted-foreground p-2 text-xs"
              >
                Conteúdo da Tab C
              </TabsContent>
            </Tabs>
          </ComponentSection>

          {/* 9. Avatar */}
          <ComponentSection
            title="Avatar"
            code={`import { Avatar, AvatarFallback, AvatarImage } from "@inv/ui"\n\n<Avatar>\n  <AvatarImage src="..." alt="Nome" />\n  <AvatarFallback>FA</AvatarFallback>\n</Avatar>`}
          >
            <Avatar>
              <AvatarFallback className="bg-inv-taupe font-mono text-xs text-white">
                FA
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-inv-blue font-mono text-xs text-white">
                AN
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-inv-green font-mono text-xs text-white">
                MK
              </AvatarFallback>
            </Avatar>
          </ComponentSection>

          {/* 10. Toast via Sonner */}
          <ComponentSection
            title="Toast (Sonner)"
            code={`import { toast } from "sonner"\n\ntoast.success("Ação realizada com sucesso")\ntoast.error("Algo deu errado")\ntoast("Notificação padrão")`}
          >
            <Button
              variant="outline"
              className="text-xs"
              onClick={() => toast.success('Ação realizada com sucesso')}
            >
              Toast Sucesso
            </Button>
            <Button
              variant="outline"
              className="text-xs"
              onClick={() => toast.error('Algo deu errado')}
            >
              Toast Erro
            </Button>
            <Button
              variant="outline"
              className="text-xs"
              onClick={() => toast('Notificação padrão')}
            >
              Toast Default
            </Button>
          </ComponentSection>
        </div>
      </div>
    </div>
  )
}
