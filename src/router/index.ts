import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/share'
  },
  {
    path: '/share',
    component: Layout,
    redirect: '/share/introduce',
    meta: { title: '规范', type: 'onemore' },
    children: [
      {
        path: 'introduce',
        name: 'introduce',
        component: () =>
          import(/* webpackChunkName: "page" */ '../views/Introduce.vue'),
        meta: { title: '开篇', icon: 'coffee' }
      },
      {
        path: 'husky',
        name: 'husky',
        component: () =>
          import(/* webpackChunkName: "page" */ '../views/Husky.vue'),
        meta: { title: 'husky', icon: 'data' }
      },
      {
        path: 'commitlint',
        name: 'commitlint',
        component: () =>
          import(/* webpackChunkName: "page" */ '../views/Commit.vue'),
        meta: { title: 'commitlint', icon: 'robot' }
      },
      {
        path: 'end',
        name: 'end',
        component: () =>
          import(/* webpackChunkName: "page" */ '../views/End.vue'),
        meta: { title: '完结', icon: 'fireworks' }
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
