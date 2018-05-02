import Vue from 'vue'
import Router from 'vue-router'
import usercenter from '../components/usercenter'

import blog from '../page/blog'
import collection from '../page/collection'
import data from '../page/data'
import relation from '../page/relation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: _dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/dope',
      name: 'dope',
      component: dope
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: usercenter,
      children: [
        {
          path:'blog',
          name:'blog',
          component:blog
        },
        {
          path:'collection',
          name:'collection',
          component:collection
        },
        {
          path:'data',
          name:'data',
          component:data
        },
        {
          path:'relation',
          name:'relation',
          component:relation
        },
      ]
    }
  ]
})
