import { notFound }
from "next/navigation"

import {
  getConceptBySlug,
}
from "@/lib/services/concept-service"
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'

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

  return (
    <div className="space-y-8">
      <Heading>
        {concept.title}
      </Heading>

      <Text>
        {concept.content}
      </Text>
    </div>
  )
}