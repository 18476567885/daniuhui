<template>
  <div>
    <p>性别：</p>
    <input type="radio" v-model="first" value="man">
    <label for="man">男</label>
    <input type="radio" v-model="first" value="woman"/>
    <label for="woman">女</label>
    <p>已选：{{ first }}</p>
    <p>候选人名单：</p>
	<input type="checkbox" v-model="second" value="Jack" />        
	<label>Jack</label>
	<input type="checkbox"v-model="second" value="Bob" />
	<label>Bob</label>
	<input type="checkbox" v-model="second" value="Lily" />
	<label>Lily</label>
  <p>已选：{{second.join('  ')}}</p>
  <button @click='click'>按钮</button>
  
  
  </div>
</template>

<script>
  export default{
    data(){
      return{
        first:'',
        second:[]
      }
    },
    methods:{
      click(){
        console.log(this.first,this.second)
      }

    }
  }
</script>
<style>

</style>