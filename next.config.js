const path = require('path')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  experimental: {
    optimizeFonts: true,
  },
  sassOptions: {
    additionalData: (content) => {
      return (
        `
        @import 'src/styles/_settings.scss';
        @import 'src/styles/_mq.scss';
        @import 'src/styles/_extends.scss';
        @import 'src/styles/_functions.scss';
        @import 'src/styles/_mixins.scss';
        @import 'src/styles/_animations.scss';
      ` + content
      )
    },
  },
  webpack: (config, options) => {
    const { isServer } = options

    if (!isServer) {
      config.module.rules.push({
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      })

      config.plugins.push(
        new StylelintWebpackPlugin({
          files: 'src/**/*.scss',
          syntax: 'scss',
          fix: true,
          quiet: true,
        })
      )
    }

    return config
  },
})
