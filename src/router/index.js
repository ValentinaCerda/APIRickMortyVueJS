import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personaje/:id',
    name: 'Personaje',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/Personaje.vue')
    }
    //() => import(/* webpackChunkName: "about" */ '../views/Personaje.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error 404',
    component: () => import(/* webpackChunkName: "user" */ '../views/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
