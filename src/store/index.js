import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import Nav_store from '../components/store/Nav_store'
import Resource_store from '../pages/store/Resource_store'

export default new vuex.Store({
  modules:{
    Nav: Nav_store,
    Resource: Resource_store
  }
})
