<template>
    <div >
        <div class="abc">
          
            </div>
            <div class="ad">  <p></p></div>
            <div class="bro"></div>
            <div class="asd"></div>
            <div class="qwe"> <p></p></div>
    </div>
</template>
<style> 
*{
    margin: 0;
    padding: 0;
}
.abc{
   margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background-color: black;
    transition: border-radius 5s linear 0s;
    /* 要变化的属性，用多长时间  速率  延迟的时间 */
}
.abc:hover{
    border-radius: 100%;
}
p{
    width: 200px;
    height: 200px;
    background-color: red;
    position: relative;
    left: 0;
    transition: left 1s linear 0s;

}
.ad{
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background-color: rosybrown;
    
}

 .ad:hover p{
    left: 1000px;
}
.bro{
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background-color:blue;
    transition: background-color 1s linear 0s;
}
.bro:hover{
    background-color: green;
}
.asd{
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background-color: rosybrown;
    transition: transform 1s linear 1s;
    }
.asd:hover{
  transform: scale(1.2) rotate(360deg);
}
.qwe{
    perspective: 300px;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background-color: black;
}
.qwe p{
    width: 200px;
    height: 200px;
    background-color: blue;
    transition: transform 3s linear 0s;
}
.qwe:hover p{
  transform: rotateX(3360deg) rotateY(360deg);
}
</style>