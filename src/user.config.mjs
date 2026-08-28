/**
 * User Configuration File
 *
 * Overrides/extends the core scms-core configuration in astro.config.mjs.
 */

export const userConfig = {
  // Canonical site origin (deployed as a GitHub Pages project site).
  site: 'https://lad-sapienza.github.io',

  // Deployed under a subdirectory — https://lad-sapienza.github.io/elamortuary/
  base: '/elamortuary/',

  integrations: [],

  vite: {},

  markdown: {},
};

/**
 * Site Metadata
 *
 * Used throughout the site for SEO, social media cards, and general site
 * information. Ported from the previous Gatsby `siteMetadata` in gatsby-config.js.
 */
export const siteMetadata = {
  title: 'ELAMortuary',
  titleTemplate: '%s | ELAMortuary',
  description:
    'Villages to Empire: 4,000 Years of Death and Society in Elam (4500-525 BCE). A database of burials from Khuzestan (SW Iran) collating published and unpublished sources on mortuary practices from the late Chalcolithic to the Neo-Elamite period.',
  author: 'Julian Bogdani <julian.bogdani@uniroma1.it>',
  siteName: 'ELAMortuary — Villages to Empire',
  defaultImage: '/images/favicon.png',
  twitter: '@JulianBogdani',
};
