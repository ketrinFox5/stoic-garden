import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type QuoteTextProps = {
  children: ReactNode
  className?: string
}

export function QuoteText({
  children,
  className,
}: QuoteTextProps) {
  return (
    <blockquote
      className={cn(
        "border-l-2 pl-4 italic text-stone-600",
        className
      )}
    >
      {children}
    </blockquote>
  )
}