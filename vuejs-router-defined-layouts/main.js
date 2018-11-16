import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'
import '@/utils/layouts'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
