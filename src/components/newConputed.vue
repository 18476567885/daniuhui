<template>
<div>
    <h3>计算属性compute 和监听器watch</h3>
    <label>姓：<input type="text" placeholder="请输入" v-model='firstname'></label>
    <p></p>
    <label>名：<input type="text" placeholder="请输入" v-model='lastname'></label>
    <p></p>
    <label>姓名：<input type="text" placeholder="请输入" v-model='fullname'></label>
    <p>双向绑定</p>
   
    <label>姓名：<input type="text" placeholder="请输入" v-model='three'></label>
    <p>Watch</p>
    <label>姓名：<input type="text" placeholder="请输入" v-model='fullnamethree'></label><p></p>
    
</div>
</template>
<script>
 export default {
     data() {
         return {
               firstname:'',
               lastname:'',
               //被watch监听改变
               fullnamethree:'',
              
         }
     },
     //配置计算属性
     computed: {
         fullname() {
             return this.firstname + '.'+this.lastname
         },
         three:{
          get(){
              console.log("getter")
             return this.firstname +"."+ this.lastname

          },
          set(value){
              console.log("setter")
              //更新first和last
              let names=value.split(".")
              console.log(names);
              this.firstname=names[0];
              this.lastname=names[1]
          }
         }
     }  
      //配置watch
      ,
      watch: {
       //监听firstname
       firstname(value){
           console.log('watch监听到firstname发生改变,${value}')
           //更新fullnamethree
           this.fullnamethree = value + "." + this.lastname
       },
       //监听lastname
       lastname(value){
           console.log('watch监听到lastname发生改变,${value}')
           this.fullnamethree = this.firstname + "." +  value

       }
      }           
             
         
     }
 
</script>
<style>
  
</style>