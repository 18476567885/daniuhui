<template>
  <div>
    <div
      class="case_bg_1"
      style="height:calc(100% - 100px - 200px);min-height:calc(100vh - 100px - 200px);"
      data-v-dbad25da=""
    >
      <div class="logoDiv"><img src="/_nuxt/img/3b531ba.png" alt="" /></div>
      <div class="loginDiv">
        <form class="el-form demo-ruleForm">
          <div class="el-form-item">
            <!---->
            <div class="el-form-item__content" style="margin-left:1px;">
              <span style="color:333;font-size:20px;">会员登录</span
              ><!---->
            </div>
          </div>
          <input type="text" name="accounts1" style="display:none;" />
          <input type="password" name="password1" style="display:none;" />
          <div class="el-form-item">
            <!---->
            <div class="el-form-item__content" style="margin-left:1px;">
              <div class="el-input">
                <!----><input
                  type="text"
                  autocomplete="off"
                  placeholder="会员账号/手机号"
                  onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
                  class="el-input__inner"
                /><!----><!----><!---->
              </div>
              <!---->
            </div>
          </div>
          <input type="text" name="accounts11" style="display:none;" />
          <div class="el-form-item">
            <!---->
            <div class="el-form-item__content" style="margin-left:1px;">
              <div class="el-input">
                <!----><input
                  type="password"
                  autocomplete="off"
                  placeholder="密码"
                  onkeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
                  class="el-input__inner"
                /><!----><!----><!---->
              </div>
              <!---->
            </div>
          </div>
          <div class="el-form-item">
            <!---->
            <div class="el-form-item__content" style="margin-left:1px;">
              <button
                type="button"
                class="el-button el-button--primary is-round"
                style="width:100%;"
              >
                <!----><!----><span>登录</span></button
              ><!---->
            </div>
          </div>
          <div class="el-form-item">
            <!---->
            <div class="el-form-item__content" style="margin-left:1px;">
              <span class="badge_hover">免费注册</span>
              <span class="font_0388ff badge pull-right">忘记密码</span
              ><!---->
            </div>
          </div>
        </form>
      </div>
      <div
        class="el-dialog__wrapper messageDiv"
        style="display:none;"
        data-v-514cd5c4=""
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="dialog"
          class="el-dialog"
          style="margin-top:15vh;"
        >
          <div class="el-dialog__header">
            <span class="el-dialog__title"></span
            ><button
              type="button"
              aria-label="Close"
              class="el-dialog__headerbtn"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <!----><!---->
        </div>
      </div>
      <div class="el-dialog__wrapper" style="display:none;">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="成为开发者"
          class="el-dialog"
          style="margin-top:15vh;"
        >
          <div class="el-dialog__header">
            <span class="el-dialog__title">成为开发者</span
            ><button
              type="button"
              aria-label="Close"
              class="el-dialog__headerbtn"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <!----><!---->
        </div>
      </div>
    </div>
  </div>
</template>
<style>
    
.case_bg_1 {
    background-image: url(/_nuxt/img/a968edf.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #f5f5f5;
}
.case_bg_1 .logoDiv {
    position: absolute;
    left: 10%;
    top: 15vh;
}
.case_bg_1 .loginDiv {
    position: absolute;
    width: 360px;
    left: 60%;
    top: 25vh;
}
.case_bg_1 .demo-ruleForm {
    background: #fff;
    padding: 20px 40px;
}
.messageDiv {
    top: "10vh";
}
.el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}
.el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}
.footer {
    background: #f5f5f5;
    color: #303030;
    min-width: 1200px;
    height: 200px;
    letter-spacing: 0;
    position: relative;
}
.anchorDiv {
    position: fixed;
    width: 67px;
    height: 201px;
    bottom: 47px;
    right: 60px;
    z-index: 999;
    background: url(/_nuxt/img/7cc59c9.png) no-repeat;
    background-size: 67px 201px;
    background: none\9;
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="~assets/website/img/pill.png",sizingMethod="scale");
}
.messageDiv {
    top: "10vh";
}
.el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}
.el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}
.el-dialog {
    position: relative;
    margin: 0 auto 50px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
}
.el-dialog, .el-pager li {
    background: #fff;
    -webkit-box-sizing: border-box;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, i, iframe, img, input, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, time, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
body {
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: #f3f4f8;
    background: #f3f4f8;
}
body {
    line-height: 1;
}
body {
    font-family: Microsoft Yahei,SourceHanSansCN-Regular,SimHei,SimSun!important;
    font-size: 14px;
}
</style>