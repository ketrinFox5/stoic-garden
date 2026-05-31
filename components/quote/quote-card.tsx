import { Quote } from "@/types/quote"
import { QuoteAuthor } from "./quote-author"
import { cn } from "@/lib/utils"
import { QuoteText } from '../typography/quote-text'

type QuoteCardProps = {
  quote: Quote
  className?: string
}

export function QuoteCard({
  quote,
  className,
}: QuoteCardProps) {
  return (
    <article
      className={cn(
        "space-y-4 rounded-2xl border p-6",
        className
      )}
    >
      <QuoteText className='font-serif'>
        {quote.text}
      </QuoteText>

      <QuoteAuthor
        author={quote.author}
        source={quote.source}
      />
    </article>
  )
}