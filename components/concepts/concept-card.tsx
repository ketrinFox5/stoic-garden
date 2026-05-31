import Link from "next/link"
import { Concept } from "@/types/concept"
import { cn } from "@/lib/utils"
import { Heading } from '../typography/heading'
import { Text } from '../typography/text'

type ConceptCardProps = {
  concept: Concept
  className?: string
}

export function ConceptCard({
  concept,
  className,
}: ConceptCardProps) {
  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className={cn(
        "block rounded-2xl border p-6 transition-colors hover:bg-stone-50",
        className
      )}
    >
      <div className="space-y-3">
        <Heading level="h3">
          {concept.title}
        </Heading>

        <Text className="text-sm">
          {concept.description}
        </Text>
      </div>
    </Link>
  )
}