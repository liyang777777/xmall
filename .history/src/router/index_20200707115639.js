import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'
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
      // 首页
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      //全部商品
      {
        path: '',
        name: '',
        component: ,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
