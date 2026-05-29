import { Prompt } from "@/types/prompt"
import { cn } from "@/lib/utils"
import { Heading } from '../typograhy/heading'
import { Text } from '../typograhy/text'

type PromptCardProps = {
  prompt: Prompt
  className?: string
}

export function PromptCard({
  prompt,
  className,
}: PromptCardProps) {
  return (
    <section
      className={cn(
        "space-y-4 rounded-2xl border p-6",
        className
      )}
    >
      <div className="space-y-2">
        <Text className="text-sm uppercase tracking-wide text-stone-500">
          {prompt.phase} reflection
        </Text>

        <Heading level="h2">
          {prompt.text}
        </Heading>
      </div>
    </section>
  )
}