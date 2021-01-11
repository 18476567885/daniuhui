<template>
  <div>
    <!-- <input type="text" id="fled" /> -->

    <!-- <div id="box"></div>
    <h1 id="info">0</h1> -->
    <!-- 
    <div id="box">
      <button id="btn">按我</button>
    </div> -->
    <!-- 
    <h1 id="info">0</h1>
    <button id="btn">开始</button>
    <button id="btn1">暂停</button> -->
    <!-- 
    <button id="btn1">2秒后弹出你好</button>
    <button id="btn2">取消弹出</button> -->
    <button id="btn">开始运动</button>
    <div id="box"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    //         var oFled = document.getElementById("fled");
    // oFled.onkeypress = function(e) {
    //   //根据用户输入的字符码（e.charCode）
    //   //数字0~9，字符为 48~57
    //   //小写字母a~z，字符码为97~122
    //   if (
    //     !(
    //       (e.charCode >= 48 && e.charCode <= 57) ||
    //       (e.charCode >= 97 && e.charCode <= 122)
    //     )
    //   ){
    //       e.preventDefault();
    //   }
    // }

    // var obox=document.getElementById('box');
    // var ofled=document.getElementById('info');
    // var a=0;
    // obox.onmousewheel=function(e){

    //     e.preventDefault();
    //     if(e.deltaY>0){
    //         a--
    //     }else{
    //         a++
    //     }
    //     ofled.innerText=a;
    // }

    // var oBox=document.getElementById('box');
    // var oBtn=document.getElementById('btn');
    // // oBox.onclick=function(){
    // //     console.log('我是盒子');
    // // };
    // // oBtn.onclick=function(e){
    // //     e.stopPropagation();
    // //     console.log('我是按钮');
    // // }

    // oBox.addEventListener('click',function(e){
    //     //阻止事件继续传播
    //   e.stopPropagation();
    //     console.log('我是盒子');
    // },true)

    // oBtn.addEventListener('click',function(){
    //     console.log('我是按钮');
    // },true)

    //   var a=0;
    //   setInterval(function(){
    //       console.log(++a);
    //   },2000)

    // setInterval(
    //   function(a, b) {
    //     //形参a的值是88，b的值是66
    //     console.log(a,b);
    //   },
    //   2000,
    //   88,
    //   66
    // );

    // var a=0;
    // function  fun(){
    //     console.log(++a);
    // }
    // setInterval(fun,1000)

    // var oInfo = document.getElementById("info");
    // var oBtn = document.getElementById("btn");
    // var oBtn1 = document.getElementById("btn1");
    // var a = 0;
    // //全局变量
    // var time;
    // oBtn.onclick = function() {
    //     //为了防止定时器叠加，应该设置定时器之前先清除 定时器
    //     clearInterval(time);
    //     //更改全局变量time的值为一个定时器实体
    //   time = setInterval(function() {
    //     oInfo.innerText = ++a;
    //   }, 2000);

    //   oBtn1.onclick=function(){
    //       clearInterval(time);
    //   }
    // };
    //     var btn1 = document.getElementById("btn1");

    //     var btn2 = document.getElementById("btn2");
    //   var time;
    //     btn1.onclick=function(){

    //       time=  setTimeout(function() {
    //       //这个函数会在2秒后执行一次

    //       console.log("你好");
    //     }, 2000);
    //     }
    //     btn2.onclick=function(){
    //         clearTimeout(time);
    //     }

    // //初识异步语句
    // setTimeout(function(){
    //     console.log('a');   //回调函数
    // },2000);

    // console.log('b');   //异步语句不会阻塞程序整常运行

    // //b
    // //a

    // var btn = document.getElementById("btn");
    // var box = document.getElementById("box");
    // //全局变量 盒子的left值
    // var left = 100;
    // //按钮监听
    // btn.onclick = function() {
    //   setInterval(function() {
    //     left += 2;
    //     box.style.left = left + "px";
    //   }, 200);
    // };

    var box = document.getElementById("box");
    var btn = document.getElementById("btn");
    //标示量，指示当前盒子在左边还是右边
    var pos = 1; //1左边，2右边
    //函数节流锁
    var lock = true;

    //事件监听
    btn.onclick = function() {
      //首先检查锁是否是关闭的
      if (!lock) return;
      //把过度加上
      box.style.transition = "all 2s linear 0s";
      if (pos == 1) {
        //瞬间移动，但是有过渡，所以是动画
        box.style.left = "1100px";
        pos = 2;
      } else if (pos == 2) {
        box.style.left = "100px";

        pos = 1;
      }
      //关锁
      lock = false;
      //指定时间将锁打开
      setTimeout(function() {
        lock = true;
      }, 2000);
    };

    // //函数节流公式
    // var lock = true;
    // function x() {
    //   //x代表需要节流的函数
    //   //如果锁是关闭状态，则不执行
    //   if (!lock) return;

    //   //函数核心语句
    //   //关锁
    //   lock = false;
    //   //指定毫秒数后 将锁打开
    //   setTimeout(function() {
    //     lock = true;
    //   }, 2000);
    // }
  }
};
</script>

<style>
#box {
  position: absolute;
  top: 200px;
  left: 200px;
  width: 100px;
  height: 100px;
  background-color: red;
}
/* body{
        height: 2000px;
    } */
</style>
