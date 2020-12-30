<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    //         //创建累加器
    //         var sum = 0;
    //         //遍历1到100的每个数字，每遍历一个数字要把这个数字加到sum中去
    //  for (var i=1 ; i<=100 ; i++){
    //      sum+=i;
    //  }
    //  //输出累加器的值
    //  console.log(sum)
    // //寻找1--100的符合条件的数字，除以3余一，除4余2，除5余3
    // for (var i=1;i<=100;i++){
    //     if(i%3 == 1  && i%4 == 2 && i%5 == 3){
    //         console.log(i)
    //     }
    // // }
    // var i=1;
    // while (i<=100){
    //     console.log(i);
    //     i++;
    // }
    //寻找满足n的平法大于456789的最小整数
    //   //穷举法，从1开始试验
    //   var n=1;
    //   while(n*n<=456789){
    //       n++;
    //   }
    //   console.log(n)
    //小兔子拔萝卜，第一天拔一个，第二天拔两个，第三天拔三个。。。
    //问第几天能拔完500个萝卜
    //  //天的序号，也是这一天拔的萝卜数
    //   var n=1;
    //   //累加器
    //   var sum=0;
    //   while(sum<500){
    //       sum += n;
    //       //注意最后一下，条件跟变化不是同一个时,容易出现“出一错误”
    //     n++;
    //   };
    //   //一定要注意，这里有一个“出一错误”
    //   //手动清除
    //   console.log(n - 1);

    // //随机一个数字，2--99之间
    // var answer = parseInt(Math.random()*98) + 2;
    // //为了能够不断重复的执行询问，此时就必须使用死循环
    // while(true){
    //     //询问用户猜测的数字
    //     var n = Number(prompt('请猜测数字 1~100'));
    //     //判断用户输入的数字和 answer 的关系
    //     if(n>answer){
    //         alert('你输入的数字太大了')
    //     }else if(n<answer){
    //         alert('你输入的数字太小了')
    //     }else{
    //         alert('猜对啦！')
    //     }
    // }

    // var n = 1 ;
    // while(n * n <= 456789){
    //     n++ ;
    // };
    // // console.log(n);
    // var n=1;
    // while(true){
    //    if(n * n > 456789){
    //        console.log(n)
    //       break;
    //    }
    //     n++;
    // // }
    // var n=1,
    //  sum=0;
    // while(true){
    //  if(Number(sum=sum+n) >=500){
    //  console.log(n);
    //   break;

    //  } n++;

    //     // }
    //    do{
    //        var dx=parseInt(Math.random()*9)-4
    //        var dy=parseInt(Math.random()*9)-4
    //    }while(dx==0 && dy==0)
    //    console.log(dx,dy)
    /* 
    var answer = parseInt(Math.random() * 98) + 2;
    var min = 1,
      max = 100;
    while (true) {
      var n = Number(prompt("请猜测数字" + min + "~" + max));
      if (n <= min || n >= max) {
        alert("你输入的数字不在范围内");
        continue;
      }
      if (n > answer) {
        alert("你输入的数字太大了");
        max = n;
      } else if (n < answer) {
        alert("你输入的数字太小了");
        min = n;
      } else {
        alert("恭喜你猜对啦");
        break;
      }
    } */

/* 
    //由用户输入数字n，计算 3/2 + 4/3 + 5/4 +....+ (n+1)/n  的结果
    //用户输入数字 n
    var n = Number(prompt('请输入数字'));
    // 累加器
    var sum = 0;
    // 遍历分母就可以，因为分子就是分母加1的关系
    for(var i = 2;i <= n;i++){
        sum += (i+1)/i
    }
    alert(sum.toFixed(2)); */


    // // 计算阶乘
    // // 请用户输入数字
    // var n=Number(prompt('请输入数字'))
    // // 累乘器，一定要注意，累乘器要从1开始，
    // var result = 1;
    // // 倒着遍历，计算阶乘
    // for(var i=n; i>=1 ;i--){
    //     result *= i;
    // }
    // // 显示结果
    // alert(result);
  }
};
</script>
