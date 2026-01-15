import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogPost } from "@/types";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPostBySlug(slug: string): BlogPost {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const readTime = readingTime(content).text;

    return {
        slug: realSlug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
        readTime,
    } as BlogPost;
}

export function getAllPosts(): BlogPost[] {
    const slugs = fs.readdirSync(postsDirectory);
    const posts = slugs
        .filter((slug) => slug.endsWith(".mdx"))
        .map((slug) => getPostBySlug(slug))
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
