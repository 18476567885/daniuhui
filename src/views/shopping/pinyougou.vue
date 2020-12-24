<template>
  <div>
    <div class="tb-promo">
      <img src="../html/imgs/imges/manhua.jpg" alt="" />
      <a href="#" class="pre"> &lt; </a>
      <a href="#" class="next"> &gt; </a>
      <ul class="promo-nav">
          <li class="selected"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
.tb-promo {
  position: relative;
  width: 520px;
  height: 280px;
  background-color: aqua;
  margin: 100px auto;
}
.tb-promo img {
  width: 520px;
  height: 280px;
}

.pre,
.next {
  width: 20px;
  height: 30px;
  background: rgba(0, 0, 0, 0.2);
  /* 加了绝对定位的盒子可以设置宽高 */
  position: absolute;
  top: 50%;
  margin-top: -15px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  text-decoration: none;
}
.pre {
  left: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.next {
  right: 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.promo-nav{
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -35px;
    width: 70px;
    height: 13px;
    background-color: pink;
    background: rgba(255,255,255,.3);
    border-radius: 7px;

}
.promo-nav li{
    width: 8px;
    height: 8px;
    background-color: #fff;
    list-style: none;
    float: left;
    border-radius: 4px;
    margin: 3px ;
}
/* 选择器权重问题 */
 .promo-nav .selected{
    background-color: #ff5000;
}
</style>
