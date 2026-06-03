"use client"

import { useParams }
from "next/navigation"

import { useJournal }
from "@/hooks/use-journal"

import {
  getEntriesByConcept,
}
from "@/lib/services/journal-analytics"
import { ConceptSlug } from '@/types/concept-slug'
import { JournalEntryCard } from '@/components/journal/journal-entry-card'
import { Text } from "@/components/typography/text"
import { Heading } from '@/components/typography/heading'

export default function MyConceptPage() {
  const params =
    useParams()

  const slug =
    params.slug as ConceptSlug

  const { entries } =
    useJournal()

  const reflections =
    getEntriesByConcept(
      entries,
      slug
    )

  return (
    <div className="space-y-4">
        <Heading>
            {slug}
        </Heading>
        {reflections.length === 0 &&
            <Text>
                No reflections yet.

                Explore this concept
                through future prompts.
        </Text>
        }
      {
        reflections.map(entry => (
            <JournalEntryCard
            key={entry.id}
            entry={entry}
            />
        ))
    }
    </div>
  )
}