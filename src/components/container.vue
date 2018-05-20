<template>
    <div>
      <div class="main1 maintop">
        <swiper-slide></swiper-slide>
      </div>
      <div class="main1">
        <home-mid title="实 战 推 荐"></home-mid>
        <div class="lessonwrap">
          <lesson></lesson>
        </div>
      </div>
      <div class="main2">
        <home-mid title="新 上 好 课"></home-mid>
        <div class="lessonwrap">
          <lesson></lesson>
        </div>
      </div>
      <div class="main1">
        <home-mid title="新 手 入 门"></home-mid>
        <div class="lessonwrap">
          <lesson-adv></lesson-adv>
          <lesson></lesson>
        </div>
      </div>
      <div class="main2">
        <home-mid title="技 能 提 升"></home-mid>
        <div class="lessonwrap">
          <lesson-adv></lesson-adv>
          <lesson></lesson>
        </div>
      </div>
      <div class="main1">
        <home-mid title="前 沿 技 术"></home-mid>
        <div class="lessonwrap">
          <lesson-adv></lesson-adv>
          <lesson></lesson>
        </div>
      </div>
      <div class="main2">
        <home-mid title="精 彩 手 记 及 猿 问"></home-mid>
        <share></share>
      </div>
      <div class="main2 bg1">
        <home-mid title="慕 课 精 英 讲 师"></home-mid>
        <teacher></teacher>
      </div>
      <div class="main1">
        <home-mid title="吊 炸 天 全 明 星"></home-mid>
      </div>
    </div>
</template>

<script>
  var homemid={
    props:['title'],
    template:"<div class=\"midbox\"><h3><i class=\"el-icon-star-off\"></i> <em>{{  title }}</em> <i class=\"el-icon-star-off\"></i></h3></div>"
  }
    export default {
        name: "container",
        components:{
          homeMid:homemid
      }
    }
</script>

<style scoped>
  .main1{
    background-color: #fff !important;
    box-shadow: 0 2px 8px 0 rgba(7,17,27,.06);
  }
  .main2{
    background-color: #f8fafc;
    box-shadow: 0 2px 4px 0 rgba(7,17,27,.06);
  }
  .main1 .el-menu-item{
    font-size: 1rem;
  }
  .maintop{
    padding-top: 2%;
  }
  .lessonwrap{
    margin: 2% 7% 0 7%;
  }
  .bg1{
    background:url("../../static/image/teacherbg.jpg");
  }

  .midbox{
    padding-top: 2.8%;
    margin: 0 7%;
    color: #4D555D;
  }
</style>
