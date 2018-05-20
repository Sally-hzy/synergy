<template>
    <div class="share">
      <div class="column">
        <el-card v-for="(hot,index) in hots" :key="index">
           <div class="tag">热门话题</div>
          <div class="wrap">
            <a class="title1">
              #{{hot.title}}#
              <br>
              {{hot.dir}}
            </a>
            <img v-bind:src="hot.url">
          </div>
          <p class="content">{{hot.content}}</p>
          <div class="info right"><a class=" more">了解详情<i class="el-icon-arrow-right"></i></a></div>
          <div class="line">
            <span>往期回顾</span>
          </div>
          <div v-for="review in reviews" class="wrap reviewwrap green">
            <a>
              #{{review.title}}#
              <br>
              {{review.content}}
            </a>
            <img v-bind:src="review.url">
          </div>
        </el-card>
        <el-card>
          <div class="tag blue bg"><i class="el-icon-tickets"></i> 手记文章</div>
          <div class="wrap">
            <a class="title2 title1">
              {{notes[0].title}}
            </a>
            <img v-bind:src="notes[0].url">
          </div>
          <p class="content note">{{ notes[0].content }}</p>
          <div class="info right">
            <span>浏览人数 {{ notes[0].num }}</span>
            <span>推荐 {{ notes[0].recommen }}</span>
            <a class="more blue">阅读全文<i class="el-icon-arrow-right"></i></a>
          </div>
        </el-card>
        <el-card>
          <div class="tag bg"><i class="el-icon-question"></i> 相关猿问</div>
          <p class="content green">{{questions[0].content}}</p>
          <div class="content" style="text-align: right"><a class="more green">共{{questions[0].sum}}个回答<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </div>
      <div class="column">
        <el-card v-for="(note,n) in notes" v-if="n>0&&n<3" :key="n">
          <div class="tag blue bg"><i class="el-icon-tickets"></i> 手记文章</div>
          <div class="wrap">
            <a class="title2 title1">
              {{note.title}}
            </a>
            <img v-bind:src="note.url">
          </div>
          <p class="content note">{{ note.content }}</p>
          <div class="info">
            <span>浏览人数 {{note.num}}</span>
            <span>推荐 {{note.recommen}}</span>
            <a class="more blue">阅读全文<i class="el-icon-arrow-right"></i></a>
          </div>
        </el-card>
        <el-card v-for="(que,m) in questions" v-if="m>0&&m<4" :key="m">
          <div class="tag bg"><i class="el-icon-question"></i> 相关猿问</div>
          <p class="content green">{{que.content}}</p>
          <div class="content" style="text-align: right"><a class="more green">共{{que.sum}}个回答<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </div>
      <div class="column">
        <el-card v-for="(note,index1) in notes" v-if="index1>2&&index1<6" :key="index1">
          <div class="tag blue bg"><i class="el-icon-tickets"></i> 手记文章</div>
          <div class="wrap">
            <a class="title2 title1">
              {{note.title}}
            </a>
            <img v-bind:src="note.url">
          </div>
          <p class="content note">{{ note.content }}</p>
          <div class="info">
            <span>浏览人数 {{note.num}}</span>
            <span>推荐 {{note.recommen}}</span>
            <a class="more blue">阅读全文<i class="el-icon-arrow-right"></i></a>
          </div>
        </el-card>
        <el-card v-for="(que,index2) in questions" v-if="index2>3&&index2<6" :key="index2">
          <div class="tag bg"><i class="el-icon-question"></i> 相关猿问</div>
          <p class="content green">{{que.content}}</p>
          <div class="content" style="text-align: right"><a class="more green">共{{que.sum}}个回答<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </div>
    </div>
</template>

