import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias['@'] = path.resolve('./');

    if (dev && !isServer) {
      config.plugins.push(new ReactRefreshWebpackPlugin());
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zgirzhkthghyhkvtnetj.supabase.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
