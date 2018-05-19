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
        <v-blogedit v-if="EditState"></v-blogedit>
        <div class="panel panel-default" v-if="!EditState">
          <div class="panel-body">
            <div class="title">
              <h3>博客|Blog</h3>
              <p>最新博文列表</p>
              <a @click="edit" href="javescript:;"><i class="el-icon-edit"></i>写博客</a>
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
          EditState:false,
          KindList:[
            {
              title:'Java'
            },
            {
              title:'c/cpp/c#'
            },{
              title:'html/css/js'
            },{
              title:'mysql'
            },{
              title:'abac'
            },{
              title:'r'
            },{
              title:'e'
            },{
              title:'Java1'
            },{
              title:'Java2'
            },{
              title:'Java3'
            },{
              title:'Java4'
            },{
              title:'Java5'
            },{
              title:'Java6'
            }
          ],
          BlogList:[
            {
              title:'博客一说着不为人知的事情',
              kind:'java',
              author:'huzong',
              content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
              '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
            },{
              title:'博客2说着不为人知的事情',
              kind:'java',
              author:'huzong',
              content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
              '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
            },{
              title:'博客3说着不为人知的事情',
              kind:'java',
              author:'huzong',
              content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
              '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
            },{
              title:'博客4说着不为人知的事情',
              kind:'java',
              author:'huzong',
              content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
              '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
            },{
              title:'博客4说着不为人知的事情',
              kind:'java',
              author:'huzong',
              content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
              '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
            },{
              title:'博客4说着不为人知的事情',
              kind:'java',
              author:'huzong',
              content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
              '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
            },{
              title:'博客4说着不为人知的事情',
              kind:'java',
              author:'huzong',
              content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
              '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
            },{
              title:'博客4说着不为人知的事情',
              kind:'java',
              author:'huzong',
              content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
              '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
            }
          ],
          User:{
            name:'huzong',
            img:'chou',
            description:'这家伙很懒，什么也没留下...',
            age:'21',
          }
        }
      },
      methods:{
        edit(){
          this.EditState = true;
        }
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
