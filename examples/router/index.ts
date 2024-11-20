import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/icon', name: 'icon', component: () => import('../views/icon.vue') },
  { path: '/button', name: 'button', component: () => import('../views/button.vue') },
  { path: '/input', name: 'input', component: () => import('../views/input.vue') },
  { path: '/select', name: 'select', component: () => import('../views/select.vue') },
  { path: '/datePicker', name: 'datePicker', component: () => import('../views/datePicker.vue') },
  { path: '/message', name: 'message', component: () => import('../views/message.vue') },
  { path: '/tooltip', name: 'tooltip', component: () => import('../views/tooltip.vue') },
  { path: '/modal', name: 'modal', component: () => import('../views/modal.vue') },
  { path: '/tree', name: 'tree', component: () => import('../views/tree.vue') },
  { path: '/scrollTable', name: 'scrollTable', component: () => import('../views/scrollTable.vue') },
  { path: '/collapse', name: 'collapse', component: () => import('../views/collapse.vue') },
  { path: '/form', name: 'form', component: () => import('../views/form.vue') },
  { path: '/switch', name: 'switch', component: () => import('../views/switch.vue') },
  { path: '/dropdown', name: 'dropdown', component: () => import('../views/dropdown.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
