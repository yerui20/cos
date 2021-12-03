import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../views/index.vue'
import menber from '../views/menber.vue'
import Merber from '../views/Newmerber.vue'
import Login from '../views/login.vue'
import Login00 from '../views/login2.vue'
import register from '../views/register.vue'
import table from '../views/table.vue'
import table2 from '../views/table2.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children:[
      {
        path: '/menber',
        name: 'menber',
        component: menber
      }
    ]
  },
  {
    path: '/newmerber',
    name: 'newmerber',
    component: Merber
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/login00',
    name: 'login00',
    component: Login00
  },
  {
    path: '/table',
    name: 'table',
    component: table
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/table2',
    name: 'table2',
    component: table2
  }
]

const router = new VueRouter({
  routes
})

export default router
