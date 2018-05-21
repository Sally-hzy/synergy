<template>
  <div class="container">
    <div class="row">
      <!--左侧个人信息-->
      <div class="col-md-2">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-4">
                <div class="user">
                  <img :src="$store.state.Blog.User.img">
                </div>
              </div>
              <div class="col-md-8">
                <h5>{{$store.state.Blog.User.name}}</h5>
                <span>{{$store.state.Blog.User.age}}</span>
              </div>
            </div>
            <hr>
            <p>{{$store.state.Blog.User.description}}</p>
          </div>
        </div>
      </div>
      <!--博客内容-->
      <div class="col-md-8">
        <v-blogedit v-show="!$store.state.Blog.EditState"></v-blogedit>
        <div class="panel panel-default" v-show="$store.state.Blog.EditState">
          <div class="panel-body">
            <div class="title">
              <h3>博客|Blog</h3>
              <p>最新博文列表</p>
              <a @click="$store.commit('EnterEdit')" href="javescript:;"><i class="el-icon-edit"></i>写博客</a>
            </div>
            <div class="content">
              <ul>
                <li v-for="item in $store.state.Blog.BlogList">
                  <a href="javescript:;" class="blogtitle">{{item.title}}</a>
                  <p>{{item.content}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--右侧分类表-->
      <div class="col-md-2">
        <div class="list-group">
          <li class="list-group-item" v-for="item in $store.state.Blog.KindList">
            <a href="javescript:;">{{item.title}}</a>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Blog",
      data(){
        return {

        }
      },
      methods:{
      },
      mounted:{
        // console.log ($store.state.Blog.BlogList)
      }
    }
</script>

<style>
  .user img{
    width: 45px;
    height: 45px;
  }
  .blogtitle{
    font-size: 16px;
  }
  .title{
    padding-bottom: 40px;
  }
  .title h3,p{
    color: #787878;
  }
  .title span{
    color: #787878;
  }
  .title h3:hover{
    color: #111111;
  }
  ul,ol{
    list-style: none;
  }
</style>
