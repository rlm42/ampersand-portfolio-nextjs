/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig

// Added code
// const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withImages = require("next-images");
// const withPlugins = require("next-compose-plugins");

// module.exports = withPlugins([withCSS, withFonts, withImages], nextConfig);

module.exports = withFonts(withImages({
  images: {
    disableStaticImages: true}}), (nextConfig));

// module.exports = (phase, { defaultConfig }) => {
//   const plugins = [
//     withCSS({ /* Plugin config here ... */ }),
//     withFonts({ /* Plugin config here ... */ }),
//     withImages({ /* Plugin config here ... */ })
//   ];
//   return plugins.reduce((acc, next) => next(acc), {
//     /* global config here ... */
//   });
// };