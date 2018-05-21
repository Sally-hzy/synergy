<template>
  <div class="container-fluid">
    <nav class="navbar">
      <div class="navbar-header">
        <a class="navbar-brand" href="javescript:;"><router-link tag="span" to="/Home">主页</router-link></a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="javescript:;"><router-link tag="span" to="/StudyResource">学习资源</router-link></a> </li>
          <li class="active"><a href="javescript:;"><router-link tag="span" to="/Blog">博客</router-link></a> </li>
          <li class="active"><a href="javescript:;"><router-link tag="span" to="/Forum">论坛</router-link></a> </li>
          <li class="active"><a href="javescript:;"><router-link tag="span" to="/AboutUs">关于我们</router-link></a> </li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">
            <i class="el-icon-search"></i>
          </button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$store.state.Nav.Admin}} <span class="caret"></span></a>
            <ul class="dropdown-menu" v-show="!$store.state.Nav.LandingState">
              <li><a href="javescript:;" data-toggle="modal" data-target="#Login">登陆</a></li>
              <li><a href="javescript:;" data-toggle="modal" data-target="#Register">注册</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="javescript:;" data-toggle="modal" data-target="#Settings">设置</a></li>
            </ul>
            <ul class="dropdown-menu" v-show="$store.state.Nav.LandingState">
              <li><a href="javescript:;" data-toggle="modal" data-target="#UserCenter">个人中心</a></li>
              <li><a href="javescript:;" data-toggle="modal" data-target="#Messages">消息</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="javescript:;" @click="$store.commit('LoginOut')">退出登陆</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <!--登陆之后显示模态框-->
    <v-nav-modal></v-nav-modal>
  </div>
</template>

<script>
    export default {
      name: "Nav",
      data(){
        return {
        }
      },
      methods:{
      }
    }
</script>

<style scoped>
  .modal-body{
    height: 180px;
  }
</style>
