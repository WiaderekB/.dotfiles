var environment_workbench;(()=>{"use strict";var e,t,a,r,n,o,l,s,d,i,c,f,p,u,h,b,m,v,g,x={78921:(e,t,a)=>{var r={"./EnvironmentWorkbench":()=>Promise.all([a.e(364),a.e(605),a.e(157),a.e(6831),a.e(3433),a.e(540),a.e(1730),a.e(2229),a.e(6242),a.e(607),a.e(2932),a.e(6081),a.e(923),a.e(4958),a.e(916),a.e(4025),a.e(7363),a.e(5837),a.e(4292),a.e(1219),a.e(5167),a.e(5650)]).then((()=>()=>a(25650))),"./GlobalsWorkbench":()=>Promise.all([a.e(364),a.e(605),a.e(157),a.e(6831),a.e(3433),a.e(540),a.e(1730),a.e(2229),a.e(6242),a.e(607),a.e(2932),a.e(6081),a.e(923),a.e(4958),a.e(916),a.e(4025),a.e(7363),a.e(5837),a.e(4292),a.e(1219),a.e(5167),a.e(9249)]).then((()=>()=>a(9249)))},n=(e,t)=>(a.R=t,t=a.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),o=(e,t)=>{if(a.S){var r="default",n=a.S[r];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[r]=e,a.I(r,t)}};a.d(t,{get:()=>n,init:()=>o}),function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2023-12-27.06-54"}}()}},P={};function y(e){var t=P[e];if(void 0!==t)return t.exports;var a=P[e]={id:e,loaded:!1,exports:{}};return x[e].call(a.exports,a,a.exports,y),a.loaded=!0,a.exports}y.m=x,y.c=P,y.amdO={},y.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return y.d(t,{a:t}),t},y.d=(e,t)=>{for(var a in t)y.o(t,a)&&!y.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((t,a)=>(y.f[a](e,t),t)),[])),y.u=e=>e+"."+{75:"ae554e911a52a7f4",155:"d96dcca661ea1b75",157:"4db8c4bce7f69c8d",364:"a302f315f3b36652",540:"8a8a1970a1914722",605:"e98e63467530967a",607:"cb09f03efdbbc333",686:"19f0bdeed982549b",721:"83fe1b35a0720c82",730:"0fc44c1ab92d80e9",747:"5002a6b2c5d3c110",766:"99e30737adb602a9",770:"63adda30befc3665",823:"f61de2c9c90d3141",916:"c3c4977d36f82f05",923:"9b9357bfed97d1d7",949:"5761a712b709dd83",966:"73ad41381e143dde",1219:"e0e4494aa29eaeb0",1312:"c830bd5c219abcdc",1327:"6768d23bb0126a82",1351:"f3bcca7e1f8108b1",1597:"f0e162c3d1ee34e8",1685:"d8c0699e8e2958df",1730:"2c96ff60f47d0b56",2223:"ff84553e32920ee8",2229:"839ddd6754e306d4",2543:"60a4752f7b32d5da",2638:"e208974b4588364d",2659:"2802655c0b5a0d46",2668:"e0035ed221f229fd",2723:"96790baaaec95e65",2772:"b5cbd594d66c0779",2784:"d2ece3f87b63cebf",2932:"95632c36b7466b3e",2955:"9a64a5abf2b47149",3222:"8b93b2227d50b39f",3356:"e5fcede420aff2b7",3433:"8ca58fb76a919a8a",3640:"992f772a8db4561d",3696:"5cd54642fe00506c",3723:"a0ef3956384752cb",3836:"3983338f5522f05a",3911:"c8b27dfe381891e3",3980:"5afc815e40ec6467",4024:"bad13053adc7a5fd",4025:"1d5707e02a51d0a8",4211:"1987a5ecd01caba4",4292:"bf8463c8a05494bc",4302:"277b733dccd41bbf",4422:"69f8e178adfce370",4803:"9aa2c13c654773ff",4810:"1bf99dec67a89ca8",4958:"cc19a1c14441e72a",5167:"48813fc10d26fcea",5348:"cba9e0a260627450",5624:"be395b5a1dc45bd3",5630:"609d286cb048f7d7",5650:"d3c0613448fce4f2",5837:"ccffeffc48488813",5882:"6331e729f4808cf1",6081:"88f5284d947ec6f9",6242:"c7f99cbe3856ecdd",6277:"90087dccee0b9d2c",6353:"aad16bf503ee6283",6371:"8bc151b245e3940a",6445:"5a10c9ea4b584f16",6462:"bb934720ab137c7f",6591:"1b8efb3341ce2327",6686:"1c5933ab8474a4b9",6776:"0b3a9b5116bc65b6",6787:"0d4a26ee36e481f7",6831:"0227baffafb5896b",7363:"2ae2c77fe35571b9",7397:"6096a4610614d855",7494:"b82f6eabff9bf10d",7500:"fe6fcc8b5089d1bf",7569:"d993d7e290fbacb6",7623:"85a3e9862a9ed483",7669:"a29c5bccf5b7acf7",7768:"2b82282a61543416",7864:"582acee5077ff8b8",7908:"a838afb2e943ea9b",8013:"0252e5782bd3f3dc",8079:"bff4a28c18bb1612",8210:"185a95b4228094da",8283:"e2ce9445e408b7e0",8316:"cba9cc0dfb6bcac2",8320:"b6be1c6709624179",8495:"a7b1680846a33938",8529:"e0fc884a8b8ac2b0",8537:"4d8c32bb1291cf77",8609:"788ff76530453777",8665:"c2785a467bda8b03",8722:"c77ece4815aae957",8850:"c8fba5122cd474e4",8864:"e5fe1b5bab5cf0ec",9205:"a778cf9740e35c21",9211:"ef2e243dd59d4d41",9239:"6483a8244c068661",9249:"60d8d18e529a5a04",9304:"258dc5312dd7d11d",9315:"2e2bae2433f57965",9543:"1de36d9c68bff683",9721:"90da0c2c7c49bf0d"}[e]+".js",y.miniCssF=e=>e+"."+{1312:"0c13b709ec9223ed",2638:"0c13b709ec9223ed"}[e]+".css",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),y.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="environment-workbench:",y.l=(a,r,n,o)=>{if(e[a])e[a].push(r);else{var l,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var c=d[i];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+n){l=c;break}}l||(s=!0,(l=document.createElement("script")).type="text/javascript",l.charset="utf-8",l.timeout=120,y.nc&&l.setAttribute("nonce",y.nc),l.setAttribute("data-webpack",t+n),l.src=a),e[a]=[r];var f=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},y.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{y.S={};var e={},t={};y.I=(a,r)=>{r||(r=[]);var n=t[a];if(n||(n=t[a]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[a])return e[a];y.o(y.S,a)||(y.S[a]={});var o=y.S[a],l="environment-workbench",s=(e,t,a,r)=>{var n=o[e]=o[e]||{},s=n[t];if(!s||!s.__postman_local_chunk__)if(window.__local_apps__&&window.__local_apps__.includes(l)){if(s&&s.loaded&&s.__postman_local_chunk__)return;n[t]={get:a,from:l,eager:!!r,__postman_local_chunk__:!0}}else(!s||!s.loaded&&(!r!=!s.eager?r:l>s.from))&&(n[t]={get:a,from:l,eager:!!r})},d=[];return"default"===a&&(s("@postman-app-next/analytics-service","0.0.1",(()=>Promise.all([y.e(4302),y.e(4810),y.e(721)]).then((()=>()=>y(40721))))),s("@postman-app-next/auth","0.0.1",(()=>y.e(2668).then((()=>()=>y(62668))))),s("@postman-app-next/data-fetching","0.0.1",(()=>Promise.all([y.e(540),y.e(4302),y.e(7864),y.e(1685)]).then((()=>()=>y(98013))))),s("@postman-app-next/desktop-communication-sdk","0.0.1",(()=>Promise.all([y.e(540),y.e(966)]).then((()=>()=>y(20966))))),s("@postman-app-next/dialogs","0.0.1",(()=>Promise.all([y.e(364),y.e(605),y.e(5348),y.e(540),y.e(1730),y.e(4302),y.e(2229),y.e(6242),y.e(155)]).then((()=>()=>y(23911))))),s("@postman-app-next/environment-service","0.0.1",(()=>Promise.all([y.e(364),y.e(605),y.e(8529),y.e(540),y.e(1730),y.e(4302),y.e(2229),y.e(6242),y.e(607),y.e(2932),y.e(6081),y.e(4958),y.e(8722),y.e(5837),y.e(4292),y.e(8079),y.e(747),y.e(6787),y.e(8850)]).then((()=>()=>y(76787))))),s("@postman-app-next/error-handling","0.0.1",(()=>Promise.all([y.e(364),y.e(157),y.e(540),y.e(1730),y.e(4302),y.e(2229),y.e(6242),y.e(607),y.e(2772),y.e(5624)]).then((()=>()=>y(730))))),s("@postman-app-next/kv-editor","0.0.1",(()=>Promise.all([y.e(364),y.e(605),y.e(157),y.e(6831),y.e(8529),y.e(823),y.e(540),y.e(1730),y.e(2229),y.e(6242),y.e(2932),y.e(3723),y.e(916),y.e(7363),y.e(2723),y.e(7569),y.e(949),y.e(7623),y.e(3696)]).then((()=>()=>y(17623))))),s("@postman-app-next/navigation","0.0.1",(()=>Promise.all([y.e(364),y.e(605),y.e(6831),y.e(540),y.e(1730),y.e(4302),y.e(2229),y.e(6242),y.e(607),y.e(3723),y.e(8722),y.e(7363),y.e(2659),y.e(8283)]).then((()=>()=>y(92659))))),s("@postman-app-next/network","0.0.1",(()=>Promise.all([y.e(540),y.e(4302),y.e(923),y.e(4810),y.e(8320),y.e(9315)]).then((()=>()=>y(38320))))),s("@postman-app-next/performance-utils","0.0.1",(()=>Promise.all([y.e(540),y.e(8722),y.e(5837),y.e(1597)]).then((()=>()=>y(31597))))),s("@postman-app-next/storage","0.0.1",(()=>Promise.all([y.e(540),y.e(4302),y.e(4810),y.e(4422)]).then((()=>()=>y(44422))))),s("@postman-app-next/test-utils","0.0.1",(()=>Promise.all([y.e(364),y.e(6445),y.e(540),y.e(1730),y.e(2229),y.e(6242),y.e(607),y.e(923),y.e(4958),y.e(4025),y.e(1351)]).then((()=>()=>y(25630))))),s("@postman-app-next/ui","0.0.1",(()=>Promise.all([y.e(364),y.e(605),y.e(157),y.e(540),y.e(1730),y.e(4302),y.e(2229),y.e(6242),y.e(3723),y.e(6081),y.e(7569),y.e(5882),y.e(2638)]).then((()=>()=>y(85882))))),s("@postman-app-next/variable-session","0.0.1",(()=>Promise.all([y.e(747),y.e(7494)]).then((()=>()=>y(57494))))),s("@postman-app-next/variable-suggestions","0.0.1",(()=>Promise.all([y.e(364),y.e(605),y.e(8529),y.e(3640),y.e(540),y.e(1730),y.e(2229),y.e(6242),y.e(3723),y.e(2723),y.e(1219),y.e(949),y.e(9304),y.e(3222)]).then((()=>()=>y(59304))))),s("@postman-app-next/vscode-utils","0.0.1",(()=>Promise.all([y.e(540),y.e(607),y.e(8722),y.e(770)]).then((()=>()=>y(30770))))),s("@postman-app-next/workspace-service","0.0.1",(()=>Promise.all([y.e(540),y.e(4302),y.e(607),y.e(6081),y.e(4958),y.e(8079),y.e(6371)]).then((()=>()=>y(60766))))),s("@postman/aether-design-tokens","1.2.0",(()=>y.e(7908).then((()=>()=>y(86462))))),s("@sentry/react","7.49.0",(()=>Promise.all([y.e(7500),y.e(540)]).then((()=>()=>y(57500))))),s("@tanstack/react-query-devtools","4.29.5",(()=>y.e(2223).then((()=>()=>y(92223))))),s("@tanstack/react-query","4.29.5",(()=>Promise.all([y.e(8609),y.e(540)]).then((()=>()=>y(8609))))),s("@tippyjs/react","4.2.0",(()=>Promise.all([y.e(9721),y.e(540),y.e(1730)]).then((()=>()=>y(39721))))),s("clsx","1.2.1",(()=>y.e(6277).then((()=>()=>y(6277))))),s("eventemitter3","5.0.0",(()=>y.e(686).then((()=>()=>y(30686))))),s("lexical","0.11.1",(()=>y.e(2543).then((()=>()=>y(22543))))),s("mobx-react-lite","3.4.3",(()=>Promise.all([y.e(540),y.e(1730),y.e(2932),y.e(6776)]).then((()=>()=>y(46776))))),s("mobx-react","7.6.0",(()=>Promise.all([y.e(8495),y.e(540),y.e(2932),y.e(916)]).then((()=>()=>y(18495))))),s("mobx","6.6.2",(()=>y.e(75).then((()=>()=>y(80075))))),s("prop-types","15.8.1",(()=>y.e(3980).then((()=>()=>y(13980))))),s("react-dom","16.14.0",(()=>Promise.all([y.e(8316),y.e(540)]).then((()=>()=>y(28316))))),s("react-draggable","4.4.5",(()=>Promise.all([y.e(1327),y.e(540),y.e(1730),y.e(2229),y.e(3723)]).then((()=>()=>y(41327))))),s("react-error-boundary","4.0.10",(()=>Promise.all([y.e(540),y.e(2955)]).then((()=>()=>y(32955))))),s("react-router-dom","6.11.2",(()=>Promise.all([y.e(6591),y.e(540)]).then((()=>()=>y(16591))))),s("react-window","1.8.8",(()=>Promise.all([y.e(4211),y.e(540),y.e(7397)]).then((()=>()=>y(54211))))),s("react","16.14.0",(()=>y.e(2784).then((()=>()=>y(2784))))),s("rxjs/operators","7.8.1",(()=>Promise.all([y.e(6686),y.e(4803)]).then((()=>()=>y(34803))))),s("rxjs","7.8.1",(()=>Promise.all([y.e(6686),y.e(8210)]).then((()=>()=>y(28210))))),s("shallowequal","1.1.0",(()=>y.e(8665).then((()=>()=>y(88665))))),s("socket.io-client","2.5.0",(()=>Promise.all([y.e(7768),y.e(8864)]).then((()=>()=>y(17768))))),s("styled-components","5.3.6",(()=>Promise.all([y.e(3356),y.e(540),y.e(2723)]).then((()=>()=>y(63356))))),s("ua-parser-js","1.0.33",(()=>y.e(6353).then((()=>()=>y(46353))))),s("uuid","8.3.2",(()=>y.e(3836).then((()=>()=>y(39304))))),s("web-vitals","3.0.4",(()=>y.e(9543).then((()=>()=>y(59543)))))),e[a]=d.length?Promise.all(d).then((()=>e[a]=1)):1}}})(),(()=>{var e;y.g.importScripts&&(e=y.g.location+"");var t=y.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=a[1]?t(a[1]):[];return a[2]&&(r.length++,r.push.apply(r,t(a[2]))),a[3]&&(r.push([]),r.push.apply(r,t(a[3]))),r},r=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var l=t[r],s=(typeof l)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;r++}},n=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,o=1;o<e.length;o++)r--,a+="u"==(typeof(s=e[o]))[0]?"-":(r>0?".":"")+(r=2,s);return a}var l=[];for(o=1;o<e.length;o++){var s=e[o];l.push(0===s?"not("+d()+")":1===s?"("+d()+" || "+d()+")":2===s?l.pop()+" "+l.pop():n(s))}return d();function d(){return l.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var l=0,s=1,d=!0;;s++,l++){var i,c,f=s<e.length?(typeof e[s])[0]:"";if(l>=t.length||"o"==(c=(typeof(i=t[l]))[0]))return!d||("u"==f?s>r&&!n:""==f!=n);if("u"==c){if(!d||"u"!=f)return!1}else if(d)if(f==c)if(s<=r){if(i!=e[s])return!1}else{if(n?i>e[s]:i<e[s])return!1;i!=e[s]&&(d=!1)}else if("s"!=f&&"n"!=f){if(n||s<=r)return!1;d=!1,s--}else{if(s<=r||c<f!=n)return!1;d=!1}else"s"!=f&&"n"!=f&&(d=!1,s--)}}var p=[],u=p.pop.bind(p);for(l=1;l<e.length;l++){var h=e[l];p.push(1==h?u()|u():2==h?u()&u():h?o(h,t):!u())}return!!u()},l=(e,t)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&a[t]},s=(e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&r(e,t)?t:e),0)},d=(e,t,a,r)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+n(r)+")",i=(e,t,a,r)=>{var n=s(e,a);if(!o(r,n))throw new Error(d(e,a,n,r));return c(e[a][n])},c=e=>(e.loaded=1,e.get()),p=(f=e=>function(t,a,r,n){var o=y.I(t);return o&&o.then?o.then(e.bind(e,t,y.S[t],a,r,n)):e(t,y.S[t],a,r,n)})(((e,t,a,r)=>t&&y.o(t,a)?c(l(t,a)):r())),u=f(((e,t,a,r,n)=>t&&y.o(t,a)?i(t,0,a,r):n())),h={},b={54302:()=>p("default","@postman-app-next/vscode-utils",(()=>Promise.all([y.e(540),y.e(607),y.e(8722),y.e(770)]).then((()=>()=>y(30770))))),64810:()=>p("default","@postman-app-next/auth",(()=>y.e(2668).then((()=>()=>y(62668))))),46468:()=>u("default","web-vitals",[1,3,0,4],(()=>y.e(9543).then((()=>()=>y(59543))))),54515:()=>u("default","ua-parser-js",[1,1,0,33],(()=>y.e(6353).then((()=>()=>y(46353))))),40540:()=>u("default","react",[4,16,14,0],(()=>y.e(2784).then((()=>()=>y(2784))))),22600:()=>u("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>y.e(2223).then((()=>()=>y(92223))))),14527:()=>u("default","@tanstack/react-query",[1,4,29,1],(()=>y.e(8609).then((()=>()=>y(8609))))),21730:()=>u("default","react-dom",[4,16,14,0],(()=>y.e(8316).then((()=>()=>y(28316))))),72229:()=>u("default","prop-types",[1,15,8,1],(()=>y.e(3980).then((()=>()=>y(13980))))),65577:()=>u("default","@postman/aether-design-tokens",[1,1,2,0],(()=>y.e(6462).then((()=>()=>y(86462))))),15626:()=>u("default","@tippyjs/react",[1,4,2,0],(()=>y.e(9721).then((()=>()=>y(39721))))),25892:()=>u("default","styled-components",[4,5,3,6],(()=>Promise.all([y.e(3356),y.e(2723)]).then((()=>()=>y(63356))))),60607:()=>u("default","react-router-dom",[4,6,11,2],(()=>y.e(6591).then((()=>()=>y(16591))))),62932:()=>u("default","mobx",[1,6,6,2],(()=>y.e(75).then((()=>()=>y(80075))))),26081:()=>p("default","@postman-app-next/navigation",(()=>Promise.all([y.e(364),y.e(605),y.e(6831),y.e(1730),y.e(4302),y.e(2229),y.e(6242),y.e(607),y.e(3723),y.e(8722),y.e(7363),y.e(2659)]).then((()=>()=>y(92659))))),44958:()=>p("default","@postman-app-next/data-fetching",(()=>Promise.all([y.e(4302),y.e(7864),y.e(8013)]).then((()=>()=>y(98013))))),48722:()=>u("default","uuid",[1,8,3,2],(()=>y.e(3836).then((()=>()=>y(39304))))),15837:()=>p("default","@postman-app-next/analytics-service",(()=>Promise.all([y.e(4302),y.e(4810),y.e(721)]).then((()=>()=>y(40721))))),73720:()=>p("default","@postman-app-next/performance-utils",(()=>Promise.all([y.e(8722),y.e(9239)]).then((()=>()=>y(31597))))),63154:()=>p("default","@postman-app-next/variable-session",(()=>Promise.all([y.e(747),y.e(7494)]).then((()=>()=>y(57494))))),19972:()=>p("default","@postman-app-next/workspace-service",(()=>Promise.all([y.e(4302),y.e(8079),y.e(766)]).then((()=>()=>y(60766))))),98079:()=>p("default","@postman-app-next/network",(()=>Promise.all([y.e(923),y.e(4810),y.e(8320)]).then((()=>()=>y(38320))))),50747:()=>p("default","@postman-app-next/storage",(()=>Promise.all([y.e(540),y.e(4302),y.e(4810),y.e(4422)]).then((()=>()=>y(44422))))),25304:()=>u("default","@sentry/react",[1,7,49,0],(()=>y.e(7500).then((()=>()=>y(57500))))),20609:()=>u("default","react-error-boundary",[1,4,0,4],(()=>y.e(8537).then((()=>()=>y(32955))))),53723:()=>u("default","clsx",[1,1,2,1],(()=>y.e(6277).then((()=>()=>y(6277))))),50916:()=>u("default","mobx-react-lite",[1,3,4,3],(()=>Promise.all([y.e(1730),y.e(4024)]).then((()=>()=>y(46776))))),27363:()=>p("default","@postman-app-next/dialogs",(()=>Promise.all([y.e(5348),y.e(4302),y.e(3911)]).then((()=>()=>y(23911))))),22723:()=>u("default","shallowequal",[1,1,1,0],(()=>y.e(8665).then((()=>()=>y(88665))))),57569:()=>u("default","react-draggable",[1,4,4,5],(()=>y.e(1327).then((()=>()=>y(41327))))),60949:()=>u("default","react-window",[1,1,8,8],(()=>y.e(4211).then((()=>()=>y(54211))))),79233:()=>p("default","@postman-app-next/variable-suggestions",(()=>Promise.all([y.e(3640),y.e(1219),y.e(9304)]).then((()=>()=>y(59304))))),29605:()=>p("default","@postman-app-next/desktop-communication-sdk",(()=>y.e(9211).then((()=>()=>y(20966))))),30923:()=>p("default","@postman-app-next/error-handling",(()=>Promise.all([y.e(364),y.e(157),y.e(1730),y.e(4302),y.e(2229),y.e(6242),y.e(607),y.e(2772),y.e(730)]).then((()=>()=>y(730))))),18160:()=>u("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([y.e(6686),y.e(4803)]).then((()=>()=>y(34803))))),61801:()=>u("default","socket.io-client",[1,2,1,1],(()=>Promise.all([y.e(7768),y.e(8864)]).then((()=>()=>y(17768))))),94021:()=>u("default","rxjs",[1,7,8,1],(()=>Promise.all([y.e(6686),y.e(8210)]).then((()=>()=>y(28210))))),94475:()=>u("default","eventemitter3",[1,5,0,0],(()=>y.e(686).then((()=>()=>y(30686))))),44025:()=>p("default","@postman-app-next/ui",(()=>Promise.all([y.e(605),y.e(157),y.e(4302),y.e(3723),y.e(6081),y.e(7569),y.e(5882),y.e(1312)]).then((()=>()=>y(85882))))),8851:()=>u("default","mobx-react",[1,7,6,0],(()=>Promise.all([y.e(8495),y.e(2932),y.e(916)]).then((()=>()=>y(18495))))),21219:()=>p("default","@postman-app-next/environment-service",(()=>Promise.all([y.e(8529),y.e(4302),y.e(607),y.e(2932),y.e(6081),y.e(4958),y.e(8722),y.e(5837),y.e(4292),y.e(8079),y.e(747),y.e(6787)]).then((()=>()=>y(76787))))),72783:()=>p("default","@postman-app-next/test-utils",(()=>Promise.all([y.e(6445),y.e(607),y.e(923),y.e(4958),y.e(4025),y.e(5630)]).then((()=>()=>y(25630))))),96497:()=>p("default","@postman-app-next/kv-editor",(()=>Promise.all([y.e(8529),y.e(823),y.e(3723),y.e(2723),y.e(7569),y.e(949),y.e(7623)]).then((()=>()=>y(17623))))),11271:()=>u("default","lexical",[2,0,11,1],(()=>y.e(2543).then((()=>()=>y(22543)))))},m={540:[40540],607:[60607],721:[46468,54515],747:[50747],916:[50916],923:[30923],949:[60949],1219:[21219],1730:[21730],2229:[72229],2659:[29605],2723:[22723],2772:[25304,20609],2932:[62932],3723:[53723],4025:[44025],4292:[73720,63154,19972],4302:[54302],4810:[64810],4958:[44958],5167:[96497],5837:[15837],5882:[8851],6081:[26081],6242:[65577,15626,25892],7363:[27363],7569:[57569],7623:[79233],7864:[22600,14527],8079:[98079],8320:[18160,61801,94021,94475],8722:[48722],9205:[11271],9304:[72783]},y.f.consumes=(e,t)=>{y.o(m,e)&&m[e].forEach((e=>{if(y.o(h,e))return t.push(h[e]);var a=t=>{h[e]=0,y.m[e]=a=>{delete y.c[e],a.exports=t()}},r=t=>{delete h[e],y.m[e]=a=>{throw delete y.c[e],t}};try{var n=b[e]();n.then?t.push(h[e]=n.then(a).catch(r)):a(n)}catch(e){r(e)}}))},v=e=>new Promise(((t,a)=>{var r=y.miniCssF(e),n=y.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(l=a[r]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===t))return l}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var l;if((n=(l=o[r]).getAttribute("data-href"))===e||n===t)return l}})(r,n))return t();((e,t,a,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)a();else{var l=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=l,d.request=s,n.parentNode.removeChild(n),r(d)}},n.href=t,document.head.appendChild(n)})(e,n,t,a)})),g={2739:0},y.f.miniCss=(e,t)=>{g[e]?t.push(g[e]):0!==g[e]&&{1312:1,2638:1}[e]&&t.push(g[e]=v(e).then((()=>{g[e]=0}),(t=>{throw delete g[e],t})))},(()=>{var e={2739:0};y.f.j=(t,a)=>{var r=y.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(1(219|312|730)|2(229|723|772|932)|4(025|292|302|810|958)|6(07|081|242)|7(363|47|569|864)|9(16|23|49)|3723|540|5837|8079|8722)$/.test(t))e[t]=0;else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=y.p+y.u(t),l=new Error;y.l(o,(a=>{if(y.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}}),"chunk-"+t,t)}};var t=(t,a)=>{var r,n,[o,l,s]=a,d=0;if(o.some((t=>0!==e[t]))){for(r in l)y.o(l,r)&&(y.m[r]=l[r]);s&&s(y)}for(t&&t(a);d<o.length;d++)n=o[d],y.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunkenvironment_workbench=self.webpackChunkenvironment_workbench||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),y.nc=void 0;var w=y(78921);environment_workbench=w})();
//# sourceMappingURL=remoteEntry.js.map