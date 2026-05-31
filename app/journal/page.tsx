"use client"

import { JournalContent } from '@/components/journal/journal-content'
import { JournalList } from "@/components/journal/journal-list"
import { Heading } from '@/components/typography/heading'
import { useJournal } from '@/hooks/use-journal'
// import { journalEntries } from "@/lib/mock-data/journal-entries"

export default function JournalPage() {
     const { entries } = useJournal()
  return (
    <div className="space-y-8">
      <Heading>
        Journal
      </Heading>

      <JournalContent/>
    </div>
  )
}