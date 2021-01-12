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

    var lis = lisa.getElementsByTagName("li");

    //当前是第一张展示
    var idx = 0;

    //节流锁
    var lock = true;
    //右按钮
    rightbtn.onclick = function() {
      if (!lock) return;
      lock = false;
      //还没改idx， 此时的idx这个图片就是老图，老图淡出
      lis[idx].style.opacity = 0;
      idx++;
      if (idx > 4) idx = 0;
      //改idx， 此时的idx这个图片就是新图，新图淡入
      lis[idx].style.opacity = 1;
      setTimeout(function() {
        lock = true;
      }, 1000);
    };

    leftbtn.onclick = function() {
      if (!lock) return;
      lock = false;
      //还没改idx， 此时的idx这个图片就是老图，老图淡出
      lis[idx].style.opacity = 0;
      idx--;
      if (idx < 0) idx = 4;
      //改idx， 此时的idx这个图片就是新图，新图淡入
      lis[idx].style.opacity = 1;
      setTimeout(function() {
        lock = true;
      }, 1000);
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
  position: relative;
  list-style: none;
}
.box {
  position: relative;
  width: 650px;
  height: 360px;
  border: 1px solid #000;
  margin: 50px auto;
}
.box ul li {
  position: absolute;
  top: 0;
  left: 0;
  /* 透明度为零 */
  opacity: 0;
  transition: opacity 1s ease 0s;
}
.box ul li:first-child {
  opacity: 1;
}
.box ul li img {
  width: 650px;
  height: 360px;
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
