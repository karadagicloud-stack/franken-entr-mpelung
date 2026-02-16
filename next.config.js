/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/unsere-leistungen/haushalts-auflosungen',
        destination: '/haushaltsaufloesung',
        permanent: true,
      },
      {
        source: '/uber-uns',
        destination: '/',
        permanent: true,
      },
      {
        source: '/garage-entruempeln',
        destination: '/kellerentruempelung',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/unsere-leistungen/zwangsraumungen-und-entrumpelungen',
        destination: '/leistungen',
        permanent: true,
      },
      {
        source: '/unsere-leistungen',
        destination: '/leistungen',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
