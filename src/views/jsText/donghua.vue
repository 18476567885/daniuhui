<template>
  <div>
    <div id="box" class="box">
      <ul id="lisa">
        <li><img src="../../assets/erweima.png" alt="" /></li>
        <li><img src="../../assets/img.jpg" alt="" /></li>
        <li><img src="../../assets/logo.png" alt="" /></li>
        <li><img src="../../assets/manhua.jpg" alt="" /></li>
        <li><img src="../../assets/pic.jpg" alt="" /></li>
        <li><img src="../../assets/floor-1.png" alt="" /></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var box = document.getElementById("box");
    var lisa = document.getElementById("lisa");
    
    //复制一遍所有的li
    lisa.innerHTML += lisa.innerHTML;
    //全局变量，表示当前lisa的left值
    var left = 0;
    var time;
    move();
    //动画封装成函数
    function move(){
        //把定时器放入函数中
    time = setInterval(function() {
      left -= 2;
      //验收，算账，重来
      if (left <= -1260) {
        left = 0;
      }
      //改变它的样式值
      lisa.style.left = left + "px";
    }, 20);
    }
    //鼠标进入 停止定时器
    box.onmouseenter = function() {
      clearTimeout(time);
    };

    //鼠标离开继续定时器
    box.onmouseleave=function(){
   move();
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 1000px;
  height: 130px;
  border: 1px solid #000;
  margin: 50px auto;
  /* overflow: hidden; */
}
img {
  height: 130px;
  width: 200px;
}
.box ul {
  list-style: none;
  width: 3000px;
  position: relative;
}
.box ul li {
  float: left;
  margin-right: 10px;
}
</style>
