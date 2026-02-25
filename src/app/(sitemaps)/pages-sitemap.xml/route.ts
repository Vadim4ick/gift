import { getAllPostsMeta } from "@/shared/lib/blog";
import { getServerSideSitemap } from "next-sitemap";
import { unstable_cache } from "next/cache";

const getPagesSitemap = unstable_cache(async () => {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

  const posts = getAllPostsMeta();
  const dateFallback = new Date().toISOString();

  const sitemap = posts
    ? posts
        .filter((post) => Boolean(post?.slug))
        .map((post) => ({
          loc: `${SITE_URL}/blog/${post?.slug}`,
          lastmod: post.date || dateFallback,
        }))
    : [];
  return sitemap;
});

export async function GET() {
  const sitemap = await getPagesSitemap();

  return getServerSideSitemap(sitemap);
}
