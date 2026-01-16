"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useState } from "react";

export function SmoothHoverMenuItem({
    children,
    transitionDelayInMs = 300,
}: {
    children: ReactNode;
    transitionDelayInMs?: number;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "rounded-lg border overflow-hidden cursor-pointer",
                isHovered
                    ? "border-border/80 scale-105"
                    : "border-border/0 scale-100",
            )}
            style={{
                transition: "border-color, transform",
                transitionDuration: isHovered
                    ? "0ms"
                    : `${transitionDelayInMs + 300}ms`,
            }}
        >
            <div className="px-3 py-1.5">
                <span className="text-sm font-medium">{children}</span>
            </div>
        </div>
    );
}
