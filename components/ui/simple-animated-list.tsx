'use client';

import Link from 'next/link';
import { AnimatedItem } from '@/components/ui/animated-item';

interface ListItem {
    label: string;
    href: string;
}

interface SimpleAnimatedListProps {
    items?: ListItem[];
    className?: string;
}

export default function SimpleAnimatedList({
    items = [
        { label: 'Item 1', href: '/' },
        { label: 'Item 2', href: '/' },
    ],
    className = '',
}: SimpleAnimatedListProps) {
    return (
        <div className={`flex flex-col items-center gap-3 ${className}`}>
            {items.map((item, index) => (
                <AnimatedItem
                    key={index}
                    delay={0.05 * index}
                    animation="scale"
                    once={false}
                    amount={0.5}
                    duration={0.2}
                >
                    <Link
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="px-6 py-3 border border-border rounded-lg bg-transparent text-foreground cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95 inline-block"
                    >
                        {item.label}
                    </Link>
                </AnimatedItem>
            ))}
        </div>
    );
}
