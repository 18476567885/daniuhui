<template>
  <div>
   <p v-if='isShow'>{{asad}}</p>
   <p v-else>{{strl}}</p>
 
  
  </div>
</template>
<script>
  export default{
      beforeCreat(){
         console.log('1, beforCreat()');
      },
      //函数，数据
      data(){
          return{
           isShow: false,
           asad: '坚持',
           strl: 'itlike.com',
          }
      },
      //函数，数据

      methods:{
      
    
      },
      created(){
        console.log('2, beforCreat()');
      },
      beforeMount(){
        console.log('3, beforCreat()');
         
      },
      mounted(){
        console.log('4, beforCreat()');
         //定时器
         setInterval(() => {
             console.log("2222222222222222222222"),
             this.isShow=!this.isShow;
         }, 2000);
      },
      beforeUpdate(){
        console.log('5, beforCreat()');

      },
      update(){
        console.log('6, beforCreat()');
         
      },
      beforeDestroy(){
        console.log('7, beforCreat()');

      },
      destroyed(){
        console.log('8, beforCreat()');

      },
  }
</script>
<style>

</style>