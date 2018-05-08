<template>
  <div>
    <el-table :data="bloglist" style="width: 100%">
      <el-table-column prop="readnum" width="180">
      </el-table-column>
      <el-table-column prop="title" width="180">
      </el-table-column>
      <el-table-column>

      </el-table-column>
    </el-table>
    <el-card class="box-card" shadow="never">
      <div v-for="item in bloglist"  class="table item ablog ">
        <ul>
          <li>
            <h4>{{ item.title }}</h4>
            <el-popover
              placement="top"
              width="60"
              v-model="visible2">
              <div style="align: left; margin: 0">
                <el-button size="mini" type="text" @click="visible2 = false">选择理由，精准屏蔽</el-button>
                <el-button type="button" size="mini" @click="visible2 = false">推荐理由 运营精选 不准确</el-button>
                <el-button size="mini" type="button" @click="visible2 = false">旧闻，重复</el-button>
                <el-button type="button" size="mini" @click="visible2 = false">内容质量差</el-button>
              </div>
              <span slot="reference"><i class="el-icon-close"></i></span>
            </el-popover>
            <div class="list_userbar">
              <img :src="item.image">
            </div>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
      name: "blog",
      data() {
        return {
          bloglist:[
            {
              readnum:'13',
              title:'【公告】CSDN 问答小程序 Chat 快问上线啦，快来生成你的专属提问码',
              image:'../../static/1.jpg'
            },
            {
              readnum:'13',
              title:'【公告】CSDN 问答小程序 Chat 快问上线啦，快来生成你的专属提问码',
              image:'../../static/1.jpg'
            },
            {
              readnum:'13',
              title:'【公告】CSDN 问答小程序 Chat 快问上线啦，快来生成你的专属提问码',
              image:'../../static/1.jpg'
            },
            {
              readnum:'13',
              title:'【公告】CSDN 问答小程序 Chat 快问上线啦，快来生成你的专属提问码',
              image:'../../static/1.jpg'
            },
            {
              readnum:'13',
              title:'【公告】CSDN 问答小程序 Chat 快问上线啦，快来生成你的专属提问码',
              image:'../../static/1.jpg'
            },
            {
              readnum:'13',
              title:'【公告】CSDN 问答小程序 Chat 快问上线啦，快来生成你的专属提问码',
              image:'../../static/1.jpg'
            }
          ]
        };
      },
      methods: {
        handleChange(val) {
          console.log(val);
        }
      }
    }
</script>

<style scoped>
  .ablog{
    padding-top: 7px;
    background-color: #fff;
    text-align: left;
    clear: both;
  }
  .ablog ul{
    list-style: none;
  }
</style>
