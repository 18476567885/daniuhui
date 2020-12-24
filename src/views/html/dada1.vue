<template>
  <div>
    <div class="header">这是页面的头部</div>
    <div class="container">
      <div class="left">页面的左侧</div>
      <div class="right">页面的右侧</div>
    </div>
    <div class="foot">页面的底部</div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
}
.header {
  width: 800px;
  height: 50px;
  background-color: #595959;
  margin: 0 auto;
 line-height: 50px;
}
.container{
    width: 800px;
    margin: 0 auto;
   height: 1000px;
  
}
.container .left{
    width: 200px;
    height: 1000px;
    background-color: green;
    float: left;
}
.container .right{
    width: 600px;
    height: 1000px;
    background-color: greenyellow;
    float: left;
}
.foot{
    width: 800px;
    height: 100px;
    background-color: #3b3b3b;
    margin: 0 auto;
   
    
}
</style>
