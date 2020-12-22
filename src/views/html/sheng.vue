<template>
    <div>
        <div class="main">
            <div class="middle">
                <div class="content">
                    中间
                </div>
            </div>
            <div class="left">
                左边
            </div>
            <div class="right">
                右边
            </div>
        </div>
        
       
    </div>
</template>
<style>
    * {
    margin: 0;
    padding: 0;
}

body,
html {
    width: 100%;
    height: 100%;
}
div{
    height: 100%;}
/* }
.main>div{
    float: left;
} */
.left{
    float: left;
    width: 200px;
    background-color: aqua;
  margin-left: -100%;
}
.right{
    float: left;
    background-color: red;
    width: 200px;
    margin-left: -200px;
}
.middle{  float: left;
    width: 100%;
    background-color: black;
}
</style>