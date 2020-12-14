<template>
  <div  >
    <div v-for='i in 5' :key='i'><input type="text" v-model='first'  >
        <p><button @click='alerts'>获取值</button></p>
    </div>
  
  </div>
</template>
<script>
    export default{
        data(){
            return{
                  first:''
            }
        },
        methods:{
            alerts(){
                alert(this.first)
            }
        }
    }

</script>
<style>

</style>