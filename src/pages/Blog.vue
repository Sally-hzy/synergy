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
                  <img :src="User.img">
                </div>
              </div>
              <div class="col-md-8">
                <h5>{{User.name}}</h5>
                <span>{{User.age}}</span>
              </div>
            </div>
            <hr>
            <p>{{User.description}}</p>
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
                <li v-for="item in BlogList">
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
          <li class="list-group-item" v-for="item in KindList">
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
          User:{},
          KindList:[],
          BlogList:[]
        }
      },
      methods:{
        getData() {
          this.$axios.get("../static/Data.json",{}).then(response => {
            console.log(response.data);
            this.User = response.data.Blog.User;
            this.KindList = response.data.Blog.KindList;
            this.BlogList = response.data.Blog.BlogList;
          });
        }
      },
      mounted(){
        this.getData()
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
  .content li,a,p{
    text-align: left;
  }
  .user{
    padding-top: 10px;
  }
</style>
