<template>
  <div class="container footer">
    <hr>
    <div class="icon">
      <ul>
        <li><i class="iconfont icon-weixin"></i></li>
        <li><i class="iconfont icon-weibo1"></i></li>
        <li><i class="iconfont icon-tuitetwitter43"></i></li>
        <li><i class="iconfont icon-qq"></i></li>
        <li><i class="iconfont icon-facebook"></i></li>
        <li><i class="iconfont icon-instagram"></i></li>
      </ul>
    </div>
    <div class="bottom">
      <p>design by yxbysxcoco @2018/5/16 ...address...........</p>
      <p>liangzhipipi@163.com</p>
    </div>
  </div>
</template>

<script>
  export default {
        name: "Footer",
      data(){
        return{

        }
      }
    }
</script>

<style scoped>
  .footer{
    text-align: center;
  }
  .footer p,.icon{
    text-align: center;
  }
  .footer ul,ol{
    list-style: none;
  }
  .footer li{
    display: inline-block;
  }
</style>
