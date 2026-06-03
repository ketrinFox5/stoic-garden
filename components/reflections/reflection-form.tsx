"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { saveJournalEntry } from '@/lib/services/journal-service';
import { Prompt } from '@/types/prompt';

type ReflectionFormProps = {
  prompt: Prompt
}

export function ReflectionForm({
  prompt,
}: ReflectionFormProps) {
  const [value, setValue] = useState("")

  function handleSubmit() {
    saveJournalEntry({
      promptId: prompt.id,
      promptText: prompt.text,
      answer: value,
      concept: prompt.concept,
    });
    setValue('');
  }

  return (
    <div className="space-y-4">
      <textarea
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        placeholder="Write your reflection..."
        className="
          min-h-[160px]
          w-full
          rounded-2xl
          border
          p-4
          outline-none
        "
      />

      <Button onClick={handleSubmit}>
        Save Reflection
      </Button>
    </div>
  )
}