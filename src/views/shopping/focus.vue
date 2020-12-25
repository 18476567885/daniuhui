<template>
    <div>
     <div class="promo">
       <img src="../../assets/focus.jpg" alt="">
       <!-- 左側按鈕 -->
        <a href="" class="prev">  &lt;</a>
        <a href="" class="next">  > </a>
        <ul class="promo-nav">
            <li class="selected"><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
        </ul>
     </div>
    </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
}
.promo{
    position: relative;
    width: 520px;
    height: 280px;
    background-color: pink;
    margin: 100px auto;

}
li{
    list-style: none;
}
a{
    text-decoration: none;
}
a:hover{
    color: red;
}
img{
    width: 520px;
    height: 280px;
}
.prev{
   left: 0;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
}

  
.next{
    right: 0;
    }
    
.prev,.next{
    position: absolute;
    top: 50%;
    margin-top: -15px;
    width: 20px;
    height: 30px;
    color: #fff;
    background: rgba(0, 0, 0, .7);
    line-height: 30px;
    text-align: center;
}
.promo-nav{
    position: absolute;
    bottom: 10px;
    left: 30px;
    width: 70px;
    height: 17px;
    background:rgba(255, 255 ,255, .3);
    border-radius: 6px;
}
.promo li{
    float: left;
     margin:4px;
    width:8px ;
    height: 8px;
    background-color: #fff;
    border-radius: 4px;
    
}
  .promo .selected{
    background-color: red;
}
   
    

</style>