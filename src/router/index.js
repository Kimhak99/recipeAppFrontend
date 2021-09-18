import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "login" */'../views/Signin.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "login" */'../views/User.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "login" */'../views/Category.vue')
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "login" */'../views/Recipe.vue')
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: () => import(/* webpackChunkName: "login" */'../views/UserProfile.vue')
  },
  {
    name: 'NotFound',
    path: '*',
    component: () => import('@/views/404'),
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
