import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-full text-xs font-medium',
    'transition-opacity duration-150',
    'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-[0.98]',
    '[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-foreground text-background hover:opacity-80',

        secondary: 'bg-muted text-foreground hover:opacity-80',

        destructive: 'bg-destructive text-white hover:opacity-80',

        outline: [
          'border-input text-foreground border bg-transparent',
          'hover:opacity-80',
        ].join(' '),

        ghost: 'text-foreground/70 hover:bg-muted bg-transparent',

        link: 'text-foreground underline-offset-4 hover:underline',
      },
      size: {
        xs: 'text-2xs h-7 gap-1 px-3',
        sm: 'h-8 px-4',
        default: 'h-9 px-5 py-2.5',
        lg: 'h-11 px-6 text-sm',
        icon: 'h-9 w-9 p-0',
        'icon-sm': 'h-8 w-8 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && (
              <ArrowPathIcon className="animate-spin" aria-hidden="true" />
            )}
            {children}
          </>
        )}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
