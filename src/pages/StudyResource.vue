<template>
  <div class="container">
    <div class="row main" v-show="$store.state.Resource.ResouerceState">
      <!--最新资源-->
      <div class="col-md-8">
        <div class="panel panel-default">
          <div class="panel-body content">
            <div class="title">
              <h3>最新视频|LatestVideo</h3>
              <p>这里有你最想要的最新最全的视频资源</p>
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
                          <h4><a href="javascript:;" @click="$store.commit('EnterResource',item.id)">{{item.title}}</a></h4>
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
        <div class="panel panel-default">
          <div class="panel-body content">
            <div class="title">
              <h3>最新文件|LatestFile</h3>
              <p>这里有你最想要的最新最全的文件资源</p>
            </div>
            <div class="row file">
              <div class="col-md-4" v-for="items in $store.state.Resource.FileList">
                <div class="row">
                  <div class="col-md-12">
                    <h4>{{items.kind}}</h4>
                  </div>
                  <div class="col-md-6">
                    <img :src="items.img">
                  </div>
                  <div class="col-md-6">
                    <span>{{items.description}}</span>
                  </div>
                  <div class="col-md-12">
                    <p></p>
                  </div>
                  <div class="col-md-12">
                    <ul>
                      <li v-for="a in items.filelist">
                        <i v-bind:class="a.type"></i>
                        <a href="javascript:;">{{a.title}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div><!--写在这里-->
          </div>
        </div>
      </div>
      <!--标签以及下载排行榜-->
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body labels">
            <div class="title">
              <!--怎么做到点击标签按钮绑定事件然后出发左侧组件更新-->
              <h3>热门标签|HotLabels</h3>
              <hr>
            </div>
            <ul>
              <li v-for="item in $store.state.Resource.LabelList">
                <button type="text" class="btn btn-default" >
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
                  <div class="col-md-3">
                    <img :src="item.img"/>
                  </div>
                  <div class="col-md-9">
                    <a href="javascript:;" @click="$store.commit('EnterResource')">{{item.title}}</a>
                  </div>
                </div>
                <br>
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
      },
      methods:{
        getData() {
          this.$axios.get("../static/Data.json",{}).then(response => {
            console.log(response.data);
            this.$store.state.Resource.ResourceList = response.data.StudyResource.ResourceList;
            this.$store.state.Resource.LabelList = response.data.StudyResource.LabelList;
            this.$store.state.Resource.DownloadList = response.data.StudyResource.DownloadList;
            this.$store.state.Resource.FileList = response.data.StudyResource.FileList;
          });
        }
      },
      mounted(){
        this.getData();
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
  .labels li{
    display: inline-block;
  }
  .file img{
    width: 120px;
    height: 80px;
  }
  .file h4{
    text-align: left;
    font-weight:600;
  }
  .file li{
    margin-left: -40px;
  }
  .file a{
    color: #363636;
  }
</style>
