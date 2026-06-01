
import { PromptCard } from '@/components/reflections/prompt-card'
import { ReflectionForm } from "@/components/reflections/reflection-form"
import { prompts } from '@/lib/mock-data/prompts'
import { getPromptForToday } from '@/lib/services/prompt-service'

export default function ReflectionPage() {
  const prompt = getPromptForToday()

  return (
    <div className="space-y-8">
      <PromptCard prompt={prompt} />

      <ReflectionForm prompt={prompt}/>
    </div>
  )
}