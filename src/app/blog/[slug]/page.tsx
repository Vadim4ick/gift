import { getPostBySlug, getPostSlugs } from "@/shared/lib/blog";
import { Container } from "@/shared/ui/Container";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
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
      <section className="grow mt-[var(--header-height)]">
        <Container>
          <h1>{post.meta.title}</h1>
          <div style={{ opacity: 0.7, marginBottom: 16 }}>{post.meta.date}</div>

          {/* Контент отрендерим через компонент-обёртку ниже */}
          <PostBody slug={slug} />
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
