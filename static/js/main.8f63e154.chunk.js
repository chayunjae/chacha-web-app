(this["webpackJsonpchacha-web-app"]=this["webpackJsonpchacha-web-app"]||[]).push([[0],{196:function(e,n,t){e.exports=t(439)},433:function(e,n,t){},439:function(e,n,t){"use strict";t.r(n);t(197),t(143),t(246);var a=t(1),o=t.n(a),r=t(190),c=t.n(r),l=(t(433),t(24)),i=t(44),s=t(45),u=t(89),d=t.n(u),m=t(90),h=t.n(m);function g(){var e=Object(i.a)(["\n  transition: all 0.3s ease;\n  height: 100vh;\n  *::-webkit-scrollbar {\n    display: none;\n  }\n  background-color: ",";\n  color: ",";\n  // \ud5e4\ub354 CSS\n  .header-wrap {\n    position: fixed;\n    box-sizing: border-box;\n    width: 100%;\n    height: 50px;\n    transition: all 0.1s ease;\n    z-index: 10;\n  }\n\n  .backcolor-add {\n    background-color: ",";\n    backdrop-filter: blur(17px);\n  }\n  .header-wrap,\n  .header-nav-wrap,\n  .toggle-wrap {\n    display: flex;\n    align-items: center;\n  }\n  .header-logo {\n    flex: 1;\n    height: 30px;\n    transition: all 0.3s ease;\n    background-image: ",";\n    background-size: 30px;\n    background-repeat: no-repeat;\n  }\n  .header-nav-wrap {\n    flex: 2;\n    justify-content: flex-end;\n  }\n  .header-icon {\n    font-size: 1.25rem;\n  }\n  .toggle-wrap {\n    width: 35px;\n    height: 20px;\n    border-radius: 30px;\n    transition: all 0.3s ease;\n    background-color: ",";\n    overflow: hidden;\n    padding: 0 1px;\n    margin-left: 15px;\n  }\n  .toggle-dot {\n    width: 18px;\n    height: 18px;\n    position: relative;\n    left: ",";\n    border-radius: 100px;\n    transition: all 0.3s ease;\n    background-color: #fff;\n    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);\n  }\n  .hamberger-wrap {\n    position: fixed;\n    z-index: 20;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 50px;\n    right: 0;\n  }\n  .menu-wrap {\n    display: flex;\n    width: 25px;\n    height: 30px;\n    margin-right: 15px;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .menu-btn-bar {\n    width: 100%;\n    height: 4px;\n    transition: all 0.3s ease;\n    background-color: ",";\n    margin-bottom: 5px;\n  }\n  .menu-btn-bar:last-child {\n    margin-bottom: 0px;\n  }\n\n  .menu-modal-wrap {\n    position: fixed;\n    opacity: 0;\n    z-index: 0;\n    transition: all 0.3s ease;\n    background-color: ",";\n    backdrop-filter: blur(7px);\n    color: var(--white-font-color);\n    width: 100%;\n    height: 100%;\n    &.show-default {\n      display: none;\n    }\n  }\n  .delay-view {\n    transition-delay: all 0.6s ease;\n    position: absolute;\n    opacity: 0;\n    z-index: -1;\n    width: 100vw;\n    /* height: calc(100vh - 90px); */\n    height: 100vh;\n    overflow-y: scroll;\n  }\n\n  .menu-nav-wrap {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n  }\n\n  .clock {\n    display: flex;\n    height: 30px;\n    line-height: 35px;\n    margin: 0 15px;\n    padding: 0 10px;\n    transition: all 0.4s ease;\n    &:hover {\n      background-color: ",";\n      backdrop-filter: blur(7px);\n      -webkit-backdrop-filter: blur(7px);\n      border-radius: 6px;\n    }\n  }\n\n  .clock-box {\n    background-color: ",";\n    position: fixed;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16vw;\n  }\n  // \uba54\uc778 CSS\n  .main-wrap {\n    padding-top: 50px;\n  }\n"]);return g=function(){return e},e}var b=s.a.section(g(),(function(e){return!0===e.theme?"var(--white-bg-color)":"var(--dark-bg-color)"}),(function(e){return!0===e.theme?"var(--white-font-color)":"var(--dark-font-color)"}),(function(e){return!0===e.theme?"var(--white--hd-bg-color)":"var(--dark--hd-bg-color)"}),(function(e){var n=e.theme;return"url(".concat(!0===n?h.a:d.a,")")}),(function(e){return!0===e.theme?"var(--white-toggle-bg-color)":"var(--dark-toggle-bg-color)"}),(function(e){return!0===e.theme?"0px":"17px"}),(function(e){return!0===e.theme?"var(--dark-bg-color)":"var(--white-bg-color)"}),(function(e){return!0===e.theme?"var(--dark-menu-bg-color)":"var(--white-menu-bg-color)"}),(function(e){return!0===e.theme?"var(--gray-w-bg-color)":"var(--gray-b-bg-color)"}),(function(e){return!0===e.theme?"var(--gray-w-bg-color)":"var(--gray-b-bg-color)"})),v=t(194),p=t(195);var f=function(e){return o.a.createElement("div",{className:"header-wrap pdr-55-l-15 ".concat("NONE"===e.menuToggle?"backcolor-add":e.menuToggle?"backcolor-del":"backcolor-add")},"INDEX"!==e.curPage&&o.a.createElement("div",{className:"header-logo ".concat("NONE"===e.menuToggle?"show-default":e.menuToggle?"hide-box":"show-box")}),o.a.createElement("div",{className:"header-nav-wrap"},o.a.createElement("div",{className:"clock time-font cur ".concat(!0===e.clockWrap&&"hide-data"," ").concat("NONE"===e.menuToggle?"show-default":e.menuToggle?"hide-box":"show-box"),onClick:function(){return e.setClockWrap(!0)}},e.hour," ",o.a.createElement("span",{className:"tiktok"},":")," ",e.minute),o.a.createElement("div",{className:"header-icon ".concat("NONE"===e.menuToggle?"show-default":e.menuToggle?"hide-box":"show-box")},o.a.createElement(v.a,{icon:p.a})),o.a.createElement("div",{className:"NONE"===e.menuToggle?"show-default":e.menuToggle?"hide-box":"show-box"},o.a.createElement("div",{className:"toggle-wrap cur",onClick:function(){e.setTheme(!e.globalTheme),e.globalTheme?document.body.style.backgroundColor="#000":document.body.style.backgroundColor="#fff"}},o.a.createElement("div",{className:"toggle-dot"})))))};var w=function(e){return o.a.createElement("div",{className:"menu-modal-wrap ".concat("NONE"===e.show?"show-default":e.show?"show-box":"hide-box")},o.a.createElement("div",{className:"pd-20 menu-nav-wrap"},o.a.createElement("div",{style:{width:"100%",height:"80%"}},o.a.createElement("div",{className:"cur",onClick:function(){e.setMenuToggle(!1),e.setCurPage("INDEX")}},o.a.createElement("h2",null,"HOME")),o.a.createElement("div",{className:"cur",onClick:function(){e.setMenuToggle(!1),e.setCurPage("ABOUT")}},o.a.createElement("h2",null,"ABOUT")),o.a.createElement("div",{className:"cur",onClick:function(){e.setMenuToggle(!1),e.setCurPage("PROJECT")}},o.a.createElement("h2",null,"PROJECT")),o.a.createElement("div",{className:"cur",onClick:function(){e.setMenuToggle(!1),e.setCurPage("CONTACT")}},o.a.createElement("h2",null,"CONTACT")))))},x=t(92),E=t.n(x);var N=function(e){var n,t=Object(a.useState)("NONE"),r=Object(l.a)(t,2),c=r[0],i=r[1],s=Object(a.useState)("NONE"),u=Object(l.a)(s,2),d=u[0],m=u[1],h=Object(a.useState)("00"),g=Object(l.a)(h,2),v=g[0],p=g[1],x=Object(a.useState)("00"),N=Object(l.a)(x,2),k=N[0],T=N[1],O=Object(a.useState)("00"),y=Object(l.a)(O,2),j=y[0],C=y[1];return Object(a.useEffect)((function(){return n=setInterval((function(){p(E()((new Date).getTime()).format("HH")),T(E()((new Date).getTime()).format("mm")),C(E()((new Date).getTime()).format("ss"))}),1e3),function(){clearInterval(n)}})),o.a.createElement(b,{theme:e.globalTheme},o.a.createElement("div",{className:"clock-box time-font ".concat("NONE"===d?"none-clock":d?"show-clock":"hide-clock"),onClick:function(){return m(!1)}},o.a.createElement("div",{className:"".concat("NONE"===d?"clock-content-none":d?"clock-content-show":"clock-content-hide")}," ",v," ",o.a.createElement("span",{className:"tiktok"},":")," ",k,o.a.createElement("span",{className:"tiktok"},":")," ",j)),o.a.createElement("div",{className:"hamberger-wrap"},o.a.createElement("div",{className:"menu-wrap cur ".concat("NONE"===c?"show-default":c?"origin-menu":"trans-menu"),onClick:function(){i("NONE"===c||!c)}},o.a.createElement("div",{className:"menu-btn-bar ".concat("NONE"===c?"show-default":c?"ham-ani-1":"ham-ani-none none1")}),o.a.createElement("div",{className:"menu-btn-bar ".concat("NONE"===c?"show-default":c?"hide-box":"show-box")}),o.a.createElement("div",{className:"menu-btn-bar ".concat("NONE"===c?"show-default":c?"ham-ani-2":"ham-ani-none none2")}))),o.a.createElement(w,{show:c,setMenuToggle:i,setCurPage:e.setCurPage}),o.a.createElement(f,{globalTheme:e.globalTheme,setTheme:e.setTheme,menuToggle:c,setMenuToggle:i,curPage:e.curPage,clockWrap:d,setClockWrap:m,hour:v,minute:k}),o.a.createElement("div",null,e.children))};function k(){var e=Object(i.a)(["\n  text-align: center;\n  .title-wrap {\n    font-weight: bolder;\n    font-size: 16vw;\n    user-select: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 50px;\n    height: calc(100vh - 50px);\n  }\n  .title-line {\n    height: 3px;\n    width: 0;\n    margin: 0 auto;\n    background-color: ",";\n    position: relative;\n    top: -5vw;\n  }\n"]);return k=function(){return e},e}var T=s.a.section(k(),(function(e){return!0===e.theme?"var(--dark-bg-color)":"var(--white-bg-color)"}));function O(e){return o.a.createElement(T,{className:"time-font",theme:e.globalTheme},o.a.createElement("div",{className:"title-wrap"},o.a.createElement("div",null,"ABOUT.",o.a.createElement("div",{className:"title-line ".concat("ABOUT"===e.isAct&&"under-line-about")}))))}function y(){var e=Object(i.a)(["\n  text-align: center;\n  .de-m {\n    display: none;\n  }\n  .title-wrap {\n    font-weight: bolder;\n    font-size: 16vw;\n    user-select: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 50px;\n    height: calc(100vh - 50px);\n  }\n  .title-line {\n    height: 3px;\n    width: 0;\n    margin: 0 auto;\n    background-color: ",";\n    position: relative;\n    top: -5vw;\n  }\n  .contents-wrap {\n    height: 0;\n    padding: 0;\n    overflow-x: scroll;\n    margin: 0 auto;\n    display: flex;\n    width: 85vw;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n  .contents-list {\n    display: flex;\n    align-items: center;\n    opacity: 0;\n    height: 100%;\n  }\n  .hide-wrap {\n    display: none;\n    height: 0vw;\n  }\n  .round-box {\n    display: flex;\n    transition: all 0.1s ease;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    color: ",";\n    font-size: 2vw;\n    font-weight: bolder;\n    width: 20vw;\n    height: 30vw;\n    margin: 0 2vw;\n    box-shadow: 0 3px 7px\n      ",";\n    cursor: pointer;\n    &:hover {\n      /* transform: scale(1.2, 1.2); */\n    }\n  }\n  .project-card-action {\n    box-shadow: unset;\n    border-radius: 100%;\n    width: 20vw;\n    height: 20vw;\n    &:hover {\n      transform: unset;\n    }\n  }\n  .start-el {\n    flex: 1;\n  }\n\n  .m-auto {\n    margin: 0 auto;\n  }\n  .blur-wrap {\n    width: 10vw;\n    height: calc(100vh - 8vh);\n    position: absolute;\n    z-index: 30;\n    background-color: ",";\n    filter: blur(6px);\n    &.browser {\n      right: 0;\n    }\n  }\n  @media (max-width: 768px) {\n    .de-m {\n      display: block;\n    }\n    .de-b {\n      display: none;\n    }\n    .title-wrap {\n      padding-top: 0;\n      height: 100vh;\n    }\n    .contents-wrap {\n      flex-direction: column;\n      overflow-y: scroll;\n      height: unset;\n      width: 90vw;\n    }\n    .contents-list {\n      flex-direction: column;\n      flex: 1;\n      height: unset;\n    }\n    .round-b0x {\n      font-size: 6vw;\n    }\n    .m-auto {\n      margin: 3vw auto;\n    }\n    .start-el {\n      margin-bottom: 3vw;\n    }\n    .blur-wrap {\n      width: 100%;\n      height: 10vh;\n      background-color: ",";\n      filter: blur(6.5px);\n      position: absolute;\n      z-index: 30;\n      margin-top: -6vw;\n    }\n    .round-box {\n      width: 75vw;\n      height: 25vh;\n      margin: 3vw 0;\n      font-size: 6vw;\n      &:hover,\n      &:active {\n        transform: scale(1.2, 1.2);\n      }\n    }\n  }\n"]);return y=function(){return e},e}var j=s.a.section(y(),(function(e){return!0===e.theme?"var(--dark-bg-color)":"var(--white-bg-color)"}),(function(e){return!0===e.theme?"var(--dark-bg-color)":"var(--white-bg-color)"}),(function(e){return!0!==e.theme?"var(--white-font-color)":"var(--dark-font-color)"}),(function(e){return!0===e.theme?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.5)"}),(function(e){return!0!==e.theme?"var(--dark-bg-color)":"var(--white-bg-color)"}),(function(e){return!0!==e.theme?"var(--dark-bg-color)":"var(--white-bg-color)"}));function C(e){var n=Object(a.useRef)(null),t=Object(a.useRef)(null),r=Object(a.useState)([{val:"A",spacing:1.52},{val:"B",spacing:.325},{val:"C",spacing:5.1},{val:"D",spacing:3.9},{val:"E",spacing:2.71}]),c=Object(l.a)(r,2),i=c[0],s=(c[1],Object(a.useState)(0)),u=Object(l.a)(s,2),d=u[0],m=u[1],h=Object(a.useState)(0),g=Object(l.a)(h,2),b=g[0],v=g[1],p=d,f=b,w=Object(a.useState)(""),x=Object(l.a)(w,2),E=x[0],N=x[1],k=Object(a.useState)(!1),T=Object(l.a)(k,2),O=T[0],y=T[1],C=function(){return i.map((function(e,n){return o.a.createElement("div",{className:"start-el",key:n},o.a.createElement("div",{onClick:function(a){if(y(!0),t.current){var o=t.current.scrollLeft,r=2*d,c=a.currentTarget.offsetWidth*e.spacing;o>d&&o<d+300?"A"===e.val||"B"===e.val?(console.log("IF"),t.current.scrollLeft=r-10,setTimeout((function(){t.current&&t.current.scrollTo({left:r-c,behavior:"smooth"})}),200)):(console.log("ELSE1"),t.current&&t.current.scrollTo({left:r-c,behavior:"smooth"})):(console.log("ELSE2"),t.current&&t.current.scrollTo({left:r-c,behavior:"smooth"}))}N(e.val+n)},id:"id-".concat(e.val),className:"round-box ".concat(e.val," ").concat(E===e.val+n&&"project-card-action")},e.val+n))}))};function A(e,n){for(var t=[],a=0;a<e;a++)t.push(o.a.createElement("div",{key:n+a,className:"contents-list view-project-list ".concat(n+a)},C()));return t}return Object(a.useEffect)((function(){O||n.current&&(window.outerWidth>768?(m(n.current.offsetWidth),t.current&&(t.current.scrollLeft=p)):(v(n.current.offsetHeight),t.current&&(t.current.scrollTop=f)))})),o.a.createElement(j,{theme:e.globalTheme},o.a.createElement("div",{className:"time-font title-wrap ".concat("PROJECT"===e.isAct&&"show-box_view")},o.a.createElement("div",null,"PROJECT.",o.a.createElement("div",{className:"title-line ".concat("PROJECT"===e.isAct&&"under-line-project")}))),o.a.createElement("div",{className:"blur-wrap"}),o.a.createElement("div",{className:"blur-wrap de-b browser"}),o.a.createElement("div",{ref:t,onScroll:function(){if(t.current)if(window.outerWidth>768){var e=t.current.scrollLeft;(e<p||e>=p+d)&&(t.current.scrollLeft=p+e%d)}else{var n=t.current.scrollTop;(n<f||n>=f+b)&&(t.current.scrollTop=f+n%b)}},className:"contents-wrap ".concat("PROJECT"===e.isAct?"view-project-list-wrap":"hide-wrap"," ")},A(4,"front"),o.a.createElement("div",{ref:n,className:"contents-list view-project-list"},C()),A(4,"back")),o.a.createElement("div",{className:"blur-wrap de-m"}))}function A(){var e=Object(i.a)(["\n  text-align: center;\n  .title-wrap {\n    font-weight: bolder;\n    font-size: 16vw;\n    user-select: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 50px;\n    height: calc(100vh - 50px);\n  }\n  .title-line {\n    height: 3px;\n    width: 0;\n    margin: 0 auto;\n    background-color: ",";\n    position: relative;\n    top: -5vw;\n  }\n"]);return A=function(){return e},e}var S=s.a.section(A(),(function(e){return!0===e.theme?"var(--dark-bg-color)":"var(--white-bg-color)"}));function P(e){return o.a.createElement(S,{className:"time-font",theme:e.globalTheme},o.a.createElement("div",{className:"title-wrap"},o.a.createElement("div",null,"CONTACT.",o.a.createElement("div",{className:"title-line ".concat("CONTACT"===e.isAct&&"under-line-contact")}))))}var z=function(){var e=Object(a.useState)("PROJECT"),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(l.a)(c,2),s=i[0],u=i[1];return Object(a.useEffect)((function(){return"INDEX"!==t&&setTimeout((function(){document.getElementsByClassName("delay-view show-box_view")[0].scrollTo({top:window.innerHeight,behavior:"smooth"})}),2500),function(){document.getElementsByClassName("delay-view show-box_view")[0].scrollTo(0,0)}}),[t]),o.a.createElement(N,{curPage:t,setCurPage:r,globalTheme:s,setTheme:u},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement("div",{className:"delay-view ".concat("ABOUT"===t&&"show-box_view")},o.a.createElement(O,{globalTheme:s,isAct:t})),o.a.createElement("div",{className:"delay-view ".concat("PROJECT"===t&&"show-box_view")},o.a.createElement(C,{globalTheme:s,isAct:t})),o.a.createElement("div",{className:"delay-view ".concat("CONTACT"===t&&"show-box_view")},o.a.createElement(P,{globalTheme:s,isAct:t})),o.a.createElement("div",{className:"delay-view ".concat("INDEX"===t&&"show-box_view")},o.a.createElement("div",{style:{width:350,padding:"90px 0"}},o.a.createElement("img",{alt:"",style:{width:"100%"},src:s?h.a:d.a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,n,t){e.exports=t.p+"static/media/logo-white.526c731b.png"},90:function(e,n,t){e.exports=t.p+"static/media/logo-black.ce86f21e.png"}},[[196,1,2]]]);
//# sourceMappingURL=main.8f63e154.chunk.js.map