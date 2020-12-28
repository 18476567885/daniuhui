<template>
    <div>
   
    </div>
</template>
<script> 
export default{
  mounted(){
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
 *//* 
var m;
console.log(m || NaN || 99)
alert("" || m)
alert(30*'ABC' ||55-"DEF") *//* 
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
      console.log('你好呀') *//* 
  var age =prompt('请随便输入')
  if (age<18){
      alert('你好嫩呀')}
      else if(age>18 && age<60){
          alert("欢迎光临")
      }
      else{console.log('abc')} */
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
  }


  }

  
  }

</script>