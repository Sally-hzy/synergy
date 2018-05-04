<template>
  <div>
    <advtop></advtop>
    <div class="hello" style="margin-left: 20px;margin-right: 20px;text-align: left;">
      <el-card class="box-card" shadow="hover" >
        <div  class="text item" style="text-align: right">
          <el-popover
            placement="top"
            width="60"
            v-model="visible2">
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">帮上头条</el-button>
              <el-button type="danger" size="mini" @click="visible2 = false">举报</el-button>
            </div>
            <span slot="reference"><i class="el-icon-arrow-down"></i></span>
          </el-popover>
        </div>
        <div></div>
        <div style="padding: 14px;">
          <div class="bottom clearfix">
            <time class="time" v-html="currentDate"></time>
            <div style="text-align: right">
              <el-badge :value="12" class="itemm">
                <el-button size="small">评论</el-button>
              </el-badge>
              <el-badge :value="3" class="itemm">
                <el-button size="small">回复</el-button>
              </el-badge>
            </div>
          </div>
        </div>
      </el-card>
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
  }
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
</style>
