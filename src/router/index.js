import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Card from '../components/Card.vue'
import Restaurant from '../components/Restaurant.vue'
import STRooms from '../views/ST-Rooms.vue'

Vue.use(VueRouter)

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
    path: '/Card',
    name: 'Card',
    component: Card
  },
  {
    path: '/Resto',
    name: 'Restaurant',
    component: Restaurant
  },
  {
    path: '/ST-Rooms',
    name: 'ST-Rooms',
    component: STRooms
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
