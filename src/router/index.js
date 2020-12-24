import Vue from 'vue'//导入路由
import Router from 'vue-router'
 import HelloWorld from '@/components/HelloWorld'
// import A from '@/components/A'
// import B from '@/components/B'
// import C from '@/components/C'

import first from '@/components/first'//第一步导入组件
import css from '@/views/css'
import test from '@/views/test'
import bro from '@/views/bro'
import shopping from '@/views/shopping'
import html from '@/views/html'
Vue.use(Router)//关键，安装路由插件，当前需要的的vue-router插件

export default new Router({
  routes: [
   
    { 
      path: '/', //路由url地址，一个组件对应一个url
      component: first,//组件名
    },
    { 
      path: '/html', //路由url地址，一个组件对应一个url
      component: html,//组件名
    },
    { 
      path: '/css', //路由url地址，一个组件对应一个url
      component: css,//组件名
    },
    { 
      path: '/test', //路由url地址，一个组件对应一个url
      component: test,//组件名
    },{ 
      path: '/bro', //路由url地址，一个组件对应一个url
      component: bro,//组件名
    },{ 
      path: '/shopping', //路由url地址，一个组件对应一个url
      component: shopping,//组件名
    },
  ]
})
