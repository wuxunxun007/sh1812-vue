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
      default: () => import('@/views/kind'),
      footer: () => import('@/components/common/Footer')
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: () => import('@/views/login')
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      default: () => import('@/views/register')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: () => import('@/views/cart'),
      footer: () => import('@/components/common/Footer')
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: () => import('@/views/user'),
      footer: () => import('@/components/common/Footer')
    }
  }
]
