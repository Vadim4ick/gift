"use server";

import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import { ensureUniqueSlug, slugifyRu } from "@/shared/lib/blog";

function safeSlug(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[/\\]/g, "-")
    .replace(/\.\.+/g, ".")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function saveBlogMdx(params: {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  image: string; // "/images/..." или URL
  bodyMdx: string; // без frontmatter
  fileName?: string; // опционально: slug без расширения
}) {
  const { title, description, date, image, bodyMdx, fileName } = params;

  const dir = path.join(process.cwd(), "src", "shared", "content", "blog");
  await mkdir(dir, { recursive: true });

  // 1) базовый slug: либо fileName, либо из RU title
  const baseSlug = fileName?.trim() ? safeSlug(fileName) : slugifyRu(title);

  if (!baseSlug) {
    throw new Error("Не удалось получить имя файла (пустой slug).");
  }

  // 2) делаем уникальным
  const slug = ensureUniqueSlug(baseSlug, dir);

  // 3) формируем mdx
  const mdx = `---
title: "${title.replaceAll(`"`, '\\"')}"
description: "${description.replaceAll(`"`, '\\"')}"
date: "${date}"
image: "${image}"
---

${bodyMdx.trim()}\n`;

  // 4) пишем
  const fullPath = path.join(dir, `${slug}.mdx`);
  await writeFile(fullPath, mdx, "utf8");

  // 5) возвращаем то, что реально создали
  return { ok: true, path: fullPath, file: `${slug}.mdx`, slug };
}
