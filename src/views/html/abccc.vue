<template>
    <div>
        <div class="main">
            <div class="center">中间中间中间中间中间中间中间后</div>
            <div class="left">左边</div>
            <div class="right">右边</div>
        </div>
        
    </div>
</template>
        <style>
           * {
    margin: 0;
    padding: 0;
}
.main{
   padding:  0 150px 0 200px;
    height: 200px;
    zoom: 1;
    background-color: blue;
}
.center,.left,.right{
    float: left;
}
.center{
    width: 100%;
    height: 200px;
    background-color: blueviolet;

}
.left{
    width: 200px;
    height: 200px;
    background-color: brown;
    margin-left: -100%;
    position: relative;
    left: -200px;

}
.right{

    width: 150px;
    height: 200px;
    background-color: cadetblue;
    margin-left: -150px;
    position: relative;
    left: 150px;
}

        </style>