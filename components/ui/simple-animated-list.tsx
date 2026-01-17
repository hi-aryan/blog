'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

interface ListItem {
    label: string;
    href: string;
}

interface SimpleAnimatedListProps {
    items?: ListItem[];
    className?: string;
}

const AnimatedItem = ({
    children,
    delay = 0
}: {
    children: React.ReactNode;
    delay?: number;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
        >
            {children}
        </motion.div>
    );
};

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
                <AnimatedItem key={index} delay={0.05 * index}>
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
