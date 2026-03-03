// src/lib/blog.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "shared", "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  image?: string;
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

  const { data } = matter(raw);
  return {
    slug,
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      description: data.description ? String(data.description) : undefined,
      image: data.image ? String(data.image) : undefined,
    } satisfies BlogPostMeta,
  };
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function slugifyRu(input: string) {
  const map: Record<string, string> = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  const s = input
    .trim()
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, ""); // на всякий (диакритика)

  let out = "";
  for (const ch of s) {
    if (map[ch]) out += map[ch];
    else if (/[a-z0-9]/.test(ch)) out += ch;
    else if (/\s|_|-/.test(ch)) out += "-";
    else if (ch === "&") out += "-and-";
    else out += ""; // выкидываем пунктуацию/символы
  }

  out = out.replace(/-+/g, "-").replace(/^-|-$/g, "");

  return out || "post";
}

export function ensureUniqueSlug(baseSlug: string, dir: string) {
  let slug = baseSlug;
  let i = 2;

  while (
    fs.existsSync(path.join(dir, `${slug}.mdx`)) ||
    fs.existsSync(path.join(dir, `${slug}.md`))
  ) {
    slug = `${baseSlug}-${i}`;
    i += 1;
  }

  return slug;
}
