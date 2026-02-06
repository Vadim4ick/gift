// src/lib/blog.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "shared", "content", "blog");

console.log(BLOG_DIR);

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

export function getPostSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export function getPostBySlug(slug: string) {
  const fullPathMdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const fullPathMd = path.join(BLOG_DIR, `${slug}.md`);

  const filePath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;
  const raw = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(raw);
  return {
    slug,
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      description: data.description ? String(data.description) : undefined,
    } satisfies BlogPostMeta,
    content,
  };
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
