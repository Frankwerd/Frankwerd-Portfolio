import fs from 'node:fs';
import path from 'node:path';

// Blog posts are Markdown files in /content/blog. Each starts with a frontmatter block:
// ---
// title: My post
// date: 2026-10-06
// summary: One sentence for the list page.
// tags: AI, Automation
// ---
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingMinutes: number;
}

export interface Post extends PostMeta {
  body: string;
}

function parse(slug: string, raw: string): Post {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const front: Record<string, string> = {};
  const body = match ? match[2] : raw;
  if (match) {
    for (const line of match[1].split('\n')) {
      const i = line.indexOf(':');
      if (i > 0) front[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return {
    slug,
    title: front.title ?? slug,
    date: front.date ?? '',
    summary: front.summary ?? '',
    tags: front.tags ? front.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
    body,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { body: _body, ...meta } = getPost(f.replace(/\.md$/, ''))!;
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return parse(slug, fs.readFileSync(file, 'utf8'));
}

export function formatDate(date: string): string {
  const d = new Date(`${date}T12:00:00`);
  return isNaN(d.getTime())
    ? date
    : d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
