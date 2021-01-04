<template>
  <div>
   
  </div>
</template>
<script>
export default {
  mounted() {
    //数组的浅克隆
    // var arr = [12, 3, 4, 54, 66, 88];
    // var arr2=[];
    // for(var i=0; i<arr.length; i++){
    //     arr2.push(arr[i])
    // }
    // console.log(arr2);
    // //检测是否克隆成功
    // console.log(arr==arr2);


    
    // var arr=[12,22,3,43,288,8];
    // var arr2=[];
    // var arr3=arr2.concat(arr);
    // console.log(arr3);
    // console.log(arr3==arr);


    // //全局变量
    // var huihui=8;
    // function fun(){
    //     //局部变量,遮蔽全局变量
    //    var  huihui=5;
    //     huihui++;
    //     console.log(huihui);   //6
    // }
    // //调用函数
    // fun();
    // console.log(huihui);    // 8


    
    //变量声明提升的情况
    // var a=4;
    // function fun(){
    //     a++;     //这个a一开始是undefined,后递增，是NaN
    //     var a=1;    //重新赋值
    //     console.log(a); //1  

    // }
    // fun();   
    // console.log(a);  //4




//     //参数形参，实参
//    function fun(a,b){   //a,b是形参
//      var sum=a+b;
//      console.log("这两个数的合是"+sum);
//    }
//    fun(12,34);  //实参
//    fun(23,34,);
//    fun(11,88);
//    //形参与实参尽可能保持一致，否则容易出现报错，或结果为NaN



//定义一个函数，计算a~b之间所有整数和
// var sum=0;
// function add(a,b){
//     for(var i=a; i<=b; i++ ){
//         sum+=a;
//     }
//     console.log(sum);

// }
// add(5,10);




//递归两要素：出口（终止条件）； 递归体内容
// function fac(n){
//     if(n==1) 
//     //出口
//     return 1;
//     //递归体
//     return n*fac(n-1);
// }
//  var abc= fac(6);
// console.log(abc);



//递归两要素：出口（终止条件）；递归体
// function fib(n){
//     if(n==1||n==0) 
//     return 1;
//     return fib(n-1)+fib(n-2);
// }
// for(var i=0; i<=15; i++){
//    console.log(fib(i));
// }



//return 函数返回值
// function fun(a,b){
//     return a+b;
// }
// //return必须要有变量接收
// var vip=fun(34,56);
// console.log(vip);



//调用函数时，遇到return会立即退出函数

//判断数字是否为偶数

// function fun(n){
//     if(n%2==0) return true;
//     return false;
// }
// var m=fun(84);
// console.log(m);



//javascript内置 sort()方法排序
//  var arr=[12,2,33,41,11,1,3,88,9];
//  arr.sort(function(a,b){
//      //a,b分别代表靠前，靠后的项，如需将它们转换位置，返回任意正数  否则为任意负数
//      if(a>b) return 1;
//      return -1;
//  })
//    console.log(arr);





//深克隆 整体思路和浅克隆相似

// //原数组
// var arr1=[12,23,122,[3,[75,4,],31]];

// //定义递归函数（调用自己）
// function fun(arr){
//     //结果数组
//    var  result=[];
//     //遍历数组的每一项
//     for(var i=0; i<arr.length; i++){
//       //类型判断，如果遍历的这项是数组
//       if(Array.isArray(arr[i])){
//           //递归
//         result.push(fun(arr[i]));
//       }else{
//           //如果遍历到的这项不是数组，是基本类型值，就直接推入结果数组中，递归的出口
//         result.push(arr[i]);
//       }
//     }
    
// //返回结果数组
// return result;

// }
// var arr2=fun(arr1);
// console.log(arr2);
// console.log(arr2[3]==arr1[3]);



// //创建一个函数
// function fun(){
//     //定义局部变量
//     var name='慕课网'
//     //返回一个局部函数
//     return function(){
//       console.log(name);
//     };
// }
// //调用外部函数，就能得到内部函数，用变量inn接收
// var inn =fun();

//     //执行inn函数，就相当于在fun函数的外部，执行了内部函数
// inn();



//  function create(stan){
//       function  cre(n){
//   if(n<=stan){
//       console.log('你的体温正常');
//   }else{
//       console.log('你的体温偏高');
//   }
//      }
//      return cre;
//  }
//  //创建一个check函数，它以37.1为标准线
//    var check_A=create(37.1);
// //创建一个check函数，它以37.3为标准线
// var check_B=create(37.3);
//    check_A(37.4);
//    check_A(37.0);
// check_B(37.5);
// check_B(37.2);

  }
};
</script>
 