"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[5624,7560,730],{7560:(r,e,t)=>{function n(){return n=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},n.apply(this,arguments)}t.d(e,{Z:()=>n})},8283:(r,e,t)=>{function n(r,e){if(null==r)return{};var t,n,o={},s=Object.keys(r);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}t.d(e,{Z:()=>n})},730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>j,CustomErrorBoundary:()=>f,GenericErrorMessage:()=>I,RouteErrorBoundary:()=>g,logError:()=>l}),t(540);var n=t(607),o=t(7560),s=t(8283),a=t(4302),i=t(5304);const c=["crash"],l=(r,e)=>{let{crash:t=!1}=e,n=(0,s.Z)(e,c);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,o.Z)({crash:t},n)),((r,e)=>{i.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),i.captureException(r)}))})(r,(0,o.Z)({crash:t},n)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,n)};var d=t(9437),p=t(47);const u="Something Went Wrong",E="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var m=t(2322);const h=["title","description","message","illustration","error"],I=r=>{let{title:e=u,description:t=E,message:n,illustration:a="illustration-unable-to-load",error:i}=r,c=(0,s.Z)(r,h);const l=n||i&&i.message;return(0,m.jsxs)(d.Z,(0,o.Z)({title:e,description:t},c,{children:[l&&(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:l})}),(0,m.jsx)(p.Z,{name:a})]}))},g=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const i=(0,n.useRouteError)();return l(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,m.jsx)(I,{title:e,description:t,error:i,message:o})};var k=t(609);const b=["children","onError","appId","errorElementId","FallbackComponent"],x=(r,e,t,n)=>{l(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:n})},f=r=>{let{children:e,onError:t,appId:n,errorElementId:a,FallbackComponent:i=I}=r,c=(0,s.Z)(r,b);return(0,m.jsx)(k.ErrorBoundary,(0,o.Z)({FallbackComponent:i,onError:(r,e)=>(t||x)(r,e,n,a)},c,{children:e}))},j=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const i=(0,n.useAsyncError)();return l(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,m.jsx)(I,{title:e,description:t,error:i,message:o})}}}]);
//# sourceMappingURL=5624.23adc27756c21634.js.map