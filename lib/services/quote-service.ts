import { quotes }
from "@/lib/mock-data/quotes"

export function getQuotes() {
  return quotes
}

import { ConceptSlug }
from "@/types/concept-slug"

export function getQuotesByConcept(
  concept: ConceptSlug
) {
  return quotes.filter(
    quote =>
      quote.concepts.includes(
        concept
      )
  )
}