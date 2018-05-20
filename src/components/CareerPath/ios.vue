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
          <p>能够应用屏幕适配、网络数据解析、动画特效、以及第三方主流框架等进行iOS应用开发。<br> 将能胜任月薪<span style="color: #f01414">7,000RMB--12,000RMB</span>的职位</p>
          <dl class="plan-final-list">
            <dd class="fw"><i class="el-icon-news"></i> Android开发工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> Android数据库开发工程师</dd>
            <dd class="fw"><i class="el-icon-news"></i> Android SDK开发工程师</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="plan-type-wrap" v-if="active==1">
      <learnpath v-for="(plan,index) in plans1" :key="index" :plan="plan"></learnpath>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ios",
      data(){
        return{
          items:['ios零基础入门','c++零基础入门'],
          active:'0',
          plans:[
            {
              title:'iOS入门：基础语法与常用控件',
              img:'../static/image/plan1bg.jpg',
              price:'328.00',
              usernum:'1013',
              tit:['Objective-C语言基础','UI基础控件','手势绘图','综合案例','Swift语法快速入门'],
              content:[['Objective-C基础语法','Objective-C高级语法','Objective-C面向对象','Foundation框架','类之间通信'],['UI控件初识',
                'UI控件进阶','UI基础控件测试'],['手势识别','图形绘制','手势绘图测试'],['手势画板','手势画板测试',]
                ['Swift基础语法','Swift语法快速入门测试']]
            },
            {
              title:'iOS入门：基础语法与常用控件',
              img:'../static/image/plan1bg.jpg',
              price:'328.00',
              usernum:'1013',
              tit:['Objective-C语言基础','UI基础控件','手势绘图','综合案例','Swift语法快速入门'],
              content:[['Objective-C基础语法','Objective-C高级语法','Objective-C面向对象','Foundation框架','类之间通信'],['UI控件初识',
                'UI控件进阶','UI基础控件测试'],['手势识别','图形绘制','手势绘图测试'],['手势画板','手势画板测试',]
                ['Swift基础语法','Swift语法快速入门测试']]
            }
          ],
          plans1:[
            {
              title:'iOS入门：基础语法与常用控件',
              img:'../static/image/plan1bg.jpg',
              price:'328.00',
              usernum:'1013',
              tit:['Objective-C语言基础','UI基础控件','手势绘图','综合案例','Swift语法快速入门'],
              content:[['Objective-C基础语法','Objective-C高级语法','Objective-C面向对象','Foundation框架','类之间通信'],['UI控件初识',
                'UI控件进阶','UI基础控件测试'],['手势识别','图形绘制','手势绘图测试'],['手势画板','手势画板测试',]
                ['Swift基础语法','Swift语法快速入门测试']]
            }
          ]
        }
      },
      methods:{
        tabs:function(n){
          this.active=n;
        }
      }
    }
</script>

<style scoped>

</style>
