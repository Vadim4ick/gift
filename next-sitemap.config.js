const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ["/posts-sitemap.xml", "/pages-sitemap.xml", "/blog/*", "/form"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: [],
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/pages-sitemap.xml`,
      `${SITE_URL}/posts-sitemap.xml`,
    ],
  },
};
