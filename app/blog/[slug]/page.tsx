import { getPostBySlug, getAllPosts } from "@/lib/blog";
import PostHeader from "@/components/blog/post-header";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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
    try {
        const post = getPostBySlug(slug);

        return (
            <article className="mx-auto max-w-3xl space-y-8">
                <PostHeader post={post} />
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <MDXRemote
                        source={post.content}
                        components={{
                            img: (props) => (
                                <img
                                    {...props}
                                    className="rounded-lg my-8 mx-auto max-w-[400px] w-full"
                                />
                            ),
                        }}
                    />
                </div>
            </article>
        );
    } catch {
        notFound();
    }
}
