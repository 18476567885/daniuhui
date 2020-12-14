<template>
  <div>
      <div v-for='(i7,index) in abc' v-model='asd' >
      {{index}} {{i7}}
      <div><button @click='jianchi(index)'>按钮</button></div>
          
      </div>
  
  </div>
</template>
<script>
    export default{
          data(){
              return{
              
                  asd:'',
                  abc:[
                      '斗破',
                       '灵笼',
                       '凡人修仙',
                       '魔道'
                  ]
              }
          },
          methods:{
              jianchi(index){
                  console.log(index)
              }
          }
    }
</script>
<style>

</style>