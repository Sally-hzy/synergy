<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'App',
  created() {
    var sky = localStorage.getItem("sky");
    var fu = localStorage.getItem("landing");
    if(fu == "1"){
      this.$store.commit('up');
    }else if(fu == "2"){
      this.$store.commit('down');
    }
    if(sky){
      $("#style").attr("href",sky); //实现将主题保存在内存中刷新浏览器不改变
    }
  }
}
</script>

<style>
</style>
