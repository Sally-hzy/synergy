<template>
  <div class="container">
    <!--学校轮播图，介绍学校-->
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--最新头条加上高校导航-->
    <div class="row">
      <div class="col-md-3">
        <div class="LaterstHeadline">
          <div class="list-group">
            <li class="list-group-item active">最新头条</li>
            <li class="list-group-item" v-for="item in HeadlineList">
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
              <p>这里有提供很多别的学校的导航以及你可能会喜欢的链接</p>
            </div>
            <div class="row">
              <div class="col-md-4" v-for="item in SchoolNavList">
                <div class="panel panel-default">
                  <div class="content panel-body">
                    <i >{{item.icon}}</i>
                    <h4><a href="#">{{item.title}}</a></h4>
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
                  <li v-for="item in RecommendList">
                    <label>{{item.title}} | <span>{{item.content}}</span></label>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 line">
                <ul>
                  <li v-for="item in RecommendList">
                    <label>{{item.title}} | <span>{{item.content}}</span></label>
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
      <div class="col-md-4"v-for="items in KindList" >
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
        return{
          HeadlineList:[
            {
              title:'胡总惊险逃生',
              count:'99'
            },
            {
              title:'胡总惊险逃生',
              count:'99'
            },
            {
              title:'胡总惊险逃生',
              count:'99'
            },
            {
              title:'胡总惊险逃生',
              count:'99'
            },
            {
              title:'胡总惊险逃生',
              count:'99'
            }
          ],
          SchoolNavList:[
            {
              title:'岳阳学院',
              icon:''
            },{
              title:'岳阳理工学院',
              icon:''
            },{
              title:'韶关大学',
              icon:''
            },{
              title:'湘潭大学',
              icon:''
            },{
              title:'南京理工大学',
              icon:''
            },{
              title:'南京财经大学',
              icon:''
            },
          ],
          RecommendList:[
            {
              title:'大数据实现',
              content:'mapreduce,hadoop,hive'
            },{
              title:'Java',
              content:'spring mvc hibernate struts'
            },{
              title:'Cpp',
              content:'Qt'
            },{
              title:'Vue',
              content:'router,vuex'
            },{
              title:'html,css,js',
              content:'mxxxxxxxxx'
            },{
              title:'xxxxxxxxxx',
              content:'xxxxxxxxxxxxxxx'
            },{
              title:'aaaaaaaaaaa',
              content:'mssssssssssssssshive'
            },{
              title:'asasa现',
              content:'maxsxsxshive'
            }
          ],
          KindList:[
            {
              kind:'最新资源|LaterstResource',
              path:'/StudyResource',
              list:[
                {
                  title:'手把手教你一星期玩转PS',
                  content:'pspspsp'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                }
              ]
            },
            {
              kind:'博客|Blog',
              path:'/Blog',
              list:[
                {
                  title:'手把手教你一星期玩转PS',
                  content:'pspspsp'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                }
              ]
            },
            {
              kind:'论坛|Forum',
              path:'/Forum',
              list:[
                {
                  title:'手把手教你一星期玩转PS',
                  content:'pspspsp'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                },
                {
                  title:'法语教学视频',
                  content:'dajskdhkals'
                }
              ]
            }
          ]
        }
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

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .panel-body h3,p{
    text-align: center;
    color: #787878;
  }
  .panel-body h3:hover{
    color: #111111;
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
  .content span{
    color: #787878;
  }
</style>
