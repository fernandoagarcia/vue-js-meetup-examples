// Core dependencies
import Vue from 'vue'
import AdminDashboard from './AdminDashboard'

const filter = require('@common/utils/filters.js')

new Vue({ // eslint-disable no-unused-vars
  render: h => h(AdminDashboard),
  filter
}).$mount('#app')
