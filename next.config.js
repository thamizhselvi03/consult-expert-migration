/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    const type = isServer ? "ssr" : "chunks";
    const fileType = isServer ? "runtime" : "chunks";
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        filename: `static/${fileType}/remoteEntry.js`,
        remotes: {
          footer: `footer@https://dev-f.vakilsearch.com/_next/static/${type}/remoteEntry.js`,
          header: `header@https://dev-h.vakilsearch.com/_next/static/${type}/remoteEntry.js`,
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
