import { BlogPost } from "@/types";
import { format } from "date-fns";

interface PostHeaderProps {
    post: BlogPost;
}

export default function PostHeader({ post }: PostHeaderProps) {
    return (
        <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                    {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
            </div>
        </div>
    );
}
