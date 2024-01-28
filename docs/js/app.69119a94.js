(function(){"use strict";var e={3895:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(89);const u={},s=(0,a.Z)(u,[["render",i]]);var c=s,l=n(678);const f=e=>e.hash?{el:e.hash,behavior:"smooth"}:{top:0},p=[{path:"/",name:"Home",component:()=>n.e(786).then(n.bind(n,3061))},{path:"/kogi/:uuid",name:"KogiDisplayPage",component:()=>n.e(383).then(n.bind(n,5804))}],h=(0,l.p7)({history:(0,l.PO)(),routes:p,scrollBehavior:f});var d=h,g=n(3430);(0,r.ri)(c).use(g.ZP,g.Jy).use(d).mount("#app")},3430:function(e,t,n){n.d(t,{ZP:function(){return U},Jy:function(){return H},oR:function(){return L}});var r=n(65);const o="API_REQUEST_ACTION_TYPE";var i=n(6265),a=n.n(i),u=({baseURL:e="https://pheme.social/voice-service",method:t="GET",endpoint:n="",params:r={},data:o={},uri:i="",headers:u={}})=>a()({headers:u,...i?{url:i}:{baseURL:e,url:n},..."GET"===t.toUpperCase()?{params:r}:{method:t,params:r,data:o}}),s=n(2482);class c{constructor(e={uuid:0,name:"",imageUrl:"",nftUrl:"",age:0,sex:0,height:0,weight:0,vitality:0,strength:0,intelligence:0,dexterity:0,luck:0,level:0,rarity:"",mating:0,abilities:["NONE"]}){(0,s.Z)(this,"kogi",void 0),this.kogi=e}serialize(){return this.kogi}}var l=c,f={Kogi:l};const p={kogi:(new f.Kogi).serialize(),getKogi:{requesting:!1}};var h=()=>p;const d=e=>e.map((e=>e.toUpperCase())),g=e=>e.map((e=>({[e]:e}))),m=e=>[e,`${e}_FETCHING`,`${e}_SUCCESS`,`${e}_FAILED`],v=e=>e.map((e=>m(e)));function b(e=[]){return e.reduce(((e,t)=>Array.isArray(e)&&Array.isArray(t)?[...e,...t]:{...e,...t}))}const y=(e=[""])=>b(g(d(e))),_=(e=[""])=>y(b(v(e))),E=e=>({requesting:`${e}_FETCHING`,success:`${e}_SUCCESS`,error:`${e}_FAILED`}),T="/public/kogi",O={..._(["FETCH_GET_KOGI"])};var C={async[O.FETCH_GET_KOGI]({dispatch:e},{uuId:t,onSuccess:n,onFailed:r}){e(o,{mutationTypes:E(`animals/${O.FETCH_GET_KOGI}`),method:"GET",endpoint:`${T}/${t}`,auth:!1},{root:!0}).then((e=>{n&&n(e)})).catch((e=>{r&&r(e)}))}},k={[O.FETCH_GET_KOGI_FETCHING](e){e.getKogi.requesting=!0},[O.FETCH_GET_KOGI_SUCCESS](e,t){e.kogi=new f.Kogi(t).serialize(),e.getKogi.requesting=!1},[O.FETCH_GET_KOGI_FAILED](e){e.kogi=(new f.Kogi).serialize(),e.getKogi.requesting=!1}},w={namespaced:!0,state:h,mutations:k,actions:C},j={modules:{animals:w}};const P={navigate:{routerList:[{label:"About",path:"#about",internal:!0},{label:"Team",path:"#team",internal:!0},{label:"Roadmap",path:"#roadmap",internal:!0},{label:"Token",path:"https://docs.pheme.social/dai-bi-jing-ji/pheme-dai-bi"},{label:"How to Play",path:"https://docs.pheme.social/ru-men-zhi-nan/kai-shi-you-hu"},{label:"Marketplace",path:"https://docs.pheme.social/nft-shi-ji/shen-me-shi-shi-ji"},{label:"Paper",path:"https://docs.pheme.social"}],openNavPage:!1}};var S=()=>P,N={openNavPage(e){e.navigate.openNavPage=!0},closeNavPage(e){e.navigate.openNavPage=!1}},A={},G={namespaced:!0,state:S,mutations:N,actions:A},F={api:j,globalComponents:G};const I=!0,K=I?[]:[(0,r.hu)()],H=Symbol("vue-store");function L(){return(0,r.oR)(H)}var U=(0,r.MT)({devtools:!0,strict:!0,plugins:K,modules:F,actions:{async[o]({commit:e,state:t},n){const{mutationTypes:r}=n,{requesting:o,success:i,error:a}=r;o&&e(o);let{headers:s}=n;const{auth:c}=n;c&&(s={...s,authorization:`bearer ${t.api.auth.token}`});try{const t=await u({...n,headers:s}),{data:r}=t;return i&&e(i,{...r,__origin__:n.extra||null}),t}catch(l){throw a&&e(a,{error:l}),console.log(JSON.stringify(l)),l}}}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{383:"04bbbfc0",786:"21aebd9e",883:"b4456959"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{383:"b6a2f9aa",786:"fe06ed1b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pheme.social:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={383:1,786:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkpheme_social"]=self["webpackChunkpheme_social"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3895)}));r=n.O(r)})();
//# sourceMappingURL=app.69119a94.js.map