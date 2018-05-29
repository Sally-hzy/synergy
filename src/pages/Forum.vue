<template>
  <div class="container">
    <div class="row">
      <!--左边用户部分-->
      <div class="col-md-3">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="user">
                      <img :src="$store.state.Forum.User.img">
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h5><a href="javascript:;">{{$store.state.Forum.User.name}}</a></h5>
                    <span>{{$store.state.Forum.User.age}}</span>
                  </div>
                </div>
                <hr>
                <p>{{$store.state.Forum.User.description}}</p>
                <div class="content">
                  <ul class="tag">
                    <li><button type="text" class="btn btn-default">妹子</button></li>
                    <li><button type="text" class="btn btn-default">大神</button></li>
                    <li><button type="text" class="btn btn-default">死肥宅</button></li>
                    <li><button type="text" class="btn btn-default">臭猪</button></li>
                    <li><button type="text" class="btn btn-default">智障青年</button></li>

                  </ul>
                </div>
              </div>
            </div>
            <hr>
        <div class="list-group">
          <li class="list-group-item" v-for="item in 6">
            <a>{{item}}</a>
          </li>
        </div>
      </div>
      <!--内容部分-->
      <div class="col-md-9">
        <div class="panel-default panel">
          <div class="panel-body">
            <div class="title">
              <h3>论坛</h3>
              <p>这里有你想要讨论的...</p>
            </div>
            <div class="content">
              <ul class="tag">
                <li v-for="item in $store.state.Forum.KindList">
                  <button type="text" class="btn btn-default">{{item.title}}</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-10">
                <div class="panel-default panel" v-for="item in $store.state.Forum.TipList">
                  <div class="panel-body" v-show="!$store.state.Forum.TipState">
                    <div class="title">
                      <h4><a href="javascript:;" @click="$store.commit('EnterTip')">{{item.title}}</a></h4>
                      <span>{{item.user}}</span>
                      <p>{{item.content}}</p>
                    </div>
                  </div>
                  <div class="panel-body" v-show="$store.state.Forum.TipState">
                    <div>话题内部内容</div>
                    <button class="btn btn-danger" @click="$store.commit('ReturnTip')">返回</button>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="panel panel-default">
                  <div class="panel-body">
                    <div class="title">
                      <h4>小标题1</h4>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-body">
                    <div class="title">
                      <h4>小标题1</h4>
                    </div>
                  </div>
                </div>
                <div class="list-group">
                  <li class="list-group-item headlist">论坛精选</li>
                  <li class="list-group-item" v-for="item in 8">{{item}}</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Forum",
      data(){
          return{

          }
      },
      methods:{
        getData() {
          this.$axios.get("../static/Data.json",{}).then(response => {
            console.log(response.data);
            this.$store.state.Forum.User = response.data.User;
            this.$store.state.Forum.KindList = response.data.Forum.KindList;
            this.$store.state.Forum.TipList = response.data.Forum.TipList;
          });
        }
      },
      created(){
          this.getData();
      }
    }
</script>

<style scoped>
  .content .tag li{
    display: inline-block;
  }
  .user img{
    width: 45px;
    height: 45px;
  }
</style>
