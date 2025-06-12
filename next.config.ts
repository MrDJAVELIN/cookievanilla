import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    productionBrowserSourceMaps: false,
};

export default nextConfig;
