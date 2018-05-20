<template>
  <div class="lesson" >
    <a v-for="(course,index) in courses" :key="index" class="lessonbox">
      <div class="img-box">
        <!--设置一个盒子，高度为零，用padding撑开这个父盒子，解决子元素绝对定位无法撑开父盒子-->
        <div class="fill" style="height: 0;padding-bottom: 55%"></div>
        <div class="img img-up " :style="{backgroundImage:'url('+ course.img +')'}"></div>
        <div class="img img-mid " :style="{backgroundImage:'url('+ course.img +')'}"></div>
        <div class="img img-down" :style="{backgroundImage:'url('+ course.img +')'}"></div>
      </div>
      <div class="content">
        <h3>{{course.title}}</h3>
        <div class="lessoninfo">
          <span class="lessoninfospan">{{course.step}}</span>
          <span class="lessoninfospan">
        <i class="el-icon-news"></i>
        {{course.usernum}}
      </span>
          <span class="starbox">
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
          </span>
        </div>
          <p class="desc">{{course.desc}}</p>
          <div class="lessonprice">￥{{course.price}}</div>
        </div>
    </a>
  </div>
</template>

<script>
    export default {
      name: "all",
      data(){
          return{
            courses:[
              {
                img:'../static/image/practice1.jpg',
                title:'Java Web强化：SSM框架整合',
                step:'3步骤／19门课',
                usernum:'244',
                desc:'使用流行的SSM框架进行整合开发，助你迈入Java工程师行列！',
                price:'628.00',
              },
              {
                img:'../static/image/practice1.jpg',
                title:'Java Web强化：SSM框架整合',
                step:'3步骤／19门课',
                usernum:'244',
                desc:'使用流行的SSM框架进行整合开发，助你迈入Java工程师行列！',
                price:'628.00'
              },
              {
                img:'../static/image/practice1.jpg',
                title:'Java Web强化：SSM框架整合',
                step:'3步骤／19门课',
                usernum:'244',
                desc:'使用流行的SSM框架进行整合开发，助你迈入Java工程师行列！',
                price:'628.00'
              },
              {
                img:'../static/image/practice1.jpg',
                title:'Java Web强化：SSM框架整合',
                step:'3步骤／19门课',
                usernum:'244',
                desc:'使用流行的SSM框架进行整合开发，助你迈入Java工程师行列！',
                price:'628.00'
              },
              {
                img:'../static/image/practice1.jpg',
                title:'Java Web强化：SSM框架整合',
                step:'3步骤／19门课',
                usernum:'244',
                desc:'使用流行的SSM框架进行整合开发，助你迈入Java工程师行列！',
                price:'628.00'
              }
            ]
          }
      }
    }
</script>

<style scoped>
.lesson{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
}
.lessonbox{
  width: 23.5%;
  cursor: pointer;
  margin-bottom: 3%;
}
  .img-box{
    margin-bottom: 12%;
    width: 100%;
    position: relative;
  }
 .img-up, .img-mid, .img-down{
    position: absolute;
  }
 .img{
   border-radius: 8px;
   background-size: cover;
   background-position: center;
   object-fit: cover;
   transition: all 0.3s;
 }
.img-up{
    width: 100%;
    top:12px;
    left: 0px;
    height: 100%;
    z-index: 3;
  }
.img-mid{
    top: 16px;
    left: 4px;
    height: 100%;
    opacity: 0.4;
    width: 97%;
    z-index: 2;
  }
  .img-down{
    top: 20px;
    left: 8px;
    width: 94%;
    height:100%;
    opacity: 0.2;
    z-index: 1;
  }
  .lessonbox:hover .img-box .img-up{
   top:0;
    left: 0;
  }
.lessonbox:hover .img-box .img-mid{
  top:10px;
  left: 8px;
  width: 94%;
}
.lessonbox:hover .img-box .img-down{
  top:20px;
  left: 16px;
  width: 90%;
}
  h3{
    font-size: 16px;
    color: #07111B;
    line-height: 24px;
    font-weight: normal;
  }
  .lessoninfo{
    margin: 1% 0;
    font-size: 12px;
    color: #4D555D;
    line-height: 24px;
    font-weight: 200;
  }
  .lessoninfospan{
    margin-right: 3%;
  }
  .el-icon-star-on{
    color: #FF9900;
  }
  .desc{
    max-height: 10%;
    font-size: 12px;
    color: #93999F;
    letter-spacing: -0.1px;
    overflow: hidden;
  }
  h3:hover{
    color: red;
  }
  .lessonprice{
    font-size: 12px;
    color: #4D555D;
    line-height: 20px;
  }
</style>
