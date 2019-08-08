import Vue from 'vue'
import Router from 'vue-router'
import Collections from '../components/Collections'

Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      name: 'Collections',
      component: Collections
    }
  ]
})
