"use strict";(self.webpackChunkpostman_console=self.webpackChunkpostman_console||[]).push([[1148,7560,730],{7560:(t,e,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}n.d(e,{Z:()=>r})},730:(t,e,n)=>{n.r(e),n.d(e,{AwaitErrorBoundary:()=>k,CustomErrorBoundary:()=>b,GenericErrorMessage:()=>f,RouteErrorBoundary:()=>x,logError:()=>l}),n(540);var r=n(607),o=n(7560),a=n(8283),i=n(4302),c=n(5304);const s=["crash"],l=(t,e)=>{let{crash:n=!1}=e,r=(0,a.Z)(e,s);((t,e)=>{var n;null==(n=window)||null==(n=n.newrelic)||null==n.noticeError||n.noticeError(t,e)})(t,(0,o.Z)({crash:n},r)),((t,e)=>{c.withScope((n=>{n.setExtra("ErrorStack",e.stack),n.setExtra("ErrorAppId",e.appId),n.setExtra("ErrorElementId",e.errorElementId),c.captureException(t)}))})(t,(0,o.Z)({crash:n},r)),((t,e)=>{i.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==t.toString?void 0:t.toString())||t.message,info:e}})})(t,r)};var p=n(9437),d=n(47);const u="Something Went Wrong",h="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var m=n(2322);const g=["title","description","message","illustration","error"],f=t=>{let{title:e=u,description:n=h,message:r,illustration:i="illustration-unable-to-load",error:c}=t,s=(0,a.Z)(t,g);const l=r||c&&c.message;return(0,m.jsxs)(p.Z,(0,o.Z)({title:e,description:n},s,{children:[l&&(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:l})}),(0,m.jsx)(d.Z,{name:i})]}))},x=({children:t,title:e,description:n,message:o,appId:a,errorElementId:i})=>{const c=(0,r.useRouteError)();return l(c,{stack:c.stack,appId:a,errorElementId:i}),t||(0,m.jsx)(f,{title:e,description:n,error:c,message:o})};var y=n(609);const E=["children","onError","appId","errorElementId","FallbackComponent"],w=(t,e,n,r)=>{l(t,{stack:e.componentStack,appId:n,crash:!0,errorElementId:r})},b=t=>{let{children:e,onError:n,appId:r,errorElementId:i,FallbackComponent:c=f}=t,s=(0,a.Z)(t,E);return(0,m.jsx)(y.ErrorBoundary,(0,o.Z)({FallbackComponent:c,onError:(t,e)=>(n||w)(t,e,r,i)},s,{children:e}))},k=({children:t,title:e,description:n,message:o,appId:a,errorElementId:i})=>{const c=(0,r.useAsyncError)();return l(c,{stack:c.stack,appId:a,errorElementId:i}),t||(0,m.jsx)(f,{title:e,description:n,error:c,message:o})}},4962:(t,e,n)=>{n.d(e,{Z:()=>g});var r=n(2247),o=n(4047),a=n(540),i=n.n(a),c=n(2229),s=n.n(c),l=n(5892),p=n.n(l),d=n(5577),u=n(265);function h(t,e){switch(t){case"h1":return"\n        font-size: ".concat(e["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(e["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(e["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(e["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(e["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(e["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(e["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(e["content-color-secondary"],";\n      ");default:return null}}var m=p().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(t){return t.theme["spacing-zero"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.theme["text-weight-medium"]}),(function(t){return t.wordBreak}),(function(t){return t.styleAs?h(t.styleAs,t.theme):h(t.as,t.theme)}),(function(t){return t.color&&"color: ".concat(t.theme[t.color],";")}),(function(t){return t.hasBottomSpacing&&function(t,e){switch(t){case"h1":return"margin-bottom: ".concat(e["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(e["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(e["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(e["spacing-xs"]," !important");default:return"margin: ".concat(e["spacing-zero"]," !important")}}(t.as,t.theme)}),(function(t){return e=t.isTruncated,n=t.maxLines,r="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(e?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?r:"","\n    ");var e,n,r}));function g(t){var e=t.text,n=t.type,r=t.styleAs,c=t.color,s=t._wordBreak,l=t.className,p=t.hasBottomSpacing,d=t.isTruncated,h=t.maxLines,g=t.tooltip,f=t["data-testid"],x=t["data-click"],y=(0,a.useState)(!1),E=(0,o.Z)(y,2),w=E[0],b=E[1],k=i().createElement(m,{as:n,styleAs:r,color:c,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":x,hasBottomSpacing:p,isTruncated:d,maxLines:h,onMouseEnter:function(t){t.target&&t.target.scrollWidth>t.target.offsetWidth?b(!0):b(!1)},wordBreak:s},e);return w&&(0,u.LX)(t)?(0,u.Ur)(k,g||e):k}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:s().oneOf(["h1","h2","h3","h4","h5","h6"]),text:s().string.isRequired,color:s().oneOf([""].concat((0,r.Z)(Object.keys(d.globals.colors)),(0,r.Z)(Object.keys(d.aliases.light.content)))),styleAs:s().oneOf(["h1","h2","h3","h4","h5","h6"]),className:s().string,hasBottomSpacing:s().bool,isTruncated:function(t){var e=t.isTruncated,n=t.maxLines;return"boolean"!=typeof e?new Error("Heading: expected a boolean value for isTruncated prop"):e&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:s().number,tooltip:function(t){var e=t.tooltip,n=t.isTruncated,r=t.maxLines;return"string"!=typeof e?new Error("Heading: tooltip prop should only have a string value."):!e||n&&!r?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:s().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":s().string,"data-click":s().string}}}]);
//# sourceMappingURL=1148.221bf1aaa89808bc.js.map