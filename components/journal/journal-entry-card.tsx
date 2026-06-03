import { JournalEntry } from "@/types/journal-entry"
import { Text } from "../typography/text"
import { cn } from "@/lib/utils"
import {formatDateTime} from '@/lib/date utils/date'

type JournalEntryCardProps = {
  entry: JournalEntry
  className?: string
}

export function JournalEntryCard({
  entry,
  className,
}: JournalEntryCardProps) {
  return (
    <article className="space-y-4 rounded-2xl border p-6">
      <div className="text-sm text-stone-500">
        {formatDateTime(entry.createdAt)}
      </div>

      <div className="text-xs text-stone-500">
        {entry.concept}
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">
          Question
      </div>

      <p className="italic text-stone-600">
        {entry.promptText}
      </p>
    </div>

    <div className="space-y-2">
      <div className="text-sm font-medium">
        Reflection
    </div>

      <Text>
        {entry.answer}
      </Text>
    </div>
  </article>
  )
}