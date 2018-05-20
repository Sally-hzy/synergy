<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,html,h1,h2,h3,h4,h5,h6,p,ul,li,dd,dl,input{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  input{
    border: none;
  }
  a{
    text-decoration:none;
  }
  li,ul{
   list-style: none;
  }
  router-link-active{
    text-decoration:none;
  }
#app {
  font: 16px "PingFang SC","微软雅黑","Microsoft YaHei",Helvetica,"Helvetica Neue",Tahoma,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.headernav{
   height: 10%;
 }
.footer{
  height: 10%;
}

  @media screen and (max-width: 960px){
    html,#app{
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px){
    html,#app{
      font-size: 12px;
    }
  }
  @media screen and (max-width: 550px){
    #app{
      font-size: 10px;
    }
  }
  @media screen and (max-width: 320px){
    html,#app{
      font-size: 8px;
    }
  }
</style>
