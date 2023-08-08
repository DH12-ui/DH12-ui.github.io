(function(){"use strict";var n={4751:function(n,e,t){var a=t(9242),r=t(3396);function o(n,e,t,a,o,s){const i=(0,r.up)("NavBar"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(l)],64)}t(8052);const s={class:"navbar navbar-expand-lg bg-body-tertiary"},i=(0,r.uE)('<div class="container"><a class="navbar-brand" href="#">Myspqce</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarText"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" href="#">首页</a></li><li class="nav-item"><a class="nav-link" href="#">好友列表</a></li><li class="nav-item"><a class="nav-link" href="#">用户动态</a></li></ul><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" href="#">登录</a></li><li class="nav-item"><a class="nav-link" href="#">注册</a></li></ul></div></div>',1),l=[i];function c(n,e,t,a,o,i){return(0,r.wg)(),(0,r.iD)("nav",s,l)}var u={name:"NavBar"},v=t(89);const f=(0,v.Z)(u,[["render",c]]);var p=f,d={name:"App",components:{NavBar:p}};const m=(0,v.Z)(d,[["render",o]]);var b=m,g=t(2483);function h(n,e,t,a,o,s){const i=(0,r.up)("ContentBase");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((()=>[(0,r.Uk)("首页")])),_:1})}const w={class:"home"},y={class:"container"},k={class:"card"},B={class:"card-body"};function C(n,e,t,a,o,s){return(0,r.wg)(),(0,r.iD)("div",w,[(0,r._)("div",y,[(0,r._)("div",k,[(0,r._)("div",B,[(0,r.WI)(n.$slots,"default",{},void 0,!0)])])])])}var _={name:"ContentBase"};const j=(0,v.Z)(_,[["render",C],["__scopeId","data-v-40ade507"]]);var O=j,x={name:"HomeView",components:{ContentBase:O}};const T=(0,v.Z)(x,[["render",h]]);var Z=T;function U(n,e,t,a,o,s){const i=(0,r.up)("ContentBase");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((()=>[(0,r.Uk)("好友列表")])),_:1})}var P={name:"UserListView",components:{ContentBase:O}};const V=(0,v.Z)(P,[["render",U]]);var M=V;function N(n,e,t,a,o,s){const i=(0,r.up)("ContentBase");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((()=>[(0,r.Uk)("用户动态")])),_:1})}var S={name:"UserProfileView",components:{ContentBase:O}};const D=(0,v.Z)(S,[["render",N]]);var F=D;function W(n,e,t,a,o,s){const i=(0,r.up)("ContentBase");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((()=>[(0,r.Uk)("登录")])),_:1})}var E={name:"LoginView",components:{ContentBase:O}};const H=(0,v.Z)(E,[["render",W]]);var I=H;function L(n,e,t,a,o,s){const i=(0,r.up)("ContentBase");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((()=>[(0,r.Uk)("注册")])),_:1})}var q={name:"RegisterView",components:{ContentBase:O}};const A=(0,v.Z)(q,[["render",L]]);var R=A;function Y(n,e,t,a,o,s){const i=(0,r.up)("ContentBase");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((()=>[(0,r.Uk)("404 Not Found")])),_:1})}var $={name:"NotFoundView",components:{ContentBase:O}};const z=(0,v.Z)($,[["render",Y]]);var G=z;const J=[{path:"/",name:"home",component:Z},{path:"/list",name:"list",component:M},{path:"/profile",name:"profile",component:F},{path:"/login",name:"login",component:I},{path:"/register",name:"register",component:R},{path:"/404",name:"404",component:G}],K=(0,g.p7)({history:(0,g.PO)(),routes:J});var Q=K,X=t(65),nn=(0,X.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,a.ri)(b).use(Q).use(nn).use(nn).use(Q).mount("#app")}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return n[a].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,a,r,o){if(!a){var s=1/0;for(u=0;u<n.length;u++){a=n[u][0],r=n[u][1],o=n[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(t.O).every((function(n){return t.O[n](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){n.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[a,r,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var r,o,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==n[e]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var u=l(t)}for(e&&e(a);c<s.length;c++)o=s[c],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(u)},a=self["webpackChunkmapple"]=self["webpackChunkmapple"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(4751)}));a=t.O(a)})();
//# sourceMappingURL=app.d0be0e4f.js.map