<template>
  <div>
    <advtop></advtop>
    <div class="blog">
      <blog></blog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      visible2: false,
      currentDate: new Date()
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
}
.itemm {
  margin-top: 10px;
  margin-right: 40px;
}

  .blog{
    margin:0px 20px;
  }
</style>
