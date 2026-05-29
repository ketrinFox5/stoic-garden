import { JournalList } from "@/components/journal/journal-list"
import { Heading } from '@/components/typograhy/heading'
import { journalEntries } from "@/lib/mock-data/journal-entries"

export default function JournalPage() {
  return (
    <div className="space-y-8">
      <Heading>
        Journal
      </Heading>

      <JournalList
        entries={journalEntries}
      />
    </div>
  )
}