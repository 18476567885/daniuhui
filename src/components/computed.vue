<template>
  <div>
      <label>姓：<input  type="text" placeholder="请输入姓氏" v-model='firstName'></label></br>
      <label>名：<input  type="text" placeholder="请输入名字" v-model='lastName'></label>
   <p>------------------------------------------------------</p>
   <!--单向影响-->
   <label>姓名：<input  type="text" placeholder="请输入姓名" v-model='fullName'></label><br/>
   <!--双向-->
   <label>姓名：<input  type="text" placeholder="请输入姓名" v-model='fullNameTwo'></label>
   <p></p>
   <label>姓名：<input  type="text" placeholder="请输入姓名" v-model='fullNameThree'></label>


  </div>
</template>
<script>
      export default{
          name:'computed',
          data(){
              return{
                  firstName:'', //姓
                  lastName:'', //名
                  //被watch监听改变
                  fullNameThree:''
              }
          },
          computed:{

              //计算属性 姓名
             fullName:{
                  get(){
                    return this.firstName+"."+this.lastName
                  
                  }
                   
              },
              fullNameTwo:{
                   get(){
                        console.log(`调用了fullNameTwo的getter方法`);
                              return this.firstName+"."+this.lastName;
                   },
                   set(value){
                         console.log(`调用了fullNameTwo的setter方法,值:${value}`);
                           //更新firstName和lastName
                           let names = value.split('.');
                           console.log(names);
                           this.firstName = names[0];
                           this.lastName=names[1];
                   }
              }
         }
         }

      
</script>
<style>
    
</style>    