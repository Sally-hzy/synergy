 <template>
    <div class="teacher">
      <el-carousel :interval="5000" arrow="always" height="350px">
        <el-carousel-item class="carousel-item">
          <div class="item-wrap">
            <a class="tea-item" v-for="(tea,index) in teachers" :key="index" v-if="index<5">
              <img v-bind:src="tea.url" class="tea-img">
              <span class="tea-name">{{tea.name}}</span>
              <span class="tea-title">{{tea.title}}</span>
              <span class="tea-p">{{tea.dir}}</span>
            </a>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="item-wrap">
            <a class="tea-item" v-for="(tea,index) in teachers" :key="index" v-if="index<10&&index>4">
              <img v-bind:src="tea.url" class="tea-img">
              <span class="tea-name">{{tea.name}}</span>
              <span class="tea-title">{{tea.title}}</span>
              <span class="tea-p">{{tea.dir}}</span>
            </a>
          </div>
        </el-carousel-item>
        <el-carousel-item class="carousel-item">
          <div class="item-wrap">
            <a class="tea-item" v-for="(tea,index) in teachers" :key="index" v-if="index<15&&index>9">
              <img v-bind:src="tea.url" class="tea-img">
              <span class="tea-name">{{tea.name}}</span>
              <span class="tea-title">{{tea.title}}</span>
              <span class="tea-p">{{tea.dir}}</span>
            </a>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "teacher",
      data(){
          return{
            teachers:[
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher.jpg',
                name:'快乐动起来',
                title:'Web前端工程师',
                dir:'7年工作经验的资深前端工程师，主要从事Web视频领域的底层开发。先后在360、' +
                '去哪儿网、某知名视频公司工作。先后输出《ES6零基础教学 解析彩票项目》、《前端跳槽面试必备技巧》、' +
                '《前端面试项目冲刺，京东金融Vue组件化实战》等课程'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher.jpg',
                name:'快乐动起来',
                title:'Web前端工程师',
                dir:'7年工作经验的资深前端工程师，主要从事Web视频领域的底层开发。先后在360、' +
                '去哪儿网、某知名视频公司工作。先后输出《ES6零基础教学 解析彩票项目》、《前端跳槽面试必备技巧》、' +
                '《前端面试项目冲刺，京东金融Vue组件化实战》等课程'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher.jpg',
                name:'快乐动起来',
                title:'Web前端工程师',
                dir:'7年工作经验的资深前端工程师，主要从事Web视频领域的底层开发。先后在360、' +
                '去哪儿网、某知名视频公司工作。先后输出《ES6零基础教学 解析彩票项目》、《前端跳槽面试必备技巧》、' +
                '《前端面试项目冲刺，京东金融Vue组件化实战》等课程'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher.jpg',
                name:'快乐动起来',
                title:'Web前端工程师',
                dir:'7年工作经验的资深前端工程师，主要从事Web视频领域的底层开发。先后在360、' +
                '去哪儿网、某知名视频公司工作。先后输出《ES6零基础教学 解析彩票项目》、《前端跳槽面试必备技巧》、' +
                '《前端面试项目冲刺，京东金融Vue组件化实战》等课程'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              },
              {
                url:'../static/image/teacher.jpg',
                name:'快乐动起来',
                title:'Web前端工程师',
                dir:'7年工作经验的资深前端工程师，主要从事Web视频领域的底层开发。先后在360、' +
                '去哪儿网、某知名视频公司工作。先后输出《ES6零基础教学 解析彩票项目》、《前端跳槽面试必备技巧》、' +
                '《前端面试项目冲刺，京东金融Vue组件化实战》等课程'
              },
              {
                url:'../static/image/teacher2.jpg',
                name:'7七月',
                title:'全栈工程师',
                dir:'多年研发经验，毕业后一直任职于某大型互联网公司，' +
                '担任研发经理。后开始自己的创业。精通Python、NodeJS、' +
                'Javascript、PHP等，一直致力于Web技术的研究'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .teacher{
    margin:0 7%;
    padding-bottom: 5%;
  }
  .item-wrap{
    display: flex;
    justify-content: space-between;
    height: 80%;
  }
  .tea-item{
    height: 90%;
    width: 18.5%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    text-align: center;
    background: rgba(255,255,255,.8);
    box-shadow: 0 4px 8px 0 rgba(7,17,27,.05);
    border-radius: 4%;
    transition: all .3s;
    cursor: pointer;
  }
  .tea-item:hover{
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
  }
  .tea-item:hover .tea-p{
    position: relative;
    /*height: 75%;*/
    margin-top: -45%;
    color: #07111B;
    transition: all .3s;
  }
  .tea-item:hover .tea-img{
    width: 4vw;
    height:4vw;
    margin-left: 6.5%;
    transition: all .3s;
  }
  .tea-item:hover .tea-name{
    opacity: 0;
  }
  .tea-item:hover .tea-title{
    opacity: 0;
  }
  .tea-img{
    border-radius: 50%;
    width: 7vw;
    height:7vw;
    position: absolute;
    top: 5%;
    margin-left: 5%;
  }
  .tea-name{
    font-size: 19px;
    line-height: 24px;
    margin-top: 40%;
    white-space: nowrap;
    color: #07111b;
    font-weight: 700;
  }
  .tea-p{
    line-height: 24px;
    font-size: 13px;
    color: #4D555D;
    text-align: justify;
    font-weight: 400;
    overflow: hidden;
    margin-bottom: 10%;
  }
  .tea-name ,.tea-p{
    display: block;
    padding: 0 36px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .tea-title{
    display: block;
    font-size: 0.75rem;
    margin: 6px 0 14px 0;
    color: #4D555D;
    height: 24px;
    line-height: 24px;
  }

</style>
