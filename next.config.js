/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

const nextConfig = {
  reactStrictMode: true, // Chế độ kiểm tra chặt chẽ của React
  compiler: {
    styledComponents: true, // Hỗ trợ styled-components
  },
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: "all",
    };
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
