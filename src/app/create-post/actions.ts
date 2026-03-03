"use server";

import path from "path";
import { mkdir, writeFile } from "fs/promises";

function slugify(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[ё]/g, "e")
    .replace(/[^a-z0-9а-я\s-]/gi, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function safeFileName(name: string) {
  // запрещаем ../ и прочие приколы
  const cleaned = name.replace(/[/\\]/g, "-").replace(/\.\.+/g, ".");
  return cleaned;
}

export async function saveBlogMdx(params: {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  image: string; // "/images/..."
  bodyMdx: string; // весь mdx контент (без frontmatter)
  fileName?: string; // опционально, если хочешь вручную
}) {
  const { title, description, date, image, bodyMdx } = params;

  const baseName = params.fileName?.trim()
    ? safeFileName(params.fileName.trim())
    : slugify(title);

  if (!baseName)
    throw new Error("Не удалось получить имя файла (пустой slug).");

  const mdx = `---
title: "${title.replaceAll(`"`, '\\"')}"
description: "${description.replaceAll(`"`, '\\"')}"
date: "${date}"
image: "${image}"
---

${bodyMdx.trim()}\n`;

  const dir = path.join(process.cwd(), "src", "shared", "content", "blog");
  await mkdir(dir, { recursive: true });

  const fullPath = path.join(dir, `${baseName}.mdx`);
  await writeFile(fullPath, mdx, "utf8");

  return { ok: true, path: fullPath, file: `${baseName}.mdx` };
}
