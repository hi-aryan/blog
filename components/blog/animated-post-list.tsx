'use client';

import { AnimatedItem } from '@/components/ui/animated-item';
import PostCard from '@/components/blog/post-card';
import { BlogPost } from '@/types';

interface AnimatedPostListProps {
    posts: BlogPost[];
}

export function AnimatedPostList({ posts }: AnimatedPostListProps) {
    return (
        <div className="grid gap-10 max-w-2xl mx-auto">
            {posts.map((post, index) => (
                <AnimatedItem key={post.slug} delay={0.1 * index}>
                    <PostCard post={post} />
                </AnimatedItem>
            ))}
        </div>
    );
}
