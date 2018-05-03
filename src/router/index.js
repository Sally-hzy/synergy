import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import  SQL from '@/components/SQL'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/SQL',
      name: 'SQL',
      component: SQL
    }
  ]
})
