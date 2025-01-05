/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: true, // Bật phân tích khi ANALYZE=true
  openAnalyzer: true,
});

const nextConfig = {
  reactStrictMode: true, // Chế độ kiểm tra chặt chẽ của React
  compiler: {
    styledComponents: true, // Hỗ trợ styled-components
  },
};

export default withBundleAnalyzer(nextConfig);
