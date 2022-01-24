import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Catalog from '../views/Catalog.vue'
import Admin from '../views/Admin.vue'
import Coach from '../views/Coach.vue'
import Exercice from '../views/Exercice.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'legister',
    component: Register
  },
  {
    path: '/login/:start?',
    name: 'login',
    component: Login
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/coach',
    name: 'coach',
    component: Coach
  },
  {
    path: '/exercice/:section',
    name: 'exercice',
    component: Exercice
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
