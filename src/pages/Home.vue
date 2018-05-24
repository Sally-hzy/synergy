<template>
  <div class="container">
    <!--学校轮播图，介绍学校-->
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in $store.state.Home.ImgList" >
          <img :src="item.url" class="carousel_img">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--最新头条加上高校导航-->
    <div class="row">
      <div class="col-md-3">
        <div class="LaterstHeadline">
          <div class="list-group">
            <li class="list-group-item headlist">最新头条</li>
            <li class="list-group-item" v-for="item in $store.state.Home.HeadlineList">
              <a href="#">{{item.title}}
              <span class="badge pull-right">{{item.count}}</span></a>
            </li>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="title">
              <h3>高校导航</h3>
              <p>与协同过滤系统合作的高校...</p>
            </div>
            <div class="row">
              <div class="col-md-4" v-for="item in $store.state.Home.SchoolNavList">
                <div class="panel panel-default">
                  <div class="content panel-body">
                    <img :src="item.icon" class="schoolimg" >
                    <h4><a href="javascript:;">{{item.title}}</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--个人推荐-->
    <div class="row">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="title">
            <h3>个人推荐</h3>
            <p>一些我们觉得不错的学习经验分享</p>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-md-6">
                <ul>
                  <li v-for="item in $store.state.Home.RecommendList">
                    <a>{{item.title}} | <span>{{item.content}}</span></a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 line">
                <ul>
                  <li v-for="item in $store.state.Home.RecommendList">
                    <a>{{item.title}} | <span>{{item.content}}</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--学习资源，博客，论坛-->
    <div class="row">
      <div class="col-md-4"v-for="items in $store.state.Home.KindList" >
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="title">
              <h3>
                <router-link tag="a" :to="items.path">
                  {{items.kind}}
                </router-link>
              </h3>
            </div>
            <div class="content">
              <ul>
                <li v-for="item in items.list">
                  {{item.title}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
        return{}
      },
      methods:{
        getData() {
          this.$axios.get("../static/Data.json",{}).then(response => {
            console.log(response.data);
            this.$store.state.Home.ImgList = response.data.Home.ImgList;
            this.$store.state.Home.HeadlineList = response.data.Home.HeadlineList;
            this.$store.state.Home.SchoolNavList = response.data.Home.SchoolNavList;
            this.$store.state.Home.RecommendList = response.data.Home.RecommendList;
            this.$store.state.Home.KindList = response.data.Home.KindList;
          });
        }
      },
      mounted(){
          this.getData();
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .carousel_img{
    width: 100%;
    height: 100%;
  }
  .schoolimg{
    width: 100%;
    opacity: 0.7;
  }
  .content{
    overflow: hidden;
  }
  .line::after{
    content:"";
    width:2px;
    height: 300px;
    position:absolute;
    top:0;
    left:0;
    background:#787878;
  }
  .content ul,ol{
    list-style: none;
  }
</style>
