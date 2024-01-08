"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[6633],{11041:(e,t,o)=>{o.r(t),o.d(t,{CookieActionsContext:()=>l,CookieActionsProvider:()=>p,cookiesEq:()=>E,getCookieIdentifier:()=>b,getCookieManager:()=>s,makeCookie:()=>g,parseCookieString:()=>S,stringifyCookie:()=>C,useCookieActions:()=>v});var n=o(40540),r=o.n(n),a=o(54302);class i{async fetchCookies(){return await a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"FETCH_COOKIES",payload:{}})}async openCookiesEditor(){a.VSCodeCommunicationsService.postMessageToExtension({type:"COOKIES:OPEN_EDITOR",payload:{}})}addCookie(e){const t={type:"ADD_COOKIE",cookie:e};return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"SAVE_COOKIES",payload:t})}deleteCookie(e){const t={type:"DELETE_COOKIE",cookie:e};return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"SAVE_COOKIES",payload:t})}updateCookie(e,t){const o={type:"UPDATE_COOKIE",originalCookie:e,updatedCookie:t};return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"SAVE_COOKIES",payload:o})}deleteDomain(e){const t={type:"DELETE_DOMAIN",domain:e};return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"SAVE_COOKIES",payload:t})}}let d=null;function s(){return null!==d||(d=new i),d}var u=o(52322);const c=s(),l=r().createContext(c),p=({children:e})=>(0,u.jsx)(l.Provider,{value:c,children:e});var f=o(93355),m=o(7560);const y=/(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[\da-f]{1,4}:){7}(?:[\da-f]{1,4}|:)|(?:[\da-f]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[\da-f]{1,4}|:)|(?:[\da-f]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,2}|:)|(?:[\da-f]{1,4}:){4}(?:(?::[\da-f]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,3}|:)|(?:[\da-f]{1,4}:){3}(?:(?::[\da-f]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,4}|:)|(?:[\da-f]{1,4}:){2}(?:(?::[\da-f]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,5}|:)|[\da-f]{1,4}:(?:(?::[\da-f]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,6}|:)|(?::(?:(?::[\da-f]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,7}|:)))$)/,h=(e,t="\\s")=>null==e?void 0:e.replace(new RegExp(`^([${t}]*)(.*?)([${t}]*)$`),"$2"),g=(e,t)=>({domain:t,name:e,value:"value",path:"/",expires:(0,f.Z)(new Date,{years:1}).getTime()}),C=e=>function(e){let t=e.name+"="+e.value+"; Path="+e.path+";";if(!e.hostOnly&&e.domain){let o=e.domain;"["===o[0]&&"]"===o[o.length-1]&&(o=o.slice(1,-1)),t+=" Domain="+e.domain+";"}return e.secure&&(t+=" Secure;"),e.httpOnly&&(t+=" HttpOnly;"),e.expires&&-1!==e.expires&&(t+=" Expires="+new Date(e.expires).toUTCString()+";"),t}(e),S=(e,t)=>function(e,t){const o=t.trim().split(";").filter(Boolean),n=o.length,r={domain:"",name:"",path:"",value:"",hostOnly:!0};if(0===o.length)return(0,m.Z)({},r,{domain:e});let a=0;const i=o[a].trim().split(/=([\s\S]*)/);if(i.length>0)try{const t=h(i[0],"\n "),o=h(i[1]||"","\n ");r.url=e,r.name=t,r.value=o}catch(e){console.log("Error setting cookie: "+e)}for(r.secure=!1,r.httpOnly=!1,o.some((function(e){return e&&0===e.trim().indexOf("Max-Age")}))&&o.filter((function(e){return e&&0!==e.trim().indexOf("Expires")})),r.domain=e,a++;a<n;a++)try{const[e,t]=o[a].trim().split("="),n=null==(d=h(e,"\n "))?void 0:d.toLocaleLowerCase(),i=h(t,"\n ");if("secure"===n){r.secure=!0,r.url&&!r.url.startsWith("https://")&&(r.url.startsWith("http://")?r.url.replace("http://","https://"):r.url="https://"+r.url);continue}if("httponly"===n){r.httpOnly=!0;continue}if("path"===n&&i){r.path=i;continue}if("expires"===n&&i){const e=new Date(i);e&&(r.expires=e.getTime());continue}if("max-age"===n&&i){const e=new Date;r.expires=e.getTime()+1e3*Number.parseInt(i);continue}if("domain"===n&&i){let e=i;"["===e[0]&&"]"===e[e.length-1]&&(e=e.slice(1,-1)),e.includes(".")&&!y.test(e)&&(r.hostOnly=!1)}r[n]=i}catch(e){throw new Error("Could not save property for cookie: "+o[a])}var d;return r}(e,t),E=(e,t)=>e.domain===t.domain&&e.path===t.path&&e.name===t.name,b=({domain:e,path:t,name:o})=>`${e}:${t}:${o}`;function v(){return(0,n.useContext)(l)}},19785:(e,t,o)=>{function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}o.d(t,{Z:()=>n})},42765:(e,t,o)=>{function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}o.d(t,{Z:()=>n})},93355:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(63761),r=o(28187),a=o(66700),i=o(19785),d=o(42765);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){if((0,i.Z)(2,arguments),!t||"object"!==s(t))return new Date(NaN);var o=t.years?(0,d.Z)(t.years):0,u=t.months?(0,d.Z)(t.months):0,c=t.weeks?(0,d.Z)(t.weeks):0,l=t.days?(0,d.Z)(t.days):0,p=t.hours?(0,d.Z)(t.hours):0,f=t.minutes?(0,d.Z)(t.minutes):0,m=t.seconds?(0,d.Z)(t.seconds):0,y=(0,a.Z)(e),h=u||o?(0,r.Z)(y,u+12*o):y,g=l||c?(0,n.Z)(h,l+7*c):h,C=1e3*(m+60*(f+60*p));return new Date(g.getTime()+C)}},63761:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(42765),r=o(66700),a=o(19785);function i(e,t){(0,a.Z)(2,arguments);var o=(0,r.Z)(e),i=(0,n.Z)(t);return isNaN(i)?new Date(NaN):i?(o.setDate(o.getDate()+i),o):o}},28187:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(42765),r=o(66700),a=o(19785);function i(e,t){(0,a.Z)(2,arguments);var o=(0,r.Z)(e),i=(0,n.Z)(t);if(isNaN(i))return new Date(NaN);if(!i)return o;var d=o.getDate(),s=new Date(o.getTime());return s.setMonth(o.getMonth()+i+1,0),d>=s.getDate()?s:(o.setFullYear(s.getFullYear(),s.getMonth(),d),o)}},66700:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(19785);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e){(0,n.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===r(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}}}]);
//# sourceMappingURL=6633.28b6ec55af10ef9b.js.map