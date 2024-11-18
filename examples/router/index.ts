import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/icon', name: 'icon', component: () => import('../views/icon.vue') },
  { path: '/button', name: 'button', component: () => import('../views/button.vue') },
  { path: '/tooltip', name: 'tooltip', component: () => import('../views/tooltip.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
