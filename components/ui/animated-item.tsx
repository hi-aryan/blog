'use client';

import { useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';

type AnimationType = 'slideRight' | 'slideLeft' | 'slideUp' | 'slideDown' | 'scale' | 'fade';

interface AnimatedItemProps {
    children: React.ReactNode;
    delay?: number;
    animation?: AnimationType;
    once?: boolean;
    amount?: number;
    duration?: number;
}

const animations: Record<AnimationType, { initial: Variant; animate: Variant }> = {
    slideRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
    },
    slideLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
    },
    slideUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
    },
    slideDown: {
        initial: { opacity: 0, y: -30 },
        animate: { opacity: 1, y: 0 },
    },
    scale: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
    },
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    },
};

export function AnimatedItem({
    children,
    delay = 0,
    animation = 'slideRight',
    once = true,
    amount = 0.3,
    duration = 0.3,
}: AnimatedItemProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount, once });
    const { initial, animate } = animations[animation];

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={inView ? animate : initial}
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
}
