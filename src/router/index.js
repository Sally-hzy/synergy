import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import  SQL from '@/components/SQL'
import newslatest from '@/components/newslatest'
import focus from '@/components/focus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/SQL',
      name: 'SQL',
      component: SQL
    },
    {
      path: '/news',
      name: 'news',
      component: newslatest
    },
    {
      path: '/focus',
      name: 'focus',
      component: focus
    }
  ]
})
