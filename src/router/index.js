import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue';
import Recipe from '../views/Recipe.vue';

Vue.use(Router)

export const adminRoutes = {
  path: "/",
  name: "Main",
  redirect: { name: 'Home' },
  component: () => import("../layouts/UserDashboardLayout.vue"),
  children: [
    {
      path: '/user',
      name: 'User',
      meta: {
        requiredAdmin: true,
      },
      component: () => import('../views/User.vue')
    },
    {
      path: '/category',
      name: 'Category',
      meta: {
        requiredAdmin: true,
      },
      component: () => import('../views/Category.vue')
    },
  ]
}

const general = {
  path: "/",
  name: "Main",
  redirect: { name: 'Home' },
  component: () => import("../layouts/UserDashboardLayout.vue"),
  children: [
    // ...adminRoutes,
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/recipe',
      name: 'Recipe',
      component: Recipe
    },
    {
      path: '/userprofile/:id',
      name: 'UserProfile',
      component: () => import('../views/UserProfile.vue')
    },
    {
      path: '/recipedetail/:id',
      name: 'RecipeDetail',
      component: () => import('../views/RecipeDetail.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Signin.vue')
    },
  ]
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    general,
    {
      name: 'NotFound',
      path: '*',
      component: () => import('../views/404'),
    },
  ],
})