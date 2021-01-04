<template>
    <div>
     <table id="mytable"></table>
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





//创建九九乘法表
var mytable=document.getElementById('mytable');
for(var i=1; i<=9; i++){
    //创建了tr标签
    var tr=document.createElement('tr');
    for(var j=1; j<=i; j++){
        //创建了td标签
        var td=document.createElement('td');
        //设置td内部的文字
        td.innerText=i+'乘'+j+'等于'+(i*j);
        //让tr追加td标签
        tr.appendChild(td);
    }
    //让mytable追加tr标签
    mytable.appendChild(tr)
}
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