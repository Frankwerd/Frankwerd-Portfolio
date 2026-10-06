'use client';

import type { PostMeta } from '@/lib/blog';
import Link from 'next/link';

export function BlogList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-primary text-4xl font-bold">
          The <span className="accent-serif">blog</span>
        </h2>
        <Link href="/blog" className="text-primary text-sm font-medium">
          All posts →
        </Link>
      </div>
      <ul className="mt-6 space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="bg-card border-border hover:border-primary/40 block rounded-2xl border p-5 transition-colors"
            >
              <p className="text-muted-foreground text-sm">
                {post.date} · {post.readingMinutes} min read
              </p>
              <p className="text-foreground mt-1 text-lg font-semibold">{post.title}</p>
              {post.summary && <p className="text-secondary-foreground mt-1 text-sm leading-relaxed">{post.summary}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
