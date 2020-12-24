<template>
  <div>
      <div class="top">
          <div class="top-content">
              <div class="logo-">abc</div>
   <ul>
       <li><a href="#" @click='click'>设为首页</a></li>
       <li><a href="#">加入收藏</a></li>
       <li><a href="#">联系我们</a></li>
       <li><a href="#">我的</a> </li>
   </ul>
          </div>
      </div>  
      <!-- top结束 -->
      <div class="wrapper">
          <div class="logo">
              <div class="logo-left">
                  <img src="../html/imgs/imges/duck.png" alt="">
              </div>
              <div class="logo-right">
                   24小时服务热线：<span>1314-5555</span>
              </div>
          </div>
          <!-- logo结束 -->
          <div class="nav">
              <div class="nav-left">
                 
              </div>
              <div class="nav-mid">
                  <div class="nav-mid-left">
                    <ul>
                        <li><a href="">千里之行</a></li>
                        <li><a href="">千里之行</a></li>
                        <li><a href="">千里之行</a></li>
                        <li><a href="">千里之行</a></li>
                    </ul>
                  </div>
                  <div class="nav-mid-right">
                      <form action="" class="search-text">  <input type="text" class="search-text"></form>
                  </div>
              </div>
              <div class="nav-right"></div>
          </div>
          <!-- nav结束·· -->
      </div>
      <!-- wrapper结束 -->
  </div>
</template>
<script>
    export default{
        methods:{
            click(){

                console.log(1)
            }
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        font-size: 12px;
    }
    body{
        background-color: #f5f5f5;
    }
    .top{
        width: 100%;
        height: 27px;
        background: url(../html/imgs/imges/duck.png);
    }
    .top-content{
        width: 1000px;
        margin: 0 auto;
        text-align: right;
    }
    .top-content li{
        list-style: none;
        display: inline-block;
        margin: 0 10px;
       line-height: 27px;
    }
    .logo-{
        float: left;
        line-height: 27px;
    }
    .top-content a:link{
        color: #8e8e8e;
        text-decoration: none;
    }
    .top-content a:hover{
        color: #900;
    }
    .wrapper{
        width: 1000px;
        margin: 0 auto;

    }
    .logo{
        height: 80px;
        zoom: 1;
        overflow: hidden;
    }
    .logo-left{
        width: 200px;
        float: left;
    }
    .logo-right{
        padding: 0  0 0 50px;
        width: 250px;
        float: right;
        line-height: 80px;
        background: url(../html/imgs/imges/duck.png);
    }
    .logo-right span{
        color: red;
        font-size: 22px;
    }
    .nav{
        height: 40px;
        background-color: violet;
    }
    .nav-left,.nav-mid,.nav-right{
        float: left;
        height: 40px;
    }
    .nav-mid-left,.nav-mid-right{
        float: left;
    }
    .nav-mid-left{
  width: 680px;
  
 
    }
    .nav-mid-left li{
        display: inline-block;
        margin: 0 20px;
        line-height: 40px;
       

    }
    .nav-mid-left li a:link, .nav-mid-left li a:hover{
        text-decoration: none;
        color: yellow;
    }

    .nav-mid-right{
        width: 300px;
        line-height: 40px;
    }
    .search-text{
        width: 190px;
        height: 25px;
       border-radius: 15px;
        
    }
</style>
