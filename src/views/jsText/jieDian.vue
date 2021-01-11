<template>
    <div>
   <!-- <table id="mytable">

   </table> -->
<!-- 
   <div id="box1">
       <p id="para">我是段落</p>
   </div>
   <div id="box2">
    <p>我是box2的原有标签</p>
    <p>我是box2的原有标签</p>
    <p>我是box2的原有标签</p>
    <p>我是box2的原有标签</p>
   </div> -->



   <div id="box1">
       <ul>
           <li>牛奶</li>
           <li>可乐</li>
           <li>咖啡</li>
       </ul>
   </div>
   <div id="box2">

   </div>
    </div>
</template>
<script>
    export default{
        mounted(){
    //   var oBox=document.getElementById("box");
    //   oBox.style.backgroundColor="red";
    // oBox.style.backgroundImage='url(https://www.imooc.com/static/img/index/logo-recommended.png)';
    // oBox.style.backgroundSize='contain'

    // oBox.style.fontSize="50px"

//   oBox.setAttribute('data-n',10);
//   var n=oBox.getAttribute('data-n');
//   console.log(n);




//   //创建孤儿节点
//   var oP=document.createElement('p');
//   //设置内部文字
//   oP.innerText='我是新来的';
//   //上树
//   oBox.appendChild(oP);


// //动态创建出一个20行 12列的表格
// var mytable=document.getElementById('mytable');
// for(var i=0; i<20; i++){
//     //创建了tr标签
//     var tr=document.createElement('tr');
//     for(var j=0; j<12; j++){
//         //创建了td标签
//         var td=document.createElement('td');
//         //让tr追加td标签
//         tr.appendChild(td);
//     }
//     //让mytable追加tr标签
//     mytable.appendChild(tr)
// }





// //创建九九乘法表
// var mytable=document.getElementById('mytable');
// for(var i=1; i<=9; i++){
//     //创建了tr标签
//     var tr=document.createElement('tr');
//     for(var j=1; j<=9; j++){
//         //创建了td标签
//         var td=document.createElement('td');
//         //设置td内部的文字
//         td.innerText=i+'乘'+j+'等于'+(i*j);
//         //让tr追加td标签
//         tr.appendChild(td);
//     }
//     //让mytable追加tr标签
//     mytable.appendChild(tr)
// }


// var oBox=document.getElementById('box');
// console.log(oBox);

// var arr=[3,5,6,65,4,31,3,];
//     //准备结果数组
//     var result=[]
//     //遍历数组
//      for(var i=0; i<3; i++){
//          //随机选择一项的下标，数组的下标0~arr.length-1;
//          //之前学习过的  random的公式，[a,b]区间的随机数是 parseInt(Math.random()*(b-a+1)+a)
//          var n=parseInt(Math.random()*arr.length)
//          //把这项推入结果数组
//          result.push(arr[n]);
//          //删除这项，防止重复被随机到
//          arr.splice(n,1);

//      }
//     console.log(result);




var box1=document.getElementById('box1');
var box2=document.getElementById('box2');
// var pare=document.getElementById('para');

// var ps_inbox2=box2.getElementsByTagName('p');

// box2.removeChild(ps_inbox2[0]);
// box2.appendChild(para);

// box2.insertBefore(pare,ps_inbox2[0]);



var theul=document.getElementsByTagName('ul')[0];
//克隆
var new_ul=theul.cloneNode(true);
//上树
box2.appendChild(new_ul)
}
    }
</script>
<style>
td{
    width: 100px;
    height: 30px;
    border: 1px solid #000;
}
</style>