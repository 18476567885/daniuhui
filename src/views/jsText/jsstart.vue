<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    //    var a=6
    //       a=66
    //       console.log(a)
    //    console.log(a)
    //    var a=12
    // //    console.log(a)
    // var a=123,b=456,c='wo'-1
    // console.log(a)
    // console.log(typeof a)
    // console.log(c)
    // console.log(typeof c)
    // var topval='28px'
    //    console.log(topval-10)
    //    var c= "abc58"
    //    console.log(parseInt(c))
    //    var ids=36749,abc=ids.toString()
    //    console.log(abc)
    //    console.log(typeof abc)
    /*  var num1='10c',
      num2=5,
      num3=++num1+num2;
      console.log(num1);  //11
      console.log(num3) ;  //16
      console.log(isNaN(num1));
      var  num1=10,num2=20,
num3= --num1+num2--
console.log(num1);      // 9
console.log(num3);       
console.log(num1>num2)   
     */
    /* 
    var soce=55;
    var res=(soce>60)?  "及格":"不及格";
    console.log(res);
    alert(res) */
    /*  var num1=10,  num2=20,num3=30,str="welcome",bool=true,
    n=null, m;
   
    console.log(num1<num2 && num2<num3);
    alert(num3<num2 && num1<num2);
 */ /* 
var m;
console.log(m || NaN || 99)
alert("" || m)
alert(30*'ABC' ||55-"DEF") */ /* 
var daniu='abc'
  alert(!false);
  alert(!!NaN);
  console.log(!80);
  console.log(typeof 'abc'); */
    /*  var age=prompt('请随便输入');
  if (age<18){
      alert('你好嫩呀')
  }
  else{
      console.log('你好呀') */ /* 
  var age =prompt('请随便输入')
  if (age<18){
      alert('你好嫩呀')}
      else if(age>18 && age<60){
          alert("欢迎光临")
      }
      else{console.log('abc')} */ /* 
  var weight=Number(prompt('请输入你的体重，以公斤为单位'));
  var heigt=Number(prompt('身高'));
  var bmi=weight/Math.pow(heigt,2);
  alert('您的bmi指数是'+bmi)
  if(bmi<18.5){
      alert("偏瘦")
  }else if(bmi<24){
      alert('正常')
     
  } else if(bmi<28){
      alert('过胖')
  }else if(bmi<32){
      alert('肥胖')
  }else{
      alert('非常肥胖')
//   } */
    //    var a=987
    //       console.log(String(a))
    //       console.log(typeof a)/*
    /* var n = Number(prompt(""));
    if (!isNaN(n) && 100 <= n && n <= 999) {
      //    当用户输入的数字是合法的
      // 数学方法
      // 百位
      var a = Math.floor(n / 100);
      //  十位
      var b = Math.floor(n / 10) % 10;
      //  个位
      var c = n % 10;
      //根据水仙花数的条件进行
      if (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) == n) {
        alert("这个数是水仙花数");
      } else {
        alert("这个数不是水仙花数");
      }
    } else {
      alert("您输入的不合法");
    } */
    // //   让用户输入星期几
    // var week=Number(prompt('请输入星期几'));
    // var age =Number(prompt('请输入年龄'));
    //让星期几作为大前提条件/*
    /*
if (week==0 || week==6){
    //周末
    if(age>=10){
   alert(500)
    }else{
        alert(210)
    }
}else{
    //平常
    if(age>=10){
 alert(300)
}else{
    alert(140)
}
}
 */

    // //   让年龄成为大前提
    //  if (age>=10){
    //      //年龄大于10
    //      if(week==0 || week==6){
    //          alert(500)
    //      }else{
    //          alert(300)
    //      }
    //  }else{
    //     if(week==0 || week==6){
    //          alert(200)
    //      }else{
    //          alert(140)
    //      }
    // //  }
    // var a=19,
    // //   b=(a>100)? alert('abc'):console.log('123')
    // var n=Number(prompt('请输入'))
    // if (n>5){
    //     alert('这个数大于5')
    // }
    // if (n%2==0){
    //     alert('这个数是偶数')
    // }
    //  alert('再见')
    // var year =Number(prompt("请输入一个年份"))
    // var month = Number(prompt("请输入一个月份"));
    // //分类讨论
    // switch (month) {
    //   case 1:
    //   case 3:
    //   case 5:
    //   case 7:
    //   case 8:
    //   case 10:
    //   case 12:
    //     alert("这个月有31天");
    //     break;
    //   case 4:
    //   case 6:
    //   case 9:
    //   case 11:
    //     alert("这个月有30天");
    //     break;
    //   case 2:
    //       if (year % 4==0 && year % 100 != 0 || year % 100 == 0 &&
    //       year  % 400 ==0){
    //           alert('这个月有29天')
    //       }else{
    //         alert("这个月有28天");
    //       }
       
    //     break;
    //   default:
    //     alert("您输入的月份有误");
    // // }
    // for (var i=1;i<=100;i++){
    //     console.log(i)
    // // }
    // for (var i=18;i>=-6;i-=4){
    //     console.log(i)
    // }
    for (var i=0 ; i<=1;i+=.2){
        console.log(Number(i.toFixed(1)))
    }
  }
};
</script>
