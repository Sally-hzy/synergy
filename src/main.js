// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/media.css'

import headernav from './components/headernav'
import lesson from './components/lesson'
import lessonadve from './components/lessonadvertisement'
import footer from './components/footer'
import swiperslide from './components/swiperslide'
import share from './components/share'
import teacher from './components/teacher'
import learningpath from './components/learningpath'

Vue.use(Element)
Vue.config.productionTip = false

Vue.component('header-nav',headernav);
Vue.component('lesson',lesson);
Vue.component('lesson-adv',lessonadve);
Vue.component('footer-nav',footer);
Vue.component('swiper-slide',swiperslide);
Vue.component('share',share),
Vue.component('teacher',teacher),
Vue.component('learnpath',learningpath),

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

