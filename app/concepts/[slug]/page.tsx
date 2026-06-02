import { notFound }
from "next/navigation"

import {
  getConceptBySlug,
}
from "@/lib/services/concept-service"
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { getPromptsByConcept } from '@/lib/services/prompt-service'
import { ConceptSlug } from '@/types/concept-slug'
import { PromptList } from '@/components/prompts/prompt-list'

export default async function ConceptPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } =
    await params

  const concept =
    getConceptBySlug(slug)

  if (!concept) {
    notFound()
  }

  const relatedPrompts =
  getPromptsByConcept(
    concept.slug as ConceptSlug
  )

  return (
    <div className="space-y-8">
      <Heading>
        {concept.title}
      </Heading>

      <Text>
        {concept.content}
      </Text>

        <section className="space-y-4">
          <Heading level="h2">
            Related Prompts
          </Heading>

          <PromptList
            prompts={relatedPrompts}
          />
      </section>
    </div>
  )
}