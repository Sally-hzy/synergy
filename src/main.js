// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import store from './store'

//库引入
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueSimplemde from 'vue-simplemde'

//组件引入
import Nav from './components/Nav'
import NavModal from './components/NavModal'
import Footer from './components/Footer'

//页面引入
import BlogEdit from './pages/views/BlogEdit'

Vue.use(vuex);
//页面注册

Vue.component('v-blogedit',BlogEdit);
//组件注册
Vue.component('v-nav',Nav);
Vue.component('v-nav-modal',NavModal);
Vue.component('v-footer',Footer);

//第三方库注册
Vue.use(Element);
Vue.use(VueSimplemde);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
