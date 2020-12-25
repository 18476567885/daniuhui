<template>
  <div>
    <section class="shortcut">
      <div class="w">
        <div class="fl">
          <ul>
            <li>品优购欢迎您！</li>
            <li>
              <a href="#">请登录 &nbsp;</a>
              <a href="#" style="color: red;">免费注册</a>
            </li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li>我的订单</li>
            <li></li>
            <li class="icom">我的品优购</li>
            <li></li>
            <li>品优购会员</li>
            <li></li>
            <li>企业采购</li>
            <li></li>
            <li class="icom">关注</li>
            <li></li>
            <li class="icom">客户服务</li>
            <li></li>
            <li class="icom">网站导航</li>
          </ul>
        </div>
      </div>
    </section>
    <div class="header w">
      <div class="header-left">
        <h1>
          <a href="#"><img :src="logo" alt=""/></a>
        </h1>
      </div>
      <div class="search">
        <input type="search" placeholder="千里之行..." />
        <button>搜素</button>
      </div>
      <div class="header-middle">
        <a href="#" style="color: red;">优惠购首发</a>
        <a href="#">亿元优惠</a>
        <a href="#">9.9特卖</a>
        <a href="#">满99减39</a>
        <a href="#">办公用品1</a>
        <a href="#">电脑</a>
        <a href="#">通信</a>
      </div>
      <div class="shopcar">
        我的购物车
        <div class="cont">8</div>
      </div>
    </div>
    <!-- header结束 -->
    <nav class="nav">
      <div class="w">
        <div class="dropdown">
          <div class="dt">全部商品分类</div>
          <div class="dd">
            <ul>
              <li><a href="#">家用电器</a></li>
              <li><a href="#">手机，数码，通讯</a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </div>
        <!-- dropdown结束 -->
        <div class="item">
          <ul>
            <li><a href="#">辅助啊</a></li>
            <li><a href="#">辅助啊</a></li>
            <li><a href="#">辅助啊</a></li>
            <li><a href="#">辅助啊</a></li>
            <li><a href="#">辅助啊</a></li>
            <li><a href="#">辅助啊</a></li>
            <li><a href="#">辅助啊</a></li>
            <li><a href="#">辅助啊</a></li>
          </ul>
        </div>
        <!-- item结束 -->
      </div>
      
    </nav>
    <div class="w">
      <div class="main">
        <div class="focus">
            <a href=""></a>
            <a href=""> </a>
          <ul>
            <li>
              <img :src="img1" alt="" />
            </li> 
           
          </ul>
         
         
        </div>
        <div class="news">
          <div class="newsflash">
            <div class="news-hd">
              <h5>品优购</h5>
              <a href="#">更多</a>
            </div>
            <div class="news-bd">
              <ul>
                <li>
                  <a href="#"
                    ><strong>[重磅]</strong>他来了，走路像只呀，一路发</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><strong>[重磅]</strong>他来了，走路像只呀，一路发</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><strong>[重磅]</strong>他来了，走路像只呀，一路发</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="lifeservice">
            <ul>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
              <li>
                <i></i>
                <p>话费</p>
              </li>
            </ul>
          </div>
          <!-- lifeservice结束 -->
          <div class="bargin">
            <img :src="bar" alt="" />
          </div>
          <!-- bargin结束 -->
        </div>
      </div>
    </div>
    <div class="recom w">
        <div class="recom-hd">
          <div class="jinri">  
              <img src="../../assets/clock.png" alt="">
              <p>今日推荐</p>
        </div>

        </div>
        <div class="recom-bd">
            <ul>
                <li>
                    <img src="../../assets/pic.jpg" alt="">
                </li>
                <li>
                    <img src="../../assets/pic.jpg" alt="">
                </li>
                <li>
                    <img src="../../assets/pic.jpg" alt="">
                </li>
                <li>
                    <img src="../../assets/pic.jpg" alt="">
                </li>
                
            </ul>
        </div>
    </div>
    <!-- recom结束 -->
    <div class="foot">
      <div class="w">
        <div class="service">
          <ul>
            <li>
              <h5>图标</h5>
              <div>
                <h4>千里之行</h4>
                <p>不负韶华</p>
              </div>
            </li>
            <li>
              <h5></h5>
              <div>
                <h4></h4>
                <p></p>
              </div>
            </li>
            <li>
              <h5></h5>
              <div>
                <h4></h4>
                <p></p>
              </div>
            </li>
            <li>
              <h5></h5>
              <div>
                <h4></h4>
                <p></p>
              </div>
            </li>
            <li>
              <h5></h5>
              <div>
                <h4></h4>
                <p></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mod-help">
          <dl>
            <dt>恭喜发财</dt>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
          </dl>
          <dl>
            <dt>恭喜发财</dt>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
          </dl>
          <dl>
            <dt>恭喜发财</dt>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
          </dl>
          <dl>
            <dt>恭喜发财</dt>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
          </dl>
          <dl>
            <dt>恭喜发财</dt>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
            <dd><a href="#">大吉大利</a></dd>
          </dl>
          <dl>
            <dt>恭喜发财</dt>

            <dd>
              <a href="#"><img :src="erweima" alt=""/></a>
            </dd>
            <dd><a href="#">大吉大利</a></dd>
          </dl>
        </div>
        <div class="copyright">
          <div class="links">
            小辉辉: 代码是次要的，思维跟创造力才是王道 小辉辉: 代码谁都可以写
            小辉辉: 思维跟创造力不一样
          </div>
          <div class="copright">
            小辉辉: 代码是次要的，思维跟创造力才是王道 小辉辉: 代码谁都可以写
            小辉辉: 思维跟创造力不一样
          </div>
        </div>
        <!-- mod-help结束 -->
      </div>
    </div>
  </div>
