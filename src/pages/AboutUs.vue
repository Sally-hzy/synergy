<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="title">
              <h3>关于我们</h3>
              <p v-for="item in notes">{{item.p}}</p>
            </div>
            <div class="content">
              <p>描述内容</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AboutUs",
      data(){
          return{
            notes:[]
          }
      },
      methods:{
        getData() {
          this.$axios.get("../static/Data.json",{}).then(response => {
            console.log(response.data);
            this.notes= response.data.AboutUs.Notes;
          });
        }
      },created(){
          this.getData();
      }
    }
</script>

<style scoped>
  .content{
    height: 400px;
  }
  p{
    text-align: left;
  }
</style>
