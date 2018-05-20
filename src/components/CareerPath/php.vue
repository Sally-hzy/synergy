<template>
  <div class="plan">
    <learnpath v-for="plan in plans" :plan="plan" :key="index"></learnpath>
    <div class="plan-item-final">
      <div class="plan-title"><label class="cur"><i class="el-icon-circle-check"></i>完成路径学习</label></div>
      <div class="plan-item-final">
        <p>能够深入理解PHP编码思想，熟悉常规应用、应用流行框架完成项目开发。<br> 将能胜任月薪<span style="color: #f01414">7,000RMB--15,000RMB</span>的职位</p>
        <dl class="plan-final-list">
          <dd class="fw"><i class="el-icon-news"></i> PHP全栈工程师</dd>
          <dd class="fw"><i class="el-icon-news"></i> PHP网站开发工程师</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "php",
      data(){
          return{
            plans:[
              {
                title:'Java零基础入门',
                img:'../static/image/plan1bg.jpg',
                price:'358.00',
                usernum:'4752',
                tit:['Java基础语法','Java面向对象','Java常用工具类'],
                content:[['Java初识','Java运算符','Java常量与变量','Java流程控制之选择','Java流程控制之循环','Java数组之一维数组',
                  'Java数组之二维数组','Java方法','Java基础语法测试'],['Java面向对象','Java封装','Java继承','Java多态',
                  'Java单例模式'],['Java异常','Java包装类','Java字符串','Java集合','Java多线程']]
              },{
                title:'Java零基础入门',
                img:'../static/image/plan1bg.jpg',
                price:'358.00',
                usernum:'4752',
                tit:['Java基础语法','Java面向对象','Java常用工具类'],
                content:[['Java初识','Java运算符','Java常量与变量','Java流程控制之选择','Java流程控制之循环','Java数组之一维数组',
                  'Java数组之二维数组','Java方法','Java基础语法测试'],['Java面向对象','Java封装','Java继承','Java多态',
                  'Java单例模式'],['Java异常','Java包装类','Java字符串','Java集合','Java多线程']]
              },{
                title:'Java零基础入门',
                img:'../static/image/plan1bg.jpg',
                price:'358.00',
                usernum:'4752',
                tit:['Java基础语法','Java面向对象','Java常用工具类'],
                content:[['Java初识','Java运算符','Java常量与变量','Java流程控制之选择','Java流程控制之循环','Java数组之一维数组',
                  'Java数组之二维数组','Java方法','Java基础语法测试'],['Java面向对象','Java封装','Java继承','Java多态',
                  'Java单例模式'],['Java异常','Java包装类','Java字符串','Java集合','Java多线程']]
              }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
