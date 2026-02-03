"use client"

import { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { HTMLMotionProps, motion } from "framer-motion"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface BentoGridProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    className?: string
}

interface BentoCardProps extends HTMLMotionProps<"div"> {
    name: string
    className: string
    background: ReactNode
    description: ReactNode
    href: string
    cta: string
    onClick?: () => void
    modalImage?: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={{
                initial: {},
                animate: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
}

const BentoCard = ({
    name,
    className,
    background,
    description,
    href,
    cta,
    onClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modalImage: _modalImage,
    ...props
}: BentoCardProps) => (
    <motion.div
        key={name}
        variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
            "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
            // light styles
            "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
            className
        )}
        {...props}
    >
        <div>{background}</div>
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 lg:group-hover:-translate-y-10">
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400 pointer-events-auto">{description}</p>
        </div>

        <div
            className={cn(
                "pointer-events-none flex w-full transform-gpu flex-row items-center px-4 pb-4 pt-0 opacity-100 transition-all duration-300",
                "lg:absolute lg:bottom-0 lg:translate-y-full lg:p-6 lg:opacity-100 lg:group-hover:translate-y-0"
            )}
        >
            <Link
                href={href}
                onClick={(e) => {
                    if (onClick) {
                        e.preventDefault()
                        onClick()
                    }
                }}
                className="group/cta pointer-events-auto flex items-center rounded-full bg-neutral-100/50 px-3 py-1 text-sm font-medium backdrop-blur-md transition-colors dark:bg-neutral-800/50"
            >
                {cta}
                <ArrowRight className="ms-2 h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
            </Link>
        </div>

        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </motion.div>
)

export { BentoCard, BentoGrid }
