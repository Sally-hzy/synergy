<template>
<div class="wenda">
  <div class="left">
    <div class="left-top">
      <span class="tit">程序员自己的问答社区</span>
      <a class="button">我要提问</a>
    </div>
    <div class="nav">
      <router-link v-for="item in navs" :to="item.path">{{ item.tit }}</router-link>
      <div class="switch-box">
        <span>只显示关注内容</span>
        <div class="switch js-switch">
          <div class="fill">
            <div class="outer"></div>
          </div>
          <div class="inner"></div>
        </div>
      </div>
    </div>
    <div class="topic">
      <a class="button1">本期话题<i class="el-icon-arrow-right go"></i></a>
      <p class="content">{{topic}}</p>
    </div>
    <div class="list">
      <router-view></router-view>
    </div>
  </div>
  <div class="right">
    <div class="userinfo">

    </div>
    <div class="guanzhu"></div>
    <div>这里是广告</div>
    <div class="hotque"></div>
    <div class="answer">
      <h3>
        <span>回答雷锋榜</span>
        <span>今日</span>
        <span>一周</span>
      </h3>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "que",
      data(){
          return{
            navs:[{
              tit:'推荐',
              path:'/question/que',
            },
            {
              tit:'最新',
              path:'/question/que/New',
            },
            {
              tit:'等待回答',
              path:'/question/que/noanswer',
            },
            {
              tit:'话题',
              path:'/question/que/topic',
            }],
            topic:'【内推第2波】打工奋斗7万落京户VS自主创业牧马城市，如何抉择？'
         }
      }
    }
</script>

<style scoped>
.wenda{
  display: flex;
  margin: 3% 7% 0;
}
  .left{
    display: flex;
    flex-direction: column;
    flex: 2.5;
    margin-right: 5%;
  }
  .left-top{
    background: url("../../../static/image/wenda_title_bg.png");
    padding: 5% 4%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1%;
    align-items: center;
  }
  .tit{
    color: #07111B;
    letter-spacing: 3px;
    font-size: 1.5em;
  }
  .button{
    padding: 1.3% 4%;
    /*不加这个width会导致刷新后这个元素的padding依据父盒子的宽高*/
    width: 12%;
    background: #F01414;
    border-radius:4px;
    color: #fff;
    cursor: pointer;
  }
  .nav{
    padding: 2%;
    color: #93999F;
    border-bottom: 1px solid #D9DDE1;
    display: flex;
    justify-content: space-between;
  }
  .nav a:hover{
    color: #303133;
    cursor: pointer;
  }
  .switch-box{
    margin-left: 20%;
    width: 30%;
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
  }
  .switch{
    cursor: pointer;
    margin-left:5%;
    position: relative;
    width: 18%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
  }
  .fill{
    background: rgba(147,153,159,.4);
    border-radius: 3px;
    margin-top: 7px;
    height: 6px;
    overflow: hidden;
  }
  .fill .outer{
    margin-left: -20px;
    width: 40px;
    height: 6px;
    border-radius: 3px;
    background: #fcd0d0;
  }
  .switch-box .switch .inner {
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 20px;
  border: 2px solid #93999F;
  width: 20px;
  background: #fff;
  border-radius: 100%;
}
  .topic{
    display: flex;
    padding: 3% 2%;
    background: rgba(0,140,200,.06);
    align-items: center;
    margin-top: 1.5%;
  }
  .button1{
    width: 10%;
    padding: 0.5% 2%;
    color: #FFF;
    background: rgba(0,140,200,.6);
    border-radius: 12px;
    font-size: 0.75rem;
    margin-right: 2%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .content{
    color: #008CC8;
  }
  .list{
    min-height: 500px;
  }
.right{
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
