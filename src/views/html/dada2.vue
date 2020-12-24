<template>
  <div>
    <div class="header">圣杯布局</div>
    <div class="box">
      <div class="middle">
        

       页面中间部分
    </div>
      <div class="left">
        左侧部分·
      </div>
      <div class="right">右侧部分·</div>
    
</div>
    <div class="foot"></div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  font-size: 12px;

}
.header,.foot{
    float: left;
    width: 100%;
    background-color:red;
    line-height: 40px;
    height: 40px;
}
.middle{
  
   background-color: burlywood;
    width: 100%;
   
   
}
.left{
    width: 200px;
    margin-left: -100%;
    left: -200px;
    background-color: teal;
    
}
.right{
    width: 220px;
    margin-left: -220px;
    left: 220px;
    background-color: tomato;
   
}
.middle,.left,.right{
    position: relative;
    float: left;
    height: 300px;
    
}
.box{
     
  padding: 0 220px 0 200px;
 
}
</style>
