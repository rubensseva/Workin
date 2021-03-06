import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NewUser from '../views/NewUser.vue'
import Workouts from '../views/Workouts.vue'
import WorkoutDetails from '../views/WorkoutDetails.vue'
import WorkoutPlans from '../views/WorkoutPlans.vue'

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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/new',
    name: 'NewUser',
    component: NewUser
  },
  {
    path: '/workouts',
    name: 'Workouts',
    component: Workouts
  },
  {
    path: '/workout/:id',
    name: 'WorkoutDetails',
    component: WorkoutDetails
  },
  {
    path: '/workout_plans',
    name: 'WorkoutPlans',
    component: WorkoutPlans
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
