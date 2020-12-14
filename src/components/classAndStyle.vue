<template>
  <div>
      <h3>class的动态绑定</h3>
      <div :class='oneClass'>样式类可以是字符串</div>
      <div :class='{classOne:true,classTwo:true}'>样式类可以是对象</div>
     
      <div :class='["classOne","classTwo"]'>样式类可以是数组</div>
      <div :class='[oneClass,two]'>样式类可以是数组</div>
      <p>-------------------------</p>
      
      <h3>style的动态绑定</h3>
      <div 
           style='width: 300px;height: 200px;margin: 10px auto;'
           :style="{backgroundColor:bgColor}">样式类可以是字符串</div>
      
  </div>

      

</template>
<script>
   export default{
       name:'classAndStyle',
       data(){
         return{
           oneClass:'classOne',
           two:'classTwo',
          bgColor:'red',
         }
       }
   }
</script>
<style>
  .classOne{
    font-size: 30px;
    color: red;
   }
  .classTwo{
    width : 400px;
    height: 200px;
    background-color: aqua;
   margin:10px auto;
   text-align: center;
  
  }
  
</style>