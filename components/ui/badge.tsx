import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-emerald-500 text-primary-foreground shadow hover:bg-emerald-500/80",
        icon: "size-8 bg-emerald-500 rounded-full p-1.5",
        
        ADMIN: "border-transparent text-primary-foreground shadow bg-amber-700 hover:bg-amber-700/80",
        OWNER: "border-transparent text-primary-foreground shadow bg-pink-700 hover:bg-pink-700/80",
        ENDUSER: "border-transparent text-primary-foreground shadow bg-indigo-700 hover:bg-indigo-700/80",

        ACTIVE: "border-transparent text-primary-foreground shadow bg-emerald-700 hover:bg-emerald-700/80",
        INACTIVE: "border-transparent text-primary-foreground shadow bg-rose-700 hover:bg-rose-700/80",

        OPENED: "border-transparent text-primary-foreground shadow bg-emerald-700 hover:bg-emerald-700/80",
        CLOSED: "border-transparent text-primary-foreground shadow bg-rose-700 hover:bg-rose-700/80",

        POSITIVE: "border-transparent text-primary-foreground shadow bg-emerald-700 hover:bg-emerald-700/80",
        NEGATIVE: "border-transparent text-primary-foreground shadow bg-rose-700 hover:bg-rose-700/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
