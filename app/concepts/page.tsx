import { concepts }
from "@/lib/mock-data/concepts"

import { ConceptCard }
from "@/components/concepts/concept-card"

import { Heading }
from "@/components/typography/heading"

export default function ConceptsPage() {
  return (
    <div className="space-y-8">
      <Heading>
        Concepts
      </Heading>

      <div className="grid gap-4 md:grid-cols-2">
        {concepts.map((concept) => (
          <ConceptCard
            key={concept.id}
            concept={concept}
          />
        ))}
      </div>
    </div>
  )
}