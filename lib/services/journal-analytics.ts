import { JournalEntry } from "@/types/journal-entry"
import { ConceptStat } from "@/types/concept-stat"
import { ConceptSlug } from '@/types/concept-slug'

export function getConceptStats(
  entries: JournalEntry[]
): ConceptStat[] {
  const map = new Map<
    JournalEntry["concept"],
    number
  >()

  for (const entry of entries) {
    map.set(
      entry.concept,
      (map.get(entry.concept) ?? 0) + 1
    )
  }

  return Array.from(
    map.entries()
  )
    .map(
      ([concept, reflectionsCount]) => ({
        concept,
        reflectionsCount,
      })
    )
    .sort(
      (a, b) =>
        b.reflectionsCount -
        a.reflectionsCount
    )
}

export function getEntriesByConcept(
  entries: JournalEntry[],
  concept: ConceptSlug
): JournalEntry[] {
  return entries.filter(
    entry => entry.concept === concept
  )
}