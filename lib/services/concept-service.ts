import { concepts }
from "@/lib/mock-data/concepts"

export function getConcepts() {
  return concepts
}

export function getConceptBySlug(
  slug: string
) {
  return concepts.find(
    concept => concept.slug === slug
  )
}