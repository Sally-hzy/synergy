<template>
  <div>
    <div>
      <p>{{data}}</p>
      <p>{{num}}</p>
      <a class="btn" >点击</a>

    </div>
  </div>
</template>

<script>
    require('../css/blog.css');
    export default {
      name:'blog',
      data(){
        return{
          data:'blog',
          num:1
        }
      },
      methods:{


      }
    }
</script>

<style scoped>

</style>
