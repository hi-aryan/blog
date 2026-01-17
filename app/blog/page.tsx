import { getAllPosts } from "@/lib/blog";
import { AnimatedPostList } from "@/components/blog/animated-post-list";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Read my latest thoughts and tutorials.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="space-y-10">
            <div className="space-y-4 max-w-2xl mx-auto">
                <p className="text-xl text-muted-foreground">
                    all posts, sorted by date.
                </p>
            </div>
            <AnimatedPostList posts={posts} />
        </div>
    );
}
