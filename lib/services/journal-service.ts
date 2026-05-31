import { CreateJournalEntryInput } from '@/types/create-journal-entry'
import { JournalEntry } from "@/types/journal-entry"

const STORAGE_KEY = "journal_entries"

export function getJournalEntries(): JournalEntry[] {
  const data =
    localStorage.getItem(STORAGE_KEY)

  if (!data) {
    return []
  }

  return JSON.parse(data)
}

export function saveJournalEntry(
 input: CreateJournalEntryInput
) {
  const existing =
    getJournalEntries()

  const newEntry: JournalEntry = {
    id: crypto.randomUUID(),

    createdAt:
      new Date().toISOString(),
    promptId: input.promptId,
    promptText: input.promptText,
    answer: input.answer,
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      newEntry,
      ...existing,
    ])
  )
}