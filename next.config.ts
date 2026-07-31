import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,

  images: {
    // تفعيل الـ unoptimized في بيئة التطوير فقط يحل مشكلة الـ 500 والبطء تماماً
    unoptimized: process.env.NODE_ENV === "development",
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.adsttc.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "alammar-family-project-backend-production.up.railway.app",
        pathname: "/storage/**",
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },

  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default withNextIntl(nextConfig);