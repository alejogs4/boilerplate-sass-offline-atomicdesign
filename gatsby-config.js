
module.exports = {
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    /**
    * TODO: Icons support
    */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'EDteam',
        short_name: 'EDteam',
        start_url: '/',
        background_color: '#007BDF',
        theme_color: '#FAFDFF',
        display: 'standalone',
      },
    },
    // Sass support
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
  ],
}
