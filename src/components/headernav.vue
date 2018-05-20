<template>
  <div class="headernav">
    <div class="headernavwrap">
      <div class="logo"><router-link to="/">慕课网</router-link></div>
      <div  class="nav">
        <span><router-link to="/FreeLesson/freelesson">免费课程</router-link></span>
        <span><router-link to="/CareerPath/careerpath">职业路径</router-link></span>
        <span><router-link to="/practice/practice">实战</router-link></span>
        <span><router-link to="/question/que">猿问</router-link></span>
        <span><router-link to="/note/note">手记</router-link></span>
      </div>
      <div class="input">
        <input  placeholder="请输入内容"  type="text"/>
      </div>
      <div class="more">
        <span>APP下载</span>
        <span>购物车</span>
        <span>
        <i class="el-icon-bell"></i>
      </span>
        <span>头像</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          active: '0'
        }
      }
  }
</script>

<style scoped>
.headernav{
  box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
  font-size: 1rem;
  padding: 0 2%;
}
.headernavwrap{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
router-link-active,active{
  text-decoration:none;
}
input{
  border-left: none;
  border-top: none;
  border-right: none;
  width: 100%;
}
.input{
  padding:1% 2%;
  width: 18%;
}
.logo{
  font-size: 1.5rem;
  cursor: pointer;
  width: 15%;
}
  .nav{
    display: flex;
    margin-left:3%;
    width: 40%;
  }
  .nav span{
    margin-right: 5%;
    padding: 1% 2%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .more{
    display: flex;
    margin-left:10%;
    width: 20%;
    align-items: center;
    justify-content: space-around;
  }
  .more span{
    margin-right: 5%;
  }
  .active{
    color:  #379FDE;
  }
</style>
