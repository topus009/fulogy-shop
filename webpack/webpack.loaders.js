const { resolve } = require('path');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const CACHE_DIR_PATH = resolve(__dirname, '.', 'node_modules', '.cache');

const withCacheLoader = name => ({
  loader: 'cache-loader',
  options: { cacheDirectory: resolve(CACHE_DIR_PATH, name) },
});

const withThreadLoader = name => ({
  loader: 'thread-loader',
  options: { name, poolRespawn: false },
});

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    include: resolve(__dirname, '..', 'src', 'js'),
    use: [
      withCacheLoader('js'),
      withThreadLoader('js'),
      {
        loader: `babel-loader${IS_PRODUCTION ? '' : '?compact=false'}`,
        options: {
          cacheDirectory: resolve(CACHE_DIR_PATH, 'babel'),
        },
      },
    ],
  },
];
