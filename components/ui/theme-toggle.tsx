"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // prevent hydration mismatch by only rendering after mount
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // render placeholder during SSR to prevent layout shift
    if (!mounted) {
        return (
            <div className="rounded-md p-2 h-9 w-9" aria-hidden="true" />
        )
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="relative rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-400"
            aria-label="Toggle theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-400 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-400 dark:rotate-0 dark:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
