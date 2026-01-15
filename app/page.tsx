import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blog/post-card";

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          hi
        </h1>
        <p className="max-w-[600px] text-muted-foreground text-lg sm:text-xl">
          i write about things i think about throughout the day
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">latest Posts</h2>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-foreground/80 text-foreground/60"
          >
            view all posts
          </Link>
        </div>
        <div className="grid gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
