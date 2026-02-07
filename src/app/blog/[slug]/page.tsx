import { getPostBySlug, getPostSlugs } from "@/shared/lib/blog";
import { Container } from "@/shared/ui/Container";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    const title = post.meta.title;
    const description = post.meta.description ?? "";
    const publishedTime = post.meta.date
      ? new Date(post.meta.date).toISOString()
      : undefined;

    return {
      title,
      description,
      alternates: {
        canonical: `/blog/${post.meta.slug}`,
      },
      openGraph: {
        title,
        description,
        type: "article",
        // url, // если есть siteUrl
        publishedTime,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  } catch {
    // для несуществующего slug
    return {
      title: "Пост не найден",
      description: "Запрошенная статья не существует.",
      robots: { index: false, follow: false },
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    // Важно: благодаря @next/mdx импортируем файл как компонент ниже (см. следующий шаг)
    // Здесь оставим метадату и рендер контента через MDX-импорт
    return (
      <section className="grow mt-[var(--header-height)] py-6">
        <Container>
          <article
            className="
              prose prose-zinc max-w-none
              dark:prose-invert
              prose-headings:scroll-mt-[calc(var(--header-height)+24px)]
              prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-pre:rounded-xl prose-pre:border prose-pre:bg-zinc-950 prose-pre:text-zinc-50
              prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5
              prose-blockquote:border-l-zinc-300

              prose-p:my-3
              prose-headings:my-6
              prose-h1:mb-6 prose-h1:mt-0
              prose-h2:mt-8 prose-h2:mb-4
              prose-h3:mt-6 prose-h3:mb-3

              prose-ul:my-3 prose-ol:my-3
              prose-li:my-1
              prose-hr:my-6

              prose-pre:my-4
              prose-blockquote:my-4

              prose-h1:text-2xl sm:prose-h1:text-3xl lg:prose-h1:text-4xl
              prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl
              prose-h3:text-lg sm:prose-h3:text-xl
            "
          >
            <h1>{post.meta.title}</h1>
            <div style={{ opacity: 0.7, marginBottom: 16 }}>
              {new Date(post.meta.date).toLocaleDateString()}
            </div>

            {/* Контент отрендерим через компонент-обёртку ниже */}
            <PostBody slug={slug} />
          </article>
        </Container>
      </section>
    );
  } catch {
    notFound();
  }
}

// Отдельная обёртка для MDX-импорта (чтобы Next собрал страницу статически)
async function PostBody({ slug }: { slug: string }) {
  // Важно: путь должен быть статически анализируемым — используем map-реестр
  const MDX = await getMdxComponentBySlug(slug);
  if (!MDX) notFound();
  return <MDX />;
}

const mdxRegistry: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = Object.fromEntries(
  getPostSlugs().map((slug) => [
    slug,
    () => import(`./../../../shared/content/blog/${slug}.mdx`),
  ]),
);

function getMdxComponentBySlug(slug: string) {
  return mdxRegistry[slug]?.()
    .then((m) => m.default)
    .catch(() => null);
}
