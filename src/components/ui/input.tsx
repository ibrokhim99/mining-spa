import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconLeft, iconRight, ...props }, ref) => {
    return (
      <div className="relative">
        <span className="absolute top-3 h-6 w-6 left-3">{iconLeft}</span>
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            { "pl-12 ": iconLeft },
            { "pr-12": iconRight },
            className,
          )}
          ref={ref}
          {...props}
        />
        <span className="absolute top-3 h-6 w-6  right-3">{iconRight}</span>
      </div>
    )
  },
)
Input.displayName = "Input"

export { Input }
