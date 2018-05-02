<template>
  <div>
    <div>
      <p>{{data}}</p>
      <p>{{reversedMessage}}</p>

    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          data:'collection'
        }
      },
      computed:{
        reversedMessage: function () {
          return this.data.split('').reverse().join('')
        }

      }
    }
</script>

<style scoped>

</style>
