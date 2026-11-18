import { remark } from 'remark';
import html from 'remark-html';

export async function markdownToHtml(markdown: string): Promise<string> {
  // The page renders the title itself, so drop a leading "# Title" line.
  const body = markdown.replace(/^\s*#\s+.*\n+/, '');
  const result = await remark().use(html).process(body);
  return result.toString();
}
