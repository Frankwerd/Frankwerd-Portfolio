import { getAllPosts } from '@/lib/blog';
import { tool } from 'ai';
import { z } from 'zod';

export const getBlog = tool({
  description:
    'Shows a card listing my blog posts with links. Use this tool when the user asks about my blog, articles, posts, writing, or wants to read something I wrote.',
  parameters: z.object({}),
  execute: async () => {
    const posts = getAllPosts();
    return {
      message: `Here are my latest blog posts above. All posts live at /blog. Titles: ${posts.map((p) => p.title).join('; ')}.`,
      posts,
    };
  },
});
