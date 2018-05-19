<template>
  <div class="container">
    <div class="row">
      <!--最新资源-->
      <div class="col-md-8">
        <div class="panel panel-default">
          <div class="panel-body content">
            <div class="title">
              <h3>最新资源|LatestResource</h3>
              <p>这里有你最想要的最新最全的资源</p>
            </div>
            <div class="row">
              <div class="col-md-6" v-for="item in ResourceList">
                <div class="panel panel-default">
                  <div class="panel-body resource">
                    <div class="row">
                      <div class="col-md-5">
                        <img :src="item.img">
                      </div>
                      <div class="col-md-7">
                        <div class="title">
                          <h4>{{item.title}}</h4>
                          <p>{{item.description}}</p>
                          <ul>
                            <li class="pull-left">{{item.humennum}}</li>
                            <li class="pull-right">{{item.price}}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--标签以及下载排行榜-->
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body labels">
            <div class="title">
              <h3>热门标签|HotLabels</h3>
              <hr>
            </div>
            <ul>
              <li v-for="item in LabelList">
                <button type="text" class="btn btn-default">
                  {{item.label}}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-body download">
            <div class="title">
              <h3>下载排行榜|Top10</h3>
              <hr>
            </div>
            <ul>
              <li v-for="item in DownloadList">
                <div class="row">
                  <div class="col-md-4">
                    <img :src="item.img"/>
                  </div>
                  <div class="col-md-8">
                    <span>{{item.title}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StudyResource",
      data(){
        return {
          LabelList:[
            {
              label:'CET4'
            },{
              label:'CET6'
            },{
              label:'课后习题解析'
            },{
              label:'法语'
            },{
              label:'英语'
            },{
              label:'快速学习'
            },{
              label:'C语言'
            }
          ],
          DownloadList:[
            {
              title:'法语教程',
              img: 'xxx'
            },{
              title:'法语教程',
              img: 'xxx'
            },{
              title:'法语教程',
              img: 'xxx'
            },{
              title:'法语教程',
              img: 'xxx'
            },{
              title:'法语教程',
              img: 'xxx'
            },{
              title:'法语教程',
              img: 'xxx'
            }
          ],
          ResourceList:[
            {
              img:'aa',
              title:'某资源1',
              description:'描述',
              humennum:'当前人数',
              price:'免费'
            },{
              img:'aa',
              title:'某资源2',
              description:'描述',
              humennum:'当前人数',
              price:'免费'
            },{
              img:'aa',
              title:'某资源3',
              description:'描述',
              humennum:'当前人数',
              price:'免费'
            },{
              img:'aa',
              title:'某资源4',
              description:'描述',
              humennum:'当前人数',
              price:'免费'
            },{
              img:'aa',
              title:'某资源5',
              description:'描述',
              humennum:'当前人数',
              price:'免费'
            },{
              img:'aa',
              title:'某资源6',
              description:'描述',
              humennum:'当前人数',
              price:'免费'
            },{
              img:'aa',
              title:'某资源7',
              description:'描述',
              humennum:'当前人数',
              price:'免费'
            },{
              img:'aa',
              title:'某资源8',
              description:'描述',
              humennum:'当前人数',
              price:'免费'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .resource img{
    height: 120px;
    width: 120px;
  }
  .download li{
    display: block;
  }
  .download img{
    width: 60px;
    height: 48px;
  }
  .title h3,p{
    text-align: center;
    color: #787878;
  }
  .title h3:hover{
    color: #111111;
  }
  ul,ol{
    list-style: none;
  }
  .labels li{
    display: inline-block;
  }
</style>
