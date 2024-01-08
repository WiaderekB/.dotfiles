"use strict";(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[1419,7397,3911],{7560:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},98283:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:()=>r})},23911:(e,t,n)=>{n.r(t),n.d(t,{Modals:()=>i});var r={};n.r(r),n.d(r,{ModalDialog:()=>u});var i={};n.r(i),n.d(i,{Ui:()=>r,getModals:()=>o});var a=n(54302);class s{async showWarningDialog(e){const{subject:t,message:n,options:r}=e;return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:t,message:n,options:r}})}}function o(){return new s}var c=n(40540),l=n(35348),d=n(58560),p=n(80605),m=n(52322);const u=e=>{const[t,n]=(0,c.useState)(null),[r,i]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{function t(t){const{detail:r}=t;e.uid===r.uid&&(n(r),i(!0))}return window.addEventListener("pm:modal:request",t),()=>{window.removeEventListener("pm:modal:request",t)}}),[e.uid]),t?(0,m.jsxs)(l.u_,{isOpen:r,size:"small",onClose:()=>i(!1),children:[(0,m.jsx)(l.xB,{heading:t.subject}),(0,m.jsx)(l.hz,{children:(0,m.jsx)("p",{children:t.message})}),(0,m.jsx)(l.mz,{children:(0,m.jsx)(d.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:t.options.map((e=>(0,m.jsx)(p.Z,{type:!0===e.isPrimary?"primary":"secondary",text:e.title,onClick:()=>{t.callback(e),i(!1)}},e.title)))})})]}):null}},35736:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(40540),i=n.n(r),a=n(72229),s=n.n(a),o=n(25892),c=n.n(o),l=n(9460),d=n(58560),p=(0,o.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),m=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),u=c()(l.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function h(e){var t=e.description,n=e.className,r=e.type,a=e["data-testid"],s="bright"===r?"content-color-constant":"content-color-secondary";return i().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:n,type:r},i().createElement(m,{"data-testid":a},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),t&&i().createElement(u,{color:s},t))}h.defaultProps={description:"",className:"","data-testid":"aether-spinner"},h.propTypes={description:s().string,className:s().string,type:s().oneOf(["default","bright"]).isRequired,"data-testid":s().string};var f=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),g=c()(l.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),y=(0,o.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),v=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),y);function w(e){var t=e.className,n=e.description,r=e.type,a=e["data-testid"],s="bright"===r?"content-color-constant":"content-color-secondary";return i().createElement(f,{className:t,type:r},i().createElement(v,{"data-testid":a},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),i().createElement(g,{color:s},n))}function b(e){var t=e.size,n=e.className,r=e.description,a=e.type,s=e["data-testid"];return"small"===t?i().createElement(h,{type:a,className:n,description:r,"data-testid":s}):"large"===t?i().createElement(w,{type:a,description:r||"Loading",className:n,"data-aether-id":"aether-spinner","data-testid":s}):null}w.defaultProps={className:"",description:"","data-testid":"aether-spinner"},w.propTypes={className:s().string,description:s().string,type:s().oneOf(["default","bright"]).isRequired,"data-testid":s().string},b.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},b.propTypes={size:s().oneOf(["small","large"]),className:s().string,type:s().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":s().string}}}]);
//# sourceMappingURL=1419.fbbabb40f375d11d.js.map