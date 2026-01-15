import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blog/post-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Read my latest thoughts and tutorials.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
                <p className="text-xl text-muted-foreground">
                    all posts, sorted by date.
                </p>
            </div>
            <div className="grid gap-10">
                {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}
