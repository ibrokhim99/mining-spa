/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://neruda.uz", // Your base URL
  generateRobotsTxt: true, // Generates robots.txt
  changefreq: "daily", // Indicates how often the homepage changes
  priority: 1.0, // Highest priority since it's the only page
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*", // Applies to all crawlers
        allow: "/", // Allow indexing the homepage
      },
    ],
  },
}
