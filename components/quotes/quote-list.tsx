import { Quote }
from "@/types/quote"
import { QuoteCard } from '../quote/quote-card'

type QuoteListProps = {
  quotes: Quote[]
}

export function QuoteList({
  quotes,
}: QuoteListProps) {
  return (
    <div className="space-y-4">
      {quotes.map(quote => (
        <QuoteCard
          key={quote.id}
          quote={quote}
        />
      ))}
    </div>
  )
}