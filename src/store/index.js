import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import Nav_store from '../components/store/Nav_store'

export default new vuex.Store({
  modules:{
    Nav: Nav_store
  }
})
