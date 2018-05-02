// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './router'

import usercenter from 'components/usercenter'

import blog from './page/blog'
import collection from './page/collection'
import data from './page/data'
import relation from './page/relation'


Vue.use(VueRouter);


const routes = [
  { path: '/components/usercenter', component: usercenter,
    children: [
      { path: 'blog', name:'index', component: blog },

      { path: 'collection', name:'collection', component: collection },

      { path: 'data', name:'data', component: data },

      { path: 'relation', name:'relation', component: relation }
    ]
  }
];


const router = new VueRouter({
  routes,
  linkActiveClass:'active'
});


Vue.config.productionTip = false;


/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h =>h(App)
}).$mount('#app');

