const { withPlugins } = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

// next.js configuration
const nextConfig = {
  env: {
    STRIPE_PUBLIC_KEY:
      "pk_test_51H2XVWLpcWBYo0xMQeOeyHQ0L53weFnSH0uJ1FmoTjNkCEIN2wErAmaDHdOPKMkALbCohetkOfBctpshmb7eD",
    API_URL: "http://localhost:4000/shop/graphql",
  },
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

module.exports = withPlugins(
  [withCSS, withOptimizedImages, withFonts],
  nextConfig
);
