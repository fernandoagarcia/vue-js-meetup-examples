const path = require('path')
const outputDir = '../public/bundled/'

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    // Webpack renames internal imports for files using the baseUrl
    ? 'bundled/' // Needs to be declared separate from outputDir
    : '/',
  outputDir: outputDir,
  css: {
    extract: {
      filename: 'css/[name].[contenthash:8].css', // Can rename the 'css/' directory here
      chunkFilename: 'css/[name].[contenthash:8].css' // Can rename the 'css/' directory here
    }
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.filename = `js/[name].[chunkhash:8].js` // Can rename the 'js/' directory here
      config.output.chunkFilename = `js/[name].[chunkhash:8].js` // Can rename the 'js/' directory here
    }
  },

  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config.module
        .rule('images')
        .use('url-loader')
        .tap(options => {
          options.name = `[name].[hash:8].[ext]`
          options.outputPath = `img/` // Can rename the 'img/' directory here
          return options
        })

      config.module
        .rule('svg')
        .use('file-loader')
        .tap(options => {
          options.name = `[name].[hash:8].[ext]`
          options.outputPath = `img/` // Can rename the 'img/' directory here
          return options
        })

      config.module
        .rule('fonts')
        .use('url-loader')
        .tap(options => {
          options.name = `[name].[hash:8].[ext]`
          options.outputPath = `fonts/` // Can rename the 'fonts/' directory here
          return options
        })

      config.module
        .rule('media')
        .use('url-loader')
        .tap(options => {
          options.name = `[name].[hash:8].[ext]`
          options.outputPath = `media/` // Can rename the 'media/' directory here
          return options
        })
    })
  }
}