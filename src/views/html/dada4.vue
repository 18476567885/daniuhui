<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../html/imgs/imges/duck.png" alt="logoo" />
      </div>
      <div class="nav">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">图片</a></li>
          <li><a href="#">视屏</a></li>
          <li><a href="#">手机</a></li>
        </ul>
      </div>
    </div>
    <!-- 头部结束 -->
    <div class="main">
      <div class="top">
        <a href="www.baidu.com">
          <img src="../html/imgs/imges/2b.png" alt="" />
        </a>
      </div>
      <div class="topplay"></div>
      <div class="topplay-top">
        <div class="word">靓仔，好好学习啦</div>
        <button @click='click'>千里之行</button>
      </div>
      <div class="middle">
        <div class="m-top">
          <div class="weibo">
            <img src="../html/imgs/imges/duck.png" alt="" />
            <div class="a1">微博</div>
          </div>
          <div class="weixin">
            <img src="../html/imgs/imges/duck.png" alt="" />
            <div class="a1">微信</div>
          </div>
          <div class="qq">
            <img src="../html/imgs/imges/duck.png" alt="" />
            <div class="a1">qq</div>
          </div>
          <div class="cla"></div>
        </div>
        <div class="m-middle">
          学习前端的目的不是为了以后的职业定位，<br />而且进入互联网，提升自己，提高眼界
        </div>
        <div class="m-bottom">
          <div class="b1">
            <img src="../html/imgs/imges/duck.png" alt="" />
            <div></div>
            <div></div>
          </div>
          <div class="b1">
            <img src="../html/imgs/imges/duck.png" alt="" />
            <div></div>
            <div></div>
          </div>
          <div class="b1">
            <img src="../html/imgs/imges/duck.png" alt="" />
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <!-- middle结束 -->
      <div class="bottom"></div>
    </div>
    <!-- main主体结束 -->
    <div class="footer"></div>
  </div>
</template>
<script>
  export default {
    methods :{
      click(){
        alert('不负韶华')
      }
    }
  }
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 100px;
  background-color: burlywood;
}
.header img {
  height: 85px;
  width: 300px;
  padding-left: 100px;
  padding-top: 8px;
}
.nav li {
  list-style: none;
  display: inline-block;
  line-height: 100px;
  margin: 0 10px;
}
.logo,
.header,
.nav {
  float: left;
}
.nav {
  margin-left: 600px;
}
.nav li a:link,
.nav li a:visited {
  text-decoration: none;
  color: blue;
}
.nav li a:hover {
  color: red;
}
.main .top {
  width: 100%;
  height: 600px;
}
.main .top img {
  width: 100%;
  height: 600px;
}
.main .topplay {
  position: absolute;
  top: 100px;
  left: 0;
  background-color: #000;
  width: 100%;
  height: 600px;
  opacity: 0.4;
}
.main .topplay-top {
  width: 500px;
  height: 300px;

  position: absolute;
  top: 400px;
  margin-top: -150px;
  z-index: 2;
  right: 50%;
  margin-right: -250px;
}
.main .topplay-top .word {
  padding-top: 100px;
  color: #fff;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  font-family: "微软雅黑";
}
button {
  width: 200px;
  height: 60px;
  margin-top: 50px;
  color: #fff;
  background-color: #f5704f;
  font-family: "微软雅黑";
  text-align: center;
  font-weight: bolder;
  font-size: 14px;
  border-radius: 10px;
  margin-left: 150px;
}
.main .middle {
  width: 1000px;
  margin: 0 auto;
}
.m-top .weibo,
.weixin,
.qq {
  float: left;
  width: 33.3%;
  text-align: center;
  padding-top: 100px;
}
.a1 {
  font-size: 22px;
  padding-top: 10px;
}
.m-middle {
  font-size: 22px;
  color: black;
  font-weight: bolder;
  padding-top: 50px;
  text-align: center;
}
.cla {
  clear: both;
}
.m-middle .b1{
    float: left;
   
}
.b1 img{
    width: 310px;
    height: 260px;
    float: left;
    text-align: center;
    padding: 10px;
}
</style>
