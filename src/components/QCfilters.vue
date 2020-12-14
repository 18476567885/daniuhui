<template>
    <div>
     <h3>格式化人民币</h3>
     <p>{{money|moneyFormat(money)}}</p>
     <p>{{PIG|moneyFormat}}</p>
    </div>
</template>
<script>
    export default{
       data(){
           return{
               money:22345,
               PIG:3465.75768
           }
       },
       //函数，方法
       //局部过滤器
       filters:{
           moneyFormat(value){
               return "¥" + Number(value).toFixed(2);
           }
       }
    }
</script>
<style>

</style>