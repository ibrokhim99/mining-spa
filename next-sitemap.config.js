/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://neruda.uz",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/admin/", "/api/"] }],
  },
}
