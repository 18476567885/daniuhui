<template>
    <div>
   <div id="box"></div>
    </div>
</template>

<script>
  export default{
      mounted(){
        var obox=document.getElementById('box');

//全局变量t,l分别表示盒子的 top属性值和left属性值
var t=200, l=200;
// 监听document对象的键盘按下事件监听，表示当用户在按下按键时做的事情
document.onkeydown=function(e){
    switch(e.keyCode){
        case 37 :
            l-=3;
            break; 
             case 38 :
            t-=3;
            break;
            case 39 :
            l+=3;
            break;
            case 40:
            t+=3;
            break;
    }
    //更改样式
    obox.style.left=l+'px';
    obox.style.top=t+'px';

}
      }
  }
</script>
<style>
#box{
    position: absolute;
    top: 200px;
    left: 200px;
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>