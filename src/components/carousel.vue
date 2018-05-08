<template>
  <div>
    <div class="block">
      <br/>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in list" :key="item">
          <h3>{{ item.name }}</h3>
          <img :src="item.image" >  <!--传值图片不显示？？-->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
    export default {
      name: "carousel",
      data(){
         return {
            list:[
              {
                name: '图1',
                desc: 'adv',
                image: '../../static/imgs/1.jpg'
              },
              {
                name: '图2',
                desc: 'adv',
                image: '../../static/imgs/2.jpg'
              },
              {
                name: '图3',
                desc: 'adv',
                image: '../../static/imgs/3.jpg'
              },
              {
                name: '图4',
                desc: 'adv',
                image: '../../static/imgs/4.jpg'
              }
            ]
         }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
