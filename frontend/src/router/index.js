import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Badges from '../views/Badges.vue'
import Vaults from '../views/Vaults.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/badges',
    name: 'Badges',
    component: Badges
  },
  {
    path: '/vaults',
    name: 'Vaults',
    component: Vaults
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
