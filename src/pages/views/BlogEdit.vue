<template>
  <!--写博客的页面,bug,调用vue-simplemde样式出现bug，问题待查-->
  <div>
    <div class="panel panel-default">
      <div class="panel">
        <div class="form-group">
          <textarea rows="20"></textarea>
        </div>
        <div class="skill">
          <button class="btn btn-success">完成</button>
          <button class="btn btn-warning" @click="$store.commit('ReturnEdit')">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "BlogEdit",
    data(){
      return {
        mocus:'',
        path:''
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  textarea{
    width: 100%;
  }
</style>
