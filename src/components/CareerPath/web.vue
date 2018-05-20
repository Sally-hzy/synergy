<template>
  <div class="plan">
    <div class="plan-list-type">
      <a v-for="(item,n) in items"  :class="{active:active==n}" @click="tabs(n)">{{ item }}</a>
    </div>
    <div class="plan-type-wrap" v-if="active==0">
      <learnpath v-for="(plan,index) in plans" :key="index" :plan="plan"></learnpath>
      <div class="plan-item-final">
        <div class="plan-title"><label class="cur"><i class="el-icon-circle-check"></i>完成路径学习</label></div>
        <div class="plan-item-final">
          <p>掌握less、vue、bootstrap等流行框架的实际运用，能够独立完成前端网页项目的开发。<br> 将能胜任月薪<span style="color: #f01414">8,000RMB--15,000RMB</span>的职位</p>
          <dl class="plan-final-list">
            <dd class="fw"><i class="el-icon-news"></i> 前端工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> 网站重构工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> 网页制作工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> H5开发工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> 移动端开发工程师</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="plan-type-wrap" v-if="active==1">
      <learnpath v-for="(plan,index) in plans1" :key="index" :plan="plan"></learnpath>
      <div class="plan-item-final">
        <div class="plan-title"><label class="cur"><i class="el-icon-circle-check"></i>完成路径学习</label></div>
        <div class="plan-item-final">
          <p>能够运用less、bootstrap等流行框架开发网页，使用调试工具定位问题并解决问题。<br> 将能胜任月薪<span style="color: #f01414">8,000RMB--12,000RMB</span>的职位</p>
          <dl class="plan-final-list">
            <dd class="fw"><i class="el-icon-news"></i> Web前端工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> 网页制作工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> H5开发工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> 移动端开发工程师</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="plan-type-wrap" v-if="active==2">
      <learnpath v-for="(plan,index) in plans" :key="index" :plan="plan"></learnpath>
      <div class="plan-item-final">
        <div class="plan-title"><label class="cur"><i class="el-icon-circle-check"></i>完成路径学习</label></div>
        <div class="plan-item-final">
          <p>掌握less、vue、bootstrap等流行框架的实际运用，能够独立完成前端网页项目的开发。<br> 将能胜任月薪<span style="color: #f01414">8,000RMB--15,000RMB</span>的职位</p>
          <dl class="plan-final-list">
            <dd class="fw"><i class="el-icon-news"></i> 前端工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> 网站重构工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> 网页制作工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> H5开发工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> 移动端开发工程师</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "web",
      data(){
          return{
            items:['零基础入门','有布局基础','JS专项突破'],
            plans:[
              {
                title:'前端小白入门',
                img:'../static/image/plan1bg.jpg',
                price:'568.00',
                usernum:'4877',
                // stepnum:'2',
                tit:['HTML基础','CSS基础','CSS基础','CSS基础','CSS基础'],
                content:[['HTML基础','HTML表格','HTML表单','案例搭建网页HTML结构','HTML基础测试'],['CSS选择的艺术','CSS文本样式',  '盒子模型 ','CSS背景和列表','float浮动','CSS定位（position）',
                  'CSS网页布局基础', '网页布局案例', 'CSS基础测试'],['CSS选择的艺术','CSS文本样式',  '盒子模型 ','CSS背景和列表','float浮动','CSS定位（position）',
                  'CSS网页布局基础', '网页布局案例', 'CSS基础测试'],['CSS选择的艺术','CSS文本样式',  '盒子模型 ','CSS背景和列表','float浮动','CSS定位（position）',
                  'CSS网页布局基础', '网页布局案例', 'CSS基础测试'],['CSS选择的艺术','CSS文本样式',  '盒子模型 ','CSS背景和列表','float浮动','CSS定位（position）',
                  'CSS网页布局基础', '网页布局案例', 'CSS基础测试']]
              },
              {
                title:'前端小白入门',
                img:'../static/image/plan1bg.jpg',
                price:'568.00',
                usernum:'4877',
                step:'5'
              }
            ],
            plans1:[
              {
                title:'HTML5与CSS3实现动态网页',
                img:'../static/image/plan1bg.jpg',
                price:'628.00',
                usernum:'1772',
                tit:['初识HTML5','搞懂CSS3','JavaScript基础','JavaScript进阶','项目实战'],
                content:[['HTML5标签变化','HTML5网页布局','HTML5属性变化','HTML5展望','HTML5测试'],['CSS3选择器','CSS3边框与圆角',
                  'CSS3背景与渐变','CSS3转换','CSS3过渡','CSS3动画','· CSS3图片切换特效','CSS3测试'],['JavaScript语法',
                  'JavaScript流程控制语句','JavaScript函数','JavaScript内置对象','JavaScript DOM基础','JavaScript BOM基础' ,
                  'JavaScript实现轮播特效','JavaScript基础测试'],['调试工具','JavaScript变量、作用域','JavaScript函数深入讲解',
                  'JavaScript实现简易计算器','JavaScript进阶测试'],['H5+CSS3+JS实现炫酷网页','实战测试']]
              },
              {
                title:'HTML5与CSS3实现动态网页',
                img:'../static/image/plan1bg.jpg',
                price:'628.00',
                usernum:'1772',
                tit:['初识HTML5','搞懂CSS3','JavaScript基础','JavaScript进阶','项目实战'],
                content:[['HTML5标签变化','HTML5网页布局','HTML5属性变化','HTML5展望','HTML5测试'],['CSS3选择器','CSS3边框与圆角',
                  'CSS3背景与渐变','CSS3转换','CSS3过渡','CSS3动画','· CSS3图片切换特效','CSS3测试'],['JavaScript语法',
                  'JavaScript流程控制语句','JavaScript函数','JavaScript内置对象','JavaScript DOM基础','JavaScript BOM基础' ,
                  'JavaScript实现轮播特效','JavaScript基础测试'],['调试工具','JavaScript变量、作用域','JavaScript函数深入讲解',
                  'JavaScript实现简易计算器','JavaScript进阶测试'],['H5+CSS3+JS实现炫酷网页','实战测试']]
              },
              {
                title:'HTML5与CSS3实现动态网页',
                img:'../static/image/plan1bg.jpg',
                price:'628.00',
                usernum:'1772',
                tit:['初识HTML5','搞懂CSS3','JavaScript基础','JavaScript进阶','项目实战'],
                content:[['HTML5标签变化','HTML5网页布局','HTML5属性变化','HTML5展望','HTML5测试'],['CSS3选择器','CSS3边框与圆角',
                  'CSS3背景与渐变','CSS3转换','CSS3过渡','CSS3动画','· CSS3图片切换特效','CSS3测试'],['JavaScript语法',
                  'JavaScript流程控制语句','JavaScript函数','JavaScript内置对象','JavaScript DOM基础','JavaScript BOM基础' ,
                  'JavaScript实现轮播特效','JavaScript基础测试'],['调试工具','JavaScript变量、作用域','JavaScript函数深入讲解',
                  'JavaScript实现简易计算器','JavaScript进阶测试'],['H5+CSS3+JS实现炫酷网页','实战测试']]
              }
            ],
            active:'0'
          }
      },
      methods:{
          tabs:function(n){
              this.active=n;
          }
      }
    }
</script>

<style>
.plan-type-wrap{
  margin: 2% auto 0;
}
.plan{
  text-align: justify;
}
.plan-list-type .active{
  background: #F01414;
  color: #fff;
}
.plan-list-type{
  display: flex;
  justify-content: center;
}
  .plan-list-type a {
    font-size: 14px;
    color: #93999F;
    padding: 0.6% 1.5%;
    border-radius: 20px;
    margin-right: 1%;
    transition: all .3s;
    cursor: pointer;
  }
  .plan-title{
    color: #F01414;
    font-size: 1rem;
    font-weight: bold;
  }
  .cur{
    cursor: pointer;
    position: relative;
  }
  .cur i{
    font-size: 2rem;
    position: absolute;
    left: -53%;
    top:-30%;
  }
  .plan-item-final p{
    font-size: 12px;
    color: #93999F;
    line-height: 20px;
    margin-left: -2%;
  }
.plan-item-final{
  padding-left: 3%;
  padding-bottom: 2%;
}
  .plan-item-final dl{
    margin-left: -2%;
    margin-top: 1%;
    display: flex;
    padding-bottom: 2%;
  }
  .plan-item-final dd{
    font-weight: bold;
    margin-right: 7%;
  }
</style>
