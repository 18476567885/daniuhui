<template>
    <div>
     <button @click='clickBtn("大林",$event)'>点我</button>
     <h3>事件修饰符</h3>
     <a href="http://www.itlike.com" @click.prevent="aClick">撩课学院</a>
     <div style="width: 100px;height: 100px;background-color: red;" @click='divclick'>
     <button @click.stop='btnClick'>点我</button>
              
     </div>
     <h3>按键修饰符</h3>
     <input type="text" @keyup.enter='delKey'>
    </div>
</template>
<script>
    export default {
       methods:{
           clickBtn(args,event){
             console.log(args);
             console.log(event);
           },
           aClick(){
               alert(8);
           },
           btnClick(){
               alert('点击了按钮')
           },
           divclick(){
               alert('点击了父标签')
           },
           delKey(event){
             console.log(event['keyCode'])
           }
       }
    }
</script>
<style>

</style>