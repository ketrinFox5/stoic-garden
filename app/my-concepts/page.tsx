"use client"

import { useJournal }
from "@/hooks/use-journal"

import {
  getConceptStats,
}
from "@/lib/services/journal-analytics"
import { Heading } from '@/components/typography/heading'
import { ConceptStatCard } from '@/components/concepts/concept-stat-card'

export default function MyConceptsPage() {
  const { entries } =
    useJournal()

  const stats =
    getConceptStats(entries)

     if (stats.length === 0) {
    return (
      <div className="rounded-2xl border p-6 text-sm text-stone-500">
       No reflections yet.
                Start your first reflection
                to begin building your practice.
      </div>
    )
  }

  return (
    <div className="space-y-4">
        <Heading>My concepts</Heading>
        {
            stats.map(record =>
                <ConceptStatCard stat={record} key={crypto.randomUUID()}/>
            )
        }
    </div>
  )
}