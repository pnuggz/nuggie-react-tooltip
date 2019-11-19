const presets = [
  '@babel/react',
  [
    '@babel/env',
    {
      targets: {
        browsers: 'last 2 versions',
      },
      useBuiltIns: 'usage',
      corejs: '2.6.10',
    },
  ],
];

const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = { presets, plugins };
