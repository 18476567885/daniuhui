<template>
  <div>
    <div class="header w">
      <div class="logo">
        <img src="../../assets/clock.png" alt="" />
      </div>
      <!-- logo结束· -->
      <div class="nav">
        <ul>
          <li><a href="#">加油</a></li>
          <li><a href="#">努力</a></li>
          <li><a href="#">坚持</a></li>
        </ul>
      </div>
      <!-- nav结束 -->
      <div class="search">
        <input type="text" value="千里之行。。。" />
        <button></button>
      </div>
    </div>
    <!-- header结束 -->
    <div class="banner">
      <div class="w">
        <div class="subnav">
            <ul>
                <li><a href="#">不负韶华 <span> > </span></a></li>
                <li><a href="#">不负韶华 <span> > </span></a></li>
                <li><a href="#">不负韶华 <span> > </span></a></li>
                <li><a href="#">不负韶华 <span> > </span></a></li>
                <li><a href="#">不负韶华 <span> > </span></a></li>
                <li><a href="#">不负韶华 <span> > </span></a></li>
            </ul>
        </div>
        <!-- subnav结束 -->
        <div class="course">
            <h2>总想不劳而获？碌碌无为？后悔?</h2>
            <div class="course-bd">
                <ul>
                    <li>  <h4>不劳而获</h4>
                      <p>碌碌无为？后悔?</p>
                    </li>
                    
                    <li>  <h4>不劳而获</h4>
                        <p>碌碌无为？后悔?</p>
                      </li>
                      <li>  <h4>不劳而获</h4>
                        <p>碌碌无为？后悔?</p>
                      </li>
                      <li> <a href=""></a></li>
                </ul>

            </div>
        </div>
        <!-- cuorse结束 -->
      </div>
    </div>
  </div>
</template>
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
.header {
  height: 62px;
  background-color: #3b3bb33b;
  margin: 30px auto;
}
.logo {
  float: left;
  width: 198px;
  height: 62px;
  background-color: red;
  text-align: center;
}
.nav {
  float: left;
  margin-left: 60px;
}
.nav li {
  display: inline-block;
  line-height: 62px;
  margin: 0 10px;
}
.nav li a {
  height: 62px;
  padding: 0 30px;
  font-size: 18px;
  color: rgb(8, 7, 7);
}
.nav li a:hover {
  color: red;
  border-bottom: 2px solid red;
}
.search {
  float: left;
  width: 412px;
  height: 62px;
}
.search input {
  width: 345px;
  height: 60px;
  border: 1px solid skyblue;
  border-right: none;
  padding-left: 15px;
  border-radius: 30px;
  outline: none;
}
.banner {
  height: 412px;
  background-color: #fff;
}
.banner .w{
    height: 412px;
    background: url(../html/imgs/imges/2b.png) ;
}
.banner .subnav{
    float: left;
    width: 198px;
    height: 421px;
    background-color: rgba(0, 0, 0, .3);
}
.subnav ul li{
    height: 45px;
    line-height: 45px;
    padding: 0 20px;
}
.subnav ul li a{
    font-size: 16px;
    color: #fff;
}
.subnav ul li a span{
    float: right;
}
.subnav ul li a:hover{
    color: red;
}
.course{
    float: right;
    width: 238px;
    height: 300px;
    /* 浮动的盒子没有外边距合并的问题 */
    margin-top: 50px;
    background-color: pink;
    text-align: center;
}
.course h2{
    height: 62px;
    background-color: peachpuff;
}
.course-bd{
    padding: 0 20px;
}
.course-bd li{
    border-bottom: 1px solid #4c4c4c;
   padding: 10px 0;
}
.course-bd ul li h4{
    font-size: 16px;
    color: #4e4e4e;
}
.course-bd ul li p{
        font-size: 12px;
        color: #a5a5a5;
}

</style>
