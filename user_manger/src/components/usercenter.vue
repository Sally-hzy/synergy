<template>
    <div class="userdata"></div>
  <div class="nav-tabs">
    <ul>
      <router-link :to="{name: 'blog'}" tag="li" >我的博客</router-link>
      <router-link :to="{name: 'collection'}" tag="li" >我的收藏</router-link>
      <router-link :to="{name: 'data'}" tag="li" >我的资料</router-link>
      <router-link :to="{name: 'relation'}" tag="li" >我的关系</router-link>
    </ul>
  </div>
  <div class="tab-content">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "usercenter"
    }
</script>

<style scoped>

</style>