</template>
<script>
import img1 from "../../assets/focus.jpg";
import img2 from "../../assets/logo.png";
import bar from "../../assets/bargain.jpg";
import erweima from "../../assets/erweima.png";

export default {
  data() {
    return {
      img1: img1,
      logo: img2,
      bar: bar,
      erweima: erweima
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.fl {
  float: left;
}
.fr {
  float: right;
}
.shortcut {
  height: 31px;
  background-color: #f1f1f1;
}
.shortcut ul li {
  float: left;
  list-style: none;
  margin: 0 10px;
  line-height: 31px;
}
.shortcut ul li a {
  text-decoration: none;
}
/* 选择所有的偶数小li; */
.shortcut .fr ul li:nth-child(even) {
  width: 1px;
  height: 12px;
  background-color: #666;
  margin-top: 9px;
}
.shortcut .fr li:hover {
  color: red;
}
.icom::after {
  content: "";
}
.header {
  position: relative;
  height: 105px;
 
}
.header-left {
  position: absolute;
  top: 25px;
  width: 171px;
  height: 61px;
 
}
.header-left a {
  display: block;
  width: 171px;
  height: 61px;
}
.search {
  position: absolute;
  left: 346px;
  top: 25px;
  width: 538px;
  height: 36px;
  border: 2px solid red;
}
button,
input {
  border: 0;
  outline: none;
}
.search input {
  float: left;
  width: 455px;
  height: 36px;
  padding-left: 10px;
}
.search button {
  float: left;
  width: 83px;
  height: 37px;
  background-color: #b1191a;
}
.header-middle {
  position: absolute;
  left: 346px;
  top: 70px;
}
.header-middle a {
  margin: 0 10px;
  text-decoration: none;
}
.header-middle a:hover {
  color: red;
}
.shopcar {
  position: absolute;
  right: 60px;
  top: 25px;
  width: 160px;
  height: 35px;
  border: 1px solid #dfdfdf;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 35px;
}
.shopcar::before {
  content: "1";
}
.shopcar::after {
  content: "2";
}
.cont {
  height: 14px;
  line-height: 14px;
  color: #fff;
  background-color: red;
  position: absolute;
  top: -5px;
  right: 22px;
  padding: 0 5px;
  border-radius: 7px 7px 7px 0;
}
.nav {
  height: 40px;
  border-bottom: 2px solid #b1191a;
}
.nav .dropdown {
  float: left;
  width: 210px;
  height: 45px;
  background-color: #b1191a;
}
.nav .item {
  float: left;
}
.dropdown .dt {
  width: 100%;
  height: 100%;
  color: #fff;
  line-height: 45px;
  text-align: center;
  font-size: 16px;
}
.dropdown .dd {
  display: block;
  color: #fff;
  width: 210px;
  height: 465px;
  background-color: #c81623;
  margin-top: -3px;
}
.dropdown .dd ul li {
  height: 31px;
  line-height: 31px;
  margin-left: 10px;
}
.dropdown .dd ul li:hover {
  background-color: #fff;
}
.dropdown .dd ul li a {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
}
.dropdown .dd ul li:hover a {
  color: red;
}
.item ul li:hover a {
  color: #c81623;
}
.item ul li {
  float: left;
  list-style: none;
}
.item ul li a {
  display: block;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  padding: 0 25px;
}
.foot {
  height: 415px;
  background-color: #f5f5f5;
  padding-top: 30px;
}
.service {
  height: 80px;
  border-bottom: 1px solid #000;
}
.service ul li {
  float: left;
  width: 240px;
  height: 79px;
  background-color: aquamarine;
}
.service ul li h5 {
  float: left;
  width: 45px;
  height: 50px;
  margin-right: 10px;
  background-color: blueviolet;
}
h4 {
  font-size: 14px;
}
.service p {
  font-size: 12px;
}
.mod-help {
  height: 185px;
  border-bottom: 1px solid #000;
  padding-top: 20px;
  padding-left: 50px;
}
.mod-help dl dt {
  font-size: 16px;
  margin-bottom: 10px;
}
.mod-help dl a:link {
  color: black;
}
.mod-help dl dt a:hover {
  color: red;
}
.mod-help dl {
  float: left;
  width: 200px;
}
.mod-help dl:last-child {
  width: 90px;
  text-align: center;
}
.copyright {
  text-align: center;
  padding-top: 20px;
}
.links {
  margin-bottom: 15px;
}
.copright {
  line-height: 20px;
}
.main {
  
  height: 455px;
  width: 980px;
  margin-top: 10px;
  margin-left: 220px;
}
.main .focus {
  position: relative;
  float: left;
  /* background-color: purple; */
  width: 721px;
  height: 455px;
}
.main .focus img {
  width: 721px;
  height: 455px;
}
.main .news {
  float: right;
  width: 250px;
  height: 455px;
}
.newsflash {
  height: 165px;
}
.news-hd {
  padding: 0 15px;
  line-height: 33px;
  height: 33px;
  border-bottom: 1px solid #ececec;
}
.news-bd li{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.lifeservice {
  height: 200px;
  border: 1px solid #e4e4e4;
  border-top: 0;
}
.lifeservice ul li {
  float: left;
  width: 61px;
  height: 71px;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  text-align: center;
}
.lifeservice ul li i {
  display: inline-block;
  width: 24px;
  height: 28px;
  background-color: red;
  margin-top: 12px;
  background: url(../../assets/icons.png) no-repeat -19px -15px;
}
.bargin {
  height: 85px;
  margin-top: 5px;
  background-color: skyblue;
}
.news-hd h5 {
  float: left;
}
.news-hd a {
  float: right;
}
.news-hd a:hover{
  color: #b1191a;
}
.recom{
    height: 163px;
   
    margin-top: 10px;

}
.recom-hd{
    float: left;
    height: 133px;
    width: 205px;
    background-color: #5c5251;
    text-align: center;
    padding-top: 30px;
}
.recom-bd{
    float: left;
}
.recom-bd li{
    position: relative;
    float: left;
    
}
.recom-bd li img{
    height: 163px;
    width: 248px;
   
}
/* 前三个li  添加伪元素 */
.recom-bd ul li:nth-child(-n+3):after{
    content: '';
    position: absolute;
    right: 0;
    top: 10px;
    width: 1px ;
    height: 145px;
    background-color: #3c3c3c;

}
</style>
