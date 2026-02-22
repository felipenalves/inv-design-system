import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      // ── Display (Lora) ──────────────────────────────────────────
      h1: 'font-display text-4xl font-bold leading-tight tracking-tight',
      h2: 'font-display text-3xl font-semibold leading-tight tracking-tight',
      // ── Interface (Geist Sans) ──────────────────────────────────
      h3: 'text-2xl font-semibold leading-snug',
      h4: 'text-xl font-semibold leading-snug',
      h5: 'text-lg font-medium leading-snug',
      h6: 'text-base font-medium leading-snug',
      body: 'text-base leading-7',
      lead: 'text-lg text-muted-foreground leading-7',
      small: 'text-sm leading-6',
      muted: 'text-sm text-muted-foreground leading-6',
      caption: 'text-xs text-muted-foreground leading-5',
      // ── Data / Technical (JetBrains Mono) ──────────────────────
      code: 'font-mono text-sm bg-muted px-1.5 py-0.5 rounded text-foreground',
      // ── Labels / Overlines ──────────────────────────────────────
      label: 'text-xs font-medium leading-none',
      overline: 'text-[11px] font-medium tracking-widest uppercase text-muted-foreground/60',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

type TypographyElement =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'span' | 'caption' | 'code' | 'label' | 'div'

const variantElementMap: Record<
  NonNullable<VariantProps<typeof typographyVariants>['variant']>,
  TypographyElement
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  lead: 'p',
  small: 'p',
  muted: 'p',
  caption: 'span',
  code: 'code',
  label: 'label',
  overline: 'span',
}

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: TypographyElement
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body', as, className, ...props }, ref) => {
    const Tag = (as ?? variantElementMap[variant!]) as React.ElementType
    return (
      <Tag
        ref={ref}
        className={cn(typographyVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
Typography.displayName = 'Typography'

export { Typography, typographyVariants }
export type { TypographyProps }
