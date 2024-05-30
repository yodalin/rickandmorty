import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import episodes from '../views/episodes.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
            episodes

    },
    {
      path: '/episodes/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/episodes.vue')
    },
    {
      path: '/episodes',
      name: 'episode',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Ep.vue')
    },
    {
      path: '/characters/:id',
      name: 'abut',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters.vue')
    },
    {
      path: '/characters',
      name: 'character',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Ch.vue')
    },
    {
      path: '/location/:id',
      name: 'abot',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/location.vue')
    },
    {
      path: '/location',
      name: 'location',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Lo.vue')
    }
  ]
})

export default router
