<template>
  <div class="nav">
    这里是csdn头部的导航栏
  </div>
  <div class="nav-tabs">
    <ul>
      <router-link :to="/usercenter">个人中心</router-link>
      <router-link :to="/dope">我的消息</router-link>
    </ul>
  </div>
  <div class="tab-content">
    <router-view></router-view>
  </div>
  <div class="footer">

  </div>
</template>

<script>
  import usercenter from './components/usercenter'
  import dope from './components/dope'


export default {
  data(){
    return data
  },
  components:{
    usercenter:usercenter,
    dope:dope
  }
}
</script>

<style>

</style>
