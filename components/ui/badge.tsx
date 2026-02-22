import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  // Fix #1: <span> (inline) | Fix #3: sem hover | Fix #4: font-mono consistente
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none',
  {
    variants: {
      variant: {
        // shadcn base — sem hover (não são interativos por padrão)
        default:
          'bg-primary text-primary-foreground border-transparent',
        secondary:
          'bg-secondary text-secondary-foreground border-transparent',
        destructive:
          'bg-destructive text-destructive-foreground border-transparent',
        outline:
          'text-foreground border-border',
        // Fix #2: variantes INV como first-class CVA
        success:
          'bg-inv-green/10 text-inv-green border border-inv-green/20',
        warning:
          'bg-inv-warning/10 text-inv-warning border border-inv-warning/20',
        error:
          'bg-inv-error/10 text-inv-error border border-inv-error/20',
        info:
          'bg-inv-blue/10 text-inv-blue border border-inv-blue/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

// Fix #1: <span> ao invés de <div>
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
