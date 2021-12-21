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
        path: 'dependencies',
        name: 'Dependencies',
        meta: {
          title: 'Dependencies'
        },
        component: () => import(/* webpackChunkName: "test" */ '@/views/dependencies/index.vue')
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "test" */ '@/views/home/index.vue')
      },
      {
        path: 'axios',
        name: 'Axios',
        component: () => import(/* webpackChunkName: "test" */ '@/views/axios/index.vue')
      },
      {
        path: 'array-to-tree',
        name: 'ArrayToTree',
        component: () => import(/* webpackChunkName: "test" */ '@/views/array-to-tree/index.vue')
      }
    ]
  }
]

export default routes
