/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });
    // Yjs 사용 시 주석 해제 필요
    // if (!isServer) {
    //   // Ensure that all imports of 'yjs' resolve to the same instance
    //   // eslint-disable-next-line no-param-reassign, dot-notation
    //   config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs');
    // }
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = nextConfig;
