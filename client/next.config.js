/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // The root path
        has: [
          {
            type: "host",
            value: "frankiefab.vercel.app",
          },
        ],
        destination: "https://frankiefab.com",
        permanent: true, // 301 redirect
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.STRAPI_URL}/api/:path*`,
      },
    ];
  },

  images: {
    domains: ["cdn.hashnode.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        pathname: "/res/hashnode/image/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: new URL(process.env.STRAPI_URL).hostname,
        pathname: "/uploads/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
