module.exports = {
  siteMetadata: {
    title: `Colleen Geohagan v2`,
    siteUrl: `https://www.colleengeohagan.com`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cormorant Garamond\:400,400i,500,500i,600,600i`,
          `Raleway\:400,400i`,
        ],
        display: 'swap',
      },
    },
  ],
};
