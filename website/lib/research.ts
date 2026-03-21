import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const researchDirectory = path.join(process.cwd(), "..", "research");

export interface ResearchArticle {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
}

export interface ResearchMeta {
  slug: string;
  title: string;
  excerpt: string;
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "").replace(/\.html$/, "");
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  if (match) return match[1].replace(/\*/g, "").trim();
  return "Untitled";
}

function extractExcerpt(content: string): string {
  // Skip title, blank lines, and blockquotes — find first real paragraph
  const lines = content.split("\n");
  let inBlockquote = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("#")) continue;
    if (trimmed.startsWith(">")) {
      // Use focus blockquote as excerpt if present
      const text = trimmed
        .replace(/^>\s*/, "")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "");
      if (text.toLowerCase().startsWith("focus:") || text.length > 50) {
        return text.slice(0, 200) + (text.length > 200 ? "…" : "");
      }
      continue;
    }
    if (trimmed.startsWith("---")) continue;
    if (trimmed.startsWith("|")) continue;
    if (trimmed.startsWith("```")) continue;
    // Real paragraph
    const cleaned = trimmed.replace(/\*\*/g, "").replace(/\*/g, "");
    return cleaned.slice(0, 200) + (cleaned.length > 200 ? "…" : "");
  }
  return "";
}

export function getAllResearchSlugs(): string[] {
  const files = fs.readdirSync(researchDirectory);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => slugFromFilename(f));
}

export function getAllResearch(): ResearchMeta[] {
  const files = fs.readdirSync(researchDirectory);
  const articles = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const fullPath = path.join(researchDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { content } = matter(fileContents);
      return {
        slug: slugFromFilename(filename),
        title: extractTitle(content),
        excerpt: extractExcerpt(content),
      };
    });

  // Sort alphabetically
  articles.sort((a, b) => a.title.localeCompare(b.title));
  return articles;
}
export async function getResearchBySlug(
  slug: string
): Promise<ResearchArticle | null> {
  const fullPath = path.join(researchDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);

  let contentHtml = processedContent
    .toString()
    .replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');

  // Wrap references section in a styled div
  // Look for headings like "Key References", "References", "Sources", "Key Sources"
  const refHeadingPattern = /<h2>((?:Key\s+)?(?:References|Sources|Key\s+Sources|Bibliography)(?:\s*(?:&amp;|and)\s*\w+)*)<\/h2>/i;
  const match = contentHtml.match(refHeadingPattern);
  if (match) {
    const idx = contentHtml.indexOf(match[0]);
    const beforeRefs = contentHtml.slice(0, idx);
    const refsSection = contentHtml.slice(idx);
    contentHtml = beforeRefs + '<div class="article-references">' + refsSection + '</div>';
  }

  return {
    slug,
    title: extractTitle(content),
    excerpt: extractExcerpt(content),
    contentHtml,
  };
}

