import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    redirect: '/test/home',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "test" */ '@/views/home/index.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "test" */ '@/views/about/index.vue')
      },
      {
        path: 'layout',
        name: 'LayoutTest',
        component: () => import(/* webpackChunkName: "test" */ '@/views/layout/index.vue')
      }
    ]
  }
]

export default routes
