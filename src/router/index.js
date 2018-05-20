import Vue from 'vue'
import Router from 'vue-router'
import container from '../components/container'
import freelesson from '../components/FreeLesson/freelesson'
import careerpath from '../components/CareerPath/careerpath'
import practice from '../components/practice/practice'
import que from '../components/question/que'
import note from '../components/note/note'
import all from '../components/CareerPath/all'
import web from '../components/CareerPath/web'
import java from '../components/CareerPath/java'
import php from '../components/CareerPath/php'
import android from '../components/CareerPath/android'
import ios from '../components/CareerPath/ios'
import tuijian from '../components/question/tuijian'
import New from '../components/question/New'
import topic from '../components/question/topic'
import noanswer from '../components/question/noanswer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
       path:'/',
      // 这样设置路径会使得 进入http://localhost:8080时默认先渲染该组件
      name:'container',
      component: container
    },
    {
      path: '/FreeLesson/freelesson',
      name: 'Freelesson',
      component: freelesson
    },
    {
      path: '/question/que',
      name: 'que',
      component: que,
      children:[
        {
          path:'/',
          name:'tuijian',
          component:tuijian
        },
        {
          path:'New',
          name:'New',
          component:New
        },
        {
          path:'noanswer',
          name:'noanswer',
          component:noanswer
        },
        {
          path:'topic',
          name:'topic',
          component:topic
        },
      ]
    },
    {
      path: '/note/note',
      name: 'note',
      component: note
    },
    {
      path:'/practice/practice',
      name:'practice',
      component:practice
    },
    {
      path:'/CareerPath/careerpath',
      name:'Careerpath',
      component: careerpath,
      children:[
        {
          path:'/',
          name:'all',
          component:all
        },
        {
          path:'web',
          name:'web',
          component:web
        },
        {
          path:'java',
          name:'java',
          component:java
        },
        {
          path:'android',
          name:'android',
          component:android
        },
        {
          path:'php',
          name:'php',
          component:php
        },
        {
          path:'ios',
          name:'ios',
          component:ios
        },
      ]
    }
  ]
})
