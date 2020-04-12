import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts.html',
    name: 'Contacts',
    component: () => import('../views/Contacts')
  },
  {
    path: '/prices.html',
    name: 'Prices',
    component: () => import('../views/Prices')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
