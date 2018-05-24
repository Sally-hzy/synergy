<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="title">
            <h3>{{$store.state.Resource.Resource.title}}</h3><!--现在遇见的主要问题是点击资源页面里面的资源调用过来怎么获取调用的是数组中的哪一个资源然后就单独显示哪一个-->
          </div>
          <div class="content">
            <p>这是一段简洁的描述</p>
          </div>
          <div class="footer">
            <button class="btn btn-warning" @click="$store.commit('ReturnResource')">返回</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Resource"
    }
</script>

<style scoped>
  @import "../../../static/css/theme.css";
</style>
