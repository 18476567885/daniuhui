<template>
  <div>
    <div class="top">
      <div class="top-conten">
        <ul>
          <li><a href="#">联系我们</a></li>
          <li><a href="#" @click="click">设为首页</a></li>
          <li><a href="#">设为收藏</a></li>
        </ul>
      </div>
    </div>
    <!-- top结束 -->
    <div class="wrap">
      <div class="logo">
        <div class="logo-left"><img src="#" alt="" /> logo</div>
        <div class="logo-right">
          <img src="#" alt="logo" /> 服务热线；
          <span class="bbr">123-354-678</span>
        </div>
      </div>
      <!-- logo结束 -->
      <div class="nav">
        <div class="nav-left"></div>
        <div class="nav-mid">
          <div class="mid-left">
            <ul>
              <li><a href="">首页</a></li>
              <li><a href="">关于</a></li>
              <li><a href="">新闻</a></li>
              <li><a href="">在线</a></li>
            </ul>
          </div>
          <div class="nav-right">
            <form action="">
              <input type="text" class="bba">
            </form>
          </div>
        </div>
       
      </div>
      <!-- nav 结束 -->
      <div class="ad">
        <ul>
          <li><img src="../html/imgs/imges/duck.png" alt=""></li>
          <li><img src="../html/imgs/imges/duck.png" alt=""></li>
          <li><img src="../html/imgs/imges/duck.png" alt=""></li>
        </ul>
      </div>
      <!-- ad结束 -->
    </div>

    <!-- wrap结束 -->
    
  </div>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(1);
    }
  }
};
</script>
<style>
    
       
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
body {
  background-color: #b3b3b3;
}
.top {
  width: 100%;
  height: 27px;
}
.top-conten {
  width: 1000px;
  margin: 0 auto;
  float: right;
  margin-right: 200px;
}
.top-conten li {
  list-style: none;
  float: right;
  margin: 10px;
  width: 70px;
  line-height: 27px;
}
.top-conten a:visited,
.top-conten a:link {
  color: royalblue;
  text-decoration: none;
}
.top-conten a:hover,
.top-conten  a:active {
  color: red;
  text-decoration: none;
}

.wrap {
  width: 1000px;
  margin: 0 auto;
}
.logo {
  margin-top: 10px;
  height: 80px;
  background-color: #fff;
}

.logo-left {
  width: 200px;
  float: left;
}
.logo-right {
  width: 200px;
  float: right;
  height: 28px;
}
.nav {
  height: 40px;
  
}
.nav-left {
  width: 10px;
  float: left;
}
.nav-mid {
  width: 980px;
  float: left;
}
.nav-right {
  width: 10px;
  float: left;
}
.mid-left li{
    float: left;
    list-style-type: none;
    width: 100px;
    text-align: center;
    line-height: 40px;
}
.mid-left a:link,.mid-left a:visited{
    text-decoration: none;
    color: #ff0;
}
.ad{
  height: 220px;
  overflow: hidden;
}
</style>
