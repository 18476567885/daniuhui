<template>
    <div>
    <div id="box1">
        <div id="box2">
            <div id="box3">

            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default{
    mounted(){
//         var box=document.getElementById('box');
//   //给这个盒子添加点击事件监听
//   box.onclick=function(){
//       console.log('onclick');
//   };

//   box.onmousedown=function(){
//       console.log('onmousedown');
//   } ;
//   box.onmouseup=function(){
//       console.log('onmouseup');
//   };
//   box.onmouseenter=function(){
//       console.log('onmouseenter');
//   };
//   box.onmouseleave=function(){
//       console.log('onmouseleave');
//   };
//   box.ondblclick=function(){
//       console.log('ondblclick');
//   };
//   box.onmousemove=function(){
//       console.log('onmousemove');
//   };

// var namefle =document.getElementById('namefle');
// namefle.onkeydown= function(){
//     console.log('我是onkeydown');
// };
//     namefle.onkeypress=function(){
//         console.log('我是onkeypress');
        
//     }
// namefle.onkeyup=function(){
//     console.log('onkeyup');
// }
// var myform=document.getElementById('myform');
// var namefle=myform.namefle;
// var agefle=myform.agefle;

// namefle.onchange=function(){
//     console.log('你已经修改完姓名');
// };
// namefle.oninput=function(){
//     console.log('你正在修改姓名');
// };
// namefle.onfocus=function(){
//     console.log('得到焦点');
// }

var oBox1=document.getElementById('box1');    
var oBox2=document.getElementById('box2');    
var oBox3=document.getElementById('box3');    


oBox1.onclick=function(){
    console.log("我是box1");
};

oBox2.onclick=function(){
    console.log("我是box2");
};


oBox3.onclick=function(){
    console.log("我是box3");
};

}
}
</script>
<style>
/* #box{
    width: 200px;
    height: 200px;
    background-color: #ccc;
} */


#box1{
     width: 202px;
    height: 202px;
    border: 1px solid #000;
    padding: 50px;
};



#box2{
     width: 100px;
    height: 100px;
    border: 1px solid #000;
    padding: 50px;
};

#box3{
     width: 100px;
    height: 100px;
    border: 1px solid #000;
};



</style>