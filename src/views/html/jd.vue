<template>
  <div>
    <div class="container">
      <div class="nav">
        <div class="nav-box">
          <ul>
            <li><a href="#">免费注册</a></li>
            <li><a href="#">我的订单</a></li>
            <li><a href="#">我的京东</a></li>
            <li><a href="#">京东会员</a></li>
            <li><a href="#">企业采购</a></li>
            <li><a href="#">客户服务</a></li>
            <li><a href="#">手机京东</a></li>
          </ul>
        </div>
      </div>
      <!-- nav结束 -->
      <div class="header-box">
        <div class="header">
          <div class="logo-box">
            <a href="#">
              <img
                src="//img1.360buyimg.com/da/jfs/t1/14716/32/11447/94000/5c90a83bEaa611013/18490bf08654ba09.gif?v=0.5829671420253302).png"
                alt="logg"
                width="190px"
                height="120px"
              />
            </a>
          </div>
          <!-- logo-box结束 -->
          <div class="search-box">
            <div class="search-bar">
              <input type="text" placeholder="请输入查询的商品" />
              <div class="search-btn"></div>
              <div class="car-btn">我的购物车</div>
            </div>
            <ul class="recommend">
              <li><a href="">好高骛远</a></li>
              <li><a href="">好高骛远</a></li>
              <li><a href="">好高骛远</a></li>
              <li><a href="">好高骛远</a></li>
              <li><a href="">好高骛远</a></li>
            </ul>
            <ul>
              <li><a href="">贬义词吗</a></li>
              <li><a href="">贬义词吗</a></li>
              <li><a href="">贬义词吗</a></li>
              <li><a href="">贬义词吗</a></li>
              <li><a href="">贬义词吗</a></li>
            </ul>
          </div>

          <!-- search-box结束 -->
        </div>
        <!-- header结束 -->
      </div>
      <div class="content">
        <div class="wrapper">
          <div class="menu-box">
            <ul>
              <li>
                <div class="main-menu">
                  <a href="#">家用电器</a>
                </div>
                <div class="sub-menu">
                  <div class="left">
                    <div class="menu-title">
                      <a href="#" class="abc">家用馆</a>&gt;
                      <a href="#" class="abc">家用馆</a>&gt;
                      <a href="#" class="abc">家用馆</a>&gt;
                      <a href="#" class="abc">家用馆</a>&gt;
                      <a href="#" class="abc">家用馆</a>&gt;
                    </div>
                    <dl>
                      <dt>
                        <a href="">电视</a>&gt;
                      </dt>
                      <dd>
                        <a href="">全面屏</a>
                        <a href="">超薄电视</a>
                        <a href="">全面屏</a>
                        <a href="">超薄电视</a>
                        <a href="">全面屏</a>
                        <a href="">超薄电视</a>
                        <a href="">全面屏</a>
                        <a href="">超薄电视</a>
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <a href="">电视</a>&gt;
                      </dt>
                      <dd>
                        <a href="">全面屏</a>
                        <a href="">超薄电视</a>
                        <a href="">全面屏</a>
                        <a href="">超薄电视</a>
                        <a href="">全面屏</a>
                        <a href="">超薄电视</a>
                        <a href="">全面屏</a>
                        <a href="">超薄电视</a>
                      </dd>
                    </dl>
                  </div>
                  <div class="right">
                      <div class="pic-box">
                          <a href="" target="_blank">
                            <img src="" alt="">
                             
                          </a>
                    </div>
                    <div class="pic-box">
                        <a href="" target="_blank">
                          <img src="" alt="">
                           
                        </a>
                  </div>
                  </div>
                </div>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            
          </div>
          <div class="slider-box"></div>
          <div class="ad-box"></div>
          <div class="info-box"></div>
        </div>
        <!-- wrapper结束 可复用-->
        <div class="wrapper"></div>
      </div>
      <!-- content结束 -->
    </div>
    <!-- container结束 -->
  </div>
</template>
<script>
    
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
html,
body,
ul,
li {
  margin: 0;
  padding: 0;
}
.nav {
  height: 30px;
  background-color: #e3e4e5;
  border-bottom: 1px solid #e3e4e5;
}
.nav-box {
  margin: 0 auto;
  width: 1190px;
  /*文本 右对齐 */
  text-align: right;
}
.nav-box ul li {
  display: inline-block;
  padding: 0 10px;
  font-size: 16px;
  line-height: 30px;
  position: relative;
}
.nav-box ul li a {
  color: #999999;
  text-decoration: none;
}
/* 伪类，背景颜色 */
.nav-box ul li:not(:last-child):after {
  content: "";
  width: 1px;
  height: 14px;
  background-color: #cccccc;
  position: absolute;
  top: 8px;
  right: 0;
  /* 块级元素化 */
  display: block;
}
.nav-box ul li a:hover {
  color: #f10215;
}

.header-box {
  height: 140px;
  background-color: #ffffff;
}
.header {
  margin: 0 auto;
  width: 1190px;
  display: flex;
  padding: 10px 0px;
}
.header-logo-box {
  width: 190px;
  height: 120px;
}
.search-box {
  width: 790px;
  padding: 0px 10px;
}
.search-bar {
  padding: 10px 0px 0px 50px;
  display: flex;
}
li {
  list-style: none;
}
.recommend {
  font-size: 12px;
  padding: 5px 0px 15px 50px;
}
.recommend a {
  color: blue;
}
.search-box li {
  display: inline-block;
  padding: 0 10px;
}
.search-bar input {
  border: 1px solid #e1251b;
  width: 500px;
  height: 30px;
  padding: 2px 10px;
  outline: none;
}
.search-bar .search-btn {
  width: 50px;
  height: 34px;
  border: 1px solid red;
  background-color: red;
  cursor: pointer;
}
.search-bar .car-btn {
  margin: 0px 0px 0px 20px;
  border: 1px solid red;
  width: 100px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  color: red;
  cursor: pointer;
}
.content .wrapper{
    margin:  0 auto;
    width: 1190px;
    padding: 10px;
    display: flex;
}
.menu-box{
    width: 190px;
    background:#ffffff;
    position: relative;
    padding: 10px 0;
    margin-right: 10px;
}
.menu-box ul li{
    height: 25px;
    line-height: 25px;
    padding: 0px 12px;
    overflow: hidden;
}
.menu-box ul li:hover{
    background:rgb(105, 42, 42);

}
.menu-box ul li:hover  .sub-menu{
    display: block;
}
.sub-menu{
    position: absolute;
    top: 0;
    left: 190px;
    background-color: #ffffff;
    z-index: 10;
    width: 900px;
    padding: 20px;
    font-size: 12px;
      box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);
      display: none;
}
 .left{
     float: left;
     max-width: 700px;
 }
 .right{
     float: right;
     width: 160px;
 }
 .menu-title{
     margin: 0px 0px 10px 0px;
 }
 .menu-box ul li a {
     color: #333333;
     text-decoration: none;
 }
 .menu-box ul li a:hover{
    color: #ffffff;
 }
 .abc{
     display: inline-block;
     background: #333333;
     padding: 0px 8px;
     margin: 0px 10px 0px 0px;
     color: #ffffff;
 }
 .abc:hover{
     background: #e1251b;
 }
 .sub-menu dl{
    display: flex;
 }
 .sub-menu dt{
     font-weight: bold;
     width: 60px;
     text-align: right;
     flex-shrink: 0;
 }
  .sub-menu dd a {
      padding: 4px 8px 4px 8px;
      white-space: nowrap;
  }
</style>
