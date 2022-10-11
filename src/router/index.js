import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('@/views/Catalog.vue')
  },
  {
    path: '/favourites',
    name:  'favourites',
    component: () => import('@/views/Favourites.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && store.state.AuthModule.logged === false) next( {name:'login'});
  else next()
})

export default router
