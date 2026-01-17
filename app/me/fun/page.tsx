import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
    {
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 opacity-50 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-zinc-500 font-mono">Marquee Placeholder</p>
            </div>
        ),
    },
    {
        name: "Notifications",
        description: "Get notified when something happens.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 opacity-50 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-zinc-500 font-mono">Animated List Placeholder</p>
            </div>
        ),
    },
    {
        name: "Integrations",
        description: "Supports 100+ integrations and counting.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 opacity-50 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-zinc-500 font-mono">Animated Beam Placeholder</p>
            </div>
        ),
    },
    {
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 opacity-50 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-zinc-500 font-mono">Calendar Placeholder</p>
            </div>
        ),
    },
];

export default function FunPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center p-4">
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        </div>
    );
}
