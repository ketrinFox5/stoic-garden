"use client"

import { useJournal }
from "@/hooks/use-journal"

import {
  getConceptStats,
}
from "@/lib/services/journal-analytics"
import {Text } from "@/components/typography/text"
import { Heading } from '@/components/typography/heading'
import { ConceptStatCard } from '@/components/concepts/concept-stat-card'

export default function MyConceptsPage() {
  const { entries } =
    useJournal()

  const stats =
    getConceptStats(entries)

  return (
    <div className="space-y-4">
       {/* {stats.length === 0 &&
        <Text>
            No reflections yet.

            Start your first reflection
            to begin building your practice.
        </Text>} */}
        <Heading>My concepts</Heading>
        {stats.length === 0 ? 
            <Text>
                No reflections yet.

                Start your first reflection
                to begin building your practice.
            </Text> :
            stats.map(record =>
                <ConceptStatCard stat={record} key={crypto.randomUUID()}/>
            )
        }
    </div>
  )
}