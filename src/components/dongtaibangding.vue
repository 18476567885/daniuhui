<template>
 <div class='id'>
     <h3>class的使用</h3>
     <div :class='oneclass'>样式类可以是字符串</div>
     <div :class='{classone:true,classtwo:true}'>样式类可以是对象</div>
     <div :class='["classone","classtwo"]'>样式类可以是数组</div>
     <div :class='[oneclass,twoclass]'>样式类可以是数组</div>
 </div>
</template>
<script>
    export default {
       data(){
           return {
               oneclass:'classone',
               twoclass:'classtwo',

           }
       }
    }
</script>
<style>
    .id{
        text-align: center;
    }
    .classone{
        font-size: 30px;
        color: red;
        text-align: center;
    }
     .classtwo{
         width: 400px;
         height: 200px;
         background-color: royalblue;
         margin:  10px auto;
         text-align: center;
     }
   
</style>