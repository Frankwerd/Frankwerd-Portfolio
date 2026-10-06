import { formatDate, getAllPosts, getPost } from '@/lib/blog';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: `${post.title} | Frankie LiButti`, description: post.summary } : {};
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 md:py-20">
      <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm">
        ← All posts
      </Link>

      <p className="text-muted-foreground mt-8 text-sm">
        {formatDate(post.date)} · {post.readingMinutes} min read
      </p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">{post.title}</h1>
      {post.summary && <p className="text-muted-foreground mt-4 text-xl leading-relaxed">{post.summary}</p>}

      <div className="text-secondary-foreground mt-10 text-lg leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: (props) => <h2 className="text-foreground mt-12 mb-4 text-3xl font-semibold" {...props} />,
            h3: (props) => <h3 className="text-foreground mt-8 mb-3 text-2xl font-semibold" {...props} />,
            p: (props) => <p className="my-5" {...props} />,
            ul: (props) => <ul className="my-5 list-disc space-y-2 pl-6" {...props} />,
            ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-6" {...props} />,
            a: (props) => <a className="text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />,
            blockquote: (props) => (
              <blockquote className="border-highlight accent-serif text-foreground my-8 border-l-4 pl-5 text-2xl" {...props} />
            ),
            code: (props) => <code className="bg-secondary rounded px-1.5 py-0.5 font-mono text-[0.9em]" {...props} />,
            strong: (props) => <strong className="text-foreground font-semibold" {...props} />,
          }}
        >
          {post.body}
        </ReactMarkdown>
      </div>

      <div className="border-border mt-16 border-t pt-8">
        <Link href={`/chat?query=${encodeURIComponent(`I just read "${post.title}". Tell me more about it.`)}`} className="text-primary font-medium">
          Ask my AI twin about this post →
        </Link>
      </div>
    </article>
  );
}
