<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
      <el-menu-item index="1"><span>CSDN</span></el-menu-item>
      <el-submenu index="2">
        <template slot="title">博客</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">学院</el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank">下载</a></el-menu-item>
      <el-menu-item index="5">GitChat</el-menu-item>
      <el-menu-item index="6">论坛</el-menu-item>
      <el-menu-item index="7">问答</el-menu-item>
      <el-menu-item index="8">商城</el-menu-item>
      <el-menu-item index="9">VIP</el-menu-item>
      <el-menu-item index="10">活动</el-menu-item>
      <el-menu-item index="11">招聘</el-menu-item>
      <el-menu-item index="12">ITeye</el-menu-item>
      <el-menu-item index="13">TinyMind</el-menu-item>
      <el-menu-item index="14">CSTO</el-menu-item>
      <el-menu-item index=""></el-menu-item>
      <el-menu-item index=""></el-menu-item>
      <el-menu-item index=""></el-menu-item>
      <el-menu-item index=""></el-menu-item>
      <el-menu-item index=""></el-menu-item>
      <el-menu-item index=""></el-menu-item>
      <el-menu-item index=""></el-menu-item>
      <el-menu-item index="15">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input21">
        </el-input>
      </el-menu-item>
      <el-menu-item index="16">
        <i class="el-icon-edit"></i>
        <a>写博客</a>
      </el-menu-item>
      <el-menu-item index="17">
        <i class="el-icon-edit-outline"></i>
        <a>发Chat</a>
      </el-menu-item>
      <el-submenu index="18">
        <el-menu-item index="18-1">我的博客</el-menu-item>
        <el-menu-item index="18-2">消息</el-menu-item>
        <el-menu-item index="18-3">账号设置</el-menu-item>
        <el-menu-item index="18-4">反馈</el-menu-item>
        <el-menu-item index="18-5">帮助</el-menu-item>
        <el-menu-item index="18-6">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
