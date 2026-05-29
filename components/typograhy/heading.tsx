import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type HeadingProps = {
  children: ReactNode
  level?: "h1" | "h2" | "h3"
  className?: string
}

export function Heading({
  children,
  level = "h1",
  className,
}: HeadingProps) {
  const Tag = level

  return (
    <Tag
      className={cn(
        "font-semibold tracking-tight",

        level === "h1" &&
          "text-4xl md:text-5xl",

        level === "h2" &&
          "text-3xl md:text-4xl",

        level === "h3" &&
          "text-2xl md:text-3xl",

        className
      )}
    >
      {children}
    </Tag>
  )
}