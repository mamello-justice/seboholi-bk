(this.webpackJsonpseboholi=this.webpackJsonpseboholi||[]).push([[0],{88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),i=a.n(c),o=a(15),b=a.n(o),l=a(56),s=a(32),u=a(92),h=a(21),d=a(47);!function(e){e.auroMetalSaurus="auroMetalSaurus",e.blackRussian="blackRussian",e.brightGrey="brightGrey",e.carabianGreen="carabianGreen",e.darkGrey="darkGrey",e.floralWhite="floralWhite",e.greyChateau="greyChateau",e.solitude="solitude",e.white="white"}(r||(r={}));var j,f,O=(n={},Object(h.a)(n,r.auroMetalSaurus,"#767b83"),Object(h.a)(n,r.blackRussian,"#080809"),Object(h.a)(n,r.brightGrey,"#5c5f65"),Object(h.a)(n,r.carabianGreen,"#09b946"),Object(h.a)(n,r.darkGrey,"#121212"),Object(h.a)(n,r.floralWhite,"#f7f6f3"),Object(h.a)(n,r.greyChateau,"#9ca2ac"),Object(h.a)(n,r.solitude,"#f0f2f5"),Object(h.a)(n,r.white,"#ffffff"),n);!function(e){e.light="light",e.dark="dark"}(f||(f={}));var g,k,m={header:{bg:O.blackRussian},footer:{bg:O.blackRussian},primary:O.carabianGreen},x=(j={},Object(h.a)(j,f.light,{id:"T_001",name:"Light Theme",colors:Object(d.a)(Object(d.a)({},m),{},{content:{bg:O.solitude},side:{bg:O.solitude},text:O.blackRussian})}),Object(h.a)(j,f.dark,{id:"T_002",name:"Dark Theme",colors:Object(d.a)(Object(d.a)({},m),{},{content:{bg:O.darkGrey},side:{bg:O.darkGrey},text:O.floralWhite})}),j),y=function(){var e=Object(c.useState)(x.light),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e,t,a=function(e,t){var a=window.localStorage.getItem(e);return a?JSON.parse(a):null!==t&&void 0!==t?t:null}("theme"),r=null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-color-scheme: dark)").matches;n((null!==a&&void 0!==a?a:r)?x.dark:x.light)}),[]),[a,function(e){var t,a;t="theme",a=e,window.localStorage.setItem(t,JSON.stringify(a)),n(x[e])}]},v=x,p=a(48),w=a(91),G=a(93),S=a(94),T=a(16),C=u.a.Header,M=w.a.Text,R=Object(s.b)(C)(g||(g=Object(p.a)(["\n  display: flex;\n  justify-content: flex-end;\n  background-color: ",";\n\n  .ant-switch-checked {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.header.bg}),(function(e){return e.theme.colors.primary})),F=function(e){var t=e.setTheme,a=Object(s.c)().id===v.dark.id;return Object(T.jsx)(R,{children:Object(T.jsxs)(G.b,{children:[Object(T.jsx)(M,{children:"Dark Mode"}),Object(T.jsx)(S.a,{checked:a,onChange:function(){t(a?f.light:f.dark)}})]})})},I=u.a.Content,J=Object(s.b)(I)(k||(k=Object(p.a)(["\n  min-height: calc(100vh - 64px - 70px);\n  background-color: ",";\n"])),(function(e){return e.theme.colors.content.bg})),W=function(){return Object(T.jsx)(J,{})},D=u.a.Footer,L=function(){var e=y(),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(T.jsx)(s.a,{theme:a,children:Object(T.jsxs)(u.a,{children:[Object(T.jsx)(F,{setTheme:n}),Object(T.jsx)(W,{}),Object(T.jsx)(D,{style:{textAlign:"center"},children:"Seboholi \xa92021"})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};a(88);b.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(L,{})}),document.getElementById("root")),B()}},[[89,1,2]]]);
//# sourceMappingURL=main.72a43b7d.chunk.js.map