<template>
    <div>
        <div  v-if='flag'>今晚上班</div>
        <div v-else>今晚不上班</div>
        <p>---------------------</p>
        <button @click='flag=!flag'>切换</button>

        <p>-----------------------</p>
        <div  v-show='flag'>学习vue</div>
        <div v-show='!flag'>必须过的</div>
        <p>---------------------</p>
        <button @click='flag=!flag'>切换</button>

    </div>
        
</template>
<script>
     export default{
         name:'ifAndShow',
         data(){
             return{
                 flag:true, //上班·  fasle,不上班
             }
         }

     }
</script>
<style>

</style>