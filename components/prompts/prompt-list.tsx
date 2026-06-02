import { Prompt } from "@/types/prompt"

type PromptListProps = {
  prompts: Prompt[]
}

export function PromptList({
  prompts,
}: PromptListProps) {
  return (
    <div className="space-y-3">
      {prompts.map(prompt => (
        <div
          key={prompt.id}
          className="
            rounded-xl
            border
            p-4
          "
        >
          {prompt.text}
        </div>
      ))}
    </div>
  )
}