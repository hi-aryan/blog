"use client"

import { useState } from "react"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { ImageModal } from "@/components/ui/image-modal"

interface Feature {
    name: string
    description: React.ReactNode
    href: string
    cta: string
    className: string
    background: React.ReactNode
    modalImage?: string
}

const features: Feature[] = [
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
        name: "hands",
        description: (
            <>
                <a href="https://drive.google.com/file/d/1z9uFOGjv6raRoILPKcgrPvJRcq7RD31O/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline">pitch</a>
                {" and "}
                <a href="https://www.usehands.xyz/" target="_blank" rel="noopener noreferrer" className="underline">app</a>
            </>
        ),
        href: "https://www.usehands.xyz/",
        cta: "check it out",
        className: "col-span-3 lg:col-span-2",
        background: (
            <img
                src="/hands.png"
                alt="hands"
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
        modalImage: "/google-workshop.png",
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
        modalImage: "/ratekth-ad.png",
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
        modalImage: "/norrsken.png",
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
]

export function MeGrid() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <>
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard
                        key={idx}
                        {...feature}
                        onClick={
                            feature.modalImage
                                ? () => setSelectedImage(feature.modalImage!)
                                : undefined
                        }
                    />
                ))}
            </BentoGrid>
            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                src={selectedImage}
                alt="Full size view"
            />
        </>
    )
}
