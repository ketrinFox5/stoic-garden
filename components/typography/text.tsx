import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type TextProps = {
  children: ReactNode
  className?: string
}

export function Text({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "text-base leading-7 text-stone-700",
        className
      )}
    >
      {children}
    </p>
  )
}