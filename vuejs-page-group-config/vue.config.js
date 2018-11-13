const path = require('path')
const adminPages = require('./admin-pages')
const publicPages = require('./public-pages')
const adminPageSet = Object.keys(adminPages)
const publicPageSet = Object.keys(publicPages)
const allPageSet = [...adminPageSet, ...publicPageSet]

module.exports = {
  pages: {
    ...adminPages,
    ...publicPages
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@admin', path.resolve(__dirname, 'src/admin'))
      .set('@public', path.resolve(__dirname, 'src/public'))
      .set('@common', path.resolve(__dirname, 'src/common'))

    config.when(process.env.NODE_ENV === 'production', config => {
      allPageSet.forEach((element) => {
        /**
          * Separate admin from client facing outputs if needed
          * A simple regex can handle that condition
        */
        config
          .plugin(`html-${element}`)
          .tap(args => {
            args[0].filename = path.resolve(__dirname, `../public/bundle/${element}.html`)
            return args
          })
      })
    })
  }
}