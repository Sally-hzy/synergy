<template>
  <div class="footer">
    <div class="footerwrap">
      <el-row>
          <el-menu  class="myclass" mode="horizontal"  >
            <li  class="myclass1">企业合作</li>
            <li  class="myclass1">人才招聘</li>
            <li  class="myclass1">联系我们</li>
            <li  class="myclass1">讲师招募</li>
            <li  class="myclass1">常见问题</li>
            <li  class="myclass1">意见反馈</li>
            <li  class="myclass1">友情链接</li>
          </el-menu>
      </el-row>
      <el-row class="copyright">
        <p>© 2018 imooc.com  京ICP备 12003892号-11</p>
      </el-row>
    </div>
    <div class="footerlink">

    </div>
  </div>
</template>

<script>
export default {
  name:"footer-nav",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  padding: 1.6% 7%;
  background: #f8fafc;
  color: #99a1a6;
}
.myclass1{
  margin-right: 1.9%;
  float: left;
  cursor: pointer;
  font-size: 0.875rem;
}
.myclass1:hover{
  color:#303133;
}
  .myclass{
    background: #f8fafc;
    border: none;
  }
  .copyright{
    text-align: left;
    margin-top: 1%;
    font-size: 0.75rem;
  }
</style>

