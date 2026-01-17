import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
    {
        name: "ratekth",
        description: "course reviews for kth students",
        href: "https://ratekth.se",
        cta: "check it out",
        className: "col-span-3 lg:col-span-2",
        background: (
            <img
                src="/ratekth.png"
                alt="ratekth"
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "find me",
        description: "",
        className: "col-span-3 lg:col-span-1",
        href: "/me/links",
        cta: "links",
        background: (
            <img
                src="/aryan.jpeg"
                alt="aryan"
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "web design",
        description: "prototype website for swedish artist",
        className: "col-span-3 lg:col-span-1",
        href: "https://authentic-tenure-513391.framer.app/",
        cta: "see it",
        background: (
            <img
                src="/malik.png"
                alt="malik dalasi"
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "curatify",
        description: "music curator and social network",
        href: "https://curatify.se",
        cta: "check it out",
        className: "col-span-3 lg:col-span-2",
        background: (
            <img
                src="/curatify.png"
                alt="curatify"
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "google workshop",
        description: "poster for google workshop event",
        href: "#",
        cta: "see it",
        className: "col-span-3 lg:col-span-1",
        background: (
            <img
                src="/google-workshop.png"
                alt="google workshop"
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "ratekth ad",
        description: "ad campaign for ratekth",
        href: "#",
        cta: "see it",
        className: "col-span-3 lg:col-span-1",
        background: (
            <img
                src="/ratekth-ad.png"
                alt="ratekth ad"
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "norrsken ad",
        description: "ad campaign for norrsken",
        href: "#",
        cta: "see it",
        className: "col-span-3 lg:col-span-1",
        background: (
            <img
                src="/norrsken.png"
                alt="norrsken ad"
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "lil design",
        description: "testing web design",
        className: "col-span-3 lg:col-span-1",
        href: "https://driving-moment-495028.framer.app/",
        cta: "see it",
        background: (
            <img
                src="/oldman.png"
                alt="old man"
                className="absolute inset-0 h-full w-full object-cover opacity-20 group-hover:opacity-80 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "video editing",
        description: "",
        className: "col-span-3 lg:col-span-1",
        href: "https://www.youtube.com/shorts/O8NNofU7tyc",
        cta: "hmmm",
        background: (
            <img
                src="/felixdennis.png"
                alt="felix dennis"
                className="absolute inset-0 h-full w-full object-cover opacity-20 group-hover:opacity-80 transition-opacity duration-300"
            />
        ),
    },
    {
        name: "prompt library",
        description: "collection of prompts i use often",
        className: "col-span-3 lg:col-span-1",
        href: "https://github.com/hi-aryan/prompt-library",
        cta: "check it out",
        background: (
            <img
                src="/robot.png"
                alt="prompt library"
                className="absolute inset-0 h-full w-full object-cover opacity-20 group-hover:opacity-80 transition-opacity duration-300"
            />
        ),
    },
];

export default function MePage() {
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
