import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    max?: number
    spacing?: "sm" | "md" | "lg"
}

const spacingClasses = {
    sm: "-space-x-2",
    md: "-space-x-3",
    lg: "-space-x-4",
}

export function AvatarGroup({
    children,
    max,
    spacing = "md",
    className,
    ...props
}: AvatarGroupProps) {
    const childrenArray = React.Children.toArray(children)
    const totalAvatars = childrenArray.length

    const visibleAvatars = max ? childrenArray.slice(0, max) : childrenArray
    const hiddenCount = max && totalAvatars > max ? totalAvatars - max : 0

    return (
        <div
            className={cn("flex items-center", spacingClasses[spacing], className)}
            {...props}
        >
            {visibleAvatars.map((avatar, index) => (
                <div
                    key={index}
                    className="relative inline-flex rounded-full ring-2 ring-background overflow-hidden"
                    style={{ zIndex: totalAvatars - index }}
                >
                    {avatar}
                </div>
            ))}
            {hiddenCount > 0 && (
                <div
                    className="relative inline-flex items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background text-xs font-medium"
                    style={{
                        zIndex: 0,
                        width: "var(--avatar-size, 2.5rem)",
                        height: "var(--avatar-size, 2.5rem)",
                    }}
                >
                    +{hiddenCount}
                </div>
            )}
        </div>
    )
}
