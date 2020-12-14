<template>
   <div>
       <h3>搜索列表</h3>
       <input type="text" placeholder="请输入要搜索的名字" v-model='searcName'>
       <ul> 
           <li>

           </li>
       </ul>
   </div>
</template>
<script>
    
  export default{
      name:'ListRunder22',
      data(){
          return{
              searcName:'',
              persons:[
                  
              {name: '张三',age: 18,sex: '男'},
                      {name: '李四',age: 18,sex: '女',phone:'122344556'},
                      {name: '王五',age: 18,sex: '男',phone:'122344556'},
                      {name: '赵六',age: 18,sex: '女',phone:'122344556'},
                      {name: '李琦',age: 18,sex: '男',phone:'122344556'},
                      {name: '张三',age: 18,sex: '男',phone:'122344556'},
                      {name: '李四',age: 18,sex: '女',phone:'122344556'},
                      {name: '王五',age: 18,sex: '男',phone:'122344556'},
                      {name: '赵六',age: 18,sex: '女',phone:'122344556'},
                      {name: '李琦',age: 18,sex: '男',phone:'122344556'},
                      {name: '张三',age: 18,sex: '男',phone:'122344556'},
                      {name: '李四',age: 18,sex: '女',phone:'122344556'},
                      {name: '王五',age: 18,sex: '男',phone:'122344556'},
                      {name: '赵六',age: 18,sex: '女',phone:'122344556'},
                      {name: '李琦',age: 18,sex: '男',phone:'122344556'},
              ]
          }
      }
   }
</script>
<style>

</style>