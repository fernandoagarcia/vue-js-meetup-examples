import Vue from 'vue'
import Router from 'vue-router'

// import IndexPage from '@src/views/pages/Index'
const IndexPage = () => import('@src/views/pages/Index')
// import DashboardPage from '@src/views/pages/Dashboard'
const DashboardPage = () => import('@src/views/pages/Dashboard')
// import AccountPage from '@src/views/pages/Account'
const AccountPage = () => import('@src/views/pages/Account')

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/',
      name: 'account',
      component: AccountPage
    }
  ]
})
