import { JournalEntry } from "@/types/journal-entry"
import { Text } from "../typograhy/text"
import { cn } from "@/lib/utils"

type JournalEntryCardProps = {
  entry: JournalEntry
  className?: string
}

export function JournalEntryCard({
  entry,
  className,
}: JournalEntryCardProps) {
  return (
    <article
      className={cn(
        "space-y-4 rounded-2xl border p-6",
        className
      )}
    >
      <div className="text-sm text-stone-500">
        {entry.createdAt}
      </div>

      <Text>{entry.content}</Text>
    </article>
  )
}