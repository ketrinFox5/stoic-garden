import { Quote } from "@/types/quote"

type StoicQuoteApiResponse = {
  text: string
  author: string
}

export async function getQuotes(): Promise<Quote[]> {
  const response = await fetch(
    "https://stoic-quotes.com/api/quotes?num=10",
    {
      cache: "no-store",
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch quotes")
  }

  const data: StoicQuoteApiResponse[] =
    await response.json()

  return data.map((quote, index) => ({
    id: String(index),
    text: quote.text,
    author: quote.author,
    concepts: []
  }))
}