"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_TIMEOUT_OFFSET = 100;
const MIN_SCROLL_INTERVAL = 200;
const SCROLL_THRESHOLD = 5;
const TOUCH_SCROLL_THRESHOLD = 30;
const SCALE_FACTOR = 0.08;
const MIN_SCALE = 0.08;
const MAX_SCALE = 2;
const HOVER_SCALE_MULTIPLIER = 1.02;
const CARD_PADDING = 120;

type QuoteItem = {
    id: string;
    quote: string;
    author: string;
};

export type QuoteCardStackProps = {
    items: QuoteItem[];
    cardHeight?: number;
    cardWidth?: number;
    perspective?: number;
    transitionDuration?: number;
    className?: string;
};

const QuoteCardStack: React.FC<QuoteCardStackProps> = ({
    items,
    cardHeight = 320,
    cardWidth = 500,
    perspective = 1000,
    transitionDuration = 180,
    className,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollY = useMotionValue(0);
    const lastScrollTime = useRef(0);

    const totalItems = items.length;
    const maxIndex = totalItems - 1;

    const FRAME_OFFSET = -30;
    const FRAMES_VISIBLE_LENGTH = 3;
    const SNAP_DISTANCE = 50;

    const clamp = useCallback(
        (val: number, [min, max]: [number, number]): number =>
            Math.min(Math.max(val, min), max),
        []
    );

    const goToCard = useCallback(
        (index: number) => {
            if (isScrolling || index === currentIndex) {
                return;
            }

            const now = Date.now();
            const timeSinceLastScroll = now - lastScrollTime.current;

            if (timeSinceLastScroll < MIN_SCROLL_INTERVAL) {
                return;
            }

            const newIndex = clamp(index, [0, maxIndex]);

            lastScrollTime.current = now;
            setIsScrolling(true);
            setCurrentIndex(newIndex);
            scrollY.set(newIndex * SNAP_DISTANCE);

            setTimeout(() => {
                setIsScrolling(false);
            }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
        },
        [currentIndex, maxIndex, scrollY, isScrolling, transitionDuration, clamp]
    );

    const scrollToCard = useCallback(
        (direction: 1 | -1) => {
            goToCard(currentIndex + direction);
        },
        [currentIndex, goToCard]
    );

    const handleScroll = useCallback(
        (deltaY: number) => {
            if (isDragging || isScrolling) {
                return;
            }

            if (Math.abs(deltaY) < SCROLL_THRESHOLD) {
                return;
            }

            const scrollDirection = deltaY > 0 ? 1 : -1;
            scrollToCard(scrollDirection);
        },
        [isDragging, isScrolling, scrollToCard]
    );

    const handleWheel = useCallback(
        (e: WheelEvent) => {
            e.preventDefault();
            handleScroll(e.deltaY);
        },
        [handleScroll]
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (isScrolling) {
                return;
            }

            switch (e.key) {
                case "ArrowUp":
                case "ArrowLeft": {
                    e.preventDefault();
                    scrollToCard(-1);
                    break;
                }
                case "ArrowDown":
                case "ArrowRight": {
                    e.preventDefault();
                    scrollToCard(1);
                    break;
                }
                case "Home": {
                    e.preventDefault();
                    goToCard(0);
                    break;
                }
                case "End": {
                    e.preventDefault();
                    goToCard(maxIndex);
                    break;
                }
                default: {
                    break;
                }
            }
        },
        [maxIndex, isScrolling, scrollToCard, goToCard]
    );

    const touchStartY = useRef(0);
    const touchMoved = useRef(false);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
        touchMoved.current = false;
        setIsDragging(true);
    }, []);

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (!isDragging || isScrolling) {
                return;
            }

            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY.current - touchY;

            if (Math.abs(deltaY) > TOUCH_SCROLL_THRESHOLD && !touchMoved.current) {
                const scrollDirection = deltaY > 0 ? 1 : -1;
                scrollToCard(scrollDirection);
                touchMoved.current = true;
            }
        },
        [isDragging, isScrolling, scrollToCard]
    );

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
        touchMoved.current = false;
    }, []);

    // Click on card to go to next
    const handleCardClick = useCallback(() => {
        if (currentIndex < maxIndex) {
            scrollToCard(1);
        } else {
            // Loop back to first
            goToCard(0);
        }
    }, [currentIndex, maxIndex, scrollToCard, goToCard]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [handleWheel]);

    useEffect(() => {
        if (!isDragging) {
            scrollY.set(currentIndex * SNAP_DISTANCE);
        }
    }, [currentIndex, isDragging, scrollY]);

    const getCardTransform = useCallback(
        (index: number) => {
            const offsetIndex = index - currentIndex;

            const blur = currentIndex > index ? 2 : 0;
            const opacity = currentIndex > index ? 0 : 1;
            const scale = clamp(1 - offsetIndex * SCALE_FACTOR, [
                MIN_SCALE,
                MAX_SCALE,
            ]);
            const y = clamp(offsetIndex * FRAME_OFFSET, [
                FRAME_OFFSET * FRAMES_VISIBLE_LENGTH,
                Number.POSITIVE_INFINITY,
            ]);
            const zIndex = items.length - index;

            return {
                y,
                scale,
                opacity,
                blur,
                zIndex,
            };
        },
        [currentIndex, items.length, clamp, FRAME_OFFSET]
    );

    return (
        <section
            aria-atomic="true"
            aria-label="Quote stack"
            aria-live="polite"
            className={cn("relative mx-auto h-fit w-fit", className)}
        >
            <div
                aria-label="Quote container"
                className="h-full w-full"
                onKeyDown={handleKeyDown}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                ref={containerRef}
                role="application"
                style={{
                    minHeight: `${cardHeight + CARD_PADDING}px`,
                    minWidth: `${cardWidth + 40}px`,
                    perspective: `${perspective}px`,
                    perspectiveOrigin: "center 60%",
                    touchAction: "none",
                }}
                tabIndex={0}
            >
                {items.map((item, i) => {
                    const transform = getCardTransform(i);
                    const isActive = i === currentIndex;

                    return (
                        <motion.div
                            animate={{
                                y: `calc(-50% + ${transform.y}px)`,
                                scale: transform.scale,
                                x: "-50%",
                            }}
                            aria-hidden={!isActive}
                            className="absolute top-1/2 left-1/2 cursor-pointer overflow-hidden rounded-xl border border-border bg-background"
                            data-active={isActive}
                            initial={false}
                            key={`quote-card-${item.id}`}
                            onClick={isActive ? handleCardClick : undefined}
                            style={{
                                height: `${cardHeight}px`,
                                width: `${cardWidth}px`,
                                maxWidth: "90vw",
                                zIndex: transform.zIndex,
                                pointerEvents: isActive ? "auto" : "none",
                                transformOrigin: "center center",
                                willChange: "opacity, filter, transform",
                                filter: `blur(${transform.blur}px)`,
                                opacity: transform.opacity,
                                transitionProperty: "opacity, filter",
                                transitionDuration: "200ms",
                                transitionTimingFunction: "ease-in-out",
                            }}
                            tabIndex={isActive ? 0 : -1}
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 20,
                                mass: 0.5,
                            }}
                            whileHover={
                                isActive
                                    ? {
                                        scale: transform.scale * HOVER_SCALE_MULTIPLIER,
                                        transition: {
                                            type: "spring",
                                            stiffness: 250,
                                            damping: 20,
                                            mass: 0.5,
                                        },
                                    }
                                    : {}
                            }
                        >
                            {/* Quote Card Content */}
                            <div
                                className="flex h-full w-full flex-col items-center justify-center p-8"
                            >
                                {/* Quote text */}
                                <blockquote className="text-center text-lg leading-relaxed text-foreground md:text-xl">
                                    {item.quote}
                                </blockquote>

                                {/* Author */}
                                <footer className="mt-6 text-center">
                                    <cite className="text-foreground/60 not-italic">
                                        {item.author}
                                    </cite>
                                </footer>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Navigation dots */}
                <div
                    aria-label="Quote navigation"
                    className="-translate-x-1/2 absolute bottom-4 left-1/2 flex transform gap-2"
                    role="tablist"
                >
                    {items.map((item, i) => (
                        <button
                            aria-label={`Go to quote ${i + 1}`}
                            aria-selected={i === currentIndex}
                            className={cn(
                                "h-2 w-2 rounded-full transition-all duration-200",
                                i === currentIndex
                                    ? "scale-125 bg-foreground"
                                    : "bg-foreground/30 hover:bg-foreground/70 hover:scale-105"
                            )}
                            key={`dot-${item.id}`}
                            onClick={() => goToCard(i)}
                            role="tab"
                            type="button"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuoteCardStack;
