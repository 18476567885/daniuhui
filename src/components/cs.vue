<template>
    <div>
        <h1>双括号表达式向页面输出，作用注意标签之间</h1>
        <div>{{daLin}}</div>
        <h4>双括号表达式</h4>
        <div>{{intro.toUpperCase()}}</div>
         <h4>强制数据绑定</h4>
        <h1>给标签属性添加数据，可用v-bind:  (缩写 ：) 
            v-on: （缩写@）；
            data(){return{}}
            包装方法的钩子methods:{}
        </h1>
          <a v-bind:href='site'>学习vue</a>   </br>  
          <a :href='site'>学习vue</a>
          <h3>绑定事件监听</h3>
          <p><button v-on:click='study'>学习vue</button></p>
          <p><button @click ='study'>学习vue</button></p>

          <p><button @click ="study('大林')">学习vue</button></p>
    </div>

</template>
<script>
      export default{
          name:'Template',
          data(){
              return{
                  daLin:'http://www.783bb.com',
                  intro:'like it,it like',
                  site:'http://www.baidu.com',
              }
          },
          methods:{
              study(name){
                  alert(`${name},祝我学有所成！`)
              }
          }
      }
</script>
<style>

</style>