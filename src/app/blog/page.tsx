import { formatDate, getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Blog | Frankie LiButti",
  description: 'Notes on building AI systems, automation and growth engineering.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 md:py-20">
      <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">
        ← Back home
      </Link>

      <h1 className="mt-6 text-5xl font-bold md:text-6xl">
        The <span className="accent-serif text-primary">blog</span>
      </h1>
      <p className="text-muted-foreground mt-3 text-lg">
        Notes on building AI systems, automation and growth engineering.
      </p>

      <ul className="mt-12 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="bg-card/70 border-border hover:border-primary/40 block rounded-2xl border p-6 transition-colors"
            >
              <p className="text-muted-foreground text-sm">
                {formatDate(post.date)} · {post.readingMinutes} min read
              </p>
              <h2 className="text-foreground mt-2 text-2xl font-semibold">{post.title}</h2>
              {post.summary && <p className="text-secondary-foreground mt-2 leading-relaxed">{post.summary}</p>}
              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
        {posts.length === 0 && <li className="text-muted-foreground">No posts yet.</li>}
      </ul>
    </div>
  );
}
