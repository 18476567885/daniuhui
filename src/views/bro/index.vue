<template>
    <div>
        <div class="abc">
            <a href="">手机 电话卡</a>
            <a href="">电视  盒子</a>
            <a href=""> 笔记本 平板</a>
            <a href=""> 出行 穿戴</a>
            <a href=""> 智能 路由器</a>
           
        </div>
        <comm ></comm >
</div>
</template>
  <script>
      import comm from './css1/comm' 
      export default{
          components:{
              comm,
          }
      }
  </script>
<style>
    a{
      display: block;
      width: 300px;
      height: 40px;
      background-color: #555;
      font-size: 14px;
      color: #fff;
      text-emphasis: none;
      text-indent: 2em;
      line-height: inherit;
      line-height: 40px;
    


    }
    /* 鼠标经过链接变换背景颜色 */
    a:hover{
        background-color: red;
    }
</style>
