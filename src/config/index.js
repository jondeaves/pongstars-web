module.exports = {
  meta: {
    author: 'Jon Deaves <hello@jondeaves.me> https://jondeaves.me',
    description: 'Easily organise and manage your table tennis leagues.',
    title: 'Pongstars',
    keywords: ['table-tennis', 'native', 'flutter'],
  },

  // Prefixes all links
  pathPrefix: '/',

  rss: {
    // Path to RSS feed, appended to siteUrl
    path: '/rss.xml',
  },

  // The FQDN of the site; deployed or local
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://pongstars.io',
};
