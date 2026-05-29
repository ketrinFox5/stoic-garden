import { JournalEntry } from "@/types/journal-entry"
import { JournalEntryCard } from "./journal-entry-card"

type JournalListProps = {
  entries: JournalEntry[]
}

export function JournalList({
  entries,
}: JournalListProps) {
  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border p-6 text-sm text-stone-500">
        No reflections yet.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <JournalEntryCard
          key={entry.id}
          entry={entry}
        />
      ))}
    </div>
  )
}