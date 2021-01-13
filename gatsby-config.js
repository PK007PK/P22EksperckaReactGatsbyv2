require('dotenv').config();

const bootstrapQueries = {
  xs_down: '(max-width: 576x)',
  sm_down: '(max-width: 768px)',
  md_down: '(max-width: 992px)',
  lg_down: '(max-width: 1200px)',
  xxl_down: '(max-width: 1550px)',
  xs_up: '(min-width: 576x)',
  sm_up: '(min-width: 768px)',
  md_up: '(min-width: 992px)',
  lg_up: '(min-width: 1200px)',
  xxl_up: '(min-width: 1550px)',
  portrait: '(orientation: portrait)',
};

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    language: 'pl',
  },
  plugins: [
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Covered By Your Grace`,
          `Montserrat\:300,500,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: bootstrapQueries,
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Katarzyna Mrozowska. Obywatel kontra ZUS`,
        short_name: `Obywatel kontra ZUS`,
        start_url: `/`,
        background_color: `green`,
        theme_color: `red`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
