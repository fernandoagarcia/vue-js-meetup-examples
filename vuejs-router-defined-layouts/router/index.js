const IndexPage = () => import('@views/pages/Index')

export default [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Home Page',
      layout: 'default'
    }
  }
]
