import { ReactNode } from "react"
import { Heading } from "./heading"

type SectionTitleProps = {
  children: ReactNode
}

export function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <Heading
      level="h2"
      className="mb-6"
    >
      {children}
    </Heading>
  )
}