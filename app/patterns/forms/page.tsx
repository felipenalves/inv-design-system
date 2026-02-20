'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

/* ─── Schemas ────────────────────────────────────────────── */

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Mínimo 8 caracteres'),
})

const projectSchema = z.object({
  name: z.string().min(3, 'Mínimo 3 caracteres'),
  domain: z.string().min(1, 'Selecione um domínio'),
  brief: z.string().min(20, 'Descreva em pelo menos 20 caracteres'),
})

type LoginValues = z.infer<typeof loginSchema>
type ProjectValues = z.infer<typeof projectSchema>

/* ─── Field wrapper ──────────────────────────────────────── */

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className={cn('text-xs font-medium', error && 'text-destructive')}>
        {label}
      </Label>
      {children}
      {error && <p className="text-2xs text-destructive font-mono">{error}</p>}
    </div>
  )
}

/* ─── Login Form ─────────────────────────────────────────── */

function LoginForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) })

  async function onSubmit(_data: LoginValues) {
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 size={32} className="text-inv-green" />
        <p className="text-foreground text-sm font-medium">Acesso concedido</p>
        <p className="text-2xs text-muted-foreground font-mono">
          Você seria redirecionado agora.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSubmitted(false)}
          className="mt-1"
        >
          Resetar demo
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Field label="Email" error={errors.email?.message}>
        <Input
          type="email"
          placeholder="voce@empresa.com"
          {...register('email')}
          className={cn(
            errors.email && 'border-destructive focus-visible:ring-destructive',
          )}
        />
      </Field>

      <Field label="Senha" error={errors.password?.message}>
        <Input
          type="password"
          placeholder="••••••••"
          {...register('password')}
          className={cn(
            errors.password &&
              'border-destructive focus-visible:ring-destructive',
          )}
        />
      </Field>

      <Button type="submit" loading={isSubmitting} className="mt-1">
        Entrar
      </Button>
    </form>
  )
}

/* ─── Project Brief Form ─────────────────────────────────── */

function ProjectBriefForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProjectValues>({ resolver: zodResolver(projectSchema) })

  async function onSubmit(_data: ProjectValues) {
    await new Promise((r) => setTimeout(r, 1400))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 size={32} className="text-inv-green" />
        <p className="text-foreground text-sm font-medium">Brief enviado</p>
        <p className="text-2xs text-muted-foreground font-mono">
          O squad de produto recebeu o briefing.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSubmitted(false)}
          className="mt-1"
        >
          Resetar demo
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Field label="Nome do projeto" error={errors.name?.message}>
        <Input
          placeholder="ex: INV.OS Módulo Vendas"
          {...register('name')}
          className={cn(
            errors.name && 'border-destructive focus-visible:ring-destructive',
          )}
        />
      </Field>

      <Field label="Domínio" error={errors.domain?.message}>
        <Select
          onValueChange={(v) => setValue('domain', v, { shouldValidate: true })}
        >
          <SelectTrigger className={cn(errors.domain && 'border-destructive')}>
            <SelectValue placeholder="Selecione um domínio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="operacao">Operação</SelectItem>
            <SelectItem value="produto">Produto</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="vendas">Vendas</SelectItem>
            <SelectItem value="financeiro">Financeiro</SelectItem>
            <SelectItem value="atendimento">Atendimento</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field label="Brief" error={errors.brief?.message}>
        <Textarea
          placeholder="Descreva o objetivo, contexto e resultado esperado..."
          rows={4}
          {...register('brief')}
          className={cn(
            'resize-none',
            errors.brief && 'border-destructive focus-visible:ring-destructive',
          )}
        />
      </Field>

      <Button type="submit" loading={isSubmitting} className="mt-1">
        Enviar brief
      </Button>
    </form>
  )
}

/* ─── Section wrapper ────────────────────────────────────── */

function Section({
  label,
  title,
  description,
  delay,
  children,
}: {
  label: string
  title: string
  description: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4">
        <p className="text-2xs text-muted-foreground/50 mb-1 font-mono tracking-widest uppercase">
          {label}
        </p>
        <h2 className="text-foreground mb-1 text-base font-semibold">
          {title}
        </h2>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>

      <div className="border-border bg-card max-w-sm rounded-lg border p-6">
        {children}
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────── */

export default function FormsPatternPage() {
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
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards mb-12 duration-500"
          style={{ animationDelay: '0ms' }}
        >
          <p className="text-2xs text-muted-foreground/50 mb-3 font-mono tracking-widest uppercase">
            Patterns — Forms
          </p>
          <h1 className="text-foreground mb-3 text-5xl leading-[1.05] tracking-tight [text-shadow:0_0_60px_hsl(var(--foreground)/0.15)]">
            Forms
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Padrão de formulários com validação Zod, estados de erro inline e
            feedback de submissão.
          </p>
        </div>

        {/* Forms */}
        <div className="flex flex-col gap-12">
          <Section
            label="Pattern 01"
            title="Login"
            description="Formulário de autenticação com validação de email e senha."
            delay={120}
          >
            <LoginForm />
          </Section>

          <Section
            label="Pattern 02"
            title="Project Brief"
            description="Formulário de briefing com select, textarea e validação completa."
            delay={200}
          >
            <ProjectBriefForm />
          </Section>
        </div>
      </div>
    </div>
  )
}