<script>
    export default {
      name:'share',
      data(){
          return{
            hots:[
              {title:'【内推第2波】 ',
                dir:'打工奋斗7万落京户VS自主创业牧马城市，如何抉择？',
               content:'毕业求职？跳槽加薪？纠结滋润加班还是苦练x年自主创业？速速提问互撩，' +
               '你在撩的极有可能就是你的Boss！激不激动？惊不惊喜？Offer已在这里！你的简历在哪里？' +
               'Scott老师邮箱：wolf18387@qq.comJeson老师邮箱：jeson@imoocc.com',
                url:'../static/image/topic.jpg'
              }
            ],
            reviews:[
              {
                title:'获奖名单戳查看更多',
                content:' 当我们谈论Java时，我们都谈些什么？',
                url:'../static/image/topic.jpg'
              },
              {
                title:'内推第1波',
                content:'  直击BAT面试机会！行业大佬在线答疑',
                url:'../static/image/topic.jpg'
              },
              {
                title:'花式填坑',
                content:'  运维进化篇：成为Python DevOps工程师有哪些必备条件？',
                url:'../static/image/topic.jpg'
              }
            ],
            notes:[
              {
                title:'Linux也可以这样美——Ubuntu18.04安装、配置、美化-踩坑',
                content:'开篇 前几天Ubuntu18.04 LTS稳定版发布了，这也是将官方作为一个长期维护的版本，' +
                '从ubuntu17.10开始，官方又开始使用gnome作为默认的桌面环境,这也给我们增加了更多可以div的地方，' +
                '以前的unity桌面确实不太美观，并且小bug就更加的多。这里搞了个mac风格的美化，没图言xxx,先来几张图来看看哈 。' +
                ' 感兴趣，可以继续看下去，坑还是挺多的。本来我是想直接从ubuntu17....',
                url:'../static/image/note1.jpg',
                num:'1851',
                recommen:'20'
              },
              {
                title:'程序员你为什么这么累？ - 异常处理规范',
                content:'导读：程序员你为什么这么累？ 接口定义规范 controller规范 日志规范 异常处理规范 国际化和参数校验规范 ' +
                '工具类规范 函数编写建议 配置建议 对于大型IT系统，最怕的事情第一是系统出现了异常我不知道，等问题闹大了用户投诉了才知道出问题了。' +
                '第二就是出了问题之后无法找到出错原因。针对这2个问题，说说我们项目组是怎么样规定异常处理的。再次声明我的观点，我这系列贴里面，' +
                '没有什么技术点，都是一些...',
                url:'../static/image/note1.jpg',
                num:'1500',
                recommen:'25'
              },
              {
                title:'Jeson聊Mysql管理之道-MHA最全搭建步骤',
                content:'MHA是一套相对成熟的MySQL高可用方案，能做到在0~30s内自动完成数据库的故障切换操作，在master服务器不宕机的情况下，' +
                '基本能保证数据的一致性。一、常见部署架构模式模式一、拿一台mysql的slave作为manager节点部署模式二、单独拿一台服务器作为manager' +
                '节点模式三、基于VIP进行漂移模式由于，我本地测试的服务器资源有限，接下来我拿模式一来介绍下配置的实现。一、搭建步骤1、本...',
                url:'../static/image/note1.jpg',
                num:'1480',
                recommen:'25'
              },
              {
                title:'不要相信 Double！',
                content:'在Java浮点类型中，经常会使用 Double 类型。在大部分场景，使用 Double 并不会有什么问题。但如果是数值计算，就要小心了。 ' +
                '眼见不一定为实 如果我们编译运行下面这个程序会看到什么？ public class Test{ public static void main(String args[])' +
                '{ System.out.println(0.05+0.01); System.out.p...',
                url:'../static/image/note1.jpg',
                num:'1480',
                recommen:'25'
              },
              {
                title:'不要相信 Double！',
                content:'在Java浮点类型中，经常会使用 Double 类型。在大部分场景，使用 Double 并不会有什么问题。但如果是数值计算，就要小心了。 ' +
                '眼见不一定为实 如果我们编译运行下面这个程序会看到什么？ public class Test{ public static void main(String args[])' +
                '{ System.out.println(0.05+0.01); System.out.p...',
                url:'../static/image/note1.jpg',
                num:'1480',
                recommen:'25'
              },
              {
                title:'程序员你为什么这么累？ - 异常处理规范',
                content:'导读：程序员你为什么这么累？ 接口定义规范 controller规范 日志规范 异常处理规范 国际化和参数校验规范 ' +
                '工具类规范 函数编写建议 配置建议 对于大型IT系统，最怕的事情第一是系统出现了异常我不知道，等问题闹大了用户投诉了才知道出问题了。' +
                '第二就是出了问题之后无法找到出错原因。针对这2个问题，说说我们项目组是怎么样规定异常处理的。再次声明我的观点，我这系列贴里面，' +
                '没有什么技术点，都是一些...',
                url:'../static/image/note1.jpg',
                num:'1500',
                recommen:'25'
              }
            ],
            questions:[
              {
                content:'请问问题出在哪？为什么我输入的字母远大于7个却显示只有7个',
                sum:'4'
              },
              {
                content:'有关Java的书 有一些基础 请问有什么推荐吗',
                sum:'4'
              },
              {
                content:'请问问题出在哪？为什么我输入的字母远大于7个却显示只有7个',
                sum:'4'
              },
              {
                content:'有关Java的书 有一些基础 请问有什么推荐吗',
                sum:'4'
              },
              {
                content:'请问问题出在哪？为什么我输入的字母远大于7个却显示只有7个',
                sum:'4'
              },
              {
                content:'有关Java的书 有一些基础 请问有什么推荐吗',
                sum:'4'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .share{
    margin: 0 7%;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
  .column{
    margin: 1%;
    display: flex;
    flex-direction: column;
    width: 31.5%;
  }
.tag{
  display: inline-block;
  font-size: 13px;
  color: #FFF;
  line-height: 24px;
  background: rgba(0,180,60,.5);
  border-radius: 12px;
  padding: 0 12px;
  margin-bottom: 8px;
}
.wrap{
  font-size: 16px;
  display: flex;
  justify-content: space-between;
}
  .title1{
    font-size: 18px;
    color: rgba(0,180,60,.8);
    line-height: 24px;
    width: 70%;
    transition: all .3s;
    overflow: hidden;
    cursor: pointer;
  }
  .title2{
    color: #07111B;
  }
  .title2:hover{
    color: #008CC8;
  }
  .content{
    overflow: hidden;
    max-height:20%;
    font-weight: 400;
    font-size: 13px;
    color: #4D555D;
    line-height: 27px;
    margin-top: 12px;
    word-break: break-all;
    /*规定自动换行的处理方式*/
  }
  img{
    width: 5vw;
    height: 5vw;
    border-radius: 8px;
    background-color: #f3f5f7;
    margin-left: 1%;
  }
  .more{
    color: rgba(0,180,60,.6);
    cursor: pointer;
    margin-left:15%;
  }
  .line{
    position: relative;
    background-color: #D9DDE1;
    height: 1px;
    margin: 24px 0;
    font-weight: 400;
  }
  .line span{
    position: absolute;
    font-size: 13px;
    padding-right: 12px;
    color: #93999F;
    background-color: #fff;
    line-height: 16px;
    top: -8px;
    left: 0;
  }
  .reviewwrap{
    margin-bottom: 16px;
  }
  .el-card{
    margin-bottom: 20px;
  }
  .info{
    font-size: 13px;
    color: #93999F;
    line-height: 24px;
    margin-top: 12px;
    font-weight: 400;
  }
  .info span{
    margin-right: 24px;
  }
  .right{
    text-align: right;
  }
  .blue{
    color:rgba(0,140,200,.6);
  }
  .blue:hover{
    color: #008CC8;
  }
  .bg{
    background: #fff;
    color:rgba(0,180,60,.8);
  }
  .note{
    text-align: justify;
  }
  .green{
    cursor: pointer;
    transition: all .3s;
  }
  .green:hover{
    color:#00B43C;
  }
</style>
