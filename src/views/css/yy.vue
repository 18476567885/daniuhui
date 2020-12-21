<template>
  <div class="box">
    <div class="lo">
      <div class="abc">
        <div class="hui" style=" margin-left: 1px;">会员登录</div>
        <div class="a1">
          <div class="a11">
            <input type="text" placeholder="会员账号/手机号" class="as" />
          </div>
        </div>
      </div>
    </div>
    <div class="logo">
      <img src="../html/imgs/imges/2b.png" />
    </div>
  </div>
</template>
<style>
.box {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../html/imgs/imges/3b.jpg);
  overflow: hidden;
}
.lo {
  width: 300px;
  height: 320px;
  background-color: white;
  position: relative;
  left: 1000px;
  top: 200px;
}
.logo {
  position: relative;
  left: 300px;
  top: -200px;
  margin-left: -40px;
}
.abc {
  padding: 20px 40px;
}
.hui {
  line-height: 40px;
  position: relative;
  font-size: 14px;
  margin-bottom: 20px;
}

.a1 {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.as{
  border-radius: 25px!important;
}
</style>
