<template>
  <div class="elcon1">
    <el-container>
      <el-aside style="width: 20%">
        <ul class="navleft">
          <li class="nav"><span>前端开发</span><i class="el-icon-arrow-right go"></i></li>
          <li class="nav">后端开发<i class="el-icon-arrow-right go"></i></li>
          <li class="nav">移动开发<i class="el-icon-arrow-right go"></i></li>
          <li class="nav">数据库<i class="el-icon-arrow-right go"></i></li>
          <li class="nav">云计算&大数据<i class="el-icon-arrow-right go"></i></li>
          <li class="nav">运维&测试<i class="el-icon-arrow-right go"></i></li>
          <li class="nav">UI设计<i class="el-icon-arrow-right go"></i></li>
        </ul>
      </el-aside>
      <el-container direction="vertical" style="width: 80%">
        <el-main style="height: 70%">
          <el-carousel :interval="5000" arrow="always" height="100%">
            <el-carousel-item v-for="item in 4" :key="item">
            </el-carousel-item>
          </el-carousel>
        </el-main>
        <el-footer style="height: 30%">
          <div class="wrap">
            <a class="item">
              <i class="i-web"></i>
              <p class="tit">Web前端攻城狮</p>
              <p class="desc">互联网时代最火爆的技术</p>
            </a>
            <a class="item">
              <i class="i-java"></i>
              <p class="tit">Java攻城狮</p>
              <p class="desc">综合就业排名第一</p>
            </a>
            <a class="item">
              <i class="i-android"></i>
              <p class="tit">Android攻城狮</p>
              <p class="desc">移动设备市场份额第一</p>
            </a>
            <a class="item">
              <i class="i-php"></i>
              <p class="tit">PHP攻城狮</p>
              <p class="desc">世界上最好的语言：）</p>
            </a>
            <a class="item">
              <i class="i-ios"></i>
              <p class="tit">iOS攻城狮</p>
              <p class="desc">可能是全球最好用的系统</p>
            </a>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .elcon1{
    box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
    margin: 0 7%;
    border-radius: 8px;
  }
  .navleft{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #379FDE;
    padding: 0 7%;
    height: 100%;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }
  .el-main,.el-footer{
    padding: 0;
    margin: 0;
  }
  .el-container {
    width: 100%;
    height: auto;
  }
  .el-carousel{
    height: 100%;
  }
  .el-aside{
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
  .wrap{
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 100%;
  }
  .i-web{
    background-position: center 0;
  }
  .i-java{
    background-position: center -72px;
  }
  .i-android{
    background-position: center -108px;
  }
  .i-php{
    background-position: center -36px;
  }
  .i-ios{
    background-position: center -144px;
  }
  .wrap i{
    display: inline-block;
    width: 2.25rem;
    height:2.25rem;
    background-image: url(/static/image/path_new.png);
    background-size: 100%;
    margin-top: 8%;
  }
  .item{
    flex: 1;
    height: 100%;
    display: block;
    cursor: pointer;
    margin-top: 0.5%;
    transition: all 0.5s;
  }
  .item:hover{
margin-top: 0;
  }
   .tit{
    font-size: 14px;
    color: #07111B;
  }
  .desc{
    font-size: 0.75rem;
    color: #93999F;
    line-height: 16px;
    margin-top:2px;
    font-weight: 400;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .nav{
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 10% 0 10% 10%;
  }
  .nav:hover{
    background: rgba(243, 245, 247, 0.2);
  }
  .go{
    line-height: inherit;
  }
</style>
