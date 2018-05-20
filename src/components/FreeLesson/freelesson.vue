<template>
  <div>
    <div class="top">
      <div class="tags">
        <div class="wrap">
          <div class="tags-item">
            <span class="tag-tit">方向：</span>
            <ul class="tag-con">
              <li  v-for="(item,index) in nav"
                   @click="change(index)"
                   :key="index"
                   :class="{on:active==index}" class="course-nav-item">
                <a>{{item}}</a>
              </li>
            </ul>
          </div>
          <div class="tags-item">
            <span class="tag-tit">分类：</span>
            <ul class="tag-con">
              <li class="course-nav-item">
              <a @click="changetabs(100,active)" :class="{on:on==100}">全部</a>
              </li>
              <li class="course-nav-item"
                  v-for="(tag,index) in tags.web"
                  :key="tag" v-if="active==1||active==0"
                  :class="{on:on==tag}"
                  @click="changetabs(tag,1)">
                <a>{{tag}}</a>
              </li>
              <li class="course-nav-item"
                  v-for="(tag,index) in tags.houtai"
                  :key="tag" v-if="active==2||active==0"
                  :class="{on:on==tag}"
                  @click="changetabs(tag,2)">
                <a >{{tag}}</a>
              </li>
              <li class="course-nav-item"
                  v-for="(tag,index) in tags.app"
                  :key="tag"
                  v-if="active==3||active==0"
                  :class="{on:on==tag}"
                  @click="changetabs(tag,3)">
                <a>{{tag}}</a>
              </li>
              <li class="course-nav-item"
                  v-for="(tag,index) in tags.shujuku"
                  :key="tag"
                  v-if="active==4||active==0"
                  :class="{on:on==tag}"
                  @click="changetabs(tag,4)">
                <a>{{tag}}</a>
              </li>
              <li class="course-nav-item"
                  v-for="(tag,index) in tags.dashuju"
                  :key="tag"
                  v-if="active==5||active==0"
                  :class="{on:on==tag}"
                  @click="changetabs(tag,5)">
                <a>{{tag}}</a>
              </li>
              <li class="course-nav-item"
                  v-for="(tag,index) in tags.test"
                  :key="tag"
                  v-if="active==6||active==0"
                  :class="{on:on==tag}"
                  @click="changetabs(tag,6)">
                <a >{{tag}}</a>
              </li>
              <li class="course-nav-item"
                  v-for="(tag,index) in tags.UI"
                  :key="tag"
                  v-if="active==7||active==0"
                  :class="{on:on==tag}"
                  @click="changetabs(tag,7)">
                <a>{{tag}}</a>
              </li>
            </ul>
          </div>
          <div class="tags-item border_bottom_none">
            <span class="tag-tit">类型：</span>
            <ul class="tag-con">
              <li class="course-nav-item">
                <a>全部</a>
              </li>
              <li class="course-nav-item ">
                <a >基础</a>
              </li>
              <li class="course-nav-item ">
                <a>案例</a>
              </li>
              <li class="course-nav-item ">
                <a>框架</a>
              </li>
              <li class="course-nav-item ">
                <a>工具</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
  </div>
    <div class="container">
      <div class="top">
        <div class="course-nav">
          <div class="course-nav-right">
            <span>最新</span>
            <span>最热</span>
          </div>
          <div class="course-nav-left">
            <div class="level">
              <span>难度：</span>
              <span>全部</span>
              <span>入门</span>
              <span>初级</span>
              <span>中级</span>
              <span>高级</span>
            </div>
            <div class="pages">
             <span class="tool-item tool-pager">
               <span class="pager-num">
                 <b class="pager-cur">1</b>/<em class="pager-total">35</em>
               </span>
               <a><i class="el-icon-arrow-left"></i></a>
               <a><i class="el-icon-arrow-right"></i></a>
             </span>
            </div>
          </div>
        </div>
        <div class="crousewrap">
          <lesson></lesson>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "freelesson",
      data(){
          return{
            nav:['全部','前端开发','后端开发','移动开发','数据库','云计算&大数据','运维&测试','UI设计'],
            tags:{
              web:['HTML/CSS','JavaScript','html5','CSS3','jqery','node.js', 'angular','reactjs','vuejs','WebApp','前端工具'],
              houtai:['ThinkPHP','PHP','Yii','Java','SpringBoot','Python','C++','Go','算法'],
              app:['Android','iOS'],
              shujuku:['MySQL','MongoDB','NoSql'],
              dashuju:['大数据','云计算'],
              test:['中间件','测试','Linux'],
              UI:['动效动画','APPUI设计','设计工具','设计基础'],
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
.top{
  margin: 0 7%;
}
.container{
  background-color: #f8fafc;
}
.wrap{
  padding: 1% 0;
}
.tags-item{
   border-bottom: 1px solid #edf1f2;
   display: flex;
 }
.tag-tit{
  width: 5%;
  font-weight: 700;
  font-size: 0.875rem;
  padding-top: 1%;
}
.tag-con{
    display: flex;
    flex-wrap: wrap;
    flex: 1;
  }
  .course-nav-item{
    margin: 0 0.3% 1.5%;
  }
.course-nav-item a{
    display: block;
    line-height: 24px;
    padding:10px;
    font-size:0.875rem;
    cursor: pointer;
  }
.course-nav-item a:hover{
  color: red;
}
.border_bottom_none{
  border-bottom: none;
}
  .on{
    background: #379FDE;
    color: #fff;
    border-radius: 4px;
  }
  .course-nav{
    display: flex;
    justify-content: space-between;
    padding: 2% 1.5%;
    color: #787d82;
    font-size: 13px;
  }
  .course-nav span{
    cursor: pointer;
  }
  .course-nav-right{
    width: 8%;
    display: flex;
    justify-content: space-between;
  }
  .course-nav-left{
    width:39%;
    display: flex;
    justify-content: space-between;
  }
  .level{
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
</style>
