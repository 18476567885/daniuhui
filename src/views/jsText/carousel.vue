<template>
  <div>
    <div class="carousel">
      <ul id="lisa">
        <li><img src="../../assets/manhua.jpg" alt="" /></li>
        <li><img src="../../assets/3b.jpg" alt="" /></li>
        <li><img src="../../assets/img.jpg" alt="" /></li>
        <li><img src="../../assets/focus.jpg" alt="" /></li>
        <li><img src="../../assets/icons.png" alt="" /></li>
      </ul>
      <a href="javascript:;" class="left-btn" id="left-btn"></a>
      <a href="javascript:;" class="right-btn" id="right-btn"></a>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    //得到按钮和ul ，ul整体进行运动
    var left_btn = document.getElementById("left-btn");
    var right_btn = document.getElementById("right-btn");
    var lisa = document.getElementById("lisa");

    //克隆第一张图片
    var cloneli = lisa.firstElementChild.cloneNode(true);
    lisa.appendChild(cloneli);
    //当前ul的显示 到第几张图片，从0开始
    var idx = 0;

    //函数节流，
    var lock=true;
    //监听
    right_btn.onclick = function() {
         //判断锁的状态
      if (!lock) return;
      lock = false;
      //给lisa加过渡，虽然css中已加，但是最后一张图片会把过渡去掉
      lisa.style.transition = "left .5s ease 0s";

      idx++;
      if (idx > 4) {
        //设置一个延时器，延时器的作用是将ul瞬间拉回0的位置
        setTimeout(function() {
          //取消掉过渡，因为要瞬间移动
          lisa.style.transition = "none";
          lisa.style.left = 0;
          idx = 0;
        }, 500);
      }
      lisa.style.left = -idx * 650 + "px";
      setTimeout(function(){
          lock=true
      },500)
    };

    left_btn.onclick = function() {
      //判断是不是 第0张，如果是，就要瞬间用假的替换真的
      if (idx == 0) {
        lisa.style.transition = "none";

        lisa.style.left = -5 * 650 + "px";
        //设置一个延时器，这个延时器的延时时间为0毫秒，可以让过渡线瞬间取消，再加上
        setTimeout(function() {
          
            lisa.style.transition = "left .5s ease 0s";

          idx=4;
          lisa.style.left = -idx * 650 + "px";
        }, 0);
      }else{
          idx--;
          lisa.style.left = -idx * 650 + "px";

      }
      setTimeout(function(){
          lock=true
      },500)
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.carousel {
  position: relative;
  width: 650px;
  height: 360px;
  border: 1px solid #000;
  margin: 50px auto;
  /* overflow: hidden; */
}
img {
  width: 650px;
  height: 360px;
}
.carousel ul {
  position: relative;
  list-style: none;
  width: 5000px;
  /* 过渡属性 */
  transition: left 0.5s ease 0s;
}
.carousel ul li {
  float: left;
}
.carousel .left-btn {
  left: 20px;
}
.carousel .right-btn {
  right: 20px;
}
.carousel .left-btn,
.carousel .right-btn {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -25px;
}
</style>
