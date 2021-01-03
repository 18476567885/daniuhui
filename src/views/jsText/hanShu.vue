<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    //定义函数，，定义函数是不会直接执行的
    // function fun(){
    //  console.log("好好学习");
    //  console.log("好好赚钱");
    // }
    // //函数必须要等到调用的时候才能执行
    // fun();

    //  var fun= function fun(){
    //     console.log("我被执行了");
    //  }
    //  fun();

    //    fun();
    // var fun= function(){
    // console.log('a');

    // }
    // function fun(){
    //     console.log('b');

    // }
    // fun();

    // function add(a,b){
    //     var sum=a+b;
    //     console.log('两个数字之和是'+sum);
    // }
    // add(3,5);
    // add(2,4);
    // add(23,4)

    // //定义一个函数，这个函数的功能是计算a到b之间所以整数的和
    // function calcSumFromAtoB(a,b){
    //     for(var i=a, sum=0; i<=b; i++){
    //         sum+=i;

    //     }
    //     console.log("从"+a+'到'+'b'+'的所有参数的和是'+sum);

    // }
    // calcSumFromAtoB(3,7);

    // //不管用户传入几个实际参数，永远能够计算它们的和
    //      function fun(){
    //         //  console.log(arguments);
    //         //  console.log(arguments[0]);
    //         //  console.log(arguments[3]);
    //         //  console.log(arguments[4]);
    //         var sum=0;
    //         for(var i=0; i<arguments.length; i++){
    //             sum+=arguments[i]
    //         }
    //      console.log("所有参数的和是"+sum);

    //      }
    //      fun(33,4,4,567,87,)

    //  //函数返回值 return
    //  //函数功能是返回两个参数的和
    //  function sum(a,b){
    //      return a+b;
    //  }
    //  //有 return 必须有变量接收
    //   var result= sum(3,4);
    //   console.log(result);

    // //书写一个函数，函数的功能判断一个数字是否为偶数
    // function checkEven(n) {
    //   if (n % 2 == 0)
    //   return true;

    //   return false;
    // }
    // var result = checkEven(63);
    // console.log(result);

    // //计算一个数字的阶乘
    // function fac(n) {
    //     //累乘器
    //     var result=1;
    //     for(var i=1; i<=n; i++){
    //         result *= i;
    //     }
    //     return result;
    // }
    // //穷举法，从100到999寻找喇叭花数
    // for(var i=100;i<=999; i++){
    //     //把数字i变为字符串
    //     var i_str=i.toString();
    //     //abc分别表示百位 十位 个位
    //     var a=Number( i_str[0]) ;
    //     var b=Number( i_str[1]) ;
    //     var c=Number(i_str[2]);
    //     // console.log(a,b,c);
    //     if(fac(a)+fac(b)+fac(c)==i){
    //         console.log(i);
    //     }
    // }

    // var arr=[33,44,22,11,4,8,88];
    // arr.sort(function(a,b){
    //    if(a>b){
    //        return 1;
    //    }else{
    //        return -1;
    //    }
    // })
    // console.log(arr);

    //  var arr=[33,44,22,11,4,8,88];
    // arr.sort(function(a,b){
    //     return a-b;
    // })
    // console.log(arr);

    //    //实现递归的小程序
    //    //书写一个函数，这个函数内部自己会调用自己，从而形成递归。
    //    function fac(n){
    //        //这个是递归的出口，如果计算1的阶乘，可以不用递归了，直接告诉你答案就是1
    //        if(n==1) return 1;
    //        //函数的功能是计算n的阶乘；n!就是 n*(n-1)!
    //        //如果询问的不是1的阶乘，就返回 n*(n-1)!
    //        return n*fac(n-1);
    //    }
    //    var result=fac(7);
    //    console.log(result);

    //   //斐波那契数列是这样的数列:1,1,2,3,5,8,13,21
    //   //规律：下标为0和1的项的值都是 1，从下标 为2的项 开始，每项等于前面两项的和

    //   //编写一个函数，这个函数功能是返回 斐波那契数列中下标为 n的那项的值
    //   function fib(n){
    //       //数列的下标为 0的项，和下标为1的项 值为1
    //       if(n==0||n==1) return 1;
    //       //斐波那契数列的本质特征就是 每一项都等于前面两项 的和
    //      return fib(n-1)+fib(n-2);
    //   }
    //   //书写一个循环语句，计算斐波那契数列的前 15项
    //   for(var i=0; i<15; i++){
    //       console.log(fib(i));
    //   }

    // //原数组
    // var arr1=[33,44,55,66,2];
    // //测试一下这样的语句能否克隆数组
    // var arr2=arr1;

    // arr1.push(888);
    // //arr2是否受影响
    // console.log(arr2); //受到影响
    // console.log(arr1==arr2);   // true,说明是内存地址相同，是同一个数组，只是变量名多了

    // //原数组
    // var arr1=[22,3,4,5,66,];
    // //准备空数组
    // var result=[];
    // //遍历原数组，将遍历到的项推入空数组中
    // for(var i=0; i<arr1.length; i++){
    //     result.push(arr1[i]);
    // }
    // console.log(result);
    // //测试
    // arr1.push(88);
    // console.log(result);
    // console.log(result==arr1);   //结果fasle;说明两个数组的内存地址不一样，是两个不同的数组

    // var arr1=[1,23,43,4,5,];
    // var arr2=[];
    //   arr2= arr2.concat(arr1);
    // console.log(arr2);

    // //原数组
    // var arr1=[33,44,5,[6,66,[77,43]]];
    // //函数，这个函数会被递归
    // function deepClone(arr){
    //     //结果数组,每一层都有一个结果数组
    //     var result=[];
    //   //遍历数组的每一项
    //   for(var i=0; i< arr.length; i++){
    //    //类型判断,如果遍历到的这项是数组
    //    if(Array.isArray(arr[i])){
    //        //递归
    //       result.push( deepClone(arr[i]));
    //    }else{
    //        //如果遍历到的这项不是数组，是基本类型值，就直接推入到结果数组中，
    //        //相当于递归的出口
    //     result.push(arr[[i]]);

    //    }
    //   }

    //     //返回结果数组，每一层都有一个结果数组
    //     return result;
    // }
    //  //测试
    //  var arr2=deepClone(arr1);
    //  console.log(arr2);

    // var a
    // function fun(){
    //     a=5;
    //     a++;
    // }
    // fun();
    // console.log(a);

    // //全局变量
    // var a=10;
    // function fun(){
    //     //局部变量，会把全局的变量a遮蔽
    //     var a=5;
    //     a++;
    //     console.log(a);    // 6

    // }
    // fun();
    // console.log(a);    //10

    // var m=1;
    // function fun(){
    //     m++;     //变量提升，只提升定义，不提升值，
    //            //局部变量a被自增1，a此时是undefined，自增1结果是NaN
    //   var m=4;
    //       //重新将a赋值为4
    //   console.log(m)   //4
    // }
    // fun();
    // console.log(m);  //1

    // //封装一个函数，这个函数的功能是私有化变量
    // function fun(){
    //     var a=0;
    //     return function(){
    //         alert(a);
    //     }
    // }
    // var getA=fun();
    //  getA();

    //   var age=12;
    //    var sex="男";
    //    var title=(function(){

    //    if(age<18){
    //       return '小朋友';

    //    }else{
    //        if(sex=="男"){
    //            return "先生";
    //        }else{
    //           return "女士";
    //        }
    //    }

    //    })();
    //    alert(title);

    var arr = [];
    for (var i = 0; i < 5; i++) {
      (function(i) {
        arr.push(function() {
          alert(i);
        });
      })(i);
    }
    arr[2]();
  }
};
</script>
