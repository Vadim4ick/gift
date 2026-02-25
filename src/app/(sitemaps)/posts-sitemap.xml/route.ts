import { getServerSideSitemap } from "next-sitemap";
import { unstable_cache } from "next/cache";

const getPagesSitemap = unstable_cache(async () => {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
  const defaultSitemap = [
    {
      loc: `${SITE_URL}/`,
    },
    {
      loc: `${SITE_URL}/form`,
    },
  ];
  return [...defaultSitemap];
});

export async function GET() {
  const sitemap = await getPagesSitemap();

  return getServerSideSitemap(sitemap);
}
