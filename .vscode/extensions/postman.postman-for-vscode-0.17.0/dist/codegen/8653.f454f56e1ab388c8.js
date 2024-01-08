"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[8653],{730:(e,t,n)=>{n.r(t),n.d(t,{AwaitErrorBoundary:()=>b,CustomErrorBoundary:()=>k,GenericErrorMessage:()=>f,RouteErrorBoundary:()=>x,logError:()=>l}),n(40540);var r=n(60607),o=n(7560),a=n(98283),i=n(54302),c=n(25304);const s=["crash"],l=(e,t)=>{let{crash:n=!1}=t,r=(0,a.Z)(t,s);((e,t)=>{var n;null==(n=window)||null==(n=n.newrelic)||null==n.noticeError||n.noticeError(e,t)})(e,(0,o.Z)({crash:n},r)),((e,t)=>{c.withScope((n=>{n.setExtra("ErrorStack",t.stack),n.setExtra("ErrorAppId",t.appId),n.setExtra("ErrorElementId",t.errorElementId),c.captureException(e)}))})(e,(0,o.Z)({crash:n},r)),((e,t)=>{i.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:t.appId,error:(null==e.toString?void 0:e.toString())||e.message,info:t}})})(e,r)};var d=n(49437),p=n(80047);const h="Something Went Wrong",u="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var m=n(52322);const g=["title","description","message","illustration","error"],f=e=>{let{title:t=h,description:n=u,message:r,illustration:i="illustration-unable-to-load",error:c}=e,s=(0,a.Z)(e,g);const l=r||c&&c.message;return(0,m.jsxs)(d.Z,(0,o.Z)({title:t,description:n},s,{children:[l&&(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:l})}),(0,m.jsx)(p.Z,{name:i})]}))},x=({children:e,title:t,description:n,message:o,appId:a,errorElementId:i})=>{const c=(0,r.useRouteError)();return l(c,{stack:c.stack,appId:a,errorElementId:i}),e||(0,m.jsx)(f,{title:t,description:n,error:c,message:o})};var E=n(20609);const y=["children","onError","appId","errorElementId","FallbackComponent"],w=(e,t,n,r)=>{l(e,{stack:t.componentStack,appId:n,crash:!0,errorElementId:r})},k=e=>{let{children:t,onError:n,appId:r,errorElementId:i,FallbackComponent:c=f}=e,s=(0,a.Z)(e,y);return(0,m.jsx)(E.ErrorBoundary,(0,o.Z)({FallbackComponent:c,onError:(e,t)=>(n||w)(e,t,r,i)},s,{children:t}))},b=({children:e,title:t,description:n,message:o,appId:a,errorElementId:i})=>{const c=(0,r.useAsyncError)();return l(c,{stack:c.stack,appId:a,errorElementId:i}),e||(0,m.jsx)(f,{title:t,description:n,error:c,message:o})}},74962:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(72247),o=n(54047),a=n(40540),i=n.n(a),c=n(72229),s=n.n(c),l=n(25892),d=n.n(l),p=n(65577),h=n(90265);function u(e,t){switch(e){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var m=d().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.wordBreak}),(function(e){return e.styleAs?u(e.styleAs,e.theme):u(e.as,e.theme)}),(function(e){return e.color&&"color: ".concat(e.theme[e.color],";")}),(function(e){return e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(e.as,e.theme)}),(function(e){return t=e.isTruncated,n=e.maxLines,r="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?r:"","\n    ");var t,n,r}));function g(e){var t=e.text,n=e.type,r=e.styleAs,c=e.color,s=e._wordBreak,l=e.className,d=e.hasBottomSpacing,p=e.isTruncated,u=e.maxLines,g=e.tooltip,f=e["data-testid"],x=e["data-click"],E=(0,a.useState)(!1),y=(0,o.Z)(E,2),w=y[0],k=y[1],b=i().createElement(m,{as:n,styleAs:r,color:c,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":x,hasBottomSpacing:d,isTruncated:p,maxLines:u,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?k(!0):k(!1)},wordBreak:s},t);return w&&(0,h.LX)(e)?(0,h.Ur)(b,g||t):b}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:s().oneOf(["h1","h2","h3","h4","h5","h6"]),text:s().string.isRequired,color:s().oneOf([""].concat((0,r.Z)(Object.keys(p.globals.colors)),(0,r.Z)(Object.keys(p.aliases.light.content)))),styleAs:s().oneOf(["h1","h2","h3","h4","h5","h6"]),className:s().string,hasBottomSpacing:s().bool,isTruncated:function(e){var t=e.isTruncated,n=e.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:s().number,tooltip:function(e){var t=e.tooltip,n=e.isTruncated,r=e.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||n&&!r?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:s().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":s().string,"data-click":s().string}}}]);
//# sourceMappingURL=8653.f454f56e1ab388c8.js.map