<template>
    <div>
        <div class="box">
            <div class="hd-middle">
                <div class="middle"></div>
              </div>
            <div class="box-header">
                <div class="hd-logo">
                    <img src="../../assets/dada.png" alt="">
                </div>
                
                <div class="hd-right"></div>
            </div>
            <div class="box-body"></div>
            <div class="foot"></div>
        </div>
    </div>
</template>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .box-header{
       
        height: 100px;
        background-color: #4c4c4c;
    }
    .hd-logo{
        float: left;
        margin-left: -100%;
        width: 150px;
        height: 100px;
    }
    .hd-logo img{
       width: 150px;
        height: 100px;
        background: wheat
    }
    .hd-middle{
        float: left;
       
        width: 100%;
        height: 100px;
        background-color: red;
    }
    .hd-right{
        float: left;
        margin-left: -300px;
        height: 100px;
        width: 300px;
        background-color: blue;
    }
    .middle{
        margin:0 150px 0 300px;
    }
</style>