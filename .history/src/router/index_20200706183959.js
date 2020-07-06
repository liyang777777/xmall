import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: '/',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../views/login/Login')
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import('../views/register/Register')
  },
  {
    path: '/detail',
    name: 'Detail',

    component: () => import('../views/detail/Detail')
  },
  {
    path: '/',
    name: 'Layout',

    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
