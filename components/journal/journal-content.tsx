"use client"

import { JournalList } from "@/components/journal/journal-list"
import { useJournal } from "@/hooks/use-journal"

export function JournalContent() {
  const { entries } = useJournal()

  return <JournalList entries={entries} />
}