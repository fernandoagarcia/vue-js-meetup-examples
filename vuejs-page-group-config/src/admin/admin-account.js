// Core dependencies
import Vue from 'vue'
import AdminAccount from './AdminAccount'

const filter = require('@common/utils/filters.js')

new Vue({ // eslint-disable no-unused-vars
  render: h => h(AdminAccount),
  filter
}).$mount('#app')
