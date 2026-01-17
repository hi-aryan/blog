import { ComponentProps } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export const mdxComponents = {
    img: (props: ComponentProps<"img">) => (
        <img
            {...props}
            className="rounded-lg my-8 mx-auto max-w-[400px] w-full"
        />
    ),
    a: (props: ComponentProps<"a">) => {
        // Footnote Reference: [^1]
        if ("data-footnote-ref" in props) {
            return (
                <a
                    {...props}
                    className="not-prose no-underline opacity-50 hover:opacity-100 transition-opacity align-super text-xs font-medium"
                >
                    {props.children}
                </a>
            );
        }
        // Footnote Back Reference
        if ("data-footnote-backref" in props) {
            return (
                <a
                    {...props}
                    className="not-prose no-underline hover:text-foreground inline-flex items-center justify-center p-1 rounded-md hover:bg-muted ml-1 align-middle transition-colors"
                    aria-label="Back to content"
                >
                    <ArrowUp className="w-3 h-3" />
                </a>
            );
        }
        const href = props.href;
        if (href?.startsWith("/") || href?.startsWith("#")) {
            return (
                <Link href={href} {...props} className={props.className}>
                    {props.children}
                </Link>
            );
        }

        return <a target="_blank" rel="noopener noreferrer" {...props} />;
    },
    section: (props: ComponentProps<"section">) => {
        if ("data-footnotes" in props) {
            return (
                <section
                    {...props}
                    className="not-prose mt-12 border-t border-border pt-6 text-sm text-muted-foreground [&_ol]:list-decimal [&_ol]:ml-4 [&_ol]:space-y-2 [&>h2]:hidden"
                />
            );
        }
        return <section {...props} />;
    },
};
