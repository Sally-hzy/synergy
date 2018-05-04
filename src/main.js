// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/index'

import headernav from './components/headernav'
import carousel from './components/carousel'
import advtisement from './components/advtisement'
import advtisementtop from './components/advtisementtop'

Vue.use(Element);
Vue.config.productionTip = false

Vue.component('header-nav',headernav);
Vue.component('car',carousel);
Vue.component('adv',advtisement);
Vue.component('advtop',advtisementtop);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


