<template>
<div>
  <div class="header">
    <div class="wrap">
      <a class="bg1">
        <img src="../../../static/image/shizahn2.png"/>
      </a>
      <img src="../../../static/image/shizhan.png" class="bg2"/>
      <div class="search">
          <div class="searchbox">
            <input class="search-input" placeholder="搜索感兴趣的实战课程内容" type="text" autocomplete="off" data-suggest-trigger="true">
            <a  class="search-button" data-search-btn="true">
              <i class="el-icon-search"></i>
            </a>
            <div class="js-sz-searchtags shizhan-searchtags"></div>
            <input type="hidden" data-suggest-history="true">
            <ul class="shizhan-search-result" data-suggest-result="true"></ul>
          </div>
          <div class="search-hot">
            <span>热搜：</span>
            <a>Python</a>
            <a>毕设</a>
            <a>小程序</a>
            <a>React.js</a>
            <a>机器学习</a>
            <a>自动化测试</a>
        </div>
      </div>
  </div>
  </div>
  <div class="practicenav">
    <ul class="navwrap">
      <li
        v-for="(item,index) in nav"
        class="nav-item"
        @click="change(index)"
        :key="index"
        :class="{active:active==index}">
        {{item}}
      </li>
    </ul>
  </div>
  <div class="content">
    <div class="tags">
      <a @click="changetabs(100,0)" :class="{on:on==100}">不限</a>
      <a v-for="(tag,index) in tags.web"
         :key="tag" v-if="active==1||active==0"
         :class="{on:on==tag}"
         @click="changetabs(tag,1)">
        {{tag}}
      </a>
      <a v-for="(tag,index) in tags.houtai"
         :key="tag" v-if="active==2||active==0"
         :class="{on:on==tag}"
         @click="changetabs(tag,2)">
        {{tag}}
      </a>
      <a v-for="(tag,index) in tags.app"
         :key="tag"
         v-if="active==3||active==0"
         :class="{on:on==tag}"
         @click="changetabs(tag,3)">
        {{tag}}
      </a>
      <a v-for="(tag,index) in tags.shujuku"
         :key="tag"
         v-if="active==4||active==0"
         :class="{on:on==tag}"
         @click="changetabs(tag,4)">
        {{tag}}
      </a>
      <a v-for="(tag,index) in tags.dashuju"
         :key="tag"
         v-if="active==5||active==0"
         :class="{on:on==tag}"
         @click="changetabs(tag,5)">
        {{tag}}
      </a>
      <a v-for="(tag,index) in tags.test"
         :key="tag"
         v-if="active==6||active==0"
         :class="{on:on==tag}"
         @click="changetabs(tag,6)">
        {{tag}}
      </a>
      <a v-for="(tag,index) in tags.UI"
         :key="tag"
         v-if="active==7||active==0"
         :class="{on:on==tag}"
         @click="changetabs(tag,7)">
        {{tag}}
      </a>
      <a v-for="(tag,index) in tags.zhineng"
         :key="tag"
         v-if="active==8||active==0"
         :class="{on:on==tag}"
         @click="changetabs(tag,8)">
        {{tag}}
      </a>
    </div>
    <div class="course">
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "practice",
        data(){
          return{
            nav:['全部','前端开发','后端开发','移动开发','数据库','云计算&大数据','运维&测试','UI设计','人工智能'],
            tags:{
              web:['HTML/CSS','JavaScript','html5','CSS3','jqery','node.js', 'angular','reactjs','vuejs','WebApp','前端工具'],
              houtai:['ThinkPHP','PHP','Yii','Java','SpringBoot','Python','C++','Go','算法'],
              app:['Android','iOS'],
              shujuku:['MySQL','MongoDB','NoSql'],
              dashuju:['大数据','云计算'],
              test:['中间件','测试','Linux'],
              UI:['动效动画','APPUI设计','设计工具','设计基础'],
              zhineng:['机器学习','深度学习']
            },
            active:'0',
            on:'100'
          }
      },
      methods:{
          change:function (index) {
            this.active=index;
          },
        changetabs:function (tag,num) {
          this.on=tag;
          this.active=num;
        }
      }
    }
</script>

<style scoped>
.header{
  background:  #379FDE;
}
  .wrap{
    margin: 0 7%;
    display: flex;
    align-items: center;
  }
.bg1{
  width: 18%;
}
.bg2{
  width: 20%;
  margin-left: 2%;
  padding:1% 0;
}
  .bg1 img{
       height: 100%;
       width: 100%;
     }
  .search{
    margin-left: 10%;
    width: 52%;
  }
  .searchbox{
    display: flex;
  }
  .search-input{
    width: 100%;
    padding: 0 1rem;
    font-size: 1rem;
    color: #07111b;
    box-sizing: border-box;
    border-radius: 8px 0 0 8px;
  }
  .search-button{
    background: #F01414;
    width: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    color: #FFFFFF;
    border-radius: 0 8px 8px 0;
  }
  .search-hot{
    display: flex;
    margin-top: 1%;
    font-size: 0.75rem;
    color: #fff;
  }
.search-hot a{
  margin-left: 3%;
}
.content{
  background: #F8FAFC;
}
.practicenav{
  background: #fff;
  padding: 2% 0;
  margin: 0 7%;
}
  .navwrap{
    display: flex;
    padding: 0 1%;
  }
  .nav-item{
    margin-right: 3%;
    cursor: pointer;
    font-weight: bold;
    padding-bottom: 0.5%;
  }
  .tags{
    margin: 0 7%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #D9DDE1;
    padding: 2% 0 1%;
  }
  .tags a{
    padding: 0.5% 0.8%;
    margin-right: 2%;
    margin-bottom: 1.8%;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 16px;
  }
.tags a:hover{
  background:#379FDE;
  opacity: 0.7;
}
  .active{
    border-bottom: 2px solid #F01414;
    color: #F01414;
  }
  .on{
    background: #379FDE;
  }
  .course{

  }
</style>
