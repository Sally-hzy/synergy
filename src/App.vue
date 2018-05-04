<template>
  <div id="app" style="background-color: #f0f0f0">
    <header-nav></header-nav>
    <div class="siderbar">
      <el-row class="tac">
        <el-col :span="2" :offset="5">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <span slot="title"><router-link tag="span" to="/Home">推荐</router-link> </span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title"><router-link tag="span" to="/news">最新文章</router-link></span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title"><router-link tag="span" to="/focus">关注</router-link></span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">资讯</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">人工智能</span>
            </el-menu-item>
            <el-menu-item index="6">
              <span slot="title">云计算/大数据</span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title">区块链</span>
            </el-menu-item>
            <el-menu-item index="8">
              <span slot="title"><router-link tag="span" to="/SQL">数据库</router-link></span>
            </el-menu-item>
            <el-menu-item index="9">
              <span slot="title">程序人生</span>
            </el-menu-item>
            <el-menu-item index="10">
              <span slot="title">游戏开发</span>
            </el-menu-item>
            <el-menu-item index="11">
              <span slot="title">研发管理</span>
            </el-menu-item>
            <el-menu-item index="12">
              <span slot="title">前端</span>
            </el-menu-item>
            <el-menu-item index="13">
              <span slot="title">移动开发</span>
            </el-menu-item>
            <el-menu-item index="14">
              <span slot="title">物联网</span>
            </el-menu-item>
            <el-menu-item index="15">
              <span slot="title">运维</span>
            </el-menu-item>
            <el-menu-item index="16">
              <span slot="title">计算机基础</span>
            </el-menu-item>
            <el-menu-item index="17">
              <span slot="title">编程语言</span>
            </el-menu-item>
            <el-menu-item index="18">
              <span slot="title">架构</span>
            </el-menu-item>
            <el-menu-item index="19">
              <span slot="title">音视频开发</span>
            </el-menu-item>
            <el-menu-item index="20">
              <span slot="title">安全</span>
            </el-menu-item>
            <el-menu-item index="21">
              <span slot="title">其他</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="8">
          <router-view></router-view>
        </el-col>
        <el-col :span="4">
          <div style="width: 100%;height: 120px;background-color: #d3dce6">
            <adv></adv>
          </div>
          <div style="width: 100%;height: 190px;">
            <car></car>
          </div>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">

              <span>%80操作者都不知道的以太坊操作</span>
            </el-menu-item>
            <el-menu-item index="2">

              <span slot="title">人工智能+科技无障碍=互联网创新？</span>
            </el-menu-item>
            <el-menu-item index="3">

              <span slot="title">AI NEXTcon硅谷AI技术峰会(北京分会)</span>
            </el-menu-item>
            <el-menu-item index="4">

              <span slot="title">AI竞赛群，里面的人超厉害，说话又好听。。</span>
            </el-menu-item>
            <el-menu-item index="5">

              <span slot="title">腾讯竟然是这样存储你的数据的！！！</span>
            </el-menu-item>
            <el-menu-item index="6">

              <span>住个酒店，“我”的隐私竟然就这样被扒干净了！</span>
            </el-menu-item>
            <el-menu-item index="7">

              <span>%80操作者都不知道的以太坊操作</span>
            </el-menu-item>
            <el-menu-item index="8">

              <span slot="title">人工智能+科技无障碍=互联网创新？</span>
            </el-menu-item>
            <el-menu-item index="9">

              <span slot="title">AI NEXTcon硅谷AI技术峰会(北京分会)</span>
            </el-menu-item>
            <el-menu-item index="10">

              <span slot="title">AI竞赛群，里面的人超厉害，说话又好听。。</span>
            </el-menu-item>
            <el-menu-item index="11">

              <span slot="title">腾讯竟然是这样存储你的数据的！！！</span>
            </el-menu-item>
            <el-menu-item index="12">

              <span>住个酒店，“我”的隐私竟然就这样被扒干净了！</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
