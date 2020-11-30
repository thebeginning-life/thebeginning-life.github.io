const config = {
  siteTitle: 'theBeginning.life', // Site title.
  siteTitleShort: 'theBeginning.life', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'theBeginning.life', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://thebeginning.life', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'The Beginning of Jesus Christ\'s Good News', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '91825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-9161211056-1', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'MM/DD/YYYY', // Date format for display.
  userName: 'Dave Orme', // Username to display in the author segment.
  userEmail: 'dvorme@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'dvorme', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: 'coconutpalm', // Optionally renders "Follow Me" in the Bio segment.
  userLocation: 'Chicago, Illinois', // User location to display in the author segment.
  userAvatar: 'https://i.ibb.co/WPz9CNk/avatar.jpg', // User avatar to display in the author segment.
  userDescription:
    "WanderingPilgr.im", // User description to display in the author segment.
  copyright: 'Copyright © 2020. All rights reserved.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: 'red' // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config
