import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home'
    },
    {
      path: '/',
      component: resolve => require(['../common/Dir.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
        {
          path: '/Home',
          component: resolve => require(['../pages/Home.vue'], resolve),
          meta: { title: '首页' }
        },
        {
          path: '/StudyResource',
          component: resolve => require(['../pages/StudyResource.vue'], resolve),
          meta: { title: '学习资源' }
        },
        {
          path: '/Blog',
          component: resolve => require(['../pages/Blog.vue'], resolve),
          meta: {
            title: '博客',
            requireAuth: true
          }
        },
        {
          path: '/Forum',
          component: resolve => require(['../pages/Forum.vue'], resolve),
          meta: {
            title: '论坛',
            requireAuth: true
          }
        },
        {
          path: '/AboutUs',
          component: resolve => require(['../pages/AboutUs.vue'], resolve),
          meta: { title: '关于我们' }
        }
      ]
    }
  ]
})
