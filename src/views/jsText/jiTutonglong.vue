<template>
  <div>
    <input type="text" id="box" />
    <h1 id="info"></h1>
  </div>
</template>
<script>
export default {
  mounted() {
    //     //鸡兔同笼，头35只，脚94只
    //     //假设小鸡有a只，兔子有35-a只
    //     for( var a=0;a<35;a++){
    //         var b=35-a;
    //         if(2*a+4*b==94){
    //   console.log(a,b);
    //         }
    //     }

    // for (var a = 0; a < 35; a++) {
    //   for (var b = 0; b < 35; b++) {
    //     if (2 * a + 4 * b == 94 && a + b == 35) {
    //       console.log( '小鸡有'+ a+ '只', '兔子有' + b  + '只');
    //     }
    //   }
    // }

    //要求用户输入一个三位数
    // var n = Number(prompt("请输入一个三位数"));
    // if (!isNaN(n) && 100 <= n && n <= 999) {
    //   var n_str = n.toString();
    //   var a = Number(n_str.charAt(0));
    //   var b = Number(n_str.charAt(1));
    //   var c = Number(n_str.charAt(2));
    //   if (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) == n) {
    //     console.log("这个数字是水仙花数");
    //   } else {
    //     console.log("这个数字不是水仙花数");
    //   }
    // } else {
    //   console.log("不是水仙花数");
    // }

    // alert("周日是0");
    // var age = Number(prompt("请输入年龄"));
    // var week = Number(prompt("请输入星期"));
    // if (week == 0 || week == 6) {
    //   if (age > 18) {
    //     console.log("500");
    //   } else {
    //     console.log("210");
    //   }
    // } else {
    //   if (age < 18) {
    //     console.log("140");
    //   } else {
    //     console.log("300");
    //   }
    // }

    //寻找既能被3整除又能被5整除的数，100内
    // for (var i = 1; i <= 100; i++) {
    //   if (i % 3 == 0 && i % 5 == 0) {
    //     console.log(i);
    //   }
    // }

    //寻找约数
    // var n = Number(prompt("请输入一个数字"));
    // for (var i = 1; i <= n; i++) {
    //   if (n % i == 0) {
    //     console.log(i);
    //   }
    // }

    //累加器算法题
    // var sum = 0;
    // for (var i = 1; i <= 100; i++) {
    //   sum += i;
    // }
    // console.log(sum);

    //累乘器
    // var n = Number(prompt(""));
    // var result = 1;
    // for (var i = 1; i <= n; i++) {
    //   result *= i;
    // }
    // console.log(result);

    //累加器和累乘器

    // π=2*（1+ 1/3 +  (1*2)/(3*5) + (1*2*3)/(3*5*7) +.......(1*2*3*4.....n)/(3*5*7*9.....(2n+1))
    //   var sum = 0,
    //     result = 1;
    //   var n = Number(prompt("计算数字"));
    //   for (var i = 1; i <= n; i++) {
    //     result *= i / (2 * i + 1);
    //   sum += result;

    //   }
    //  console.log((1+sum)*2)

    // for (var i = 0; i < 3; i++) {
    //   for (var j = 0; j < 3; j++) {
    //     console.log(i, j);
    //   }
    // }

    //小鸡兔子共35只，脚94只
    // for (var a = 0; a < 35; a++) {
    //   var b = 35 - a;

    //   if (2 * a + 4 * b == 94) {
    //     console.log(a, b);
    //   }
    // }

    // var obox = document.getElementById("box");
    // var oinfo = document.getElementById("info");
    // obox.onkeypress = function(e) {
    //   oinfo.innerText = "你输入的字符的字符码是" + e.charCode;
    // };
  }
};
</script>
