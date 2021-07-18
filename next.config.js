/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');

const isProd = process.env.MY_NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
  images: {
    domains: [
      'localhost',
      'i.pstimaj.com',
      'img.srgcdn.com',
      'images.unsplash.com',
    ],
  },
});
