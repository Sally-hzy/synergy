import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

Vue.use(vuex);

import Nav_store from '../components/store/Nav_store'
import Resource_store from '../pages/store/Resource_store'
import Blog_store from '../pages/store/Blog_store'
import Home_store from '../pages/store/Home_store'
import Forum_store from '../pages/store/Forum'

export default new vuex.Store({
  state:{
    test:{
      user:'huzong'
    }
  },
  getters:{
  },
  modules:{
    Nav: Nav_store,
    Resource: Resource_store,
    Blog: Blog_store,
    Home: Home_store,
    Forum:Forum_store
  },
  actions:{
    saveForm(context){
      axios({
        method:'post',
        url:'/user',
        data:context.state.test
      })
    }
  },
  mutations:{
  }

})
