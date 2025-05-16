module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-host.com', // Restrict to trusted domains
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};
