import { ConceptSlug } from './concept-slug'

export type PromptPhase =
  | "morning"
  | "evening"

export type Prompt = {
  id: string
  phase: PromptPhase
  text: string,
  concept: ConceptSlug
}