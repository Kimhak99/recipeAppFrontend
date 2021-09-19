import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export const adminRoutes = [
  {
    path: '/user',
    name: 'User',
    requiredAdmin: true,
    component: () => import(/* webpackChunkName: "login" */'../views/User.vue')
  },
  {
    path: '/category',
    name: 'Category',
    requiredAdmin: true,
    component: () => import(/* webpackChunkName: "login" */'../views/Category.vue')
  },
];

const routes = [
  {
    path: '/',
    name: 'Home',
    requiredAdmin: false,
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    requiredAdmin: false,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    requiredAdmin: false,
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    requiredAdmin: false,
    component: () => import(/* webpackChunkName: "login" */'../views/Signin.vue')
  },
  {
    path: '/recipe',
    name: 'Recipe',
    requiredAdmin: false,
    component: () => import(/* webpackChunkName: "login" */'../views/Recipe.vue')
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    requiredAdmin: false,
    component: () => import(/* webpackChunkName: "login" */'../views/UserProfile.vue')
  },
  {
    name: 'NotFound',
    path: '*',
    requiredAdmin: false,
    component: () => import('@/views/404'),
  },
]//which of these routes are for admin? only admin can see recipe? these

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
