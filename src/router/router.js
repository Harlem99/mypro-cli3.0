import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: (route) => ({
      food: route.query.name
    })
  },
  {
    path: '/name_view',
    name: 'name_view',
    components: {
      default: () => import('@/views/child.vue'),
      bus1: () => import('@/views/Bus1.vue'),
      bus2: () => import('@/views/Bus2.vue')
    } 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
       food: 'orange' //这里路由传参方法二
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/Argu.vue'),
    props: true //路由传参，方法三
  },
  {
    path: '/parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/filters',
    name: 'filters',
    component: () => import('@/views/filters.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/bus1',
    name: 'bus1',
    component: () => import('@/views/Bus1.vue')
  },
  {
    path: '/bus2',
    name: 'bus2',
    component: () => import('@/views/Bus2.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error404.vue'),
   
  },
] 