import { getAllPostsMeta } from "@/shared/lib/blog";
import { Container } from "@/shared/ui/Container";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Блог | Gifts",
};

const PageBlog = () => {
  const posts = getAllPostsMeta();

  return (
    <section className="grow mt-(--header-height) py-6">
      <Container>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Блог
          </h1>

          {/* List */}
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug} className="h-full">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-border/60 bg-background/60 p-5 transition
                           hover:-translate-y-0.5 hover:border-border hover:bg-background/80 hover:shadow-sm
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                >
                  {p.image && (
                    <div className="mb-4 -mx-5 -mt-5 overflow-hidden rounded-t-2xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        width={600}
                        height={320}
                        className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  {/* Title */}
                  <h2 className="text-lg font-semibold leading-snug tracking-tight">
                    {p.title}
                  </h2>

                  {/* Description */}
                  {p.description && (
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="mt-auto pt-5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90">
                      Читать
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </span>

                    <time className="text-xs text-muted-foreground">
                      {new Date(p.date).toLocaleDateString("ru-RU")}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Empty state */}
          {posts.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border p-10 text-center">
              <p className="text-sm text-muted-foreground">Блог пока пуст</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageBlog;
