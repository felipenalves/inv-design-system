import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "icon" | "full"
    size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
    icon: {
        sm: 16,
        md: 24,
        lg: 32,
        xl: 64,
    },
    full: {
        sm: 60,
        md: 100,
        lg: 140,
        xl: 200,
    }
}

export function Logo({
    variant = "icon",
    size = "md",
    className,
    ...props
}: LogoProps) {
    const pixelSize = sizeClasses[variant][size]

    // Note: Adjust the src paths according to your actual asset locations
    // We're using the structure observed in the sidebar:
    // /favicon-light.png and /favicon-dark.png

    if (variant === "icon") {
        return (
            <div className={cn("relative flex items-center justify-center", className)} {...props}>
                <Image
                    src="/favicon-light.png"
                    alt="INV Logo"
                    width={pixelSize}
                    height={pixelSize}
                    className="shrink-0 dark:hidden"
                />
                <Image
                    src="/favicon-dark.png"
                    alt="INV Logo"
                    width={pixelSize}
                    height={pixelSize}
                    className="hidden shrink-0 dark:block"
                />
            </div>
        )
    }

    // Fallback to text + icon if full variant requested and no full image asset exists yet
    return (
        <div className={cn("flex items-center gap-2", className)} {...props}>
            <Image
                src="/favicon-light.png"
                alt="INV Logo"
                width={sizeClasses.icon[size]}
                height={sizeClasses.icon[size]}
                className="shrink-0 dark:hidden"
            />
            <Image
                src="/favicon-dark.png"
                alt="INV Logo"
                width={sizeClasses.icon[size]}
                height={sizeClasses.icon[size]}
                className="hidden shrink-0 dark:block"
            />
            <span
                className={cn(
                    "font-semibold tracking-wide",
                    size === 'sm' && "text-sm",
                    size === 'md' && "text-base",
                    size === 'lg' && "text-xl",
                    size === 'xl' && "text-3xl"
                )}
            >
                INV.OS
            </span>
        </div>
    )
}
