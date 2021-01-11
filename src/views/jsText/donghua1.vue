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

    //全局变量，表示当前lisa的left值；
    var left = 0;
    var time;
    move();
    function move() {
      //定时器
      time = setInterval(function() {
        left -= 2;
        if (left <= -1260) {
          left = 0;
        }
        lisa.style.left = left + "px";
      }, 20);
    }
    box.onmouseenter = function() {
      clearTimeout(time);
    };
    box.onmouseleave = function() {
      move();
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 1260px;
  height: 130px;
  border: 1px solid #000;
  margin: 50px auto;
  overflow: hidden;
}
ul {
  /* 设置大一点，li才能浮动 */
  width: 5000px;
  list-style: none;
  position: relative;
}
ul li {
  float: left;
  margin-right: 10px;
}
ul li img {
  width: 200px;
  height: 130px;
}
</style>
