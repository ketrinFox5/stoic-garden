import { ConceptSlug } from './concept-slug'

export type Quote = {
  id: string
  text: string
  author: string
  source?: string
  concepts: ConceptSlug[]
}