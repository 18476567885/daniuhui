<template>
    <div>
        <div class="a1">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </div>
</template>
<style>
    *{
        margin:  0;
        padding: 0;

    }
    .a1{
       width: 100%;
       height: 200px;
       display: flex;
    }
    .left{
        width: 200px;
        height: 200px;
        background-color: cadetblue;
    }
    .right{
      height: 200px;
      background-color: crimson;
      flex:1
    }
</style>