import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// Pointing routes to the components they should use
router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
})

router.start(App, '#app')
