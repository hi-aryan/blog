import Link from "next/link";
import { format } from "date-fns";
import { GradientCard } from "@/components/ui/gradient-card";
import { BlogPost } from "@/types";

interface PostCardProps {
    post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
    const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

    return (
        <Link href={`/blog/${post.slug}`}>
            <GradientCard
                title={post.title}
                description={post.excerpt}
                metadata={`${formattedDate} · ${post.readTime}`}
                withArrow
            />
        </Link>
    );
}
