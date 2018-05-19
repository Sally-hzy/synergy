<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="title">
              <h3>关于我们</h3>
              <p>描述性文字</p>
            </div>
            <div class="content">
              <p>描述内容</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>
  .title h3,p{
    text-align: center;
  }
  .title h3{
    color: #878787;
  }
  .title h3:hover{
    color: #111111;
  }
  .content{
    height: 600px;
  }
</style>
