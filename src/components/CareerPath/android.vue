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
        <p>能够利用网络通信，数据存储，蓝牙，音视频，第三方主流框架等进行Android应用开发。<br> 将能胜任月薪<span style="color: #f01414">7,000RMB--16,000RMB</span>的职位</p>
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
    <div class="plan-item-final">
      <div class="plan-title"><label class="cur"><i class="el-icon-circle-check"></i>完成路径学习</label></div>
      <div class="plan-item-final">
        <p>能够利用网络通信，数据存储，蓝牙，音视频，第三方主流框架等进行Android应用开发。<br> 将能胜任月薪<span style="color: #f01414">7,000RMB--16,000RMB</span>的职位</p>
        <dl class="plan-final-list">
          <dd class="fw"><i class="el-icon-news"></i> Android开发工程师</dd>
          <dd class="fw"><i class="el-icon-news"></i> Android数据库开发工程师</dd>
          <dd class="fw"><i class="el-icon-news"></i> Android SDK开发工程师</dd>
        </dl>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "android",
      data(){
          return{
            items:['零基础入门','有Java基础'],
            active:'0',
            plans:[
              {
                title:'零基础入门Android语法与界面',
                img:'../static/image/plan1bg.jpg',
                price:'499.00',
                usernum:'1848',
                tit:['Java基础语法','Java面向对象','Java常用工具类'],
                content:[['Java初识','Java运算符','Java常量与变量','Java流程控制之选择','Java流程控制之循环','Java数组之一维数组',
                  'Java数组之二维数组','Java方法','Java基础语法测试'],['Java面向对象','Java封装','Java继承','Java多态',
                  'Java单例模式'],['Java异常','Java包装类','Java字符串','Java集合','Java多线程']]
              },
              {
                title:'零基础入门Android语法与界面',
                img:'../static/image/plan1bg.jpg',
                price:'499.00',
                usernum:'1848',
                tit:['Java基础语法','Java面向对象','Java常用工具类'],
                content:[['Java初识','Java运算符','Java常量与变量','Java流程控制之选择','Java流程控制之循环','Java数组之一维数组',
                  'Java数组之二维数组','Java方法','Java基础语法测试'],['Java面向对象','Java封装','Java继承','Java多态',
                  'Java单例模式'],['Java异常','Java包装类','Java字符串','Java集合','Java多线程']]
              }
            ],
            plans1:[
              {
                title:'零基础入门Android语法与界面',
                img:'../static/image/plan1bg.jpg',
                price:'499.00',
                usernum:'1848',
                tit:['Java基础语法','Java面向对象','Java常用工具类'],
                content:[['Java初识','Java运算符','Java常量与变量','Java流程控制之选择','Java流程控制之循环','Java数组之一维数组',
                  'Java数组之二维数组','Java方法','Java基础语法测试'],['Java面向对象','Java封装','Java继承','Java多态',
                  'Java单例模式'],['Java异常','Java包装类','Java字符串','Java集合','Java多线程']]
              },
              {
                title:'零基础入门Android语法与界面',
                img:'../static/image/plan1bg.jpg',
                price:'499.00',
                usernum:'1848',
                tit:['Java基础语法','Java面向对象','Java常用工具类'],
                content:[['Java初识','Java运算符','Java常量与变量','Java流程控制之选择','Java流程控制之循环','Java数组之一维数组',
                  'Java数组之二维数组','Java方法','Java基础语法测试'],['Java面向对象','Java封装','Java继承','Java多态',
                  'Java单例模式'],['Java异常','Java包装类','Java字符串','Java集合','Java多线程']]
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
