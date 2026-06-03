import { ConceptSlug } from './concept-slug'

export type CreateJournalEntryInput = {
  promptId: string
  promptText: string
  answer: string
  concept: ConceptSlug
}