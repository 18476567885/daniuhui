<template>
  <div class="user-login-page">
    <header class="header ">
      <h1>
        <a href="javascript:void(0)" class="logo" style="cursor: auto;"
          ><img
            src="https://max.datahunter.cn/static/media/logo.bb967a60.svg"
            alt=""
        /></a>
      </h1>
      <div class="header-action">
        <a class="login-register" href="/register">注册</a><span>|</span
        ><a href="https://www.datahunter.cn/">返回首页</a>
      </div>
    </header>
    <div class="login-page-container">
      <div class="login-page-container-content">
        <div class="login-page-container__label"><span>登录</span>Data MAX</div>
        <form class="dh-form dh-form-horizontal dh-form-large">
          <input
            type="text"
            class="dh-input dh-input-lg"
            value=""
            style="display: none;"
          />
          <div class="dh-row dh-form-item">
            <div class="dh-col dh-form-item-control">
              <div class="dh-form-item-control-input">
                <div class="dh-form-item-control-input-content">
                  <input
                    placeholder="邮箱地址/手机号"
                    type="text"
                    id="username"
                    class="dh-input dh-input-lg"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="dh-row dh-form-item">
            <div class="dh-col dh-form-item-control">
              <div class="dh-form-item-control-input">
                <div class="dh-form-item-control-input-content">
                  <input
                    autocomplete="new-password"
                    placeholder="登录密码"
                    type="password"
                    id="password"
                    class="dh-input dh-input-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="dh-row dh-form-item">
            <div class="dh-col dh-form-item-control">
              <div class="dh-form-item-control-input">
                <div class="dh-form-item-control-input-content">
                  <button
                    type="submit"
                    class="dh-btn dh-btn-primary dh-btn-lg dh-btn-block"
                  >
                    <span>登 录</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
html,
body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.user-login-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(20%, #272c38),
    to(#181e25)
  );
  background: linear-gradient(180deg, #272c38 20%, #181e25);
}
.header {
  height: 48px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-login-page .login-page-container {
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header h1 {
  margin: 0;
}
.header .header-action {
  height: 48px;
  line-height: 48px;
}
.header h1 .logo {
  display: block;
  width: 172px;
  height: 64px;
}
.header h1 .logo img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
.header .header-action .login-register {
  color: #1da57a;
}
.header .header-action span {
  margin: 0 24px;
  color: #fff;
  opacity: 0.7;
}
.header .header-action a {
  color: #fff;
  opacity: 0.7;
}
.user-login-page .login-page-container .login-page-container-content {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-login-page
  .login-page-container
  .login-page-container-content
  .login-page-container__label {
  font-size: 28px;
  width: 100%;
  color: #f6f6f6;
  text-align: center;
  font-weight: 700;
  font-family: robot black;
}
.user-login-page .login-page-container .login-page-container-content .dh-form,
.user-login-page
  .login-page-container
  .login-page-container-content
  .dh-form-horizontal {
  width: 100%;
  margin-top: 34px;
}

.dh-form {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #999;
  font-size: 12px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  -webkit-font-feature-settings: "tnum", "tnum";
  font-feature-settings: "tnum", "tnum";
}

.dh-form-item {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  color: #999;
  font-size: 12px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  -webkit-font-feature-settings: "tnum", "tnum";
  font-feature-settings: "tnum", "tnum";
  margin: 0 0 24px;
  vertical-align: top;
}
.dh-form-item-control:first-child:not([class^="dh-col-"]):not([class*=" dh-col-"]) {
  width: 100%;
}
.dh-form-large .dh-form-item-control-input {
  min-height: 40px;
}
.dh-form-item-control-input-content {
  -ms-flex: auto;
  flex: auto;
  max-width: 100%;
}
.user-login-page
  .login-page-container
  .login-page-container-content
  .dh-form-horizontal
  .dh-form-item
  .dh-form-item-control
  .dh-input,
.user-login-page
  .login-page-container
  .login-page-container-content
  .dh-form
  .dh-form-item
  .dh-form-item-control
  .dh-input {
  height: 46px;
  background: #fff;
  border-radius: 4px;
  padding: 0 6px;
  border: 2px solid transparent;
  font-size: 16px;
}
.dh-input:placeholder-shown {
  text-overflow: ellipsis;
}
.user-login-page
  .login-page-container
  .login-page-container-content
  .dh-form-horizontal
  .dh-form-item
  .dh-form-item-control
  .dh-btn,
.user-login-page
  .login-page-container
  .login-page-container-content
  .dh-form
  .dh-form-item
  .dh-form-item-control
  .dh-btn {
  border-radius: 4px;
  height: 46px;
}
.dh-btn-block {
  width: 100%;
}
.dh-btn-primary {
  color: #fff;
  background-color: #23c312;
  border-color: #23c312;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.dh-btn-lg {
  height: 40px;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 0;
}
.dh-btn,
.dh-btn:active,
.dh-btn:focus {
  outline: 0;
}
.dh-btn {
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  height: 32px;
  padding: 5.6px 15px;
  font-size: 12px;
  border-radius: 0;
  color: #999;
  background-color: #2e2e2e;
  border: 1px solid #404040;
}
.user-login-page
  .login-page-container
  .login-page-container-content
  .dh-form-horizontal
  .dh-form-item
  .dh-form-item-control
  .dh-btn,
.user-login-page
  .login-page-container
  .login-page-container-content
  .dh-form
  .dh-form-item
  .dh-form-item-control
  .dh-btn {
  border-radius: 4px;
  height: 46px;
}
.dh-btn-block {
  width: 100%;
}
.dh-btn-primary {
  color: #fff;
  background-color: #23c312;
  border-color: #23c312;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.dh-btn-lg {
  height: 40px;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 0;
}
.dh-input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  -webkit-font-feature-settings: "tnum", "tnum";
  font-feature-settings: "tnum", "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 5.6px 11px;
  color: #999;
  font-size: 12px;
  line-height: 1.5715;
  background-color: #2e2e2e;
  background-image: none;
  border: 1px solid #404040;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
</style>
