/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/:path*`,
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
        hostname: new URL(process.env.NEXT_PUBLIC_STRAPI_URL).hostname,
        pathname: "/uploads/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
