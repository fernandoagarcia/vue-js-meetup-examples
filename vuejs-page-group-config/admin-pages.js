const path = require('path')

module.exports = {
  'admin-dashboard': {
    entry: 'src/admin/admin-dashboard.js',
    template: 'public/admin-dashboard.html',
    filename: 'admin-dashboard.html',
    title: 'App Dashboard'
  },
  'admin-account': {
    entry: 'src/admin/admin-account.js',
    template: 'public/admin-account.html',
    filename: 'admin-account.html',
    title: 'App Account'
  }
}
