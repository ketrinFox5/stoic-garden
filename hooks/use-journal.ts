"use client"

import { useCallback, useState } from "react"

import { getJournalEntries } from "@/lib/services/journal-service"
import { JournalEntry } from "@/types/journal-entry"

export function useJournal() {
  const [entries, setEntries] =
    useState<JournalEntry[]>(
      () => getJournalEntries()
    )

  const refresh = useCallback(() => {
    setEntries(getJournalEntries())
  }, [])

  return {
    entries,
    refresh,
  }
}