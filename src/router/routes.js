export default [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/kind',
    name: 'kind',
    component: () => import('@/views/kind')
  }
]
