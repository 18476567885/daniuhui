<template>
    <div class="main">
        <div class="middle">
            <div class="content">
                中间中间中间   中间中间中间   中间中间中间   中间中间中间vvvvv   中间中间中间vvv   中间中间中间   中间中间中间
            </div>
        </div>
        <div class="left">
            左边
        </div>
        <div class="right">
            右边
        </div>
    </div>
    
</template>
<style>
    *{
        margin: 0;
        padding: 0;
    }

body,
html {
    width: 100%;
   height: 300px;
}
.main>div {
    float: left;
    
}
div {
    height: 300px;
}
.left {
    width: 200px;
    background: red;
   margin-left: -100%;
   
  
}

.right {
    width: 200px;
    background-color: aqua;
    margin-left: -200px;
  
   
   
}

.middle {
 width: 100%;

}
.content{
    margin: 0 200px 0 200px;
    background-color: brown;
   
}


</style>