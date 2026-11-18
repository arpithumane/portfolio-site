import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string;
  readingMinutes: number;
}

function normalizeDate(value: unknown): string {
  // gray-matter turns `date: 2024-11-10` into a Date object
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'string' && value) return value.slice(0, 10);
  return new Date().toISOString().slice(0, 10);
}

function readPost(slug: string): Post {
  const fileContents = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), 'utf8');
  const { data, content } = matter(fileContents);
  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title || 'Untitled',
    date: normalizeDate(data.date),
    excerpt: data.excerpt || content.substring(0, 200),
    content,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => readPost(file.replace(/\.md$/, '')))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    return readPost(slug);
  } catch {
    return null;
  }
}
