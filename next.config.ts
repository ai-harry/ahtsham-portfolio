import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 82],
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  // Old links to renamed pieces keep working.
  async redirects() {
    return [
      {
        source: "/work/whop-clipping-before-and-after",
        destination: "/work/clipping-promo-before-and-after",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
