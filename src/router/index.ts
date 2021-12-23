import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../views/index.vue'
import menber from '../views/menber.vue'
import Merber from '../views/Newmerber.vue'
import Login from '../views/login.vue'
import table from '../views/table.vue'
import table2 from '../views/table2.vue'
import table3 from '../views/table3.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/index',
    name: 'Index',
    component: Index,
    children:[
      {
        path: '/menber',
        name: 'menber',
        component: menber
      },
      {
        path: '/newmerber',
        name: 'newmerber',
        component: Merber
      },
      {
        path: '/table',
        name: 'table',
        component: table
      },
      {
        path: '/table2',
        name: 'table2',
        component: table2
      },
      {
        path: '/table3',
        name: 'table2',
        component: table3
      }
    ]
  },
  
  {
    path: '/',
    name: 'login',
    component: Login
  },
  
]

const router = new VueRouter({
  routes
})

export default router
