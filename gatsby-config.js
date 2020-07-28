const urljoin = require('url-join');

// Must come first to ensure it's loaded before site config
require('dotenv').config();

const config = require('./src/config');

const fqdn = urljoin(config.siteUrl, config.pathPrefix);

module.exports = {
  siteMetadata: {
    ...config.meta,
    rssMetadata: {
      ...config.meta,
      site_url: fqdn,
      feed_url: urljoin(fqdn, config.rss.path),
      image_url: `${urljoin(fqdn, 'favicons', 'firefox_app_512x512.png')}`,
      copyright: config.copyright,
    },
    siteUrl: config.siteUrl,
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pongstars',
        short_name: 'Pongstars',
        start_url: '/',
        background_color: '#FCFCFC', // Tertiary
        theme_color: '#02010A', // Primary
        display: 'standalone',
        icon: 'src/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-treat',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: fqdn,
        sitemap: fqdn,
        policy: [{ userAgent: '*', allow: '/' }],
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            host: 'https://dev.pongstars.site',
            sitemap: 'https://dev.pongstars.site',
          },
        }
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/config/typography',
      },
    }
  ],
}
