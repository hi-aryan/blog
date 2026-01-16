"use client";

import { ArrowUpRightIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useMouse } from "@/lib/hooks/use-mouse";
import { cn } from "@/lib/utils";

const BORDER_RADIUS = 20;
const BORDER_RADIUS_INNER = BORDER_RADIUS - 1; // For inset-px overlay
const BORDER_RADIUS_CONTENT = BORDER_RADIUS - 5; // For content area

interface GradientCardProps {
    title: string;
    description?: string;
    metadata?: string;
    withArrow?: boolean;
    /** Size of the glow circle in pixels. Default: 400 */
    circleSize?: number;
    children?: ReactNode;
    className?: string;
}

export function GradientCard({
    title,
    description,
    metadata,
    withArrow = false,
    circleSize = 400,
    className,
    children,
}: GradientCardProps) {
    const [mouse, parentRef] = useMouse();

    const isMouseInside = mouse.elementX !== null && mouse.elementY !== null;

    return (
        <div
            ref={parentRef}
            className="group relative transform-gpu overflow-hidden border border-border/90 p-2 transition-transform hover:scale-[1.01] active:scale-90"
            style={{ borderRadius: `${BORDER_RADIUS}px` }}
        >
            {withArrow && (
                <ArrowUpRightIcon className="absolute top-2 right-2 z-10 size-5 translate-y-4 text-muted-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-60" />
            )}

            {/* Mouse-following glow circle */}
            <div
                className={cn(
                    "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu rounded-full bg-cyan-200/30 transition-transform duration-500 group-hover:scale-[3]",
                    isMouseInside ? "opacity-100" : "opacity-0",
                )}
                style={{
                    maskImage: `radial-gradient(${circleSize / 2}px circle at center, white, transparent)`,
                    width: `${circleSize}px`,
                    height: `${circleSize}px`,
                    left: `${mouse.elementX}px`,
                    top: `${mouse.elementY}px`,
                }}
            />

            {/* Background overlay - transparent, only shows glow */}
            <div
                className="absolute inset-px"
                style={{ borderRadius: `${BORDER_RADIUS_INNER}px` }}
            />

            {/* Optional content area */}
            {children && (
                <div
                    className={cn(
                        "relative grid h-40 place-content-center overflow-hidden border border-border/0 bg-foreground/5",
                        className,
                    )}
                    style={{ borderRadius: `${BORDER_RADIUS_CONTENT}px` }}
                >
                    {children}
                </div>
            )}

            {/* Title, description, and metadata */}
            <div className="relative px-4 pt-4 pb-4 space-y-3">
                <h3 className="font-semibold text-lg text-foreground">
                    {title}
                </h3>
                {description && (
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                )}
                {metadata && (
                    <p className="text-sm text-muted-foreground/70">{metadata}</p>
                )}
            </div>
        </div>
    );
}
