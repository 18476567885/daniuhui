<template>
  <div>
    <div class="w">
      <div class="header">
        <div class="logo">
          <a href="www.baidu.com">
            <img src="../../assets/logo.png" alt="" />
          </a>
        </div>
      </div>
      <div class="registerarea">
        <h3>
          注册新用户
          <div class="login">我有账号，去<a href="">登录</a></div>
        </h3>
        <div class="reg-from">
        <form action="">
          <ul>
            <li>
              <label for="">手机号：</label>
              <input type="text" class="inp" />
              <span class="error">
                <i class="error-icon"></i> 手机号码格式不对，请重新输入</span
              >
            </li>
            <li>
              <label for="" class="lb">短信验证码：</label>
              <input type="text"  class="inp"/>
              <span class="error">
                <i class="error-icon"></i> 手机号码格式不对，请重新输入</span
              >
            </li>
            <li>
              <label for=""> 登录密码：</label>
              <input type="text" class="inp"/>
              <span class="error">
                <i class="error-icon"></i> 手机号码格式不对，请重新输入</span
              >
            </li>
            <li class="safe">
              安全强度 <em class="ruo">弱</em> <em class="zhong">中</em>
              <em class="qiang">强</em>
            </li>
            <li>
              <label for=""> 确认密码：</label>
              <input type="text" class="inp"/>
              <span class="error">
                <i class="error-icon"></i> 手机号码格式不对，请重新输入</span
              >
            </li>
            <li class="agree">  <input type="checkbox" name="" id="">
            同意协议并注册  <a href="">《知晓用户协议》</a>  
            </li>
            <li class="last-li">
                <input type="submit" value="提交注册"  class="btn">
            </li>
          </ul>
        </form>
        </div>
      </div>
      <div class="foot"><div class="mod_copyright">
        <p class="mod_copyright_links">
            关于我们  |  联系我们  |  联系客服  |  商家入驻  |  营销中心  |  手机品优购  |  友情链接  |  销售联盟  |  品优购社区  |  品优购公益  |  English Site  |  Contact U
        </p>
        <p class="mod_copyright_info">
            地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn  <br>
             京ICP备08001421号京公网安备110108007702
        </p>
   </div></div>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.header {
  height: 84px;
  border-bottom: 2px solid #c81523;
}
.logo {
  padding-top: 18px;
}
.registerarea {
  height: 522px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.registerarea h3 {
  height: 42px;
  border-bottom: 1px solid #ccc;
  background-color: #ccc;
  line-height: 42px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;
}
.login {
  float: right;
  font-size: 16px;
}
.login a {
  color: red;
}
.reg-from {
  width: 600px;
  margin: 50px auto 0;
}

.reg-from ul li label {
  display: inline-block;
  width: 88px;
  text-align: right;
}
.reg-from ul li .inp {
  width: 242px;
  height: 37px;
  border: 1px solid #ccc;
}

.reg-from ul li {
  margin-bottom: 20px;
}
.error {
  color: red;
}
.error-icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-color: purple;
}
.safe {
    padding-left: 140px;
}
.safe em {
  padding: 0 12px;
  
}
.ruo{
    background-color: #de1111;
}
.zhong{
    background-color: #40b83f;
}
.qiang{
    background-color: #f79100;
}
.agree{
    padding-left: 90px;
}
.agree input{
    vertical-align: middle;
}
.agree a{
    color: #1ba1e6;
    text-decoration: none;
}
.btn{
    width: 200px;
    height: 34px;
    background-color: red;
    color: white;
    font-size: 16px;
    margin:30px 0 0 70px;
}
.foot{
    text-align: center;
    margin-top: 20px;
}
</style>
