const withOffline = require("next-pwa");


const nextConfig = {
  pwa: {
    dest: 'public',
    disable: false,
    cacheOnFrontEndNav: true
  },
  future: {
    webpack5: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/immunization",
        permanent: true,
      },
    ];
  },
};

module.exports = withOffline(nextConfig);
