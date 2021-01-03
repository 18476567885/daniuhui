<template>
  <div>
    <div class="header ">
      <div class="w">
        <div class="logo">
          <svg viewBox="0 0 363 67" class="ax ay az b0">
            <g fill-rule="evenodd">
              <path
                d="M96.7 1.6c-.7.6-1 1.5-1 2.4v18.7H76.3V4c0-1-.3-1.8-1-2.4-.7-.8-1.5-1-2.5-1s-1.8.2-2.5 1c-.7.6-1 1.5-1 2.4v44.4c0 1 .3 1.8 1 2.5.7.6 1.5 1 2.5 1s1.8-.4 2.5-1c.7-.8 1-1.6 1-2.6V29.8h19.4v18.6c0 1 .3 1.8 1 2.5.7.6 1.6 1 2.5 1 1 0 2-.4 2.6-1 .7-.8 1-1.6 1-2.6V4c0-1-.3-1.8-1-2.4-.7-.8-1.6-1-2.6-1s-1.8.2-2.5 1zm49.2 25c-1.4-3.6-3.7-6.5-7-8.7-3.2-2.3-6.7-3.4-10.5-3.4-5 0-9.6 1.8-13.2 5.5-3.7 3.7-5.5 8-5.5 13.3 0 5.2 1.8 9.6 5.5 13.2 3.6 3.7 8 5.5 13.2 5.5 6 0 11-2.4 14.7-7.2.6-.8 1-1.7.8-2.6-.2-1-.6-1.8-1.4-2.4-.8-.6-1.6-1-2.6-.7-1 .2-1.8.6-2.4 1.4-2.3 3-5.3 4.5-9 4.5-3.3 0-6-1.3-8.3-3.5-2.3-2.3-3.4-5-3.4-8.2 0-3.2 1-6 3.3-8.2 2.3-2 5-3.3 8.2-3.3 3.7 0 6.7 1.5 9 4.5l-16 6.4c-1 .4-1.6 1-2 2-.4.8-.4 1.7 0 2.6.6 1.5 1.7 2.3 3.3 2.3.4 0 1 0 1.3-.3l20-8c1-.3 1.5-1 2-1.8.3-1 .3-2 0-2.7zm9-25c-.8.6-1.2 1.5-1.2 2.4v44.4c0 1 .4 1.8 1 2.5.8.6 1.6 1 2.6 1s1.8-.4 2.5-1c.6-.8 1-1.6 1-2.6V4c0-1-.4-1.8-1-2.4-.8-.8-1.6-1-2.6-1s-1.8.2-2.5 1zM175.4 20c-3.6 3.7-5.5 8-5.5 13.3v29.2c0 1 .4 2 1 2.6.8.8 1.6 1 2.6 1s1.8-.2 2.5-1c.8-.6 1-1.5 1-2.5V33.3c0-3.2 1.3-6 3.5-8.2 2.3-2 5-3.3 8.2-3.3 3.2 0 6 1.2 8.2 3.4 2.2 2.4 3.3 5 3.3 8.3 0 3.2-1 6-3.4 8.2-2.4 2.2-5 3.4-8.3 3.4-1.8 0-3.4-.5-5-1.3-1-.4-1.8-.5-2.7 0-1 .2-1.7.8-2 1.7-.5.8-.6 1.8-.3 2.7.4 1 1 1.7 2 2 2.4 1.4 5 2 8 2 5.2 0 9.6-1.8 13.2-5.5 3.6-3.6 5.4-8 5.4-13.2 0-5.2-1.8-9.6-5.5-13.2-3.7-3.6-8-5.4-13.3-5.4-5 0-9.5 1.8-13.2 5.5zm66.8-18.4c-.8.6-1 1.5-1 2.4v18.7h-19.5V4c0-1-.3-1.8-1-2.4-.7-.8-1.5-1-2.5-1s-1.8.2-2.5 1c-.7.6-1 1.5-1 2.4v44.4c0 1 .3 1.8 1 2.5.7.6 1.5 1 2.5 1s1.8-.4 2.5-1c.7-.8 1-1.6 1-2.6V29.8h19.4v18.6c0 1 .3 1.8 1 2.5.8.6 1.6 1 2.5 1 1 0 2-.4 2.6-1 .7-.8 1-1.6 1-2.6V4c0-1-.3-1.8-1-2.4-.7-.8-1.6-1-2.6-1s-1.7.2-2.4 1zm49 25c-1.2-3.6-3.5-6.5-6.7-8.7-3.3-2.3-6.8-3.4-10.6-3.4-5 0-9.6 1.8-13.2 5.5-3.7 3.7-5.5 8-5.5 13.3 0 5.2 1.8 9.6 5.5 13.2 3.6 3.7 8 5.5 13.2 5.5 6 0 11-2.4 14.7-7.2.7-.8 1-1.7.8-2.6-.2-1-.6-1.8-1.4-2.4-.7-.6-1.5-1-2.5-.7-1 .2-1.8.6-2.4 1.4-2.2 3-5.2 4.5-9 4.5-3.2 0-6-1.3-8.2-3.5-2.3-2.3-3.4-5-3.4-8.2 0-3.2 1-6 3.4-8.2 2.3-2 5-3.3 8.2-3.3 3.7 0 6.7 1.5 9 4.5l-16 6.4c-1 .4-1.6 1-2 2-.4.8-.4 1.7 0 2.6.6 1.5 1.7 2.3 3.3 2.3.4 0 1 0 1.3-.3l20-8c.8-.3 1.4-1 1.8-1.8.4-1 .4-2 0-2.7zm24.4-12c-3.8 0-7.3 1.2-10.3 3.7 0-1-.4-2-1-2.6-.8-.7-1.6-1-2.6-1s-1.8.3-2.5 1-1 1.5-1 2.5v30.2c0 1 .3 2 1 2.5.7.6 1.5 1 2.5 1s1.8-.4 2.5-1c.7-.7 1-1.6 1-2.6v-15c0-3.3 1-6 3-8.3 2-2 4.6-3.3 7.4-3.3.6 0 1 0 1.7.2 1 0 1.8 0 2.6-.7.8-.5 1.3-1.3 1.5-2.2.2-1 0-1.8-.5-2.6-.6-.8-1.4-1.3-2.3-1.5-1-.3-2-.4-3-.4zm14.7 5.5c-3.6 3.7-5.5 8-5.5 13.3 0 5.2 1.8 9.6 5.4 13.2 3.7 3.7 8 5.5 13.3 5.5 5 0 9.5-1.8 13-5.5 3.8-3.6 5.6-8 5.6-13.2 0-5.2-1.8-9.6-5.5-13.2-3.6-3.6-8-5.4-13-5.4-5.3 0-9.7 1.8-13.4 5.5zm5 21.5c-2.2-2.3-3.3-5-3.3-8.2 0-3.2 1.2-6 3.5-8.2 2.2-2 5-3.3 8.2-3.3 3 0 6 1.2 8 3.4 2.4 2.4 3.5 5 3.5 8.3 0 3.2-1 6-3.4 8.2-2.2 2.2-5 3.4-8 3.4-3.4 0-6-1.3-8.3-3.5z"
              ></path>
              <path d="M41 5.5v27H1.2L14.8 19 1.2 5.5z"></path>
              <rect width="7" height="51.5" x="40" y=".5" rx="3.5"></rect>
            </g>
          </svg>
          <svg viewBox="0 0 363 67" class="ax ay az b0">
            <g fill-rule="evenodd">
              <path
                d="M96.7 1.6c-.7.6-1 1.5-1 2.4v18.7H76.3V4c0-1-.3-1.8-1-2.4-.7-.8-1.5-1-2.5-1s-1.8.2-2.5 1c-.7.6-1 1.5-1 2.4v44.4c0 1 .3 1.8 1 2.5.7.6 1.5 1 2.5 1s1.8-.4 2.5-1c.7-.8 1-1.6 1-2.6V29.8h19.4v18.6c0 1 .3 1.8 1 2.5.7.6 1.6 1 2.5 1 1 0 2-.4 2.6-1 .7-.8 1-1.6 1-2.6V4c0-1-.3-1.8-1-2.4-.7-.8-1.6-1-2.6-1s-1.8.2-2.5 1zm49.2 25c-1.4-3.6-3.7-6.5-7-8.7-3.2-2.3-6.7-3.4-10.5-3.4-5 0-9.6 1.8-13.2 5.5-3.7 3.7-5.5 8-5.5 13.3 0 5.2 1.8 9.6 5.5 13.2 3.6 3.7 8 5.5 13.2 5.5 6 0 11-2.4 14.7-7.2.6-.8 1-1.7.8-2.6-.2-1-.6-1.8-1.4-2.4-.8-.6-1.6-1-2.6-.7-1 .2-1.8.6-2.4 1.4-2.3 3-5.3 4.5-9 4.5-3.3 0-6-1.3-8.3-3.5-2.3-2.3-3.4-5-3.4-8.2 0-3.2 1-6 3.3-8.2 2.3-2 5-3.3 8.2-3.3 3.7 0 6.7 1.5 9 4.5l-16 6.4c-1 .4-1.6 1-2 2-.4.8-.4 1.7 0 2.6.6 1.5 1.7 2.3 3.3 2.3.4 0 1 0 1.3-.3l20-8c1-.3 1.5-1 2-1.8.3-1 .3-2 0-2.7zm9-25c-.8.6-1.2 1.5-1.2 2.4v44.4c0 1 .4 1.8 1 2.5.8.6 1.6 1 2.6 1s1.8-.4 2.5-1c.6-.8 1-1.6 1-2.6V4c0-1-.4-1.8-1-2.4-.8-.8-1.6-1-2.6-1s-1.8.2-2.5 1zM175.4 20c-3.6 3.7-5.5 8-5.5 13.3v29.2c0 1 .4 2 1 2.6.8.8 1.6 1 2.6 1s1.8-.2 2.5-1c.8-.6 1-1.5 1-2.5V33.3c0-3.2 1.3-6 3.5-8.2 2.3-2 5-3.3 8.2-3.3 3.2 0 6 1.2 8.2 3.4 2.2 2.4 3.3 5 3.3 8.3 0 3.2-1 6-3.4 8.2-2.4 2.2-5 3.4-8.3 3.4-1.8 0-3.4-.5-5-1.3-1-.4-1.8-.5-2.7 0-1 .2-1.7.8-2 1.7-.5.8-.6 1.8-.3 2.7.4 1 1 1.7 2 2 2.4 1.4 5 2 8 2 5.2 0 9.6-1.8 13.2-5.5 3.6-3.6 5.4-8 5.4-13.2 0-5.2-1.8-9.6-5.5-13.2-3.7-3.6-8-5.4-13.3-5.4-5 0-9.5 1.8-13.2 5.5zm66.8-18.4c-.8.6-1 1.5-1 2.4v18.7h-19.5V4c0-1-.3-1.8-1-2.4-.7-.8-1.5-1-2.5-1s-1.8.2-2.5 1c-.7.6-1 1.5-1 2.4v44.4c0 1 .3 1.8 1 2.5.7.6 1.5 1 2.5 1s1.8-.4 2.5-1c.7-.8 1-1.6 1-2.6V29.8h19.4v18.6c0 1 .3 1.8 1 2.5.8.6 1.6 1 2.5 1 1 0 2-.4 2.6-1 .7-.8 1-1.6 1-2.6V4c0-1-.3-1.8-1-2.4-.7-.8-1.6-1-2.6-1s-1.7.2-2.4 1zm49 25c-1.2-3.6-3.5-6.5-6.7-8.7-3.3-2.3-6.8-3.4-10.6-3.4-5 0-9.6 1.8-13.2 5.5-3.7 3.7-5.5 8-5.5 13.3 0 5.2 1.8 9.6 5.5 13.2 3.6 3.7 8 5.5 13.2 5.5 6 0 11-2.4 14.7-7.2.7-.8 1-1.7.8-2.6-.2-1-.6-1.8-1.4-2.4-.7-.6-1.5-1-2.5-.7-1 .2-1.8.6-2.4 1.4-2.2 3-5.2 4.5-9 4.5-3.2 0-6-1.3-8.2-3.5-2.3-2.3-3.4-5-3.4-8.2 0-3.2 1-6 3.4-8.2 2.3-2 5-3.3 8.2-3.3 3.7 0 6.7 1.5 9 4.5l-16 6.4c-1 .4-1.6 1-2 2-.4.8-.4 1.7 0 2.6.6 1.5 1.7 2.3 3.3 2.3.4 0 1 0 1.3-.3l20-8c.8-.3 1.4-1 1.8-1.8.4-1 .4-2 0-2.7zm24.4-12c-3.8 0-7.3 1.2-10.3 3.7 0-1-.4-2-1-2.6-.8-.7-1.6-1-2.6-1s-1.8.3-2.5 1-1 1.5-1 2.5v30.2c0 1 .3 2 1 2.5.7.6 1.5 1 2.5 1s1.8-.4 2.5-1c.7-.7 1-1.6 1-2.6v-15c0-3.3 1-6 3-8.3 2-2 4.6-3.3 7.4-3.3.6 0 1 0 1.7.2 1 0 1.8 0 2.6-.7.8-.5 1.3-1.3 1.5-2.2.2-1 0-1.8-.5-2.6-.6-.8-1.4-1.3-2.3-1.5-1-.3-2-.4-3-.4zm14.7 5.5c-3.6 3.7-5.5 8-5.5 13.3 0 5.2 1.8 9.6 5.4 13.2 3.7 3.7 8 5.5 13.3 5.5 5 0 9.5-1.8 13-5.5 3.8-3.6 5.6-8 5.6-13.2 0-5.2-1.8-9.6-5.5-13.2-3.6-3.6-8-5.4-13-5.4-5.3 0-9.7 1.8-13.4 5.5zm5 21.5c-2.2-2.3-3.3-5-3.3-8.2 0-3.2 1.2-6 3.5-8.2 2.2-2 5-3.3 8.2-3.3 3 0 6 1.2 8 3.4 2.4 2.4 3.5 5 3.5 8.3 0 3.2-1 6-3.4 8.2-2.2 2.2-5 3.4-8 3.4-3.4 0-6-1.3-8.3-3.5z"
              ></path>
              <path d="M41 5.5v27H1.2L14.8 19 1.2 5.5z"></path>
              <rect width="7" height="51.5" x="40" y=".5" rx="3.5"></rect>
            </g>
          </svg>
        </div>
        <div class="nav">
          <ul>
            <li><a href="">Benefits</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">FAQs</a></li>
            <li><a href="">Docs</a></li>
          </ul>
        </div>
        <div class="nav-right">
          <li>
            <a href=""
              >SGNIN
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="bo bp ax as bq"
              >
                <g stroke="none" stroke-width="1">
                  <polygon
                    fill="none"
                    points="0 0 24 0 24 24 0 24"
                    fill-rule="evenodd"
                  ></polygon>
                  <polygon
                    fill-rule="nonzero"
                    points="12 4 10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12"
                  ></polygon>
                </g>
              </svg>
            </a>
          </li>
        </div>
      </div>
      <!-- 版心w结束 -->
    </div>
    <!-- header结束 -->
    <div class="banner">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
      <div class="banner-3"></div>
      <div class="banner-4">
        <div class="banner-item">
          <ul>
            <li>
              <div class="first">
                Easy
                <!-- -->&amp;<!-- -->
                affordable way <br />
                to create product tours
              </div>
            </li>
            <li>
              <div class="two">
                Create interactive, easy to follow product <br />
                tours that will help your users get started <br />
                and adopt new features quicker than ever. <br />
                No coding or big budgets required.
              </div>
            </li>
            <li>
              <div class="three">
                <div class="three-1">
                  Try for free
                </div>
                <div class="three-2">
                  <div style="padding-top:10px">
                    <span
                      style="color:rgba(255,255,255,0.85);margin:0px 15px;white-space:nowrap"
                      ><svg
                        viewBox="0 0 11 10"
                        fill="currentColor"
                        opacity="0.8"
                        style="width:12px;height:12px;margin-right:6px"
                      >
                        <path
                          d="M9.8.2L3.3 6.9l-1.8-2C.8 4.2-.4 5 .1 6l2.1 3.5c.3.4 1.1.9 1.9 0l6.6-8.3c.8-.8-.2-1.6-.9-1z"
                        ></path>
                      </svg>
                      <span class="dt">No credit card required</span></span
                    >
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="banner-item-right">
          <svg
            viewBox="0 0 660 430"
            class="gl gm gn go gp g6"
            style="width:660px;height:430px;pointer-events:none;border-radius:8px"
          >
            <g>
              <g>
                <g>
                  <rect
                    x="0"
                    y="0"
                    fill="white"
                    width="660"
                    height="430"
                  ></rect>
                  <rect
                    x="0"
                    y="0"
                    width="660"
                    height="40"
                    fill="#eaeef4"
                  ></rect>
                  <rect
                    rx="4"
                    ry="4"
                    x="115.5"
                    y="13"
                    width="429"
                    height="20"
                    fill="#d5dbe3"
                  ></rect>
                  <rect
                    x="0"
                    y="39"
                    width="660"
                    height="1"
                    fill="#afbbc7"
                  ></rect>
                  <path
                    transform="translate(47.5,15)"
                    d="M7.2 3L2.7 7.3 7.2 12"
                    stroke="#9a9a9a"
                    fill="none"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    transform="translate(82.5,15)"
                    d="M3.2 11.9l4.5-4.5-4.5-4.5"
                    stroke="#9a9a9a"
                    fill="none"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    transform="translate(559.5,15)"
                    d="M8 3v10M3 8h10"
                    stroke="#9a9a9a"
                    fill="none"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <g transform="translate(589.5,15)">
                    <path
                      d="M9.6 5.4H4.1a1 1 0 00-1 1V12c0 .6.4 1 1 1h5.5c.6 0 1-.4 1-1V6.5c0-.6-.4-1.1-1-1.1z"
                      stroke="#9a9a9a"
                      fill="none"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.2 10.7a.9.9 0 00.8-.8v-6a.9.9 0 00-.8-.8h-6a.9.9 0 00-.8.8"
                      stroke="#9a9a9a"
                      fill="none"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <path
                    transform="translate(243.5,18)"
                    fill="#9a9a9a"
                    d="M6.73 3.65v-.88a2.77 2.77 0 00-5.54 0v.88a1.38 1.38 0 00-.69 1.2v2.77A1.38 1.38 0 001.88 9h4.16a1.38 1.38 0 001.38-1.38V4.85a1.38 1.38 0 00-.69-1.2zm-1.38.5H2.58V2.77a1.38 1.38 0 112.77 0v1.38z"
                  ></path>
                  <rect
                    rx="2"
                    ry="2"
                    x="258.5"
                    y="20"
                    width="143"
                    height="6"
                    fill="#afbbc7"
                  ></rect>
                </g>
                <svg
                  y="40"
                  width="660"
                  height="390"
                  viewBox="0 0 750 500"
                  preserveAspectRatio="xMinYMin slice"
                >
                  <g fill="#FF9100" fill-rule="evenodd">
                    <g transform="translate(358 335)">
                      <path d="M.3 6h88.2v4.7H.3z"></path>
                      <path
                        opacity=".5"
                        d="M.3 18.5h180v4.7H.3zM.3 30.5h45v4.7H.3zM133.3 30.5h55v4.7h-55zM50.3 30.5h78v4.7h-78z"
                      ></path>
                      <rect
                        opacity=".2"
                        x="272"
                        width="38"
                        height="38"
                        rx="2"
                      ></rect>
                      <rect
                        opacity=".2"
                        x="228"
                        width="38"
                        height="38"
                        rx="2"
                      ></rect>
                      <path
                        d="M296 15c0 2.6-2 4.6-4.7 4.6-2.5 0-4.5-2-4.5-4.6 0-2.6 2-4.6 4.5-4.6 2.6 0 4.6 2 4.6 4.6zm-14 11.7c0-3.2 6-5 9-5 3.2 0 9.3 1.8 9.3 5v1.5H282v-1.5zM247.5 28s7.5-7.7 7.5-11.7c0-4-3.4-7.3-7.5-7.3-4 0-7.5 3.3-7.5 7.3s7.5 11.7 7.5 11.7zm0-9.8c1.4 0 2.6-1.2 2.6-2.5 0-1.4-1-2.6-2.5-2.6-1.4 0-2.6 1.3-2.6 2.7 0 1.3 1 2.5 2.5 2.5z"
                        opacity=".8"
                      ></path>
                    </g>
                    <g transform="translate(358 79)">
                      <rect opacity=".2" width="310" height="230" rx="4"></rect>
                      <g transform="translate(101 90)">
                        <path
                          opacity=".8"
                          d="M37 1l20.5 34.4L75.7 23l30 35H.3"
                        ></path>
                        <ellipse
                          opacity=".8"
                          cx="93.1"
                          cy="9.7"
                          rx="8.7"
                          ry="8.7"
                        ></ellipse>
                      </g>
                    </g>
                    <g>
                      <g transform="translate(83 335)">
                        <path d="M63.3 11.7H129v4.7H63.3z"></path>
                        <path
                          opacity=".5"
                          d="M63.3 23.4h129.2V28H63.3zM63.3 35.2h131.3V40H63.3z"
                        ></path>
                        <rect
                          opacity=".2"
                          width="51.6"
                          height="51.6"
                          rx="2"
                        ></rect>
                        <g transform="translate(7, 15) scale(0.35)">
                          <path
                            opacity=".8"
                            d="M37 1l20.5 34.4L75.7 23l30 35H.3"
                          ></path>
                          <ellipse
                            opacity=".8"
                            cx="93.1"
                            cy="9.7"
                            rx="8.7"
                            ry="8.7"
                          ></ellipse>
                        </g>
                      </g>
                      <g transform="translate(83 270)">
                        <path d="M63.3 11.7h76.2v4.7H63.3z"></path>
                        <path
                          opacity=".5"
                          d="M63.3 23.4H210V28H63.2zM63.3 35.2h129V40h-129z"
                        ></path>
                        <rect
                          opacity=".2"
                          width="51.6"
                          height="51.6"
                          rx="2"
                        ></rect>
                        <g transform="translate(7, 15) scale(0.35)">
                          <path
                            opacity=".8"
                            d="M37 1l20.5 34.4L75.7 23l30 35H.3"
                          ></path>
                          <ellipse
                            opacity=".8"
                            cx="93.1"
                            cy="9.7"
                            rx="8.7"
                            ry="8.7"
                          ></ellipse>
                        </g>
                      </g>
                      <g transform="translate(83 205)">
                        <path
                          d="M63.3 10H158v4.7H63.3zM163.6 10h10.8v4.7h-10.8z"
                        ></path>
                        <path
                          opacity=".5"
                          d="M63.3 21.7h140v4.7h-140zM63.3 33.5h59.2v4.7H63.3z"
                        ></path>
                        <rect
                          opacity=".2"
                          width="51.6"
                          height="51.6"
                          rx="2"
                        ></rect>
                        <g transform="translate(7, 15) scale(0.35)">
                          <path
                            opacity=".8"
                            d="M37 1l20.5 34.4L75.7 23l30 35H.3"
                          ></path>
                          <ellipse
                            opacity=".8"
                            cx="93.1"
                            cy="9.7"
                            rx="8.7"
                            ry="8.7"
                          ></ellipse>
                        </g>
                      </g>
                      <g transform="translate(83 140)">
                        <path d="M63.3 11.7h76.2v4.7H63.3z"></path>
                        <path
                          opacity=".5"
                          d="M63.3 23.4H210V28H63.2zM63.3 35.2h129V40h-129z"
                        ></path>
                        <rect
                          opacity=".2"
                          width="51.6"
                          height="51.6"
                          rx="2"
                        ></rect>
                        <g opacity=".8" transform="translate(13, 13)">
                          <path
                            d="M13 26c7.2 0 13-5.8 13-13S20.2 0 13 0 0 5.8 0 13s5.8 13 13 13zM9 12.6V6l5.7 3.3 5.7 3.3-5.7 3.3L9 19v-6.6z"
                          ></path>
                        </g>
                      </g>
                      <g transform="translate(83 75)">
                        <path
                          d="M63.3 10H116v4.7H63.4zM122 10h17.5v4.7H122z"
                        ></path>
                        <path
                          opacity=".5"
                          d="M63.3 21.7H210v4.7H63.2zM63.3 33.5H210v4.7H63.2z"
                        ></path>
                        <rect
                          opacity=".2"
                          width="51.6"
                          height="51.6"
                          rx="2"
                        ></rect>
                        <g opacity=".8" transform="translate(13, 13)">
                          <path
                            d="M13 26c7.2 0 13-5.8 13-13S20.2 0 13 0 0 5.8 0 13s5.8 13 13 13zM9 12.6V6l5.7 3.3 5.7 3.3-5.7 3.3L9 19v-6.6z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <path d="M0 0h750v34H0z"></path>
                    <path fill="#fff" d="M20.5 8L29 25H12"></path>
                    <text
                      dy="0.3em"
                      x="45"
                      y="17"
                      style="font-size: 14px; fill: rgb(255, 255, 255); font-weight: bold;"
                    >
                      MySite
                    </text>
                    <circle
                      cx="720"
                      cy="17"
                      stroke="#fff"
                      stroke-width="1"
                      r="9"
                    ></circle>
                    <rect
                      x="600"
                      y="8"
                      width="100"
                      height="18"
                      rx="8"
                      stroke="#fff"
                      stroke-width="1"
                    ></rect>
                  </g>
                </svg>
                <rect
                  y="40"
                  width="660"
                  height="390"
                  fill="black"
                  opacity="0.39822222222222226"
                ></rect>
                <g
                  opacity="0.9955555555555555"
                  transform="translate(210 177.64444444444445)"
                >
                  <defs>
                    <filter id="dialogShadow">
                      <feGaussianBlur
                        stdDeviation="3"
                        result="coloredBlur"
                      ></feGaussianBlur>
                      <feMerge>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                    <clipPath id="welcomeModalButton">
                      <rect
                        x="154"
                        y="82"
                        rx="3"
                        ry="3"
                        width="76"
                        height="22"
                      ></rect>
                    </clipPath>
                  </defs>
                  <rect
                    y="6"
                    rx="3"
                    ry="3"
                    width="240"
                    height="108"
                    fill="rgba(0,0,0,0.2)"
                    filter="url(#dialogShadow)"
                  ></rect>
                  <rect
                    rx="3"
                    ry="3"
                    width="240"
                    height="114"
                    fill="white"
                  ></rect>
                  <path
                    d="M3 0 L237 0 Q240 0 240 3 L240 26 Q240 26 240 26 L0 26 Q0 26 0 26 L0 3 Q0 0 3 0 Z"
                    style="fill: rgb(33, 150, 243);"
                  ></path>
                  <text
                    dy="0.3em"
                    x="10"
                    y="13"
                    style="fill: white; font-size: 14px;"
                  >
                    Easy onboarding
                  </text>
                  <text y="36" style="fill: black; font-size: 13px;">
                    <tspan x="10" dy="1em">
                      Welcome your users into your app
                    </tspan>
                    <tspan x="10" dy="1.5em">
                      with an interactive product tour
                    </tspan>
                  </text>
                  <rect
                    x="154"
                    y="82"
                    rx="3"
                    ry="3"
                    width="76"
                    height="22"
                    style="fill: rgb(33, 150, 243);"
                  ></rect>
                  <text
                    dy="1.2em"
                    x="164"
                    y="82"
                    style="fill: white; font-size: 13px;"
                  >
                    Start tour
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: "pnum";
  font-feature-settings: "pnum";
  font-variant-numeric: proportional-nums;
}

* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}

a {
  text-decoration: none;
}
.w {
  width: 1200px;
  margin: auto;
}
.header {
  position: sticky;
  line-height: 60px;
  height: 60px;
  background-color: #1e88e5;
}
.header .logo {
  font-size: 40px;
}
.logo svg {
  width: 130px;
  height: 24px;
  /* margin-top: 10px; */
  fill: #fff;
  margin: 10px -6px 0;
}
.logo,
.nav {
  float: left;
}
.header .nav {
  padding-left: 20px;
}
.header .nav ul {
  text-align: center;
}
.header .nav ul li {
  display: inline-block;
  padding: 5px 20px;
  line-height: 2;
}
.header .nav ul li a {
  color: white;
  font-size: 17px;
}
.header .nav-right {
  float: right;
}
.header .nav-right a {
  color: white;
}

.header .nav-right svg {
  position: relative;
  top: 2px;
  height: 16px;
  width: 16px;
}
.banner {
  position: relative;
  overflow: hidden;
  color: #636363;
  line-height: 1.6;
  font-size: 17px;
}
.header .nav li:hover,
.header .nav-right li:hover {
  background-color: #2196f3;
}
.header .nav-right li {
  display: inline-block;
}
.banner .banner-1 {
  position: absolute;
  display: block;
  width: 100%;
  transform: skewY(-8.5deg) translateY(76%);
  height: 680px;
  top: -650px;
  background: -webkit-linear-gradient(90deg, #2196f3, #1976d2);
  background: -moz-linear-gradient(90deg, #2196f3, #1976d2);
  background: linear-gradient(90deg, #2196f3, #1976d2);
}
.banner .banner-2 {
  position: absolute;
  width: 100%;
  height: 600px;
  top: -650px;
  transform: skewY(-8.5deg) translateY(76%);
  background: -webkit-linear-gradient(100deg, #1976d2, #2196f3);
  background: -moz-linear-gradient(100deg, #1976d2, #2196f3);
  background: linear-gradient(100deg, #1976d2, #2196f3);
}
.banner .banner-3 {
  position: absolute;
  top: -650px;
  width: 100%;
  height: 365px;
  transform: skewY(-8.5deg) translateY(76%);
  background: -webkit-linear-gradient(20deg, #1e88e5, #1976d2);
  background: -moz-linear-gradient(20deg, #1e88e5, #1976d2);
  background: linear-gradient(20deg, #1e88e5, #1976d2);
}
.banner .banner-4 {
  position: relative;
  margin: 0 auto;
  max-width: 1040px;

  font-size: 17px;
  line-height: 1.6;
  color: #636363;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  padding: 120px 20px 100px 20px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
}
.banner .banner-4 .banner-item {
  width: 100%;
  flex: 1 0 470px;
}
.banner .banner-item ul li .first {
  letter-spacing: 0.8px;
  padding-bottom: 30px;
  letter-spacing: 0.8px;
  line-height: 1.25;
  font-size: 44px;
  font-weight: 500;
  color: #fff;
}

.banner .banner-item ul li .two {
  padding-bottom: 50px;
  line-height: 1.35;
  font-size: 24px;
  font-weight: 300;
  color: #fff;
}
.banner .banner-item ul li .three {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  color: #fff;
}

.banner .banner-item ul li .three-1 {
  box-shadow: 0 4px 6px rgba(50, 50, 50, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);

  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: all 0.15s ease;
  -moz-transition: all 0.15s ease;
  transition: all 0.15s ease;
  text-decoration: none;
  text-transform: uppercase;
  background: #ffab40;
  padding: 10px 30px;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 5px;

  -webkit-box-align: center;
  align-items: center;
}
.banner-item .banner-item-right {
  transform: scale(0.9) translateX(-25px) translateY(-30px) perspective(3090px)
    rotateY(-29deg) rotateX(2deg) rotate(1deg);
  flex: 1 0 auto;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  border-radius: 8px;
  box-shadow: 1px 1px 5px 0 rgba(26, 26, 67, 0.05),
    39px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
    23.4px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
}
</style>
