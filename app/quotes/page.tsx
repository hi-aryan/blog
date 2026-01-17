import QuoteCardStack from "@/components/ui/quote-card-stack";

// Example quotes - you can replace these with your own
const quotes = [
    {
        id: "1",
        quote: "If you don't enjoy what you are doing, I beg you to find another job. Remember the Scottish proverb, 'Be happy while you're living, for you're a long time dead'",
        author: "David Ogilvy",
    },
    {
        id: "2",
        quote: "Actions express priority",
        author: "David Senra",
    },
    {
        id: "3",
        quote: "I can't be sure I'm getting anywhere when working, but I can be sure I'm getting nowhere when I'm not",
        author: "Paul Graham",
    },
    {
        id: "4",
        quote: "Specialization is for insects",
        author: "unknown",
    },
    {
        id: "5",
        quote: "All of humanity's problems stem from man's inability to sit quietly in a room alone",
        author: "Pascal",
    },
    {
        id: "6",
        quote: "Fall in love slowly, break up quickly",
        author: "Chris Williamson",
    },
    {
        id: "7",
        quote: "The world is a very malleable place. If you know what you want, and you go for it with maximum energy and drive and passion, the world will often reconfigure itself around you much more quickly and easily than you would think",
        author: "Marc Andreessen",
    },
    {
        id: "8",
        quote: "The first principle is that you must not fool yourself — and you are the easiest person to fool",
        author: "Richard Feynman",
    },
    {
        id: "9",
        quote: "Be a happy person who does things, not a person who does things to be happy",
        author: "Naval Ravikant",
    },
    {
        id: "10",
        quote: "Be worthy of a worthy mate",
        author: "Charlie Munger",
    },
    {
        id: "11",
        quote: "I don't care about society events. It is the most useless use of time. When I go out from time to time, it's just to convince myself that I'm not missing out on a lot",
        author: "Dietrich Mateschitz",
    },
];

export default function QuotesPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <QuoteCardStack
                items={quotes}
                cardHeight={360}
                cardWidth={560}
                perspective={1200}
                transitionDuration={200}
            />
        </div>
    );
}
