import { cn } from "@/lib/utils"

type QuoteAuthorProps = {
  author: string
  source?: string
  className?: string
}

export function QuoteAuthor({
  author,
  source,
  className,
}: QuoteAuthorProps) {
  return (
    <div
      className={cn(
        "text-sm text-stone-500",
        className
      )}
    >
      — {author}

      {source && (
        <a className="ml-2" href={source} target="_blank">
          · source
        </a>
      )}
    </div>
  )
}