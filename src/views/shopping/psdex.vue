<template>
  <div>
    <div class="public-header">
      <div class="public-content clearfloat">
        <div class="header-logo"><a href=""></a></div>
        <ul class="header-nav">
          <li class="item"><a href="#"> git clone </a></li>
          <li class="item"><a href="#"> git pull </a></li>
          <li class="item"><a href="#"> git add . </a></li>
          <li class="item"><a href="#"> git commit -m '说明' </a></li>
          <li class="item"><a href="#"> git push </a></li>
        </ul>
      </div>
      <!-- public-comtent结束 -->
    </div>
    <!-- public-header结束 -->
    <div class="index-banner">
      <div class="banner-bg public-content">
        <img src="../html/imgs/imges/2b.png" alt="" />
      </div>
      <div class="banner-text">
        <div class="text-logo"><img src="../../assets/dada.png" alt="" /></div>

        <p>
          <i class="linel line"></i>
          <span
            >边框 border:1px solid red 分别是 线宽度，线型，线颜色
            还可以带颜色，上下左右 </span
          ><i class="liner line"></i>
        </p>
      </div>
    </div>
    <!-- banner结束 -->
    <div class="index-menu ">
      <div class="menu-tips">你努力有多于人地么</div>
      <div class="menu-list public-content">
        <ul class="clearfloat">
          <li class="menu-item clearfloat">
            <div class="title">
              <a href="#">
                <h4>你有尽力了么？</h4>
                <p class="conment">做事三心两意</p>
              </a>
            </div>
            <div class="line"></div>
            <div class="pric">钱</div>
          </li>
          <li class="menu-item clearfloat">
            <div class="title">
              <a href="#">
                <h4>你有尽力了么？</h4>
                <p class="conment">做事三心两意</p>
              </a>
            </div>
            <div class="line"></div>
            <div class="pric">钱</div>
          </li>
          <li class="menu-item clearfloat">
            <div class="title">
              <a href="#">
                <h4>你有尽力了么？</h4>
                <p class="conment">做事三心两意</p>
              </a>
            </div>
            <div class="line"></div>
            <div class="pric">钱</div>
          </li>
          <li class="menu-item clearfloat">
            <div class="title">
              <a href="#">
                <h4>你有尽力了么？</h4>
                <p class="conment">做事三心两意</p>
              </a>
            </div>
            <div class="line"></div>
            <div class="pric">你的钱</div>
          </li>
        </ul>
      </div>
      <a href="" class="menu-more-btn"
        >损失<span></span> <span class="icon"></span
      ></a>
    </div>
    <div class="index-panel">
      <div class="index-panel-header"></div>
    </div>
    <div class="index-panel">
      <div class="index-panel-header"></div>
    </div>
    <div class="public-foot">
      <div class="public-content">
        <div class="footer-col">
          <p>通过盒子模型，清楚知道大部分的html标签是一个盒子</p>
        </div>
        <div class="footer-col">
          <p>paddiing不支持负值，可百分比，是相对于宽度计算</p>
        </div>
        <div class="footer-col">
          <a href="#">水平paddiin值影响尺寸</a>
          <a href="#">水平paddiin值影响尺寸</a>
          <a href="#">水平paddiin值影响尺寸</a>
          <a href="#">水平paddiin值影响尺寸</a>
        </div>

        <div class="footer-col">
          <div class="footer-logo">
            <img src="../../assets/manhua.jpg" alt="" />
          </div>
          <div class="footer-info">
            垂直padding值不影响尺寸
            <p>但会影响背景颜色（占据空间）</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

ol,
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  display: block;
}
.public-foot a {
  color: #fff;
}
img {
  border: none;
}
.clearfloat {
  zoom: 1;
}
.clearfloat::after {
  display: block;
  content: "";
  clear: both;
  visibility: hidden;
  height: 0;
}
.public-header {
  height: 110px;
  background-color: #fff;
}
.public-content {
  position: relative;
  margin: 0 auto;
  background: #fff;

  width: 1100px;
}
.public-foot {
  padding-top: 100px;
  height: 218px;
  background: #3b3b3b;
}
.public-header .header-logo {
  float: left;
  margin-top: 40px;
  width: 181px;
  height: 54px;
  background: url(../../assets/logo.png);
}
.header-logo a {
  width: 182px;
  height: 54px;
}
.header-nav {
  float: right;
}
.public-header .header-nav .item {
  float: left;
  margin: 44px 0 0 50px;
}
.public-header .header-nav a {
  color: #3b3b3b;
}
.public-foot .footer-col {
  float: left;
  width: 230px;
  margin-right: 60px;
  font-size: 16px;
  color: #fff;
  line-height: 1.8;
}
.public-foot .footer-col:last-child {
  margin-right: 0;
}
.footer-col .footer-logo {
  margin-top: -28px;
  width: 182px;
  height: 55px;
  margin-bottom: 20px;
}
.footer-col .footer-logo img {
  width: 182px;
  height: 55px;
}
.index-banner {
  position: relative;
  background-color: rgba(70, 8, 8, 0.1);
}
.banner-bg {
  height: 570px;
  overflow: hidden;
}
.banner-bg img {
  margin: 0 auto;
}
.banner-text {
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -388px;
}
.banner-text .text-logo {
  width: 776px;
  height: 118px;
}
.text-logo img {
  width: 776px;
  height: 118px;
}
.banner-text p {
  margin-top: 17px;
  text-align: center;
  color: red;
}
.index-banner {
  border-top: 1px solid black;
}
.banner-text p .line {
  display: inline-block;
  width: 40px;
  border-top: 1px solid rgb(44, 33, 33);
  vertical-align: middle;
}
.banner-text p span {
  margin: 0 26px;
}
.index-menu {
  position: relative;
  border-top: 4px solid #f34949;
}
.index-menu .menu-tips {
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -78px;
  width: 156px;
  height: 75px;
  text-align: center;
  line-height: 65px;
  color: #fff;
  background: #f34949;
}
.index-menu .menu-tips::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 78px solid transparent;
  border-right: 78px solid transparent;
  border-bottom: 10px solid #ffd;
}
.index-menu .menu-list {
  margin-top: 150px;
  color: #555;
  overflow: hidden;
}
.index-menu .menu-list ul {
  width: 1160px;
}

.index-menu .menu-item {
  float: left;
  width: 520px;
  margin-right: 60px;
  margin-bottom: 56px;
}
.index-menu .menu-item .title,
.index-menu .menu-item .line {
  float: left;
}
.index-menu .menu-item .pric {
  float: right;
}
.index-menu .menu-item .title {
  width: 230px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.index-menu .menu-item .line {
  margin-top: 10px;
  width: 192px;
  border-top: 1px solid #3b3b3b;
}

.index-menu .menu-more-btn {
  margin: 0 auto;
  width: 114px;
  height: 32px;
  padding-left: 16px;
  border: 1px solid red;
  font-size: 16px;
  line-height: 32px;
  color: #b7b7b7;
}
</style>
