import { ConceptSlug } from './concept-slug'

export type JournalEntry = {
  id: string
  createdAt: string
  promptId: string
  promptText: string
  answer: string
  concept: ConceptSlug
}