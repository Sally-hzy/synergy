<template>
  <div class="container">
    <div class="row main" v-show="$store.state.Resource.ResouerceState">
      <!--最新资源-->
      <div class="col-md-8">
        <div class="panel panel-default">
          <div class="panel-body content">
            <div class="title">
              <h3>最新资源|LatestResource</h3>
              <p>这里有你最想要的最新最全的资源</p>
            </div>
            <div class="row">
              <div class="col-md-6" v-for="item in $store.state.Resource.ResourceList">
                <div class="panel panel-default">
                  <div class="panel-body resource">
                    <div class="row">
                      <div class="col-md-5">
                        <img :src="item.img">
                      </div>
                      <div class="col-md-7">
                        <div class="title">
                          <h4><a href="javascript:;" @click="$store.commit('EnterResource')">{{item.title}}</a></h4>
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
              <li v-for="item in $store.state.Resource.LabelList">
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
              <li v-for="item in $store.state.Resource.DownloadList">
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
    <v-resource v-show="!$store.state.Resource.ResouerceState"></v-resource>
  </div>
</template>

<script>
    export default {
        name: "StudyResource",
      data(){
        return {

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
