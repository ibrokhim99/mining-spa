import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

export const Loader = ({ className }: { className?: string }) => {
  return (
    <Loader2
      className={cn(
        "my-28 mx-auto h-12 w-12 text-primary/60 animate-spin",
        className,
      )}
    />
  )
}
