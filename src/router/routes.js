export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import('@/views/home'),
      footer: () => import('@/components/common/Footer')
    }
  },
  {
    path: '/kind',
    name: 'kind',
    components: {
      default: () => import('@/views/kind')
    }
  }
]
