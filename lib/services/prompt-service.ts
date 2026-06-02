import { prompts } from "@/lib/mock-data/prompts"
import { Prompt } from "@/types/prompt"
import { ConceptSlug } from "@/types/concept-slug"

export function getCurrentPhase():
  "morning" | "evening" {

//   const hour = new Date().getHours()
    const hour = getCurrentHour()

  if (hour < 12) {
    return "morning"
  }

  return "evening"
}

export function getPromptsByPhase(
  phase: Prompt["phase"]
) {
  return prompts.filter(
    prompt => prompt.phase === phase
  )
}

export function getPromptForToday() {
  const phase = getCurrentPhase()

  const availablePrompts =
    getPromptsByPhase(phase)

  const day =
    new Date().getDate()

  return availablePrompts[
    day % availablePrompts.length
  ]
}

function getCurrentHour() {
  return Number(
    new Intl.DateTimeFormat(
      "en-US",
      {
        hour: "numeric",
        hour12: false,
        timeZone: "Europe/Moscow",
      }
    ).format(new Date())
  )
}

export function getPromptsByConcept(
  concept: ConceptSlug
) {
  return prompts.filter(
    prompt => prompt.concept === concept
  )
}

export function getPromptById(
  id: string
) {
  return prompts.find(
    prompt => prompt.id === id
  )
}