"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ReflectionForm() {
  const [value, setValue] = useState("")

  function handleSubmit() {
    console.log(value)
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