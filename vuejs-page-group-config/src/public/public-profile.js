// Core dependencies
import Vue from 'vue'
import PublicProfile from './PublicProfile'

const filter = require('@common/utils/filters.js')

new Vue({ // eslint-disable no-unused-vars
  render: h => h(PublicProfile),
  filter
}).$mount('#app')
