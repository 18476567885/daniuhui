<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    // // 1) let 和 const是什么
    // // 声明变量和声明常量
    // // var声明变量
    // // let 代替var ，声明变量
    // // const声明常量 constant

    // // 2)  let 和const的用法
    // // 和var 一样
    // var userName='daLin';
    // let age =18;
    // const sex='male';
    // console.log(userName,age,sex);

    // // 什么是变量，什么是常量
    // userName='zs';
    // age="28";
    // console.log(userName,age);
    // // var ,let 声明的就是变量，变量一旦初始化之后，还可以重新赋值
    // //const 声明的是常量，常量一旦初始化，就不能重新赋值，否则就报错

    // 为什么需要const
    // let
    // let sex ="male";
    // //    错误做法
    //         const sex;
    //         sex="male";

    // 2）const声明的常量，允许在不重新赋值的情况下修改它的值

    // 基本数据类型
    // 会报错
    // const sex='male';
    // sex='daLin'

    // 引用数据类型
    // const person={userName:'daLin'};
    // person.userName="obj"
    // console.log(person);

    //1）重复声明：已经存在的变量和常量，又声明了一遍
    // var 允许重复声明，let const不允许
    // function fun(a){
    //     let a=1
    // }
    // fuu();   报错

    // 2）变量提升
    // var 会提升变量的声明到当前的作用域的顶部
    // 相当于 变量提升了，值并没有
    // console.log(a);
    // var a=1;

    // let const,不存在变量提升  养成编程习惯：先声明再使用

    // 3）暂时性死区：只要作用域内 存在let const，它们所声明的变量或常量就
    // 自动“绑定” 在这个区域，不再受外部作用域 的影响
    // let a = 2;
    // let b=1
    // function fun() {
    //   console.log(a);   //找不到
    //   let a = 1;
    //   console.log(b);  //1

    // }
    // fun();

    // 4）window对象的属性和方法
    // 全局作用域中，var声明的变量，通过function声明的函数，
    // 会自动变为window对象的属性或方法
    // let const不会
    // var age = 18;
    // function add() {}
    // // console.log(window.age);   18
    // console.log(window.add === add);  true

    // let ，const

    // 5）块级作用域
    // 什么是块级作用域
    // var 没有块级作用域
    // for (var i = 0; i < 3; i++) {
    //   console.log(i);
    // }
    // console.log(i);  可以查找到

    // let，const有块级作用域
    // for(let i=0;i<3;i++){
    //     console.log(i);
    // }
    // console.log(i);  会报错·

    // 2）作用域链：内层作用域->外层作用域->....->全局作用域
    // function func(){
    //     for(let i=0;i<3;i++){
    //         // console.log(i);  正常输出
    //     }
    // }
    // func();
    // console.log(i);   报错

    // 3）哪些块作用域  与let，const合用才有
    // {}
    // {
    //   let age = 18;
    //   console.log(age);
    // }
    // for(){};  while(){}  ;do{} while() ;if(){}  ;switch(){}
  }
};
</script>
