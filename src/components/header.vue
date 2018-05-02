<template>
  <div class="header">

    <div >{{myPageType}}</div>

  </div>
</template>

<script>
  require('../css/header.css');
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    props: ['myPage'],
    computed: {
      myPageType:function(){
        let name;
        switch(this.myPage){
          case 'blog': name='我的博客';break;
          case 'collection': name='我的收藏';break;
          case 'data': name='我的资料';break;
          case 'relation': name='我的关系';break;
          default:name='我的博客';break;
        }
        return name;
      }
    }

  }


</script>

<style scoped>

</style>
