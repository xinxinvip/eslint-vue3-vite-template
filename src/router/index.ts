
import { createRouter, createWebHistory } from 'vue-router'
const routerHistorys = createWebHistory()

const router = createRouter({
  history: routerHistorys,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('@/views/member/index.vue')
    }
  ]
})

export default router
