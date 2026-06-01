import { prompts } from "@/lib/mock-data/prompts"
import { Prompt } from "@/types/prompt"

export function getCurrentPhase():
  "morning" | "evening" {

  const hour = new Date().getHours()

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