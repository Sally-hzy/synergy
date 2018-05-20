<template>
<div class="note">
  <div class="left">
    <ul class="nav">
      <li v-for="(item,index) in navs" :key="item">·&nbsp;{{item}}</li>
    </ul>
  </div>
  <div class="center">
    <div class="top">
      <div class="top1">
        <a>
         <img src="../../../static/image/noteimg1.jpg"/>
          <div class="bannerDescription">mpvue: vuejs和小程序碰撞出来的火花</div>
        </a>
      </div>
      <div class="top2">
         <a>
          <img src="../../../static/image/noteimg1.jpg"/>
          <div class="bannerDescription1"><span>input的一些问题解决方法</span></div>
        </a>
        <a>
          <img src="../../../static/image/noteimg1.jpg"/>
          <div class="bannerDescription1"><span>如何写出HR青睐的简历</span></div>
        </a>
      </div>
    </div>
    <div class="list">
    </div>
  </div>
  <div class="right">
    <div class="public">
      <h3>让世界感知你的存在</h3>
      <div class="btn">
        <a class="aleft">写文章</a>
        <span class="mid-line"></span>
        <a class="aright">发动态</a>
      </div>
    </div>
    <div class="hot"></div>
    <div class="author"></div>
  </div>
</div>
</template>

<script>
    export default {
        name: "note",
      data(){
          return{
            navs:['推荐','资讯','动态','关注','最新文章','区块链','人工智能','云计算/大数据','前端开发','后端开发',
            '移动互联','工具资源','职场生活','幽默段子','其它']
          }
      }
    }
</script>

<style scoped>
.note{
  margin: 2%  7% 0;
  display: flex;
  justify-content: space-between;
}
  .left{
    flex: 1;
    text-align: justify;
    margin-right: 2%;
  }
  .nav{
    display: flex;
    flex-direction: column;
  }
  .nav li{
    margin-bottom:1.5%;
    padding: 8% 0;
    font-size: 0.875rem;
    cursor: pointer;
  }
.nav li:hover{
  color: red;
}
  .active{
    background: red;
    border-radius: 8px;
  }
  .center{
    flex: 6;
    margin-right: 3%;
  }
  .top{
    display: flex;
    justify-content: space-between;
  }
  .top img{
    height: 100%;
    width: 100%;
  }
  .top1{
    flex: 3;
    position: relative;
    margin-right: 1%;
  }
  .top2{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top2 a{
    position: relative;
    flex: 1;
  }
  .bannerDescription{
    text-align: justify;
    padding:4% 0;
    width: 100%;
    background-image: linear-gradient(-180deg,rgba(28,31,33,0) 0,#1c1f21 100%);
    font-weight: 700;
    color: #FFF;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .bannerDescription1{
    padding:6% 0;
    width: 100%;
    background-image: linear-gradient(-180deg,rgba(28,31,33,0) 0,#1c1f21 100%);
    font-weight: 700;
    font-size: 0.75rem;
    color: #FFF;
    position: absolute;
    bottom: 1%;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .right{
    flex: 3;
  }
  .public{
    background: url("../../../static/image/wenda_title_bg.png");
    padding: 8% 0;
  }
.public h3{
  margin-bottom: 3%;
}
  .btn{
    background: #f53d3d;
    border-radius: 24px;
    color: #fff;
    margin: 0 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .mid-line{
    background-color: rgba(255,255,255,.4);
    /*margin-top: 16px;*/
    display: inline-block;
    color: #fff;
    width: 2px;
    height: 16px;
  }
  .btn a{
    width: 50%;
    height: 100%;
    border-radius: 24px;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    padding: 5% 5%;
    transition: all .3s;
  }
  .aright:hover{
    background: #f20d0d;
    border-radius: 0 24px 24px 0;
  }
  .aleft:hover{
    background: #f20d0d;
    border-radius:24px 0  0 24px ;
  }
</style>
