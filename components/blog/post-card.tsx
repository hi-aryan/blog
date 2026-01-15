import Link from "next/link";
import { BlogPost } from "@/types";
import { format } from "date-fns";

interface PostCardProps {
    post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="flex flex-col space-y-2 border-b pb-10 last:border-0 last:pb-0">
            <h2 className="text-2xl font-bold font-heading">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                    {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
            </div>
            <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium underline-offset-4 hover:underline"
            >
                read more
            </Link>
        </article>
    );
}
