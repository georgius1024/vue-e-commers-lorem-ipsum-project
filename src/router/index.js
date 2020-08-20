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
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts')
  },
  {
    path: '/prices',
    name: 'Prices',
    component: () => import('../views/Prices')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services')
  },
  {
    path: '/services/:id',
    name: 'Service',
    component: () => import('../views/Service'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
