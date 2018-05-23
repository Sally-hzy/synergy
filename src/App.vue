<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    var sky = localStorage.getItem("sky");
    if(sky){
      $("#style").attr("href",sky); //实现将主题保存在内存中刷新浏览器不改变
    }
  }
}
</script>

<style>
</style>
