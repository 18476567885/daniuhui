<template>
  <div id="app">
    <!-- <xiaohuihui/> -->
    <!-- <Css2 v-for="i in 5" :key="i"/> -->
  <!-- <div>    <img :src="imgUrl">  </div> -->
    <router-view/>
    <xiaohuihui/>

  </div>
</template>

<script>

//import Template from './components/Template.vue'
//import HelloWorld from './components/HelloWorld.vue'
//import cs from './components/cs.vue'
//import computed from './components/computed.vue'
//import classAndStyle from './components/classAndStyle'
// import ifAndshow from "./components/ifAndshow"
//import listRunder from './components/listRunder'
// import cs11 from './components/cs11'
// import Css2 from "./components/Css2"
//import Cssss1 from './components/Cssss1'
//import Lianxi1 from './components/Lianxi1';
//import Lianxi22 from './components/Lianxi22'
// import OtherRender from './components/OtherRender'
//import anli from './components/anli'
//import DealEvents from "./components/DealEvents"
// import QCfilters from './components/QCfilters'
//import LifeCircle from './components/LifeCircle'
//import date from './components/date'
//import newConputed from './components/newConputed'
// import dongtaibangding from './components/dongtaibangding'
import xiaohuihui from "./components/xiaohuihui";
import first from "./components/first";
//引用
//模板 脚本 样式
export default {
  // data(){
  //       return {
  //           imgUrl:require("./assets/logo.png")

  //       }

  //   },
  name: "App",
  //注册组件 -- 使用组件标签
  components: {
    first,
    xiaohuihui
  }
};
</script>

<style>
  #app{
    text-align: center;
  }
</style>
