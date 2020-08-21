import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../pages/Contacts')
  },
  {
    path: '/prices',
    name: 'Prices',
    component: () => import('../pages/Prices')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../pages/Services')
  },
  {
    path: '/services/:id',
    name: 'Service',
    component: () => import('../pages/Service'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
