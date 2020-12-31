<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    //同时用到累加器和累乘器的题目
    //大厂面试题，用户输入数字，计算圆周率
    //用莱布尼茨及数估算圆周率
    // π=2*（1+ 1/3 + (1*2)/(3*5)+ (1*2*3)/(3*5*7) + (1*2*3*4)/(3*5*7*9)
  //   //... =(1*..n)/(3*5*...2n+1))
  // //累加器，就是最后的答案
  // var sum=0;
  // //累乘器，用来制作每一项，制作出来的这个项，要往·累加器中累加
  // var item = 1;
  // var n =Number(prompt('请输入数字'));
  
  // for(var i=1; i<=n; i++){
  //     //使用累乘器制作出这一项，
  //     item *= i/(2*i + 1);

  //   // console.log(item);
  //   sum+=item
  // }
  //   alert((1+sum)*2) ;
//寻找1--100的符合条件的数字，既能被3整除，也能被5整除的数字
// //穷举法，从1开始试验
// for(var i=1; i<=100; i++){
//   if(i%3==0 && i%5==0){
//     console.log(i)
//   }
// }
//寻找约数
// //让用户输入数字
// var n=Number(prompt('请输入数字'))
// //穷举法
// for(var i=1; i<=n; i++){
//   if(n%i == 0){
//     console.log(i);
//   }
// }
// //寻找水仙花数
// for(var i=100; i<1000; i++){
//   //水仙花数要拆数位
//   //a,b,c分别表示百位，十位，个位
//   var i_str = i.toString();
//   var a=i_str.charAt(0);
//   var b=i_str.charAt(1);
//   var c=i_str.charAt(2);
//   // console.log(a,b,c);
//   if(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)==i){
//     console.log(i);
//   }
// }

// for(var i=0; i<3; i++){
//   for(var j=0; j<3; j++){
//     console.log(i,j)
//   }
// }
//循环嵌套的题目
//寻找1~100的所有质数，
//质数就是只能够被1和它本身整除的数字，最小质数是二
  
//   //穷举法
//   outer: for(var i=2; i<=100; i++){
//   //内层循环开始，从2开始尝试除i,
//   //如果能够整除，说明它不是质数，就可以筛选下一个
//   for(var j=2; j<i; j++){
//     if(i%j == 0){
//       //说明数字i不是质数，
//       //因为他找到了除i和它本身之外的约数，测试下一个数字
//       //要给外层for循环加上label,理解为起名字
//       continue outer;
//     }
    
//   }
//   console.log(i)
// }

//  //鸡兔同笼的问题。
//  //假设小鸡有a只，兔子有b只
//  for(var a=0; a<=35; a++){
//    for(var b=0; b<=35; b++){
//      if(a+b==35 && 2*a+4*b==94){
//        console.log('小鸡有'+a+"只，兔子有"+b+'只');
//      }
//    }
//  }

// //数组的定义方法1
// var arr1=[33,34,55,556];
// //第二种方法
// var arr2=new Array(33,44,55,77);
// //定义第三种方法,表示这个数组存储了4组数据，长度为4
// var arr3=new Array(4);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// var arr=['a','c','b','gt'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// console.log(arr.length);
// console.log(arr[arr.length-1]);

// var arr=['u','y','r','t'];
// arr[2]=arr[2].toUpperCase();
// arr[6]='1'
// console.log(arr);

// var arr=[34,4,45,5,,,66656,6,76,,];

// for(var i=0; i<arr.length; i++){
//   console.log(arr[i]);
// // }
// var arr=[1,24,,5,66,]
// //方法就是打点调用的函数，所以是数组打点调用它们
// arr.push(566,78,6);
// console.log(arr);


// var arr=[23,4,5,56,6,]
// //删除最后一项
// var item=arr.pop();
// console.log(arr);
// //返回被删除的一项
// console.log(item);

var arr=[1,2,3,4,5,6];
arr.splice(3,2,66,77,88,99,);
console.log(arr);
}
};
</script>
