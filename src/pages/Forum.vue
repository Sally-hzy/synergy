<template>
  <div class="container">
    <div class="row">
      <!--左边用户部分-->
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel">
            <div class="user">
              <div class="row">
                <div class="col-md-5">
                  <img src="#">
                </div>
                <div class="col-md-7">
                  <h4>用户名</h4>
                  <span>21</span>
                </div>
              </div>
            </div>
            <hr>
            <div class="content">
              <ul class="tag">
                <li v-for="item in 4">
                  <button type="text" class="btn btn-default">{{item}}</button></li>
              </ul>
            </div>
          </div>
        </div>
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
                <li v-for="item in 8">
                  <button type="text" class="btn btn-default">{{item}}</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-10">
                <div class="panel-default panel">
                  <div class="panel-body">
                    <div class="title">
                      <h4>讨论题目</h4>
                      <span>作者：时间</span>
                      <label>描述内容xxxxxxxxxxxxxxxxxxxxxxxxxxx</label>
                    </div>
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
                  <li class="list-group-item active">论坛精选</li>
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
        name: "Forum"
    }
</script>

<style scoped>
  ul.ol{
    list-style: none;
  }
  .title h3,p{
    text-align: center;
  }
  .title h3{
    color: #787878;
  }
  .title h3:hover{
    color: #111111;
  }
  .content .tag li{
    display: inline-block;
  }
</style>
