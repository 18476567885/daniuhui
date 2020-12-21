<template>
  <div class="page">
    <div class="nav">
           <div class="nav-li">慕课网的导航
             <ul>
              <li>二级栏目</li><li>二级栏目</li><li>二级栏目</li>
             </ul>
           </div>
           <div class="nav-li">慕课网的导航</div>
           <div class="nav-li">慕课网的导航</div>
           <div class="nav-li">慕课网的导航</div>
           <div class="nav-li">慕课网的导航</div>
    </div>
  </div>
</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .page{
    width:100% ;
    height: 2000px;
    background: url(../../html/imgs/imges/2b.png) center top no-repeat;
  }
  .nav{
    width: 160px;
    height: 205px;
    position: fixed;
    left: 0;
    top: 50%;
    margin-top:-103px ;
  }
  .nav-li{
     width: 160px;
     height: 40px;
     border-bottom: 1px solid red;
     background: #333;
     text-align: center;
     line-height: 40px;
     color: #fff;
     font-size: 16px;
     }
     ul{
       width: 100%;
       height: auto;
     }
     .nav-li:hover ul{
       display: block;
     }
     li{
      width: 160px;
      height: 40px;
      display: none;
     }
</style>
