<template>
  <div>
    <div id="box" class="box">
      <ul id="lisa">
        <li><img src="../../assets/manhua.jpg" alt="" /></li>
        <li><img src="../../assets/3b.jpg" alt="" /></li>
        <li><img src="../../assets/img.jpg" alt="" /></li>
        <li><img src="../../assets/focus.jpg" alt="" /></li>
        <li><img src="../../assets/icons.png" alt="" /></li>
      </ul>
      <a href="javascript:; " id="leftbtn" class="leftbtn"></a>
      <a href="javascript:; " id="rightbtn" class="rightbtn"></a>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var lisa = document.getElementById("lisa");
    var leftbtn = document.getElementById("leftbtn");
    var rightbtn = document.getElementById("rightbtn");

    var cloneli = lisa.firstElementChild.cloneNode(true);
    lisa.appendChild(cloneli);
    var idx = 0;

    //修bug。节流函数
    var lock = true;
    rightbtn.onclick = function() {
      //判断锁的状态
      if (!lock) return;
      lock = false;

      idx++;
      if (idx > 4) {
        setTimeout(function() {
          lisa.style.left = 0;
          lisa.style.transition = "none";
          idx = 0;
        }, 500);
      }
      lisa.style.transition = "left .5s ease 0s";
      lisa.style.left = -idx * 650 + "px";

      //节流锁的 定时器
      setTimeout(function() {
        lock = true;
      }, 500);
    };
    leftbtn.onclick = function() {
      if (!lock) return;
      lock = false;

      if (idx == 0) {
        //去掉过渡
        lisa.style.transition = "none";
        //瞬间移动到最后一张，然后延时器工作，替换
        lisa.style.left = -5 * 650 + "px";
        //设置一个延时器，这个延时器的延时时间为0毫秒，可以让过渡先瞬间取消，再加上
        setTimeout(function() {
          lisa.style.transition = "left .5s ease 0s";
          idx = 4;

          lisa.style.left = -idx * 650 + "px";
        }, 0);
      } else {
        idx--;
        lisa.style.left = -idx * 650 + "px";
      }

      //节流锁的 定时器
      setTimeout(function() {
        lock = true;
      }, 500);
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.box {
  position: relative;
  width: 650px;
  height: 360px;
  border: 1px solid #000;
  overflow: hidden;
  margin: 50px auto;
}
.box ul li img {
  width: 650px;
  height: 360px;
}
ul {
  width: 5000px;
  position: relative;
  transition: left 0.5s ease 0s;
}
.box ul li {
  float: left;
}
.leftbtn,
.rightbtn {
  position: absolute;
  top: 50%;
  margin-top: -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
}
#leftbtn {
  left: 20px;
}
#rightbtn {
  right: 20px;
}
</style>
