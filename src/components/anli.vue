<template>
  <div id="app">
    <fieldset>
      <legend>指令综合练习</legend>
      <div>
        <span>姓名： </span>
        <input type="text" placeholder="请输入" v-model="NewPerson.name" />
      </div>
      <div>
        <span>年龄： </span>
        <input type="text" placeholder="请输入" v-model="NewPerson.age" />
      </div>
      <div>
        <span>性别：</span>
        <select v-model="NewPerson.sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div>
        <span>手机：</span>
        <input type="text" placeholder="请输入" v-model="NewPerson.phone" />
      </div>
      <button @click="createNewPeerson()">创建新用户</button>
    </fieldset>
    <table>
      <thead>
        <tr>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>手机</td>
          <td>删除</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in persons">
          <td v-text="p.name"></td>
          <td v-text="p.age"></td>
          <td v-text="p.sex"></td>
          <td v-text="p.phone"></td>
          <td>
            <button @click="delPerson(index)">删除</button>
          </td>
        </tr>
      </tbody>
      
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      persons: [
        { name: "张三", age: 18, sex: "男", phone: "134667" },
        { name: "李四", age: 18, sex: "女", phone: "134667" },
        { name: "王五", age: 18, sex: "男", phone: "134667" },
        { name: "赵六", age: 18, sex: "女", phone: "134667" },
        { name: "李琦", age: 18, sex: "男", phone: "134667" }
      ],
      NewPerson: { name: "", age: 0, sex: "男", phone: "" }
    };
  },
  methods: {
    //1 添加
      createNewPeerson() {
        //1,验证
      let { name, age, sex, phone } = this.NewPerson;
      if (name == "") {
        alert("姓名不能为空");
        return;
      }
      if (age <= 0) {
        alert("年龄不正确");
        return;
      }

      if (phone == "") {
        alert("电话不能为空");
        return;
      }
      //2,插入数据
      this.persons.unshift(this.NewPerson);
      //3,清空数据
      this.NewPerson = { name: "", age: 0, sex: "男", phone: "" };
    }, //2 删除
    delPerson(index) {
      this.persons.splice(index, 1);
    }
  }
};
</script>
<style scoped>
#app {
  margin: 50px auto;
  width: 600px;
}
fieldset {
  border: 1px solid orangered;
  margin-bottom: 20px;
}
fieldset input {
  width: 200px;
  height: 30px;
  margin: 10px 0;
}
table {
  width: 600px;
  border: 2px solid orangered;
  text-align: center;
}
thead {
  background-color: orangered;
}
</style>
