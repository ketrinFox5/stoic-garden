
import { PromptCard } from '@/components/reflections/promt-card'
import { ReflectionForm } from "@/components/reflections/reflection-form"
import { prompts } from '@/lib/mock-data/promts'

export default function ReflectionPage() {
  const prompt = prompts[0]

  return (
    <div className="space-y-8">
      <PromptCard prompt={prompt} />

      <ReflectionForm />
    </div>
  )
}