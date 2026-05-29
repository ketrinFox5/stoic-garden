import { ConceptCard } from '@/components/concepts/concept-card';
import { QuoteCard } from '@/components/quote/quote-card';
import { Heading } from '@/components/typograhy/heading';
import { QuoteText } from '@/components/typograhy/quote-text';
import { SectionTitle } from '@/components/typograhy/section-title';
import { Text } from '@/components/typograhy/text';
import { Button } from '@/components/ui/button';
import { getQuotes } from '@/lib/api/quotes';
import { concepts } from '@/lib/mock-data/concepts';
import { Quote } from '@/types/quote';
import Image from "next/image";

export default async function Home() {
  const quotes = await getQuotes();
  return (
     <div className="space-y-4">
      {/* <h1 className="text-4xl font-bold">
        Stoic Garden
      </h1> */}
      <Heading level="h1" className="font-bold">Stoic Garden</Heading>
      <SectionTitle>Reflection begins with attention.</SectionTitle>
      <Text className="text-muted-foreground font-serif">A place for reflection.</Text>

      {quotes.map(quote => <QuoteCard key={quote.id} quote={quote}></QuoteCard>)}
       <div className="grid gap-4 md:grid-cols-2">
      {concepts.map((concept) => (
        <ConceptCard
          key={concept.id}
          concept={concept}
        />
      ))}
    </div>
      <Button variant='primary' size='sm' children="primary"/>
      <Button variant='secondary' size='md' children="secondary"/>
      <Button variant='ghost' size='lg' children="ghost"/>
    </div>
  );
}
