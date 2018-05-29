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
                <h5><a href="javascript:;">{{$store.state.Blog.User.name}}</a></h5>
                <span>{{$store.state.Blog.User.age}}</span>
              </div>
            </div>
            <hr>
            <p>{{$store.state.Blog.User.description}}</p>
          </div>
        </div>
      </div>
      <!--博客内容-->
      <div class="col-md-8"  v-show="!$store.state.Blog.BlogState">
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
                  <a href="javescript:;" class="blogtitle" @click="$store.commit('EnterBlog')">{{item.title}}</a>
                  <p>{{item.content}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8" v-show="$store.state.Blog.BlogState">
        <div class="panel panel-default">
          <div class="panel-body" v-for="item in $store.state.Blog.BlogList">
            <div class="title">
              <h3>{{item.title}}</h3>
            </div>
            <div class="content">
              {{item.content}}
            </div>
          </div>
          <div class="panel-body">
            <div class="footer">
              <button class="btn btn-danger" @click="$store.commit('ReturnBlog')">返回</button>
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
        getData() {
          this.$axios.get("../static/Data.json",{}).then(response => {
            console.log(response.data);
            this.$store.state.Blog.User = response.data.User;
            this.$store.state.Blog.KindList = response.data.Blog.KindList;
            this.$store.state.Blog.BlogList = response.data.Blog.BlogList;
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
