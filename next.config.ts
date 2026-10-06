/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com', 'opengraph.githubassets.com'],
  },
  // the chat API's getBlog tool reads these at runtime
  outputFileTracingIncludes: {
    '/api/chat': ['./content/blog/**/*'],
  },
  eslint: {
    // Ne bloque PAS le build en cas d'erreurs eslint
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
