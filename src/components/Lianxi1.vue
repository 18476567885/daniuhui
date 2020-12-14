<template>
    <div>
      <div>
          <input type="radio" v-model='first' value="man">男
           <input type="radio" v-model='first' value="woman">女
           <p>已选{{first}}</p>
           <input type="checkbox" v-model='name' value="a">吃饭
           <input type="checkbox" v-model='name' value="b">睡觉
           <input type="checkbox" v-model='name' value="c">看戏
           <input type="checkbox" v-model='name' value="d">吃瓜
           <p>已选{{name.join('')}}</p>

           <button @click='click'>按钮</button>
      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               first:'',
             name:[] //给v-model绑定一个相同的数组类型的属性：
            }
        },
        methods:{
            click(){
                console.log(this.first,this.name)
            }
        }
    }
</script>
<style>

</style>