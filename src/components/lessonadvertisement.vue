<template>
<div class="adv">
  <div class="wrap" v-for="adv in advs" v-bind:style="{backgroundImage:'url('+adv.img+')',backgroundsize:'100%'}">
    <a>
      <h3>{{adv.title}}</h3>
      <p>{{adv.content}}</p>
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "lessonadvertisment",
        data(){
          return{
            advs:[{
              title:'从零开始系统学习大数据，新手教程全攻略',
              content:'快速入门Hadoop，高效开发Spark项目实战，玩转大数据',
              img:'../static/image/adv-bg-img.jpg'
            },{
              title:'从零开始系统学习大数据，新手教程全攻略',
              content:'快速入门Hadoop，高效开发Spark项目实战，玩转大数据',
              img:'../static/image/adv-bg-img.jpg'
            }]
          }
        }
    }
</script>

<style scoped>
  .adv{
    display: flex;
    justify-content: space-between;
  }
  .wrap{
    margin-bottom: 36px;
    border-radius: 8px;
    transition: all .3s;
    text-align: center;
    width: 49%;
  }
  a{
    background: rgba(7,17,27,.4);
    border-radius: 8px;
    display: block;
    overflow: hidden;
    padding: 30px 0;
  }
   h3{
     font-size: 22px;
     font-weight: 700;
     color: #FFF;
     letter-spacing: 2px;
     line-height: 28px;
     text-shadow: 0 2px 2px rgba(7,17,27,.4);
   }
  .adv p{
    font-size: 13px;
    color: #FFF;
    line-height: 16px;
    text-shadow: 0 2px 2px rgba(7,17,27,.4);
    margin-top: 4px;
  }
</style>
