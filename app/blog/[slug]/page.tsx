import { getPostBySlug, getAllPosts } from "@/lib/blog";
import PostHeader from "@/components/blog/post-header";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { mdxComponents } from "@/components/blog/mdx-styles";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug);
        return {
            title: post.title,
            description: post.excerpt,
        };
    } catch {
        return {
            title: "Post Not Found",
        };
    }
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    let post;
    try {
        post = getPostBySlug(slug);
    } catch {
        notFound();
    }

    return (
        <article className="mx-auto max-w-3xl space-y-8">
            <PostHeader post={post} />
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXRemote
                    source={post.content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                        },
                    }}
                    components={mdxComponents}
                />
            </div>
        </article>
    );
}
